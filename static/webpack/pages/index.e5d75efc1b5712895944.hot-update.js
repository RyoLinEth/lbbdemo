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
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);


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

  var copyLink = function copyLink() {
    if (inviteLink === defaultInviteLink) {
      sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "尚未連結錢包", "error");
      return;
    }

    navigator.clipboard.writeText(inviteLink).then(function () {
      sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("成功", "\u5DF2\u6210\u529F\u8907\u88FD\u9023\u7D50 ".concat(inviteLink), "success");
    }, function (err) {
      sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("異常", "複製失敗", "error");
    });
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
        lineNumber: 70,
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
                lineNumber: 75,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                style: {
                  wordWrap: 'break-word',
                  maxWidth: '80vw'
                },
                children: inviteLink
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "link",
                onClick: copyLink,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "\u8907\u88FD\u9023\u7D50"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, _this)
          }, exp, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
            lineNumber: 90,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
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
              lineNumber: 95,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "275",
              result: "effect1_foregroundBlur_39_4212"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHByaWVuY2UvRXhwcmllbmNlLmpzIl0sIm5hbWVzIjpbIkV4cHJpZW5jZXMiLCJkYXRlIiwibG9nbyIsInBvc2l0aW9uIiwiY29tcGFueU5hbWUiLCJ3b3JrRnJvbSIsIkV4cHJpZW5jZVNlYyIsInByb3BzIiwiZGVmYXVsdEludml0ZUxpbmsiLCJ1c2VTdGF0ZSIsImludml0ZUxpbmsiLCJzZXRJbnZpdGVMaW5rIiwiZ2VuZXJhdGVMaW5rIiwidmFsdWUiLCJ0ZW1wTGluayIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiY29weUxpbmsiLCJzd2FsIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsImVyciIsInVzZUVmZmVjdCIsImRlZmF1bHRBY2NvdW50IiwibWFwIiwiZXhwcmllbmNlIiwiZXhwIiwid29yZFdyYXAiLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNmO0FBQ0lDLE1BQUksRUFBRSxRQURWO0FBRUlDLE1BQUksRUFBRSxtQkFGVjtBQUdJQyxVQUFRLEVBQUUsd0JBSGQ7QUFJSUMsYUFBVyxFQUFFLHFCQUpqQjtBQUtJQyxVQUFRLEVBQUU7QUFMZCxDQURlLENBUWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUJlLENBQW5COztBQWdDQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFNUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxRQUExQjs7QUFINEIsa0JBSVFDLHNEQUFRLENBQUNELGlCQUFELENBSmhCO0FBQUEsTUFJckJFLFVBSnFC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QStCLGFBQUMsRUFBQyxHQUFqQztBQUFxQyxhQUFDLEVBQUMsR0FBdkM7QUFBMkMsaUJBQUssRUFBQyxNQUFqRDtBQUF3RCxrQkFBTSxFQUFDLE1BQS9EO0FBQ0ksdUJBQVcsRUFBQyxnQkFEaEI7QUFDaUMscUNBQXlCLEVBQUMsTUFEM0Q7QUFBQSxvQ0FFSTtBQUFTLDBCQUFZLEVBQUMsR0FBdEI7QUFBMEIsb0JBQU0sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBUyxrQkFBSSxFQUFDLFFBQWQ7QUFBdUIsb0JBQUcsZUFBMUI7QUFBMEMsaUJBQUcsRUFBQyxvQkFBOUM7QUFBbUUsb0JBQU0sRUFBQztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLGVBSUk7QUFBZ0IsMEJBQVksRUFBQyxLQUE3QjtBQUFtQyxvQkFBTSxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcUNILENBbEVEOztHQUFNdkIsWTs7S0FBQUEsWTtBQW9FU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTVkNzVlZmMxYjU3MTI4OTU5NDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICcuLi9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlJ1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5cclxuY29uc3QgRXhwcmllbmNlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBkYXRlOiAn5bCI5bGs6YKA6KuL6YCj57WQJyxcclxuICAgICAgICBsb2dvOiAnaW1hZ2VzL3dvcmsvMS5wbmcnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnSnVuaW9yIFZpc3VhbCBEZXNpZ25lcicsXHJcbiAgICAgICAgY29tcGFueU5hbWU6ICdUcmFwZXphIEdyb3VwLCBVU0EuJyxcclxuICAgICAgICB3b3JrRnJvbTogJycsXHJcbiAgICB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGRhdGU6ICcyMDE3IC0gMjAxOCcsXHJcbiAgICAvLyAgICAgbG9nbzogJ2ltYWdlcy93b3JrLzIucG5nJyxcclxuICAgIC8vICAgICBwb3NpdGlvbjogJ1VJL1VYIERlc2lnbmVyJyxcclxuICAgIC8vICAgICBjb21wYW55TmFtZTogJ0dhbGxlcmllIE9udGFyaW8sIENhbmFkYScsXHJcbiAgICAvLyAgICAgd29ya0Zyb206ICcoUmVtb3RlKScsXHJcbiAgICAvLyB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGRhdGU6ICcyMDE5IC0gMjAyMCcsXHJcbiAgICAvLyAgICAgbG9nbzogJ2ltYWdlcy93b3JrLzMucG5nJyxcclxuICAgIC8vICAgICBwb3NpdGlvbjogJ1NlaW5vciBVSS9VWCBEZXNpbmdlcicsXHJcbiAgICAvLyAgICAgY29tcGFueU5hbWU6ICdNb3Jzb24gSHlicmlkLCBDYW5hZGEnLFxyXG4gICAgLy8gICAgIHdvcmtGcm9tOiAnJyxcclxuICAgIC8vIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgZGF0ZTogJzIwMTkgLSBQcmVzZW50JyxcclxuICAgIC8vICAgICBsb2dvOiAnaW1hZ2VzL3dvcmsvNC5wbmcnLFxyXG4gICAgLy8gICAgIHBvc2l0aW9uOiAnUHJvZHVjdCBEZXNpZ25lcicsXHJcbiAgICAvLyAgICAgY29tcGFueU5hbWU6ICdNeWFudCBJbmMuIEV0b2JpY29rZSwgT04nLFxyXG4gICAgLy8gICAgIHdvcmtGcm9tOiAnKFJlbW90ZSknLFxyXG4gICAgLy8gfSxcclxuXVxyXG5cclxuXHJcbmNvbnN0IEV4cHJpZW5jZVNlYyA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIC8vIGNvbnN0IGRlZmF1bHRJbnZpdGVMaW5rID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcclxuICAgIGNvbnN0IGRlZmF1bHRJbnZpdGVMaW5rID0gXCLlsJrmnKrpgKPmjqXpjKLljIVcIjtcclxuICAgIGNvbnN0IFtpbnZpdGVMaW5rLCBzZXRJbnZpdGVMaW5rXSA9IHVzZVN0YXRlKGRlZmF1bHRJbnZpdGVMaW5rKTtcclxuXHJcbiAgICBjb25zdCBnZW5lcmF0ZUxpbmsgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBsZXQgdGVtcExpbmsgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgXCIvP2ludml0ZXI9XCIgKyB2YWx1ZTtcclxuICAgICAgICBzZXRJbnZpdGVMaW5rKHRlbXBMaW5rKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb3B5TGluayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaW52aXRlTGluayA9PT0gZGVmYXVsdEludml0ZUxpbmspIHtcclxuICAgICAgICAgICAgc3dhbChcIumMr+iqpFwiLCBcIuWwmuacqumAo+e1kOmMouWMhVwiLCBcImVycm9yXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoaW52aXRlTGluaykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHN3YWwoXCLmiJDlip9cIiwgYOW3suaIkOWKn+ikh+ijvemAo+e1kCAke2ludml0ZUxpbmt9YCwgXCJzdWNjZXNzXCIpXHJcbiAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBzd2FsKFwi55Ww5bi4XCIsIFwi6KSH6KO95aSx5pWXXCIsIFwiZXJyb3JcIilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmRlZmF1bHRBY2NvdW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlTGluayhwcm9wcy5kZWZhdWx0QWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLmRlZmF1bHRBY2NvdW50XSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLXdvcmstYXJlYSBzZWN0aW9uLXBhZGRpbmdcIiBpZD1cImV4cGVyaWVuY2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgVGl0bGU9eyfmiJHnmoTpgoDoq4vpgKPntZAnfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8td29yay13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge0V4cHJpZW5jZXMubWFwKChleHByaWVuY2UsIGV4cCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby13b3JrLWl0ZW1cIiBrZXk9e2V4cH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRhdGVcIj57ZXhwcmllbmNlLmRhdGV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cImxvZ29cIj48aW1nIHNyYz17ZXhwcmllbmNlLmxvZ299IGFsdD1cIlwiIC8+PC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJwb3NpdGlvblwiPntleHByaWVuY2UucG9zaXRpb259IDxzcGFuPntleHByaWVuY2UuY29tcGFueU5hbWV9IDxzcGFuPntleHByaWVuY2Uud29ya0Zyb219PC9zcGFuPjwvc3Bhbj48L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgd29yZFdyYXA6ICdicmVhay13b3JkJywgbWF4V2lkdGg6ICc4MHZ3JyB9fT57aW52aXRlTGlua308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rXCIgb25DbGljaz17Y29weUxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7opIfoo73pgKPntZA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLXdrXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTUwMFwiIGhlaWdodD1cIjE1MDBcIiB2aWV3Qm94PVwiMCAwIDE1MDAgMTUwMFwiIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgb3BhY2l0eT1cIjAuNDVcIiBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcjBfZl8zOV80MjE0KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNzUwXCIgY3k9XCI3NTBcIiByPVwiMjAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJmaWx0ZXIwX2ZfMzlfNDIxNFwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjE1MDBcIiBoZWlnaHQ9XCIxNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzPVwic1JHQlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVCbGVuZCBtb2RlPVwibm9ybWFsXCIgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiQmFja2dyb3VuZEltYWdlRml4XCIgcmVzdWx0PVwic2hhcGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjI3NVwiIHJlc3VsdD1cImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMzlfNDIxMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwcmllbmNlU2VjOyJdLCJzb3VyY2VSb290IjoiIn0=