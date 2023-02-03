webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\Sam Lin\\OneDrive - A.S. Mazzocchi\\\u684C\u9762\\WEB\\webpageReact\\downloadable\\elito dark\\components\\Loading.js",
    _this = undefined,
    _s = $RefreshSig$();



var Loading = function Loading() {
  _s();

  var _spinnerStyle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      spin = _useState[0],
      setSpin = _useState[1];

  var wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "40px",
    zIndex: "50"
  };
  var spinnerStyle = (_spinnerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "black",
    width: "100vw",
    maxWidth: "400px"
  }, Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_spinnerStyle, "height", "100px"), Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_spinnerStyle, "flexDirection", "column"), _spinnerStyle);
  var insideSpinnerStyle = {
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    transform: "rotate(".concat(spin, "deg)")
  };
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var intervalId = setInterval(function () {
      setSpin(spin + 10);
    }, 50);
    return function () {
      return clearInterval(intervalId);
    };
  }, [spin]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "spinner-wrapper",
    style: wrapperStyle,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "loading-spinner",
      style: spinnerStyle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "\u6388\u6B0A\u4E2D..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "spinner",
        style: insideSpinnerStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, _this);
};

_s(Loading, "oQXAvTIIdeDXgf1kVwS8BdSmgwM=");

_c = Loading;
/* harmony default export */ __webpack_exports__["default"] = (Loading);

var _c;

$RefreshReg$(_c, "Loading");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2FkaW5nLmpzIl0sIm5hbWVzIjpbIkxvYWRpbmciLCJ1c2VTdGF0ZSIsInNwaW4iLCJzZXRTcGluIiwid3JhcHBlclN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBvc2l0aW9uIiwiYm90dG9tIiwiekluZGV4Iiwic3Bpbm5lclN0eWxlIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJtYXhXaWR0aCIsImluc2lkZVNwaW5uZXJTdHlsZSIsImJvcmRlciIsImJvcmRlclRvcCIsImJvcmRlclJhZGl1cyIsInRyYW5zZm9ybSIsInVzZUVmZmVjdCIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLENBQUQsQ0FEZDtBQUFBLE1BQ1hDLElBRFc7QUFBQSxNQUNMQyxPQURLOztBQUVsQixNQUFNQyxZQUFZLEdBQUc7QUFDakJDLFdBQU8sRUFBRSxNQURRO0FBRWpCQyxrQkFBYyxFQUFFLFFBRkM7QUFHakJDLGNBQVUsRUFBRSxRQUhLO0FBSWpCQyxZQUFRLEVBQUUsVUFKTztBQUtqQkMsVUFBTSxFQUFFLE1BTFM7QUFNakJDLFVBQU0sRUFBRTtBQU5TLEdBQXJCO0FBU0EsTUFBTUMsWUFBWTtBQUNkTixXQUFPLEVBQUUsTUFESztBQUVkQyxrQkFBYyxFQUFFLFFBRkY7QUFHZEMsY0FBVSxFQUFFLFFBSEU7QUFJZEssVUFBTSxFQUFFLE1BSk07QUFLZEMsbUJBQWUsRUFBRSxPQUxIO0FBTWRDLFNBQUssRUFBRSxPQU5PO0FBT2RDLFlBQVEsRUFBRTtBQVBJLG9OQVFOLE9BUk0seU5BU0MsUUFURCxpQkFBbEI7QUFZQSxNQUFNQyxrQkFBa0IsR0FBRztBQUN2QkMsVUFBTSxFQUFFLG1CQURlO0FBRXZCQyxhQUFTLEVBQUUsbUJBRlk7QUFHdkJDLGdCQUFZLEVBQUUsS0FIUztBQUl2QkwsU0FBSyxFQUFFLE1BSmdCO0FBS3ZCRixVQUFNLEVBQUUsTUFMZTtBQU12QlEsYUFBUyxtQkFBWWxCLElBQVo7QUFOYyxHQUEzQjtBQVFBbUIseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsVUFBVSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUNqQ3BCLGFBQU8sQ0FBQ0QsSUFBSSxHQUFHLEVBQVIsQ0FBUDtBQUNILEtBRjZCLEVBRTNCLEVBRjJCLENBQTlCO0FBR0EsV0FBTztBQUFBLGFBQU1zQixhQUFhLENBQUNGLFVBQUQsQ0FBbkI7QUFBQSxLQUFQO0FBQ0gsR0FMUSxFQUtOLENBQUNwQixJQUFELENBTE0sQ0FBVDtBQU9BLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQWlDLFNBQUssRUFBRUUsWUFBeEM7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFpQyxXQUFLLEVBQUVPLFlBQXhDO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQXlCLGFBQUssRUFBRUs7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBOUNEOztHQUFNaEIsTzs7S0FBQUEsTztBQWdEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzIyMDUyMWQ4YmY5YzJhZTQ2ZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzcGluLCBzZXRTcGluXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgd3JhcHBlclN0eWxlID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBib3R0b206IFwiNDBweFwiLFxyXG4gICAgICAgIHpJbmRleDogXCI1MFwiLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNwaW5uZXJTdHlsZSA9IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDBweFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zaWRlU3Bpbm5lclN0eWxlID0ge1xyXG4gICAgICAgIGJvcmRlcjogJzRweCBzb2xpZCAjZjNmM2YzJyxcclxuICAgICAgICBib3JkZXJUb3A6ICc0cHggc29saWQgIzM0OThkYicsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICB3aWR0aDogJzUwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3NwaW59ZGVnKWBcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0U3BpbihzcGluICsgMTApO1xyXG4gICAgICAgIH0sIDUwKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgIH0sIFtzcGluXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItd3JhcHBlclwiIHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctc3Bpbm5lclwiIHN0eWxlPXtzcGlubmVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPHA+5o6I5qyK5LitLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyXCIgc3R5bGU9e2luc2lkZVNwaW5uZXJTdHlsZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==