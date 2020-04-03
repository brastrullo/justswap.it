import { useState } from 'react'
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

function HomePage() {
  const [toggleLogin, setToggleLogin] = useState(false)
  const hideRegistration = () => {
    setToggleLogin(!toggleLogin)
  }
  return (
    <App>
      {
        toggleLogin ?
        <>
          <LoginPage />
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
    </App>
  )
}

export default HomePage