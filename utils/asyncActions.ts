import axios from 'axios'
import { catchError } from './utils'

export const getUserAccess = (obj) => {
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
  return createToken()
  .then(token => getUserInfo(token))
  .then(user => user)
}

export const postNewUser = (obj) => {
  console.log('Received', {obj})
  const dataTransformer = (data) => {
    return ({
      username: data.username,
      email: data.email,
      password: data.password
    })
  }

  const transformedData = dataTransformer(obj)
  return axios.post('http://localhost:8000/api/auth/users/', transformedData)
  .then(function (response) {
    console.log(response);
  })
  .catch(catchError);
}