webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Loading.css":
/*!********************************!*\
  !*** ./components/Loading.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./Loading.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Loading.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./Loading.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Loading.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./Loading.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Loading.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Loading.css":
/*!********************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./components/Loading.css ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-bar {\r\n    display: -webkit-flex;\r\n    display: -moz-box;\r\n    display: flex;\r\n    -webkit-justify-content: center;\r\n       -moz-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.bar {\r\n    width: 4px;\r\n    height: 18px;\r\n    margin: 0 8px;\r\n    border-radius: 4px;\r\n    -webkit-animation: loading 1s ease-in-out infinite;\r\n       -moz-animation: loading 1s ease-in-out infinite;\r\n            animation: loading 1s ease-in-out infinite;\r\n}\r\n\r\n@-webkit-keyframes loading {\r\n    0% {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n\r\n    20% {\r\n        -webkit-transform: scale(1, 2.5);\r\n                transform: scale(1, 2.5);\r\n    }\r\n\r\n    40% {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}\r\n\r\n@-moz-keyframes loading {\r\n    0% {\r\n        -moz-transform: scale(1);\r\n             transform: scale(1);\r\n    }\r\n\r\n    20% {\r\n        -moz-transform: scale(1, 2.5);\r\n             transform: scale(1, 2.5);\r\n    }\r\n\r\n    40% {\r\n        -moz-transform: scale(1);\r\n             transform: scale(1);\r\n    }\r\n}\r\n\r\n@keyframes loading {\r\n    0% {\r\n        -webkit-transform: scale(1);\r\n           -moz-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n\r\n    20% {\r\n        -webkit-transform: scale(1, 2.5);\r\n           -moz-transform: scale(1, 2.5);\r\n                transform: scale(1, 2.5);\r\n    }\r\n\r\n    40% {\r\n        -webkit-transform: scale(1);\r\n           -moz-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}", "",{"version":3,"sources":["webpack://components/Loading.css"],"names":[],"mappings":"AAAA;IACI,qBAAa;IAAb,iBAAa;IAAb,aAAa;IACb,+BAAuB;OAAvB,qBAAuB;YAAvB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,kDAA0C;OAA1C,+CAA0C;YAA1C,0CAA0C;AAC9C;;AAEA;IACI;QACI,2BAAmB;gBAAnB,mBAAmB;IACvB;;IAEA;QACI,gCAAwB;gBAAxB,wBAAwB;IAC5B;;IAEA;QACI,2BAAmB;gBAAnB,mBAAmB;IACvB;AACJ;;AAZA;IACI;QACI,wBAAmB;aAAnB,mBAAmB;IACvB;;IAEA;QACI,6BAAwB;aAAxB,wBAAwB;IAC5B;;IAEA;QACI,wBAAmB;aAAnB,mBAAmB;IACvB;AACJ;;AAZA;IACI;QACI,2BAAmB;WAAnB,wBAAmB;gBAAnB,mBAAmB;IACvB;;IAEA;QACI,gCAAwB;WAAxB,6BAAwB;gBAAxB,wBAAwB;IAC5B;;IAEA;QACI,2BAAmB;WAAnB,wBAAmB;gBAAnB,mBAAmB;IACvB;AACJ","sourcesContent":[".loading-bar {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.bar {\r\n    width: 4px;\r\n    height: 18px;\r\n    margin: 0 8px;\r\n    border-radius: 4px;\r\n    animation: loading 1s ease-in-out infinite;\r\n}\r\n\r\n@keyframes loading {\r\n    0% {\r\n        transform: scale(1);\r\n    }\r\n\r\n    20% {\r\n        transform: scale(1, 2.5);\r\n    }\r\n\r\n    40% {\r\n        transform: scale(1);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_sass_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/sass/style.scss */ "./styles/sass/style.scss");
/* harmony import */ var _styles_sass_style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/font-awesome.min.css */ "./styles/font-awesome.min.css");
/* harmony import */ var _styles_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_themify_icons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/themify-icons.css */ "./styles/themify-icons.css");
/* harmony import */ var _styles_themify_icons_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_themify_icons_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/flaticon.css */ "./styles/flaticon.css");
/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_flaticon_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Loading_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Loading.css */ "./components/Loading.css");
/* harmony import */ var _components_Loading_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_Loading_css__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\Sam Lin\\OneDrive - A.S. Mazzocchi\\\u684C\u9762\\WEB\\webpageReact\\downloadable\\elito dark\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2FkaW5nLmNzcz81ZjVmIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvYWRpbmcuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxVQUFVLG1CQUFPLENBQUMsbU5BQXdHO0FBQzFILDBCQUEwQixtQkFBTyxDQUFDLGdUQUFtSzs7QUFFck07O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0Esa0VBQWtFLGlCQUFpQixjQUFjLE1BQU0sWUFBWSxpQ0FBaUM7QUFDcEosVUFBVSxnQkFBZ0IsZUFBZSxZQUFZLGlDQUFpQztBQUN0RixVQUFVLFVBQVUsZUFBZTtBQUNuQzs7QUFFQTtBQUNBLE1BQU0sZ1RBQW1LO0FBQ3pLO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsZ1RBQW1LOztBQUU3TDs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7Ozs7QUMzREE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGlCQUFpQiw4QkFBOEIsMEJBQTBCLHNCQUFzQix3Q0FBd0MsaUNBQWlDLHdDQUF3QyxLQUFLLGNBQWMsbUJBQW1CLHFCQUFxQixzQkFBc0IsMkJBQTJCLDJEQUEyRCwyREFBMkQsMkRBQTJELEtBQUssb0NBQW9DLFlBQVksd0NBQXdDLHdDQUF3QyxTQUFTLGlCQUFpQiw2Q0FBNkMsNkNBQTZDLFNBQVMsaUJBQWlCLHdDQUF3Qyx3Q0FBd0MsU0FBUyxLQUFLLGlDQUFpQyxZQUFZLHFDQUFxQyxxQ0FBcUMsU0FBUyxpQkFBaUIsMENBQTBDLDBDQUEwQyxTQUFTLGlCQUFpQixxQ0FBcUMscUNBQXFDLFNBQVMsS0FBSyw0QkFBNEIsWUFBWSx3Q0FBd0Msd0NBQXdDLHdDQUF3QyxTQUFTLGlCQUFpQiw2Q0FBNkMsNkNBQTZDLDZDQUE2QyxTQUFTLGlCQUFpQix3Q0FBd0Msd0NBQXdDLHdDQUF3QyxTQUFTLEtBQUssT0FBTyx1RkFBdUYsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksY0FBYyxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLE1BQU0sdUNBQXVDLHNCQUFzQixnQ0FBZ0MsS0FBSyxjQUFjLG1CQUFtQixxQkFBcUIsc0JBQXNCLDJCQUEyQixtREFBbUQsS0FBSyw0QkFBNEIsWUFBWSxnQ0FBZ0MsU0FBUyxpQkFBaUIscUNBQXFDLFNBQVMsaUJBQWlCLGdDQUFnQyxTQUFTLEtBQUssbUJBQW1CO0FBQzF6RjtBQUNlLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ052QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3ZDLHNCQUFPLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0tBRlFGLEs7QUFJTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iNWU3N2Q4ZmZhMDY4NDQyMzRmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9Mb2FkaW5nLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0yIS4vTG9hZGluZy5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9Mb2FkaW5nLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubG9hZGluZy1iYXIge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iYXIge1xcclxcbiAgICB3aWR0aDogNHB4O1xcclxcbiAgICBoZWlnaHQ6IDE4cHg7XFxyXFxuICAgIG1hcmdpbjogMCA4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmcgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxyXFxuICAgICAgIC1tb3otYW5pbWF0aW9uOiBsb2FkaW5nIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGluZyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmcge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMjAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAyLjUpO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDIuNSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgNDAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5ALW1vei1rZXlmcmFtZXMgbG9hZGluZyB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAyMCUge1xcclxcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEsIDIuNSk7XFxyXFxuICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMi41KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA0MCUge1xcclxcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbG9hZGluZyB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAyMCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDIuNSk7XFxyXFxuICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwgMi41KTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAyLjUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDQwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvTG9hZGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBYTtJQUFiLGlCQUFhO0lBQWIsYUFBYTtJQUNiLCtCQUF1QjtPQUF2QixxQkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtEQUEwQztPQUExQywrQ0FBMEM7WUFBMUMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0k7UUFDSSwyQkFBbUI7Z0JBQW5CLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksMkJBQW1CO2dCQUFuQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFaQTtJQUNJO1FBQ0ksd0JBQW1CO2FBQW5CLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLDZCQUF3QjthQUF4Qix3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSx3QkFBbUI7YUFBbkIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBWkE7SUFDSTtRQUNJLDJCQUFtQjtXQUFuQix3QkFBbUI7Z0JBQW5CLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdDQUF3QjtXQUF4Qiw2QkFBd0I7Z0JBQXhCLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLDJCQUFtQjtXQUFuQix3QkFBbUI7Z0JBQW5CLG1CQUFtQjtJQUN2QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2FkaW5nLWJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFyIHtcXHJcXG4gICAgd2lkdGg6IDRweDtcXHJcXG4gICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICBtYXJnaW46IDAgOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGFuaW1hdGlvbjogbG9hZGluZyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsb2FkaW5nIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAyMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAyLjUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDQwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc2Fzcy9zdHlsZS5zY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZm9udC1hd2Vzb21lLm1pbi5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy90aGVtaWZ5LWljb25zLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2ZsYXRpY29uLmNzcydcbmltcG9ydCAnLi4vY29tcG9uZW50cy9Mb2FkaW5nLmNzcydcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9