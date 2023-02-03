webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Exprience/Exprience.js":
/*!*******************************************!*\
  !*** ./components/Exprience/Exprience.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SectionTitle/SectionTitle */ "./components/SectionTitle/SectionTitle.js");


var _jsxFileName = "C:\\Users\\Sam Lin\\OneDrive - A.S. Mazzocchi\\\u684C\u9762\\WEB\\webpageReact\\downloadable\\elito dark\\components\\Exprience\\Exprience.js",
    _this = undefined,
    _s = $RefreshSig$();




var Expriences = [{
  date: '專屬邀請連結',
  logo: 'images/work/1.png',
  position: 'Junior Visual Designer',
  companyName: 'Trapeza Group, USA.',
  workFrom: ''
} // {
//     date: '2017 - 2018',
//     logo: 'images/work/2.png',
//     position: 'UI/UX Designer',
//     companyName: 'Gallerie Ontario, Canada',
//     workFrom: '(Remote)',
// },
// {
//     date: '2019 - 2020',
//     logo: 'images/work/3.png',
//     position: 'Seinor UI/UX Desinger',
//     companyName: 'Morson Hybrid, Canada',
//     workFrom: '',
// },
// {
//     date: '2019 - Present',
//     logo: 'images/work/4.png',
//     position: 'Product Designer',
//     companyName: 'Myant Inc. Etobicoke, ON',
//     workFrom: '(Remote)',
// },
];

var ExprienceSec = function ExprienceSec(props) {
  _s();

  // const defaultInviteLink = window.location.origin;
  var defaultInviteLink = "尚未連接錢包";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultInviteLink),
      inviteLink = _useState[0],
      setInviteLink = _useState[1];

  var generateLink = function generateLink(value) {
    var tempLink = window.location.origin + "/?inviter=" + value;
    setInviteLink(tempLink);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (props.defaultAccount !== null) {
      generateLink(props.defaultAccount);
    }
  }, [props.defaultAccount]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "wpo-work-area section-padding",
    id: "experience",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
        Title: '我的邀請連結'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "wpo-work-wrap",
        children: Expriences.map(function (exprience, exp) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "wpo-work-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "date",
                children: exprience.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                style: {
                  wordWrap: 'break-word',
                  maxWidth: '80vw'
                },
                children: inviteLink
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "link",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u8907\u88FD\u9023\u7D50"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 29
            }, _this)
          }, exp, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "shape-wk",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        width: "1500",
        height: "1500",
        viewBox: "0 0 1500 1500",
        fill: "none",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
          opacity: "0.45",
          filter: "url(#filter0_f_39_4214)",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
            cx: "750",
            cy: "750",
            r: "200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("filter", {
            id: "filter0_f_39_4214",
            x: "0",
            y: "0",
            width: "1500",
            height: "1500",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "275",
              result: "effect1_foregroundBlur_39_4212"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }, _this);
};

_s(ExprienceSec, "hszGbTUzWWLG11auUuJ5mj+nQfI=");

_c = ExprienceSec;
/* harmony default export */ __webpack_exports__["default"] = (ExprienceSec);

var _c;

$RefreshReg$(_c, "ExprienceSec");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHByaWVuY2UvRXhwcmllbmNlLmpzIl0sIm5hbWVzIjpbIkV4cHJpZW5jZXMiLCJkYXRlIiwibG9nbyIsInBvc2l0aW9uIiwiY29tcGFueU5hbWUiLCJ3b3JrRnJvbSIsIkV4cHJpZW5jZVNlYyIsInByb3BzIiwiZGVmYXVsdEludml0ZUxpbmsiLCJ1c2VTdGF0ZSIsImludml0ZUxpbmsiLCJzZXRJbnZpdGVMaW5rIiwiZ2VuZXJhdGVMaW5rIiwidmFsdWUiLCJ0ZW1wTGluayIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwidXNlRWZmZWN0IiwiZGVmYXVsdEFjY291bnQiLCJtYXAiLCJleHByaWVuY2UiLCJleHAiLCJ3b3JkV3JhcCIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDZjtBQUNJQyxNQUFJLEVBQUUsUUFEVjtBQUVJQyxNQUFJLEVBQUUsbUJBRlY7QUFHSUMsVUFBUSxFQUFFLHdCQUhkO0FBSUlDLGFBQVcsRUFBRSxxQkFKakI7QUFLSUMsVUFBUSxFQUFFO0FBTGQsQ0FEZSxDQVFmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVCZSxDQUFuQjs7QUFnQ0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRTVCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsUUFBMUI7O0FBSDRCLGtCQUlRQyxzREFBUSxDQUFDRCxpQkFBRCxDQUpoQjtBQUFBLE1BSXJCRSxVQUpxQjtBQUFBLE1BSVRDLGFBSlM7O0FBTTVCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM1QixR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QUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQ0gsQ0F0REQ7O0dBQU1oQixZOztLQUFBQSxZO0FBd0RTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMDc1YWRlNTQ2ZjBlNmI2MDJiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJy4uL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGUnXHJcblxyXG5jb25zdCBFeHByaWVuY2VzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGRhdGU6ICflsIjlsazpgoDoq4vpgKPntZAnLFxyXG4gICAgICAgIGxvZ286ICdpbWFnZXMvd29yay8xLnBuZycsXHJcbiAgICAgICAgcG9zaXRpb246ICdKdW5pb3IgVmlzdWFsIERlc2lnbmVyJyxcclxuICAgICAgICBjb21wYW55TmFtZTogJ1RyYXBlemEgR3JvdXAsIFVTQS4nLFxyXG4gICAgICAgIHdvcmtGcm9tOiAnJyxcclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgZGF0ZTogJzIwMTcgLSAyMDE4JyxcclxuICAgIC8vICAgICBsb2dvOiAnaW1hZ2VzL3dvcmsvMi5wbmcnLFxyXG4gICAgLy8gICAgIHBvc2l0aW9uOiAnVUkvVVggRGVzaWduZXInLFxyXG4gICAgLy8gICAgIGNvbXBhbnlOYW1lOiAnR2FsbGVyaWUgT250YXJpbywgQ2FuYWRhJyxcclxuICAgIC8vICAgICB3b3JrRnJvbTogJyhSZW1vdGUpJyxcclxuICAgIC8vIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgZGF0ZTogJzIwMTkgLSAyMDIwJyxcclxuICAgIC8vICAgICBsb2dvOiAnaW1hZ2VzL3dvcmsvMy5wbmcnLFxyXG4gICAgLy8gICAgIHBvc2l0aW9uOiAnU2Vpbm9yIFVJL1VYIERlc2luZ2VyJyxcclxuICAgIC8vICAgICBjb21wYW55TmFtZTogJ01vcnNvbiBIeWJyaWQsIENhbmFkYScsXHJcbiAgICAvLyAgICAgd29ya0Zyb206ICcnLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBkYXRlOiAnMjAxOSAtIFByZXNlbnQnLFxyXG4gICAgLy8gICAgIGxvZ286ICdpbWFnZXMvd29yay80LnBuZycsXHJcbiAgICAvLyAgICAgcG9zaXRpb246ICdQcm9kdWN0IERlc2lnbmVyJyxcclxuICAgIC8vICAgICBjb21wYW55TmFtZTogJ015YW50IEluYy4gRXRvYmljb2tlLCBPTicsXHJcbiAgICAvLyAgICAgd29ya0Zyb206ICcoUmVtb3RlKScsXHJcbiAgICAvLyB9LFxyXG5dXHJcblxyXG5cclxuY29uc3QgRXhwcmllbmNlU2VjID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgLy8gY29uc3QgZGVmYXVsdEludml0ZUxpbmsgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xyXG4gICAgY29uc3QgZGVmYXVsdEludml0ZUxpbmsgPSBcIuWwmuacqumAo+aOpemMouWMhVwiO1xyXG4gICAgY29uc3QgW2ludml0ZUxpbmssIHNldEludml0ZUxpbmtdID0gdXNlU3RhdGUoZGVmYXVsdEludml0ZUxpbmspO1xyXG5cclxuICAgIGNvbnN0IGdlbmVyYXRlTGluayA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGxldCB0ZW1wTGluayA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBcIi8/aW52aXRlcj1cIiArIHZhbHVlO1xyXG4gICAgICAgIHNldEludml0ZUxpbmsodGVtcExpbmspO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmRlZmF1bHRBY2NvdW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlTGluayhwcm9wcy5kZWZhdWx0QWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLmRlZmF1bHRBY2NvdW50XSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLXdvcmstYXJlYSBzZWN0aW9uLXBhZGRpbmdcIiBpZD1cImV4cGVyaWVuY2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgVGl0bGU9eyfmiJHnmoTpgoDoq4vpgKPntZAnfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8td29yay13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge0V4cHJpZW5jZXMubWFwKChleHByaWVuY2UsIGV4cCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby13b3JrLWl0ZW1cIiBrZXk9e2V4cH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRhdGVcIj57ZXhwcmllbmNlLmRhdGV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cImxvZ29cIj48aW1nIHNyYz17ZXhwcmllbmNlLmxvZ299IGFsdD1cIlwiIC8+PC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJwb3NpdGlvblwiPntleHByaWVuY2UucG9zaXRpb259IDxzcGFuPntleHByaWVuY2UuY29tcGFueU5hbWV9IDxzcGFuPntleHByaWVuY2Uud29ya0Zyb219PC9zcGFuPjwvc3Bhbj48L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3t3b3JkV3JhcDonYnJlYWstd29yZCcsIG1heFdpZHRoOic4MHZ3J319PntpbnZpdGVMaW5rfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+6KSH6KO96YCj57WQPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS13a1wiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE1MDBcIiBoZWlnaHQ9XCIxNTAwXCIgdmlld0JveD1cIjAgMCAxNTAwIDE1MDBcIiBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIG9wYWNpdHk9XCIwLjQ1XCIgZmlsdGVyPVwidXJsKCNmaWx0ZXIwX2ZfMzlfNDIxNClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjc1MFwiIGN5PVwiNzUwXCIgcj1cIjIwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlsdGVyIGlkPVwiZmlsdGVyMF9mXzM5XzQyMTRcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxNTAwXCIgaGVpZ2h0PVwiMTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVycz1cInNSR0JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUZsb29kIGZsb29kT3BhY2l0eT1cIjBcIiByZXN1bHQ9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlQmxlbmQgbW9kZT1cIm5vcm1hbFwiIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cIkJhY2tncm91bmRJbWFnZUZpeFwiIHJlc3VsdD1cInNoYXBlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCIyNzVcIiByZXN1bHQ9XCJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzM5XzQyMTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpbHRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cHJpZW5jZVNlYzsiXSwic291cmNlUm9vdCI6IiJ9