import { connect, useDispatch, useSelector } from "react-redux";
import { RootState } from '../reducers/rootReducer'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import LoginPage from '../components/LoginPage'
import RegistrationPage from '../components/RegistrationPage'

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
  const dispatch = useDispatch()
  const { currentUser } = useSelector(
    (state: RootState) => state.users
  )
  
  const [toggleLogin, setToggleLogin] = useState(false)
  const notLoggedIn = Object.keys(currentUser).length === 0

  useEffect(() => {
    if (notLoggedIn) {
      console.log('Please login.')
    } else {
      console.log({currentUser})
    }
  }, [currentUser])

  const registrationLoginToggle = () => {
    setToggleLogin(!toggleLogin)
  }
  
  return (
    <App>
      {
        notLoggedIn ? (
        <>
          <h1>Welcome to {props.custom.title}</h1>
          {
            toggleLogin ?
            <>
              <LoginPage />
              <p>Need to register?</p>
              <button onClick={registrationLoginToggle}>Register</button>
            </>
            :
            <>
              <RegistrationPage />
              <p>Already registered?</p>
              <button onClick={registrationLoginToggle}>Login</button>
            </>
          }
        </>
        ) : ( 
          <>
            <p>Logged in</p>
            <div>{ JSON.stringify(currentUser) }</div>
          </>
        )
      }
    </App>
  )
}


HomePage.getInitialProps = ({store, isServer, pathname, query}) => {
  // pass custom props by returning an {object} containing key [custom]
  return { custom: {title: 'JustSwap.it'} }
}

export default connect(state => state)(HomePage);