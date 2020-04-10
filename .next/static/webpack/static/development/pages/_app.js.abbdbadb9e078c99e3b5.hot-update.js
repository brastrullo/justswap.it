webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/usersSlice.ts":
/*!********************************!*\
  !*** ./reducers/usersSlice.ts ***!
  \********************************/
/*! exports provided: registerUser, loginUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _utils_asyncActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/asyncActions */ "./utils/asyncActions.ts");



var _reducers;


 // TYPESCRIPT BUILDER API EXAMPLE
// createReducer(0, builder =>
//   builder.addCase(increment, (state, action) => {
//     // action is inferred correctly here
//   })
// )

function withPayloadType() {
  return function (t) {
    return {
      payload: t
    };
  };
}

var dispatch = useDispatch();
var usersLoading = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createAction"])('users/loading');
var usersReceived = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createAction"])('users/received');
var logUsers = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createAction"])('users/log');
var setCurrentUser = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createAction"])('users/setUser', withPayloadType());
var usersSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createSlice"])({
  name: 'users',
  initialState: {
    loading: 'idle',
    currentUser: {},
    usersArray: []
  },
  reducers: (_reducers = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_reducers, setCurrentUser.type, function (state, action) {
    state.currentUser = action.payload;
    console.log(state.currentUser);
    return state;
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_reducers, usersLoading.type, function (state, action) {
    if (state.loading === 'idle') {
      state.loading = 'pending';
    }
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_reducers, usersReceived.type, function (state, action) {
    if (state.loading === 'pending') {
      state.loading = 'idle';
      state.usersArray = action.payload;
    }
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_reducers, logUsers.type, function (state, action) {
    console.log('Log Users:', state.usersArray);
    return state;
  }), _reducers),
  extraReducers: {// ['users/login/fulfilled']: (state,action) => {
    //   state.currentUser = action.payload
    //   console.log(state.currentUser)
    //   return state
    // }
  }
});
var registerUser = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createAsyncThunk"])('users/createUser', function _callee(obj, thunkAPI) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils_asyncActions__WEBPACK_IMPORTED_MODULE_3__["postNewUser"])(obj));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
});
var loginUser = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createAsyncThunk"])('users/login', function _callee2(obj, thunkAPI) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils_asyncActions__WEBPACK_IMPORTED_MODULE_3__["getUserAccess"])(obj));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
});
var actions = usersSlice.actions,
    reducer = usersSlice.reducer;
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.abbdbadb9e078c99e3b5.hot-update.js.map