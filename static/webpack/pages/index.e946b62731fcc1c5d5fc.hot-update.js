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
    transform: "rotate(".concat(spin, "deg)"),
    transition: 'transform 1s linear'
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
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "spinner",
        style: insideSpinnerStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2FkaW5nLmpzIl0sIm5hbWVzIjpbIkxvYWRpbmciLCJ1c2VTdGF0ZSIsInNwaW4iLCJzZXRTcGluIiwid3JhcHBlclN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBvc2l0aW9uIiwiYm90dG9tIiwiekluZGV4Iiwic3Bpbm5lclN0eWxlIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJtYXhXaWR0aCIsImluc2lkZVNwaW5uZXJTdHlsZSIsImJvcmRlciIsImJvcmRlclRvcCIsImJvcmRlclJhZGl1cyIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxDQUFELENBRGQ7QUFBQSxNQUNYQyxJQURXO0FBQUEsTUFDTEMsT0FESzs7QUFFbEIsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxXQUFPLEVBQUUsTUFEUTtBQUVqQkMsa0JBQWMsRUFBRSxRQUZDO0FBR2pCQyxjQUFVLEVBQUUsUUFISztBQUlqQkMsWUFBUSxFQUFFLFVBSk87QUFLakJDLFVBQU0sRUFBRSxNQUxTO0FBTWpCQyxVQUFNLEVBQUU7QUFOUyxHQUFyQjtBQVNBLE1BQU1DLFlBQVk7QUFDZE4sV0FBTyxFQUFFLE1BREs7QUFFZEMsa0JBQWMsRUFBRSxRQUZGO0FBR2RDLGNBQVUsRUFBRSxRQUhFO0FBSWRLLFVBQU0sRUFBRSxNQUpNO0FBS2RDLG1CQUFlLEVBQUUsT0FMSDtBQU1kQyxTQUFLLEVBQUUsT0FOTztBQU9kQyxZQUFRLEVBQUU7QUFQSSxvTkFRTixPQVJNLHlOQVNDLFFBVEQsaUJBQWxCO0FBWUEsTUFBTUMsa0JBQWtCLEdBQUc7QUFDdkJDLFVBQU0sRUFBRSxtQkFEZTtBQUV2QkMsYUFBUyxFQUFFLG1CQUZZO0FBR3ZCQyxnQkFBWSxFQUFFLEtBSFM7QUFJdkJMLFNBQUssRUFBRSxNQUpnQjtBQUt2QkYsVUFBTSxFQUFFLE1BTGU7QUFNdkJRLGFBQVMsbUJBQVlsQixJQUFaLFNBTmM7QUFPdkJtQixjQUFVLEVBQUU7QUFQVyxHQUEzQjtBQVNBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxVQUFVLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ2pDckIsYUFBTyxDQUFDRCxJQUFJLEdBQUcsRUFBUixDQUFQO0FBQ0gsS0FGNkIsRUFFM0IsRUFGMkIsQ0FBOUI7QUFHQSxXQUFPO0FBQUEsYUFBTXVCLGFBQWEsQ0FBQ0YsVUFBRCxDQUFuQjtBQUFBLEtBQVA7QUFDSCxHQUxRLEVBS04sQ0FBQ3JCLElBQUQsQ0FMTSxDQUFUO0FBT0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBaUMsU0FBSyxFQUFFRSxZQUF4QztBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQWlDLFdBQUssRUFBRU8sWUFBeEM7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBeUIsYUFBSyxFQUFFSztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0EvQ0Q7O0dBQU1oQixPOztLQUFBQSxPO0FBaURTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOTQ2YjYyNzMxZmNjMWM1ZDVmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3NwaW4sIHNldFNwaW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCB3cmFwcGVyU3R5bGUgPSB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIGJvdHRvbTogXCI0MHB4XCIsXHJcbiAgICAgICAgekluZGV4OiBcIjUwXCIsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3Bpbm5lclN0eWxlID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnNpZGVTcGlubmVyU3R5bGUgPSB7XHJcbiAgICAgICAgYm9yZGVyOiAnNHB4IHNvbGlkICNmM2YzZjMnLFxyXG4gICAgICAgIGJvcmRlclRvcDogJzRweCBzb2xpZCAjMzQ5OGRiJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgIHdpZHRoOiAnNTBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7c3Bpbn1kZWcpYCxcclxuICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDFzIGxpbmVhcicsXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNwaW4oc3BpbiArIDEwKTtcclxuICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICB9LCBbc3Bpbl0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLXdyYXBwZXJcIiBzdHlsZT17d3JhcHBlclN0eWxlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXNwaW5uZXJcIiBzdHlsZT17c3Bpbm5lclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxwPuaOiOasiuS4rS4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiIHN0eWxlPXtpbnNpZGVTcGlubmVyU3R5bGV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=