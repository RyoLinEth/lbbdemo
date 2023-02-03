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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHByaWVuY2UvRXhwcmllbmNlLmpzIl0sIm5hbWVzIjpbIkV4cHJpZW5jZXMiLCJkYXRlIiwibG9nbyIsInBvc2l0aW9uIiwiY29tcGFueU5hbWUiLCJ3b3JrRnJvbSIsIkV4cHJpZW5jZVNlYyIsInByb3BzIiwiZGVmYXVsdEludml0ZUxpbmsiLCJ1c2VTdGF0ZSIsImludml0ZUxpbmsiLCJzZXRJbnZpdGVMaW5rIiwiZ2VuZXJhdGVMaW5rIiwidmFsdWUiLCJ0ZW1wTGluayIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwidXNlRWZmZWN0IiwiZGVmYXVsdEFjY291bnQiLCJtYXAiLCJleHByaWVuY2UiLCJleHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNmO0FBQ0lDLE1BQUksRUFBRSxRQURWO0FBRUlDLE1BQUksRUFBRSxtQkFGVjtBQUdJQyxVQUFRLEVBQUUsd0JBSGQ7QUFJSUMsYUFBVyxFQUFFLHFCQUpqQjtBQUtJQyxVQUFRLEVBQUU7QUFMZCxDQURlLENBUWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUJlLENBQW5COztBQWdDQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFNUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxRQUExQjs7QUFINEIsa0JBSVFDLHNEQUFRLENBQUNELGlCQUFELENBSmhCO0FBQUEsTUFJckJFLFVBSnFCO0FBQUEsTUFJVEMsYUFKUzs7QUFNNUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCLFFBQUlDLFFBQVEsR0FBR0MsTUFBTSxD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QUFBLFk7QUF3RFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRiZGJlYTRhNjZhODQxZjM0MTIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnLi4vU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZSdcclxuXHJcbmNvbnN0IEV4cHJpZW5jZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgZGF0ZTogJ+WwiOWxrOmCgOiri+mAo+e1kCcsXHJcbiAgICAgICAgbG9nbzogJ2ltYWdlcy93b3JrLzEucG5nJyxcclxuICAgICAgICBwb3NpdGlvbjogJ0p1bmlvciBWaXN1YWwgRGVzaWduZXInLFxyXG4gICAgICAgIGNvbXBhbnlOYW1lOiAnVHJhcGV6YSBHcm91cCwgVVNBLicsXHJcbiAgICAgICAgd29ya0Zyb206ICcnLFxyXG4gICAgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBkYXRlOiAnMjAxNyAtIDIwMTgnLFxyXG4gICAgLy8gICAgIGxvZ286ICdpbWFnZXMvd29yay8yLnBuZycsXHJcbiAgICAvLyAgICAgcG9zaXRpb246ICdVSS9VWCBEZXNpZ25lcicsXHJcbiAgICAvLyAgICAgY29tcGFueU5hbWU6ICdHYWxsZXJpZSBPbnRhcmlvLCBDYW5hZGEnLFxyXG4gICAgLy8gICAgIHdvcmtGcm9tOiAnKFJlbW90ZSknLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBkYXRlOiAnMjAxOSAtIDIwMjAnLFxyXG4gICAgLy8gICAgIGxvZ286ICdpbWFnZXMvd29yay8zLnBuZycsXHJcbiAgICAvLyAgICAgcG9zaXRpb246ICdTZWlub3IgVUkvVVggRGVzaW5nZXInLFxyXG4gICAgLy8gICAgIGNvbXBhbnlOYW1lOiAnTW9yc29uIEh5YnJpZCwgQ2FuYWRhJyxcclxuICAgIC8vICAgICB3b3JrRnJvbTogJycsXHJcbiAgICAvLyB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGRhdGU6ICcyMDE5IC0gUHJlc2VudCcsXHJcbiAgICAvLyAgICAgbG9nbzogJ2ltYWdlcy93b3JrLzQucG5nJyxcclxuICAgIC8vICAgICBwb3NpdGlvbjogJ1Byb2R1Y3QgRGVzaWduZXInLFxyXG4gICAgLy8gICAgIGNvbXBhbnlOYW1lOiAnTXlhbnQgSW5jLiBFdG9iaWNva2UsIE9OJyxcclxuICAgIC8vICAgICB3b3JrRnJvbTogJyhSZW1vdGUpJyxcclxuICAgIC8vIH0sXHJcbl1cclxuXHJcblxyXG5jb25zdCBFeHByaWVuY2VTZWMgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICAvLyBjb25zdCBkZWZhdWx0SW52aXRlTGluayA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XHJcbiAgICBjb25zdCBkZWZhdWx0SW52aXRlTGluayA9IFwi5bCa5pyq6YCj5o6l6Yyi5YyFXCI7XHJcbiAgICBjb25zdCBbaW52aXRlTGluaywgc2V0SW52aXRlTGlua10gPSB1c2VTdGF0ZShkZWZhdWx0SW52aXRlTGluayk7XHJcblxyXG4gICAgY29uc3QgZ2VuZXJhdGVMaW5rID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgbGV0IHRlbXBMaW5rID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiLz9pbnZpdGVyPVwiICsgdmFsdWU7XHJcbiAgICAgICAgc2V0SW52aXRlTGluayh0ZW1wTGluayk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuZGVmYXVsdEFjY291bnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZ2VuZXJhdGVMaW5rKHByb3BzLmRlZmF1bHRBY2NvdW50KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuZGVmYXVsdEFjY291bnRdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8td29yay1hcmVhIHNlY3Rpb24tcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSBUaXRsZT17J+aIkeeahOmCgOiri+mAo+e1kCd9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby13b3JrLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7RXhwcmllbmNlcy5tYXAoKGV4cHJpZW5jZSwgZXhwKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLXdvcmstaXRlbVwiIGtleT17ZXhwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGF0ZVwiPntleHByaWVuY2UuZGF0ZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibG9nb1wiPjxpbWcgc3JjPXtleHByaWVuY2UubG9nb30gYWx0PVwiXCIgLz48L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cInBvc2l0aW9uXCI+e2V4cHJpZW5jZS5wb3NpdGlvbn0gPHNwYW4+e2V4cHJpZW5jZS5jb21wYW55TmFtZX0gPHNwYW4+e2V4cHJpZW5jZS53b3JrRnJvbX08L3NwYW4+PC9zcGFuPjwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aW52aXRlTGlua308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPuikh+ijvemAo+e1kDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUtd2tcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNTAwXCIgaGVpZ2h0PVwiMTUwMFwiIHZpZXdCb3g9XCIwIDAgMTUwMCAxNTAwXCIgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBvcGFjaXR5PVwiMC40NVwiIGZpbHRlcj1cInVybCgjZmlsdGVyMF9mXzM5XzQyMTQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI3NTBcIiBjeT1cIjc1MFwiIHI9XCIyMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpbHRlciBpZD1cImZpbHRlcjBfZl8zOV80MjE0XCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTUwMFwiIGhlaWdodD1cIjE1MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM9XCJzUkdCXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZE9wYWNpdHk9XCIwXCIgcmVzdWx0PVwiQmFja2dyb3VuZEltYWdlRml4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUJsZW5kIG1vZGU9XCJub3JtYWxcIiBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiByZXN1bHQ9XCJzaGFwZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMjc1XCIgcmVzdWx0PVwiZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8zOV80MjEyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHByaWVuY2VTZWM7Il0sInNvdXJjZVJvb3QiOiIifQ==