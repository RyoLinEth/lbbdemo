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
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #3498db",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 1s linear infinite"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2FkaW5nLmpzIl0sIm5hbWVzIjpbIkxvYWRpbmciLCJ3cmFwcGVyU3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicG9zaXRpb24iLCJib3R0b20iLCJ6SW5kZXgiLCJzcGlubmVyU3R5bGUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsIm1heFdpZHRoIiwiaW5zaWRlU3Bpbm5lclN0eWxlIiwiYm9yZGVyIiwiYm9yZGVyVG9wIiwiYm9yZGVyUmFkaXVzIiwiYW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxZQUFZLEdBQUc7QUFDakJDLFdBQU8sRUFBRSxNQURRO0FBRWpCQyxrQkFBYyxFQUFFLFFBRkM7QUFHakJDLGNBQVUsRUFBRSxRQUhLO0FBSWpCQyxZQUFRLEVBQUUsVUFKTztBQUtqQkMsVUFBTSxFQUFFLE1BTFM7QUFNakJDLFVBQU0sRUFBRTtBQU5TLEdBQXJCO0FBU0EsTUFBTUMsWUFBWTtBQUNkTixXQUFPLEVBQUUsTUFESztBQUVkQyxrQkFBYyxFQUFFLFFBRkY7QUFHZEMsY0FBVSxFQUFFLFFBSEU7QUFJZEssVUFBTSxFQUFFLE1BSk07QUFLZEMsbUJBQWUsRUFBRSxPQUxIO0FBTWRDLFNBQUssRUFBRSxPQU5PO0FBT2RDLFlBQVEsRUFBRTtBQVBJLG9OQVFOLE9BUk0seU5BU0MsUUFURCxpQkFBbEI7QUFZQSxNQUFNQyxrQkFBa0IsR0FBRztBQUN2QkMsVUFBTSxFQUFFLG1CQURlO0FBRXZCQyxhQUFTLEVBQUUsbUJBRlk7QUFHdkJDLGdCQUFZLEVBQUUsS0FIUztBQUl2QkwsU0FBSyxFQUFFLE1BSmdCO0FBS3ZCRixVQUFNLEVBQUUsTUFMZTtBQU12QlEsYUFBUyxFQUFFO0FBTlksR0FBM0I7QUFRQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFpQyxTQUFLLEVBQUVoQixZQUF4QztBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQWlDLFdBQUssRUFBRU8sWUFBeEM7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBeUIsYUFBSyxFQUFFSztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0F0Q0Q7O0tBQU1iLE87QUF3Q1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJlYmY5ZjBhNmNlZTAxMWY0ZjQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXJTdHlsZSA9IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgYm90dG9tOiBcIjQwcHhcIixcclxuICAgICAgICB6SW5kZXg6IFwiNTBcIixcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzcGlubmVyU3R5bGUgPSB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgICAgbWF4V2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwcHhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluc2lkZVNwaW5uZXJTdHlsZSA9IHtcclxuICAgICAgICBib3JkZXI6IFwiNHB4IHNvbGlkICNmM2YzZjNcIixcclxuICAgICAgICBib3JkZXJUb3A6IFwiNHB4IHNvbGlkICMzNDk4ZGJcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiNTBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCI1MHB4XCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBcInNwaW4gMXMgbGluZWFyIGluZmluaXRlXCIsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci13cmFwcGVyXCIgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zcGlubmVyXCIgc3R5bGU9e3NwaW5uZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8cD7mjojmrIrkuK0uLi48L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIiBzdHlsZT17aW5zaWRlU3Bpbm5lclN0eWxlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9