webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/usersSlice.ts":
/*!********************************!*\
  !*** ./reducers/usersSlice.ts ***!
  \********************************/
/*! exports provided: logUsers, createUser, updateUser, deleteUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logUsers", function() { return logUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
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

var usersSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'users',
  initialState: {
    usersArray: [{
      username: 'zxcv'
    }]
  },
  reducers: {
    logUsers: function logUsers(state) {
      console.log('Users:', state.usersArray);
      return state;
    },
    createUser: function createUser(state, action) {
      console.log({
        state: state,
        action: action
      });
      return state;
    },
    updateUser: function updateUser(state, action) {
      console.log({
        state: state,
        action: action
      });
      return state;
    },
    deleteUser: function deleteUser(state, action) {
      console.log({
        state: state,
        action: action
      });
      return state;
    }
  },
  extraReducers: {// [fetchUsers.fulfilled]: (state, action) => {
    //   // Add user to the state array
    //   state.users.push(action.payload)
    // }
  }
});
var actions = usersSlice.actions,
    reducer = usersSlice.reducer;
var logUsers = actions.logUsers,
    createUser = actions.createUser,
    updateUser = actions.updateUser,
    deleteUser = actions.deleteUser;

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.3d7020dbca3588918a02.hot-update.js.map