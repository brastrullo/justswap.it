import { combineReducers } from '@reduxjs/toolkit'
import users from './usersSlice'

const rootReducer = combineReducers({
  users
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer