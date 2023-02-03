webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProjectSection/ProjectSection.js":
/*!*****************************************************!*\
  !*** ./components/ProjectSection/ProjectSection.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/project */ "./api/project.js");
/* harmony import */ var _ProjectSingle_ProjectSingle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProjectSingle/ProjectSingle */ "./components/ProjectSingle/ProjectSingle.js");



var _jsxFileName = "C:\\Users\\Sam Lin\\OneDrive - A.S. Mazzocchi\\\u684C\u9762\\WEB\\webpageReact\\downloadable\\elito dark\\components\\ProjectSection\\ProjectSection.js",
    _this = undefined,
    _s = $RefreshSig$();





var settings = {
  dots: false,
  arrows: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [{
    breakpoint: 1400,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      dots: true,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      dots: true,
      slidesToScroll: 1
    }
  }]
};

var ProjectSection = function ProjectSection(props) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  function handleClose() {
    setOpen(false);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      state = _useState[0],
      setState = _useState[1];

  var handleClickOpen = function handleClickOpen(item) {
    setOpen(true);
    setState(item);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "wpo-project-area section-padding",
    id: "portfolio",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "wpo-section-title-s2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-4 col-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "title",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "\u63D0\u5E63"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\u9EDE\u64CA\u53F3\u65B9\u6309\u9215\u5373\u53EF\u9818\u5E63"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-6 offset-lg-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "sec-title-icon",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fi flaticon-self-growth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProjectSingle_ProjectSingle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      open: open,
      onClose: handleClose,
      title: state.title,
      pImg: state.ps1img,
      psub1img1: state.psub1img1,
      psub1img2: state.psub1img2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }, _this);
};

_s(ProjectSection, "JcC0SJNIOhCZ8lTOZWwRXyq45mk=");

_c = ProjectSection;
/* harmony default export */ __webpack_exports__["default"] = (ProjectSection);

var _c;

