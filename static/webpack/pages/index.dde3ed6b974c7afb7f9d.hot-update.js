webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_about_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/about/about */ "./components/about/about.js");
/* harmony import */ var _components_BlogSection_BlogSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BlogSection/BlogSection */ "./components/BlogSection/BlogSection.js");
/* harmony import */ var _components_commonHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/commonHead */ "./components/commonHead/index.js");
/* harmony import */ var _components_ContactArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ContactArea */ "./components/ContactArea/index.js");
/* harmony import */ var _components_Exprience_Exprience__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Exprience/Exprience */ "./components/Exprience/Exprience.js");
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/footer/Footer */ "./components/footer/Footer.js");
/* harmony import */ var _components_hero_hero__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/hero/hero */ "./components/hero/hero.js");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./components/Navbar/Navbar.js");
/* harmony import */ var _components_Pricing_Pricing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Pricing/Pricing */ "./components/Pricing/Pricing.js");
/* harmony import */ var _components_ProjectSection_ProjectSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ProjectSection/ProjectSection */ "./components/ProjectSection/ProjectSection.js");
/* harmony import */ var _components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/scrollbar/scrollbar */ "./components/scrollbar/scrollbar.js");
/* harmony import */ var _components_ServiceSection_ServiceSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/ServiceSection/ServiceSection */ "./components/ServiceSection/ServiceSection.js");
/* harmony import */ var _components_Testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Testimonial/Testimonial */ "./components/Testimonial/Testimonial.js");
/* harmony import */ var _components_abi_usdtABI_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/abi/usdtABI.json */ "./components/abi/usdtABI.json");
var _components_abi_usdtABI_json__WEBPACK_IMPORTED_MODULE_18___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../components/abi/usdtABI.json */ "./components/abi/usdtABI.json", 1);
/* harmony import */ var _components_abi_idoABI_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/abi/idoABI.json */ "./components/abi/idoABI.json");
var _components_abi_idoABI_json__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../components/abi/idoABI.json */ "./components/abi/idoABI.json", 1);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! web3 */ "../../../../../../node_modules/web3/dist/web3.min.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");




var _jsxFileName = "C:\\Users\\Sam Lin\\OneDrive - A.S. Mazzocchi\\\u684C\u9762\\WEB\\webpageReact\\downloadable\\elito dark\\pages\\index.js",
    _s = $RefreshSig$();




















