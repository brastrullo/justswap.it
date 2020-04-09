import axios from 'axios'
import { catchError } from './utils'

export const loginUser = (obj, setFn) => {
  const dataTransformer = (data) => {
    return ({
      email: data.user,
      password: data.pass
    })
  }

  const transformedData = dataTransformer(obj)

  const createToken = async () => {
    return await axios.post('http://localhost:8000/api/auth/jwt/create', transformedData)
    .then(function (response) {
      return response.data
    })
    .catch(catchError);
  }

  const getUserInfo = async (token) => {
    return await axios.get('http://localhost:8000/api/auth/users/me', {
      params: transformedData,
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    })
    .then(function (response) {
      return response.data
    })
    .catch(catchError);
  }
  createToken()
  .then(token => getUserInfo(token))
  .then(user => {
    setFn(user)
  })
}