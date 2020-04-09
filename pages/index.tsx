import {connect} from "react-redux";
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import LoginPage from '../components/LoginPage'
import RegistrationPage from '../components/RegistrationPage'
import { logUsers, createUser } from '../reducers/usersSlice'

const App = styled.main`
  font-size: ${({ theme }) => theme.fontSize.base};
  text-align: center;
  form {
    margin: 0 auto;
    max-width: 30rem;
    display: flex;
    flex-flow: column nowrap;
  }
  legend {
    margin: 1rem auto;
    font-size: 1.2rem;
  }
  & > p {
    margin: 1rem 0 0 ;
  }
  `

function HomePage(props) {
  const [userObj, setUserObj] = useState({})
  const [toggleLogin, setToggleLogin] = useState(false)
  const notLoggedIn = Object.keys(userObj).length === 0

  useEffect(() => {
    if (notLoggedIn) {
      console.log('Please login.')
    } else {
      console.log({userObj})
    }
  }, [userObj])

  const hideRegistration = () => {
    setToggleLogin(!toggleLogin)
  }

  console.log({ mockUsers: props.users.usersArray})
  
  return (
    <App>
      {
        notLoggedIn ? (
        <>
          <h1>Welcome to {props.custom.title}</h1>
          {
            toggleLogin ?
            <>
              <LoginPage setUserObj={setUserObj} />
              <p>Need to register?</p>
              <button onClick={hideRegistration}>Register</button>
            </>
            :
            <>
              <RegistrationPage />
              <p>Already registered?</p>
              <button onClick={hideRegistration}>Login</button>
            </>
          }
        </>
        ) : ( 
          <>
            <p>Logged in</p>
            <div>{ JSON.stringify(userObj) }</div>
          </>
        )
      }
    </App>
  )
}

HomePage.getInitialProps = ({store, isServer, pathname, query}) => {
  store.dispatch(logUsers())
  store.dispatch(createUser('testuser1'))
  return { custom: {title: 'JustSwap.it'} } // pass custom props with an {object} containing key [custom]
}

export default connect(state => state)(HomePage);