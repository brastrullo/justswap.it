import {
  // createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'
// import axios from 'axios'

// TYPESCRIPT BUILDER API EXAMPLE
// createReducer(0, builder =>
//   builder.addCase(increment, (state, action) => {
//     // action is inferred correctly here
//   })
// )

// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//   const response = await axios.get()
//   return response.data
// })

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    usersArray: [{
      username: 'zxcv'
    }]
  },
  reducers: {
    logUsers(state) {
      console.log('Log Users:', state)
      return state
    },
    createUser(state, action) {
      return {
        ...state,
        usersArray: [...state.usersArray, { username: action.payload }]
      }
    },
    updateUser(state, action) {
      console.log({ state, action })
      return state
    },
    deleteUser(state, action) {
      console.log({ state, action })
      return state
    },
  },
  extraReducers: {
    // [fetchUsers.fulfilled]: (state, action) => {
    //   // Add user to the state array
    //   state.users.push(action.payload)
    // }
  }
})

const { actions, reducer } = usersSlice
export const { logUsers, createUser, updateUser, deleteUser } = actions
export default reducer