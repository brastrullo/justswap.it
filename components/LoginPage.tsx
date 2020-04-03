import { useState, useEffect } from 'react'
import mockData from '../mockData.json'
import Input from './Input'
import Button from './Button'
// import GoogleLogin from 'react-google-login';

const LoginPage = () => {
  const loginInit = {
    user: '',
    pass: ''
  }
  const [loginObj, setLoginObj] = useState(loginInit)
  const [loginReady, setLoginReady] = useState(false)

  useEffect(() => {
    console.log(loginObj)
    const allFieldsFilled = Object.values(loginObj).every(item => item.length > 0)
    if (allFieldsFilled) {
      setLoginReady(!loginReady)
    } else {
      setLoginReady(!loginReady)
    }
  }, [loginObj])

  const inputHandler = (e) => {
    e.preventDefault()
    setLoginObj({
      ...loginObj,
      ...{ [e.target.id]: e.target.value }
    })
  }

  // const responseGoogle = (response) => {
  //   console.log(response);
  // }

  const doesUserExist = (email) => {
    const foundUser = mockData.users.filter(user => user.email === email)
    if (email.length > 0 && foundUser.length === 0) {
      return 'Email not found.'
    }
  }

  return (
    <>
    <form>
      <legend>Login JustSwap.it</legend>
      <Input
        id="user"
        label="Email"
        autoComplete="username"
        error={doesUserExist(loginObj.user)}
        value={loginObj.user}
        onChange={inputHandler}
      />
      <Input
        id="pass"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={loginObj.pass}
        onChange={inputHandler}
      />
      <Button disabled={loginReady} text="Login" />
    </form>
    {/* <GoogleLogin
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    /> */}
  </>
  )
}

export default LoginPage