$RefreshReg$(_c, "ProjectSection");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0U2VjdGlvbi9Qcm9qZWN0U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJzZXR0aW5ncyIsImRvdHMiLCJhcnJvd3MiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImluZmluaXRlIiwiUHJvamVjdFNlY3Rpb24iLCJwcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNsb3NlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNsaWNrT3BlbiIsIml0ZW0iLCJ0aXRsZSIsInBzMWltZyIsInBzdWIxaW1nMSIsInBzdWIxaW1nMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDYkMsTUFBSSxFQUFFLEtBRE87QUFFYkMsUUFBTSxFQUFFLElBRks7QUFHYkMsT0FBSyxFQUFFLElBSE07QUFJYkMsY0FBWSxFQUFFLENBSkQ7QUFLYkMsZ0JBQWMsRUFBRSxDQUxIO0FBTWJDLFVBQVEsRUFBRSxJQU5HO0FBT2JDLFlBQVUsRUFBRSxDQUNSO0FBQ0lDLGNBQVUsRUFBRSxJQURoQjtBQUVJUixZQUFRLEVBQUU7QUFDTkksa0JBQVksRUFBRSxDQURSO0FBRU5DLG9CQUFjLEVBQUUsQ0FGVjtBQUdOSSxjQUFRLEVBQUU7QUFISjtBQUZkLEdBRFEsRUFTUjtBQUNJRCxjQUFVLEVBQUUsSUFEaEI7QUFFSVIsWUFBUSxFQUFFO0FBQ05JLGtCQUFZLEVBQUUsQ0FEUjtBQUVOQyxvQkFBYyxFQUFFLENBRlY7QUFHTkksY0FBUSxFQUFFO0FBSEo7QUFGZCxHQVRRLEVBaUJSO0FBQ0lELGNBQVUsRUFBRSxHQURoQjtBQUVJUixZQUFRLEVBQUU7QUFDTkksa0JBQVksRUFBRSxDQURSO0FBRU5DLG9CQUFjLEVBQUU7QUFGVjtBQUZkLEdBakJRLEVBd0JSO0FBQ0lHLGNBQVUsRUFBRSxHQURoQjtBQUVJUixZQUFRLEVBQUU7QUFDTkksa0JBQVksRUFBRSxDQURSO0FBRU5ILFVBQUksRUFBRSxJQUZBO0FBR05JLG9CQUFjLEVBQUU7QUFIVjtBQUZkLEdBeEJRLEVBZ0NSO0FBQ0lHLGNBQVUsRUFBRSxHQURoQjtBQUVJUixZQUFRLEVBQUU7QUFDTkksa0JBQVksRUFBRSxDQURSO0FBRU5ILFVBQUksRUFBRSxJQUZBO0FBR05JLG9CQUFjLEVBQUU7QUFIVjtBQUZkLEdBaENRO0FBUEMsQ0FBakI7O0FBbURBLElBQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBRU5DLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRk07QUFBQTtBQUFBLE1BRXZCQyxJQUZ1QjtBQUFBLE1BRWpCQyxPQUZpQjs7QUFJOUIsV0FBU0MsV0FBVCxHQUF1QjtBQUNuQkQsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNIOztBQU42QixrQkFRSkYsc0RBQVEsQ0FBQyxFQUFELENBUko7QUFBQSxNQVF2QkksS0FSdUI7QUFBQSxNQVFoQkMsUUFSZ0I7O0FBVzlCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQzlCTCxXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FHLFlBQVEsQ0FBQ0UsSUFBRCxDQUFSO0FBQ0gsR0FIRDs7QUFJQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFrRCxNQUFFLEVBQUMsV0FBckQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLHdCQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLGlCQUFmO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLE9BQWY7QUFBQSxzQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFPSTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsZ0JBQWY7QUFBQSxxQ0FDSTtBQUFHLHlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQXNESSxxRUFBQyxvRUFBRDtBQUFlLFVBQUksRUFBRU4sSUFBckI7QUFBMkIsYUFBTyxFQUFFRSxXQUFwQztBQUFpRCxXQUFLLEVBQUVDLEtBQUssQ0FBQ0ksS0FBOUQ7QUFBcUUsVUFBSSxFQUFFSixLQUFLLENBQUNLLE1BQWpGO0FBQXlGLGVBQVMsRUFBRUwsS0FBSyxDQUFDTSxTQUExRztBQUFxSCxlQUFTLEVBQUVOLEtBQUssQ0FBQ087QUFBdEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBESCxDQXpFRDs7R0FBTWQsYzs7S0FBQUEsYztBQTJFU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWE0ZDZjYWZmZjgzYWJjNTY0Y2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uLy4uL2FwaS9wcm9qZWN0J1xyXG5pbXBvcnQgUHJvamVjdFNpbmdsZSBmcm9tICcuLi9Qcm9qZWN0U2luZ2xlL1Byb2plY3RTaW5nbGUnO1xyXG5cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGFycm93czogdHJ1ZSxcclxuICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDE0MDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5cclxuY29uc3QgUHJvamVjdFNlY3Rpb24gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgICBzZXRTdGF0ZShpdGVtKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1wcm9qZWN0LWFyZWEgc2VjdGlvbi1wYWRkaW5nXCIgaWQ9J3BvcnRmb2xpbyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1zZWN0aW9uLXRpdGxlLXMyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPuaPkOW5ozwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+6bue5pOK5Y+z5pa55oyJ6YiV5Y2z5Y+v6aCY5bmjPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IG9mZnNldC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYy10aXRsZS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmkgZmxhdGljb24tc2VsZi1ncm93dGhcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIndwby1wcm9qZWN0LXdyYXAgd3BvLXByb2plY3Qtc2xpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtQcm9qZWN0cy5tYXAoKHByb2plY3QsIHBybykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tcHJvamVjdC1pdGVtXCIga2V5PXtwcm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLXByb2plY3QtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0LnBJbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tcHJvamVjdC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGlja09wZW4ocHJvamVjdCl9Pntwcm9qZWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9qZWN0LnN1YlRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLXBcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMzI1XCIgaGVpZ2h0PVwiMTY4N1wiIHZpZXdCb3g9XCIwIDAgMTMyNSAxNjg3XCIgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcjBfZl8zOV80MTY2KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNDgxLjVcIiBjeT1cIjg0My41XCIgcj1cIjM0My41XCIgZmlsbE9wYWNpdHk9XCIwLjI3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJmaWx0ZXIwX2ZfMzlfNDE2NlwiIHg9XCItMzYyXCIgeT1cIjBcIiB3aWR0aD1cIjE2ODdcIiBoZWlnaHQ9XCIxNjg3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzPVwic1JHQlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVCbGVuZCBtb2RlPVwibm9ybWFsXCIgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiQmFja2dyb3VuZEltYWdlRml4XCIgcmVzdWx0PVwic2hhcGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjI1MFwiIHJlc3VsdD1cImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMzlfNDE2NlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLXNoYXBlLTFcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdpbWFnZXMvcHJvamVjdC9saW5lLTEucG5nJyBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLXNoYXBlLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdpbWFnZXMvcHJvamVjdC9saW5lLTIucG5nJyBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxQcm9qZWN0U2luZ2xlIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSB0aXRsZT17c3RhdGUudGl0bGV9IHBJbWc9e3N0YXRlLnBzMWltZ30gcHN1YjFpbWcxPXtzdGF0ZS5wc3ViMWltZzF9IHBzdWIxaW1nMj17c3RhdGUucHN1YjFpbWcyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFNlY3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==