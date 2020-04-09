import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'

const store = configureStore({
  reducer: rootReducer
})

// TODO: add webpack then you can use below
// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootReducer', () => {
//     const newRootReducer = require('./rootReducer').default
//     store.replaceReducer(newRootReducer)
//   })
// }
//

export type AppDispatch = typeof store.dispatch
export default store