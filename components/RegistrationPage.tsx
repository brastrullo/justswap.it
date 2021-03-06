import { useDispatch, useSelector, connect} from "react-redux";
import { useState, useEffect } from 'react'
import Input from './Input'
import Button from './Button'
import { RootState } from '../reducers/rootReducer'
import { registerUser } from '../reducers/usersSlice'
import mockData from '../mockData.json'

const RegistrationPage = (props) => {
  const registrationInit = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const errorMsg = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const dispatch = useDispatch()
  const { loading, usersArray } = useSelector(
    (state: RootState) => state.users
  )

  const [registrationObj, setRegistrationObj] = useState(registrationInit)
  const [errorMsgObj, setErrorMsgsObj] = useState(errorMsg)
  const [submitReady, setSubmitReady] = useState(false)

  useEffect(() => {isValid()}, [errorMsgObj])

  const inputHandler = (e) => {
    e.preventDefault()
    setRegistrationObj({
      ...registrationObj,
      ...{ [e.target.id]: e.target.value }
    })
    setMessages(e.target)
  }

  const isValid = () => {
    const arr = Object.entries(errorMsgObj)
    arr.forEach(entry => {
      const element = document.querySelectorAll(`#${entry[0]}`)
      element.forEach(item => {
        if (entry[1].length > 0) {
          item.classList.add('error')
          item.classList.remove('success')
        } else {
          item.classList.remove('error')
          item.classList.add('success')
        }
      })
    })
    const allFieldsFilled = Object.values(registrationObj).every(item => item.length > 0)
    const isZeroErrors = arr.every(item => item[1].length === 0)
    setSubmitReady(isZeroErrors && allFieldsFilled)
  }

  const setMessages = (target) => {
    let pattern
    let err = ''
    switch(true) {
      case target.id === 'username':
        pattern = /^\w{3,15}$/
        !pattern.test(target.value) &&
          (err+= 'Username must be between 3-15 characters in length.')
        !isNameAvailable(target.value) &&
          (err='Username taken.')
        break;
      case target.id === 'email':
        pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        !pattern.test(target.value) &&
          (err+= 'Incorrect email format')
        !isEmailAvailable(target.value) &&
          (err='Email already registered.')
        break;
      case target.id === 'password' || target.id === 'confirmPassword':
        const pMatch =
          target.id === 'password' && registrationObj.confirmPassword === target.value ||
          target.id === 'confirmPassword' && registrationObj.password === target.value
        const pLengthCorrect = registrationObj.password.length >= 8 && registrationObj.password.length <=16
        !pLengthCorrect && (err+='Must be 8-16 characters in length. ')
        !pMatch && (err+='Passwords must match. ')
      default:
        break;
    }

    target.id === 'password' || target.id === 'confirmPassword'
    ? setErrorMsgsObj({...errorMsgObj, ...{ confirmPassword: `${err}`}})
    : setErrorMsgsObj({...errorMsgObj, ...{ [target.id]: `${err}`}})
  }

  const isNameAvailable = (username) => {
    const getData = mockData
    const foundUser = getData.users.filter(user => user.username === username)
    return foundUser.length === 0
  }

  const isEmailAvailable = (email) => {
    const getData = mockData
    const foundUser = getData.users.filter(user => user.email === email)
    return foundUser.length === 0
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(registerUser(registrationObj))
  }

  return (
    <>
    <form>
      <legend>Register Account</legend>
      <Input
        id="username"
        label="Username"
        min='4'
        max='10'
        value={registrationObj.username}
        error={errorMsgObj.username}
        onChange={inputHandler}
      />
      <Input
        id="email"
        label="Email"
        value={registrationObj.email}
        error={errorMsgObj.email}
        onChange={inputHandler}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        min='8'
        max='16'
        autoComplete="new-password"
        value={registrationObj.password}
        onChange={inputHandler}
      />
      <Input
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        min='8'
        max='16'
        autoComplete="new-password"
        value={registrationObj.confirmPassword}
        error={errorMsgObj.confirmPassword}
        onChange={inputHandler}
      />
      <Button
        onClick={submitHandler}
        disabled={!submitReady}
        text="Submit"
      />
    </form>
  </>
  )
}

export default connect(state => state)(RegistrationPage);