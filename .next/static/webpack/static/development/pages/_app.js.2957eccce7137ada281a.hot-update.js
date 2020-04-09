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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var usersSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createSlice"])({
  name: 'users',
  initialState: {
    usersArray: [{
      username: 'zxcv'
    }]
  },
  reducers: {
    logUsers: function logUsers(state, action) {
      console.log('Log Users:', state, action.payload);
      return state;
    },
    createUser: function createUser(state, action) {
      return _objectSpread({}, state, {
        usersArray: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.usersArray), [action.payload])
      });
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
//# sourceMappingURL=_app.js.2957eccce7137ada281a.hot-update.js.map