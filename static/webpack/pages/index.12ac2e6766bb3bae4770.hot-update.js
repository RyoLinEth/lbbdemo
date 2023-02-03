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
    _this = undefined;



var Loading = function Loading() {
  var _spinnerStyle;

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
        lineNumber: 36,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "spinner",
        style: insideSpinnerStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2FkaW5nLmpzIl0sIm5hbWVzIjpbIkxvYWRpbmciLCJ3cmFwcGVyU3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicG9zaXRpb24iLCJib3R0b20iLCJ6SW5kZXgiLCJzcGlubmVyU3R5bGUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsIm1heFdpZHRoIiwiaW5zaWRlU3Bpbm5lclN0eWxlIiwiYm9yZGVyIiwiYm9yZGVyVG9wIiwiYm9yZGVyUmFkaXVzIiwidHJhbnNmb3JtIiwic3BpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxXQUFPLEVBQUUsTUFEUTtBQUVqQkMsa0JBQWMsRUFBRSxRQUZDO0FBR2pCQyxjQUFVLEVBQUUsUUFISztBQUlqQkMsWUFBUSxFQUFFLFVBSk87QUFLakJDLFVBQU0sRUFBRSxNQUxTO0FBTWpCQyxVQUFNLEVBQUU7QUFOUyxHQUFyQjtBQVNBLE1BQU1DLFlBQVk7QUFDZE4sV0FBTyxFQUFFLE1BREs7QUFFZEMsa0JBQWMsRUFBRSxRQUZGO0FBR2RDLGNBQVUsRUFBRSxRQUhFO0FBSWRLLFVBQU0sRUFBRSxNQUpNO0FBS2RDLG1CQUFlLEVBQUUsT0FMSDtBQU1kQyxTQUFLLEVBQUUsT0FOTztBQU9kQyxZQUFRLEVBQUU7QUFQSSxvTkFRTixPQVJNLHlOQVNDLFFBVEQsaUJBQWxCO0FBWUEsTUFBTUMsa0JBQWtCLEdBQUc7QUFDdkJDLFVBQU0sRUFBRSxtQkFEZTtBQUV2QkMsYUFBUyxFQUFFLG1CQUZZO0FBR3ZCQyxnQkFBWSxFQUFFLEtBSFM7QUFJdkJMLFNBQUssRUFBRSxNQUpnQjtBQUt2QkYsVUFBTSxFQUFFLE1BTGU7QUFNdkJRLGFBQVMsbUJBQVlDLElBQVo7QUFOYyxHQUEzQjtBQVFBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQWlDLFNBQUssRUFBRWpCLFlBQXhDO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBaUMsV0FBSyxFQUFFTyxZQUF4QztBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUF5QixhQUFLLEVBQUVLO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQXRDRDs7S0FBTWIsTztBQXdDU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTJhYzJlNjc2NmJiM2JhZTQ3NzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlclN0eWxlID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBib3R0b206IFwiNDBweFwiLFxyXG4gICAgICAgIHpJbmRleDogXCI1MFwiLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNwaW5uZXJTdHlsZSA9IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDBweFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zaWRlU3Bpbm5lclN0eWxlID0ge1xyXG4gICAgICAgIGJvcmRlcjogJzRweCBzb2xpZCAjZjNmM2YzJyxcclxuICAgICAgICBib3JkZXJUb3A6ICc0cHggc29saWQgIzM0OThkYicsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICB3aWR0aDogJzUwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3NwaW59ZGVnKWBcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLXdyYXBwZXJcIiBzdHlsZT17d3JhcHBlclN0eWxlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXNwaW5uZXJcIiBzdHlsZT17c3Bpbm5lclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxwPuaOiOasiuS4rS4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiIHN0eWxlPXtpbnNpZGVTcGlubmVyU3R5bGV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=