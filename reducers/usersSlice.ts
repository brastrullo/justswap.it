import {
  createAsyncThunk,
  createSlice,
  createAction
} from '@reduxjs/toolkit'
import { getUserAccess, postNewUser } from '../utils/asyncActions'

// TYPESCRIPT BUILDER API EXAMPLE
// createReducer(0, builder =>
//   builder.addCase(increment, (state, action) => {
//     // action is inferred correctly here
//   })
// )

export type UserObj = {
  username: string,
  email: string,
  password: string
}

export type LoginObj = {
  user: string,
  pass: string
}

function withPayloadType<T>() {
  return (t: T) => ({ payload: t })
}

const usersLoading = createAction('users/loading')
const usersReceived = createAction<string, 'users/received'>('users/received')
const logUsers = createAction('users/log')
const setCurrentUser =  createAction('users/setUser', withPayloadType<LoginObj>())

export const registerUser = createAsyncThunk('users/createUser', async (obj: UserObj, thunkAPI) => {
  return await postNewUser(obj)
})

export const loginUser = createAsyncThunk('users/login', async (obj: LoginObj, thunkAPI) => {
  return await getUserAccess(obj)
})

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: 'idle',
    currentUser: {},
    usersArray: []
  },
  reducers: {
    [setCurrentUser.type]: (state, action) => {
      state.currentUser = action.payload
      console.log(state.currentUser)
      return state
    },
    [usersLoading.type] : (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    [usersReceived.type] : (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.usersArray = action.payload
      }
    },
    [logUsers.type] : (state, action) => {
      console.log('Log Users:', state.usersArray)
      return state
    }
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.currentUser = action.payload
      return state
    })
  }
})

const { actions, reducer } = usersSlice
export default reducer