var OKCMainnetProvider = 'https://exchainrpc.okex.org/';
var BSCMainnetProvider = 'https://bsc-dataseed.binance.org/';
var web3 = new web3__WEBPACK_IMPORTED_MODULE_20___default.a(new web3__WEBPACK_IMPORTED_MODULE_20___default.a.providers.HttpProvider(OKCMainnetProvider));
var usdtAddress = "0xD0f618C6C2914d8bf3BECE8372B1FA75758aBE99";
var contractAddress = "0xe13af19f22038F16Abb94625ABdC6F3a731eEc36";
var defaultInviter = "0x3Da22618ABd874623cA479CA1FB49674174EA970";
function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      defaultAccount = _useState[0],
      setDefaultAccount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      contributionAmount = _useState2[0],
      setContributionAmount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      referralAmount = _useState3[0],
      setReferralAmount = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      personalLink = _useState4[0],
      setPersonalLink = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("0x..."),
      parentAddress = _useState5[0],
      setParentAddress = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(defaultInviter),
      inviterAddress = _useState6[0],
      setInviterAddress = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isInviterSet = _useState7[0],
      setIsInviterSet = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isJoined = _useState8[0],
      setIsJoined = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isClaimActive = _useState9[0],
      setIsClaimActive = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isIDOActive = _useState10[0],
      setIsIDOActive = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isLoading = _useState11[0],
      setIsLoading = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      provider = _useState12[0],
      setProvider = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      signer = _useState13[0],
      setSigner = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      contract = _useState14[0],
      setContract = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      usdtContract = _useState15[0],
      setUsdtContract = _useState15[1];

  var handleDefaultAccount = function handleDefaultAccount(value) {
    setDefaultAccount(value);
  };

  var updateEthers = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var tempProvider, tempSigner, tempContract, tempUSDTContract, tempContributionHex, tempContribution, tempReferralHex, tempReferral, tempJoin, tempParent, tempClaimActive, tempIDOActive;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tempProvider = new ethers__WEBPACK_IMPORTED_MODULE_21__["ethers"].providers.Web3Provider(window.ethereum);
              setProvider(tempProvider);
              tempSigner = tempProvider.getSigner();
              setSigner(tempSigner);
              tempContract = new ethers__WEBPACK_IMPORTED_MODULE_21__["ethers"].Contract(contractAddress, _components_abi_idoABI_json__WEBPACK_IMPORTED_MODULE_19__, tempSigner);
              setContract(tempContract);
              tempUSDTContract = new ethers__WEBPACK_IMPORTED_MODULE_21__["ethers"].Contract(usdtAddress, _components_abi_usdtABI_json__WEBPACK_IMPORTED_MODULE_18__, tempSigner);
              setUsdtContract(tempUSDTContract);
              _context.next = 10;
              return tempContract.AddressToJoinUsdtAmount(defaultAccount);

            case 10:
              tempContributionHex = _context.sent;
              tempContribution = web3.utils.fromWei("".concat(tempContributionHex), 'ether');
              setContributionAmount(tempContribution);
              _context.next = 15;
              return tempContract.AddressToRewardAmount(defaultAccount);

            case 15:
              tempReferralHex = _context.sent;
              tempReferral = web3.utils.fromWei("".concat(tempReferralHex), 'ether');
              setReferralAmount(tempReferral);
              _context.next = 20;
              return tempContract.isAddressJoined(defaultAccount);

            case 20:
              tempJoin = _context.sent;
              setIsJoined(tempJoin);
              _context.next = 24;
              return tempContract.fatherAddress(defaultAccount);

            case 24:
              tempParent = _context.sent;
              if (tempParent === "0x0000000000000000000000000000000000000000") setParentAddress("0x...");
              if (tempParent !== "0x0000000000000000000000000000000000000000") setParentAddress("".concat(tempParent.slice(0, 4), "...").concat(tempParent.slice(-4)));
              _context.next = 29;
              return tempContract.isClaimActive();

            case 29:
              tempClaimActive = _context.sent;
              setIsClaimActive(tempClaimActive);
              _context.next = 33;
              return tempContract.isIDOActive();

            case 33:
              tempIDOActive = _context.sent;
              setIsIDOActive(tempIDOActive);

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateEthers() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    console.log("Change Account to : " + defaultAccount);
    if (defaultAccount !== null) updateEthers();
  }, [defaultAccount]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "scrool",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_commonHead__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "br-app",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
          defaultAccountChange: handleDefaultAccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_hero_hero__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_about_about__WEBPACK_IMPORTED_MODULE_5__["default"], {
          defaultAccount: defaultAccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ServiceSection_ServiceSection__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Exprience_Exprience__WEBPACK_IMPORTED_MODULE_9__["default"], {
          defaultAccount: defaultAccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

_s(Home, "uAWFjSkZVJ0OrZEUYPkcVkojhfY=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiT0tDTWFpbm5ldFByb3ZpZGVyIiwiQlNDTWFpbm5ldFByb3ZpZGVyIiwid2ViMyIsIldlYjMiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiLCJ1c2R0QWRkcmVzcyIsImNvbnRyYWN0QWRkcmVzcyIsImRlZmF1bHRJbnZpdGVyIiwiSG9tZSIsInVzZVN0YXRlIiwiZGVmYXVsdEFjY291bnQiLCJzZXREZWZhdWx0QWNjb3VudCIsImNvbnRyaWJ1dGlvbkFtb3VudCIsInNldENvbnRyaWJ1dGlvbkFtb3VudCIsInJlZmVycmFsQW1vdW50Iiwic2V0UmVmZXJyYWxBbW91bnQiLCJwZXJzb25hbExpbmsiLCJzZXRQZXJzb25hbExpbmsiLCJwYXJlbnRBZGRyZXNzIiwic2V0UGFyZW50QWRkcmVzcyIsImludml0ZXJBZGRyZXNzIiwic2V0SW52aXRlckFkZHJlc3MiLCJpc0ludml0ZXJTZXQiLCJzZXRJc0ludml0ZXJTZXQiLCJpc0pvaW5lZCIsInNldElzSm9pbmVkIiwiaXNDbGFpbUFjdGl2ZSIsInNldElzQ2xhaW1BY3RpdmUiLCJpc0lET0FjdGl2ZSIsInNldElzSURPQWN0aXZlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicHJvdmlkZXIiLCJzZXRQcm92aWRlciIsInNpZ25lciIsInNldFNpZ25lciIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJ1c2R0Q29udHJhY3QiLCJzZXRVc2R0Q29udHJhY3QiLCJoYW5kbGVEZWZhdWx0QWNjb3VudCIsInZhbHVlIiwidXBkYXRlRXRoZXJzIiwidGVtcFByb3ZpZGVyIiwiZXRoZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJ0ZW1wU2lnbmVyIiwiZ2V0U2lnbmVyIiwidGVtcENvbnRyYWN0IiwiQ29udHJhY3QiLCJjb250cmFjdEFCSSIsInRlbXBVU0RUQ29udHJhY3QiLCJ1c2R0QUJJIiwiQWRkcmVzc1RvSm9pblVzZHRBbW91bnQiLCJ0ZW1wQ29udHJpYnV0aW9uSGV4IiwidGVtcENvbnRyaWJ1dGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsIkFkZHJlc3NUb1Jld2FyZEFtb3VudCIsInRlbXBSZWZlcnJhbEhleCIsInRlbXBSZWZlcnJhbCIsImlzQWRkcmVzc0pvaW5lZCIsInRlbXBKb2luIiwiZmF0aGVyQWRkcmVzcyIsInRlbXBQYXJlbnQiLCJzbGljZSIsInRlbXBDbGFpbUFjdGl2ZSIsInRlbXBJRE9BY3RpdmUiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGtCQUFrQixHQUFHLDhCQUF6QjtBQUNBLElBQUlDLGtCQUFrQixHQUFHLG1DQUF6QjtBQUNBLElBQUlDLElBQUksR0FBRyxJQUFJQyw0Q0FBSixDQUFTLElBQUlBLDRDQUFJLENBQUNDLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0NMLGtCQUFoQyxDQUFULENBQVg7QUFDQSxJQUFNTSxXQUFXLEdBQUcsNENBQXBCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLDRDQUF4QjtBQUNBLElBQU1DLGNBQWMsR0FBRyw0Q0FBdkI7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUMsSUFBRCxDQUR2QjtBQUFBLE1BQ3RCQyxjQURzQjtBQUFBLE1BQ05DLGlCQURNOztBQUFBLG1CQUd1QkYsc0RBQVEsQ0FBQyxDQUFELENBSC9CO0FBQUEsTUFHdEJHLGtCQUhzQjtBQUFBLE1BR0ZDLHFCQUhFOztBQUFBLG1CQUllSixzREFBUSxDQUFDLENBQUQsQ0FKdkI7QUFBQSxNQUl0QkssY0FKc0I7QUFBQSxNQUlOQyxpQkFK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cUVBQUMsOENBQUQ7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLGdDQUNFLHFFQUFDLGtFQUFEO0FBQ0UsOEJBQW9CLEVBQUU4QjtBQUR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQUtFLHFFQUFDLCtEQUFEO0FBQU8sd0JBQWMsRUFBRTlCO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFNRSxxRUFBQyxrRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBT0UscUVBQUMsdUVBQUQ7QUFBYyx3QkFBYyxFQUFFQTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBYUUscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiRixlQWNFLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEOztHQXpGdUJGLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGRlM2VkNmI5NzRjN2FmYjdmOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0JztcbmltcG9ydCBCbG9nU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2dTZWN0aW9uL0Jsb2dTZWN0aW9uJztcbmltcG9ydCBDb21tb25IZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uSGVhZCc7XG5pbXBvcnQgQ29udGFjdEFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0QXJlYSc7XG5pbXBvcnQgRXhwcmllbmNlU2VjIGZyb20gJy4uL2NvbXBvbmVudHMvRXhwcmllbmNlL0V4cHJpZW5jZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8vaGVybyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcic7XG5pbXBvcnQgUHJpY2luZyBmcm9tICcuLi9jb21wb25lbnRzL1ByaWNpbmcvUHJpY2luZyc7XG5pbXBvcnQgUHJvamVjdFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0U2VjdGlvbi9Qcm9qZWN0U2VjdGlvbic7XG5pbXBvcnQgU2Nyb2xsYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGJhcic7XG5pbXBvcnQgU2VydmljZVNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZXJ2aWNlU2VjdGlvbi9TZXJ2aWNlU2VjdGlvbic7XG5pbXBvcnQgVGVzdGltb25pYWwgZnJvbSAnLi4vY29tcG9uZW50cy9UZXN0aW1vbmlhbC9UZXN0aW1vbmlhbCc7XG5cbmltcG9ydCB1c2R0QUJJIGZyb20gJy4uL2NvbXBvbmVudHMvYWJpL3VzZHRBQkkuanNvbidcbmltcG9ydCBjb250cmFjdEFCSSBmcm9tICcuLi9jb21wb25lbnRzL2FiaS9pZG9BQkkuanNvbidcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuXG5sZXQgT0tDTWFpbm5ldFByb3ZpZGVyID0gJ2h0dHBzOi8vZXhjaGFpbnJwYy5va2V4Lm9yZy8nO1xubGV0IEJTQ01haW5uZXRQcm92aWRlciA9ICdodHRwczovL2JzYy1kYXRhc2VlZC5iaW5hbmNlLm9yZy8nO1xubGV0IHdlYjMgPSBuZXcgV2ViMyhuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKE9LQ01haW5uZXRQcm92aWRlcikpO1xuY29uc3QgdXNkdEFkZHJlc3MgPSBcIjB4RDBmNjE4QzZDMjkxNGQ4YmYzQkVDRTgzNzJCMUZBNzU3NThhQkU5OVwiO1xuY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweGUxM2FmMTlmMjIwMzhGMTZBYmI5NDYyNUFCZEM2RjNhNzMxZUVjMzZcIjtcbmNvbnN0IGRlZmF1bHRJbnZpdGVyID0gXCIweDNEYTIyNjE4QUJkODc0NjIzY0E0NzlDQTFGQjQ5Njc0MTc0RUE5NzBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RlZmF1bHRBY2NvdW50LCBzZXREZWZhdWx0QWNjb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbY29udHJpYnV0aW9uQW1vdW50LCBzZXRDb250cmlidXRpb25BbW91bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtyZWZlcnJhbEFtb3VudCwgc2V0UmVmZXJyYWxBbW91bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwZXJzb25hbExpbmssIHNldFBlcnNvbmFsTGlua10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3BhcmVudEFkZHJlc3MsIHNldFBhcmVudEFkZHJlc3NdID0gdXNlU3RhdGUoXCIweC4uLlwiKVxuICBjb25zdCBbaW52aXRlckFkZHJlc3MsIHNldEludml0ZXJBZGRyZXNzXSA9IHVzZVN0YXRlKGRlZmF1bHRJbnZpdGVyKVxuICBjb25zdCBbaXNJbnZpdGVyU2V0LCBzZXRJc0ludml0ZXJTZXRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc0pvaW5lZCwgc2V0SXNKb2luZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNDbGFpbUFjdGl2ZSwgc2V0SXNDbGFpbUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0lET0FjdGl2ZSwgc2V0SXNJRE9BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzaWduZXIsIHNldFNpZ25lcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZHRDb250cmFjdCwgc2V0VXNkdENvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZURlZmF1bHRBY2NvdW50ID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0RGVmYXVsdEFjY291bnQodmFsdWUpO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRXRoZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB0ZW1wUHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBzZXRQcm92aWRlcih0ZW1wUHJvdmlkZXIpO1xuXG4gICAgbGV0IHRlbXBTaWduZXIgPSB0ZW1wUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgc2V0U2lnbmVyKHRlbXBTaWduZXIpO1xuXG4gICAgbGV0IHRlbXBDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBjb250cmFjdEFCSSwgdGVtcFNpZ25lcilcbiAgICBzZXRDb250cmFjdCh0ZW1wQ29udHJhY3QpO1xuXG4gICAgbGV0IHRlbXBVU0RUQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KHVzZHRBZGRyZXNzLCB1c2R0QUJJLCB0ZW1wU2lnbmVyKVxuICAgIHNldFVzZHRDb250cmFjdCh0ZW1wVVNEVENvbnRyYWN0KTtcblxuICAgIGxldCB0ZW1wQ29udHJpYnV0aW9uSGV4ID0gYXdhaXQgdGVtcENvbnRyYWN0LkFkZHJlc3NUb0pvaW5Vc2R0QW1vdW50KGRlZmF1bHRBY2NvdW50KTtcbiAgICBsZXQgdGVtcENvbnRyaWJ1dGlvbiA9IHdlYjMudXRpbHMuZnJvbVdlaShgJHt0ZW1wQ29udHJpYnV0aW9uSGV4fWAsICdldGhlcicpO1xuICAgIHNldENvbnRyaWJ1dGlvbkFtb3VudCh0ZW1wQ29udHJpYnV0aW9uKTtcblxuICAgIGxldCB0ZW1wUmVmZXJyYWxIZXggPSBhd2FpdCB0ZW1wQ29udHJhY3QuQWRkcmVzc1RvUmV3YXJkQW1vdW50KGRlZmF1bHRBY2NvdW50KTtcbiAgICBsZXQgdGVtcFJlZmVycmFsID0gd2ViMy51dGlscy5mcm9tV2VpKGAke3RlbXBSZWZlcnJhbEhleH1gLCAnZXRoZXInKTtcbiAgICBzZXRSZWZlcnJhbEFtb3VudCh0ZW1wUmVmZXJyYWwpO1xuXG4gICAgbGV0IHRlbXBKb2luID0gYXdhaXQgdGVtcENvbnRyYWN0LmlzQWRkcmVzc0pvaW5lZChkZWZhdWx0QWNjb3VudCk7XG4gICAgc2V0SXNKb2luZWQodGVtcEpvaW4pO1xuXG4gICAgbGV0IHRlbXBQYXJlbnQgPSBhd2FpdCB0ZW1wQ29udHJhY3QuZmF0aGVyQWRkcmVzcyhkZWZhdWx0QWNjb3VudCk7XG4gICAgaWYgKHRlbXBQYXJlbnQgPT09IFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIpXG4gICAgICBzZXRQYXJlbnRBZGRyZXNzKFwiMHguLi5cIik7XG4gICAgaWYgKHRlbXBQYXJlbnQgIT09IFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIpXG4gICAgICBzZXRQYXJlbnRBZGRyZXNzKGAke3RlbXBQYXJlbnQuc2xpY2UoMCwgNCl9Li4uJHt0ZW1wUGFyZW50LnNsaWNlKC00KX1gKTtcblxuICAgIGxldCB0ZW1wQ2xhaW1BY3RpdmUgPSBhd2FpdCB0ZW1wQ29udHJhY3QuaXNDbGFpbUFjdGl2ZSgpO1xuICAgIHNldElzQ2xhaW1BY3RpdmUodGVtcENsYWltQWN0aXZlKTtcblxuICAgIGxldCB0ZW1wSURPQWN0aXZlID0gYXdhaXQgdGVtcENvbnRyYWN0LmlzSURPQWN0aXZlKCk7XG4gICAgc2V0SXNJRE9BY3RpdmUodGVtcElET0FjdGl2ZSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlIEFjY291bnQgdG8gOiBcIiArIGRlZmF1bHRBY2NvdW50KVxuICAgIGlmIChkZWZhdWx0QWNjb3VudCAhPT0gbnVsbClcbiAgICAgIHVwZGF0ZUV0aGVycygpXG4gIH0sIFtkZWZhdWx0QWNjb3VudF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPSdzY3Jvb2wnPlxuICAgICAgPENvbW1vbkhlYWQgLz5cbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJici1hcHBcIj5cbiAgICAgICAgICA8TmF2YmFyXG4gICAgICAgICAgICBkZWZhdWx0QWNjb3VudENoYW5nZT17aGFuZGxlRGVmYXVsdEFjY291bnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SGVybyAvPlxuICAgICAgICAgIDxBYm91dCBkZWZhdWx0QWNjb3VudD17ZGVmYXVsdEFjY291bnR9IC8+XG4gICAgICAgICAgPFNlcnZpY2VTZWN0aW9uIC8+XG4gICAgICAgICAgPEV4cHJpZW5jZVNlYyBkZWZhdWx0QWNjb3VudD17ZGVmYXVsdEFjY291bnR9IC8+XG4gICAgICAgICAgey8qIDxQcm9qZWN0U2VjdGlvbiAvPlxuICAgICAgICAgIDxUZXN0aW1vbmlhbCAvPlxuICAgICAgICAgIDxQcmljaW5nIC8+XG4gICAgICAgICAgPENvbnRhY3RBcmVhIC8+XG4gICAgICAgICAgPEJsb2dTZWN0aW9uIC8+ICovfVxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8U2Nyb2xsYmFyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==