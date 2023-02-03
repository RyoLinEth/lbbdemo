webpackHotUpdate_N_E("pages/index",{

/***/ "./components/about/about.js":
/*!***********************************!*\
  !*** ./components/about/about.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "../../../../../../node_modules/web3/dist/web3.min.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "C:\\Users\\Sam Lin\\OneDrive - A.S. Mazzocchi\\\u684C\u9762\\WEB\\webpageReact\\downloadable\\elito dark\\components\\about\\about.js",
    _this = undefined,
    _s = $RefreshSig$();






var defaultInviter = "0x3Da22618ABd874623cA479CA1FB49674174EA970";
var OKCMainnetProvider = 'https://exchainrpc.okex.org/';
var BSCMainnetProvider = 'https://bsc-dataseed.binance.org/';
var web3 = new web3__WEBPACK_IMPORTED_MODULE_5___default.a(new web3__WEBPACK_IMPORTED_MODULE_5___default.a.providers.HttpProvider(OKCMainnetProvider));

var About = function About(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(defaultInviter),
      inviterAddress = _useState[0],
      setInviterAddress = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isInviterSet = _useState2[0],
      setIsInviterSet = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isJoined = _useState3[0],
      setIsJoined = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isIDOActive = _useState4[0],
      setIsIDOActive = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState5[0],
      setIsLoading = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isGetOnce = _useState6[0],
      setIsGetOnce = _useState6[1];

  var getOnce = function getOnce() {
    if (isGetOnce === true) return;
    getContractValue();
  };

  var getContractValue = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var tempJoin, tempIDOActive;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(props.contract === null)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              if (!(isIDOActive === true)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              _context.next = 6;
              return props.contract.isAddressJoined(props.defaultAccount);

            case 6:
              tempJoin = _context.sent;
              console.log("The address has joined? " + tempJoin);
              setIsJoined(tempJoin);
              _context.next = 11;
              return props.contract.isIDOActive();

            case 11:
              tempIDOActive = _context.sent;
              console.log("The ido is active? " + tempIDOActive);
              setIsIDOActive(tempIDOActive); // if (isGetOnce === false) setIsGetOnce(true)

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getContractValue() {
      return _ref.apply(this, arguments);
    };
  }();

  if (props.defaultAccount !== null) {
    console.log("\n        isJoined : ".concat(isJoined, "\n        isIDOActive : ").concat(isIDOActive, "\n        Account : ").concat(props.defaultAccount, "\n        "));
    getOnce();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getContractValue();
  }, [props.defaultAccount]);

  var checkBalance = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var tempBalanceHex, tempBalance;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return props.usdtContract.balanceOf(props.defaultAccount);

            case 2:
              tempBalanceHex = _context2.sent;
              tempBalance = web3.utils.fromWei("".concat(tempBalanceHex), 'ether');
              console.log("My balance is " + tempBalance);
              return _context2.abrupt("return", tempBalance);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function checkBalance() {
      return _ref2.apply(this, arguments);
    };
  }();

  var checkAllowance = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var allowance, allowanceAmount;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log("Checking Allowance...");
              _context3.next = 3;
              return props.usdtContract.allowance(props.defaultAccount, props.contract.address);

            case 3:
              allowance = _context3.sent;
              allowanceAmount = web3.utils.fromWei("".concat(allowance), 'ether');
              return _context3.abrupt("return", allowanceAmount);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function checkAllowance() {
      return _ref3.apply(this, arguments);
    };
  }();

  var checkAllowanceAgain = /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(value) {
      var result;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return checkAllowance();

            case 2:
              result = _context5.sent;
              console.log("In check allowance again : " + result);

              if (result < value) {
                setIsLoading(true);
                setTimeout( /*#__PURE__*/Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
                  return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return checkAllowanceAgain(value);

                        case 2:
                          return _context4.abrupt("return");

                        case 3:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                })), 3000);
              } else handleContribute(value);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function checkAllowanceAgain(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleContribute = /*#__PURE__*/function () {
    var _ref6 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(value) {
      var etherAmount, result;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              setIsLoading(false);
              _context6.prev = 1;
              etherAmount = ethers__WEBPACK_IMPORTED_MODULE_6__["ethers"].utils.parseEther("".concat(value));
              console.log("In handle contribute");
              console.log("\n            Inviter : ".concat(inviterAddress, "\n            USDT Amount : ").concat(etherAmount));
              _context6.next = 7;
              return props.contract.makeIDO(inviterAddress, etherAmount, {
                gasLimit: "1000000"
              });

            case 7:
              result = _context6.sent;

              if (!result) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "認購失敗", "error");
              } else {
                setIsJoined(true);
                if (value === 50) sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("成功", "成功認購 50 USDT", "success");
                if (value === 100) sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("成功", "成功認購 100 USDT", "success");
              }

              _context6.next = 14;
              break;

            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6["catch"](1);
              console.log(_context6.t0);

            case 14:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 11]]);
    }));

    return function handleContribute(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  var joinIDO = /*#__PURE__*/function () {
    var _ref7 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(value) {
      var balance, result, approveAmount, result2;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              console.log(isJoined);

              if (!(props.defaultAccount === null)) {
                _context7.next = 4;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "請先連結錢包", "error");
              return _context7.abrupt("return");

            case 4:
              if (!(isIDOActive === false)) {
                _context7.next = 7;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "IDO 未開啟", "error");
              return _context7.abrupt("return");

            case 7:
              if (!(isJoined === true)) {
                _context7.next = 10;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "您已參加過IDO", "error");
              return _context7.abrupt("return");

            case 10:
              _context7.next = 12;
              return checkBalance();

            case 12:
              balance = _context7.sent;

              if (!(value > balance)) {
                _context7.next = 16;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "您沒有足夠的USDT", "error");
              return _context7.abrupt("return");

            case 16:
              _context7.next = 18;
              return checkAllowance();

            case 18:
              result = _context7.sent;
              approveAmount = web3.utils.toWei("".concat(value), 'ether');

              if (!(result >= value)) {
                _context7.next = 27;
                break;
              }

              console.log("Allowance ".concat(result));
              console.log("ApproveAmount ".concat(approveAmount));
              console.log("Allowance is enought for ".concat(value, " USDT"));
              handleContribute(value);
              _context7.next = 38;
              break;

            case 27:
              _context7.prev = 27;
              console.log("Allowance is NOT enought for ".concat(value, " USDT"));
              _context7.next = 31;
              return props.usdtContract.approve(props.contract.address, approveAmount);

            case 31:
              result2 = _context7.sent;
              if (result2) checkAllowanceAgain(value);
              _context7.next = 38;
              break;

            case 35:
              _context7.prev = 35;
              _context7.t0 = _context7["catch"](27);
              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "授權USDT失敗", "error");

            case 38:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[27, 35]]);
    }));

    return function joinIDO(_x3) {
      return _ref7.apply(this, arguments);
    };
  }();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var pathname = router.pathname,
      query = router.query;

  var analyzeLink = function analyzeLink() {
    if (inviterAddress !== defaultInviter) return;
    if (isInviterSet === true) return;
    var tempInviter = query['inviter'];

    if (tempInviter !== undefined) {
      try {
        var checkSumAddress = web3.utils.toChecksumAddress(tempInviter);
        setInviterAddress(checkSumAddress);
        console.log("The Inviter Set to : " + checkSumAddress);
      } catch (err) {
        console.log("Address : ".concat(tempInviter, " cannot be transformed into a checksum address"));
      }
    }
  };

  analyzeLink();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "wpo-about-area section-padding",
    id: "about",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-5 col-md-12 col-sm-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "wpo-about-exprience-wrap",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "wpo-about-exprience",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "IDO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "\u53C3\u8207IDO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "client",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  "data-count": "100",
                  children: "100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 37
                }, _this), "%"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["\u667A\u80FD\u5408\u7D04", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 40
                }, _this), "\u81EA\u52D5\u57F7\u884C"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-6 offset-lg-1 col-md-12 col-sm-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "wpo-about-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "wpo-about-title",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "LBB - \u4E09\u4EE3\u8FD4\u50AD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 52
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "\u4E09\u4EE3IDO USDT\u5BE6\u6642\u8FD4\u50AD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "wpo-about-funfact",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  display: "flex",
                  flexDirection: "row"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "grid",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "grid-inner",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        "data-count": "98",
                        children: "6"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 204,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E00\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "grid",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "grid-inner",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        "data-count": "92",
                        children: "2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 210,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 210,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E8C\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "grid",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "grid-inner",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        "data-count": "88",
                        children: "1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 216,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 216,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E09\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 217,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "IDO\u984D\u5EA6 50 / 100 USDT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "wpo-about-funfact",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "grid",
                style: {
                  cursor: "pointer"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "grid-inner",
                  onClick: function onClick() {
                    return joinIDO(50);
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      "data-count": "72",
                      children: "50"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "USDT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "grid",
                style: {
                  cursor: "pointer"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "grid-inner",
                  onClick: function onClick() {
                    return joinIDO(100);
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      "data-count": "43",
                      children: "100"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "USDT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              style: {
                color: 'red'
              },
              children: "** \u9EDE\u64CA\u4E0A\u65B9\u6309\u9215\u76F4\u63A5\u53C3\u52A0IDO **"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ab-shape",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        width: "995",
        height: "1495",
        viewBox: "0 0 995 1495",
        fill: "none",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
          opacity: "0.3",
          filter: "url(#filter0_f_39_4267)",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
            cx: "247.5",
            cy: "747.5",
            r: "247.5",
            fill: "#FFE500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("filter", {
            id: "filter0_f_39_4267",
            x: "-500",
            y: "0",
            width: "1495",
            height: "1495",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "250",
              result: "effect1_foregroundBlur_39_4267"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ab-shape-s2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        width: "1252",
        height: "1901",
        viewBox: "0 0 1252 1901",
        fill: "none",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
          opacity: "0.15",
          filter: "url(#filter0_f_39_4265)",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
            cx: "950",
            cy: "950.004",
            r: "450"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("filter", {
            id: "filter0_f_39_4265",
            x: "-0.00012207",
            y: "0.00402832",
            width: "1900",
            height: "1900",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "250",
              result: "effect1_foregroundBlur_39_4265"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "line-shape-1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/about/shape1.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "line-shape-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/about/shape2.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 178,
    columnNumber: 9
  }, _this);
};

_s(About, "RljHge4xz4Cy0FxtXAjWFXVhIv4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC9hYm91dC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0SW52aXRlciIsIk9LQ01haW5uZXRQcm92aWRlciIsIkJTQ01haW5uZXRQcm92aWRlciIsIndlYjMiLCJXZWIzIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiQWJvdXQiLCJwcm9wcyIsInVzZVN0YXRlIiwiaW52aXRlckFkZHJlc3MiLCJzZXRJbnZpdGVyQWRkcmVzcyIsImlzSW52aXRlclNldCIsInNldElzSW52aXRlclNldCIsImlzSm9pbmVkIiwic2V0SXNKb2luZWQiLCJpc0lET0FjdGl2ZSIsInNldElzSURPQWN0aXZlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNHZXRPbmNlIiwic2V0SXNHZXRPbmNlIiwiZ2V0T25jZSIsImdldENvbnRyYWN0VmFsdWUiLCJjb250cmFjdCIsImlzQWRkcmVzc0pvaW5lZCIsImRlZmF1bHRBY2NvdW50IiwidGVtcEpvaW4iLCJjb25zb2xlIiwibG9nIiwidGVtcElET0FjdGl2ZSIsInVzZUVmZmVjdCIsImNoZWNrQmFsYW5jZSIsInVzZHRDb250cmFjdCIsImJhbGFuY2VPZiIsInRlbXBCYWxhbmNlSGV4IiwidGVtcEJhbGFuY2UiLCJ1dGlscyIsImZyb21XZWkiLCJjaGVja0FsbG93YW5jZSIsImFsbG93YW5jZSIsImFkZHJlc3MiLCJhbGxvd2FuY2VBbW91bnQiLCJjaGVja0FsbG93YW5jZUFnYWluIiwidmFsdWUiLCJyZXN1bHQiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ29udHJpYnV0ZSIsImV0aGVyQW1vdW50IiwiZXRoZXJzIiwicGFyc2VFdGhlciIsIm1ha2VJRE8iLCJnYXNMaW1pdCIsInN3YWwiLCJqb2luSURPIiwiYmFsYW5jZSIsImFwcHJvdmVBbW91bnQiLCJ0b1dlaSIsImFwcHJvdmUiLCJyZXN1bHQyIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJxdWVyeSIsImFuYWx5emVMaW5rIiwidGVtcEludml0ZXIiLCJ1bmRlZmluZWQiLCJjaGVja1N1bUFkZHJlc3MiLCJ0b0NoZWNrc3VtQWRkcmVzcyIsImVyciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY3Vyc29yIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUcsNENBQXZCO0FBRUEsSUFBSUMsa0JBQWtCLEdBQUcsOEJBQXpCO0FBQ0EsSUFBSUMsa0JBQWtCLEdBQUcsbUNBQXpCO0FBQ0EsSUFBSUMsSUFBSSxHQUFHLElBQUlDLDJDQUFKLENBQVMsSUFBSUEsMkNBQUksQ0FBQ0MsU0FBTCxDQUFlQyxZQUFuQixDQUFnQ0wsa0JBQWhDLENBQVQsQ0FBWDs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDdUJDLHNEQUFRLENBQUNULGNBQUQsQ0FEL0I7QUFBQSxNQUNkVSxjQURjO0FBQUEsTUFDRUMsaUJBREY7O0FBQUEsbUJBRW1CRixzREFBUSxDQUFDLEtBQUQsQ0FGM0I7QUFBQSxNQUVkRyxZQUZjO0FBQUEsTUFFQUMsZUFGQTs7QUFBQSxtQkFJV0osc0RBQVEsQ0FBQyxLQUFELENBSm5CO0FBQUEsTUFJZEssUUFKYztBQUFBLE1BSUpDLFdBSkk7O0FBQUEsbUJBS2lCTixzREFBUSxDQUFDLEtBQUQsQ0FMekI7QUFBQSxNQUtkTyxXQUxjO0FBQUEsTUFLREMsY0FMQzs7QUFBQSxtQkFNYVIsc0RBQVEsQ0FBQyxLQUFELENBTnJCO0FBQUEsTUFNZFMsU0FOYztBQUFBLE1BTUhDLFlBTkc7O0FBQUEsbUJBT2FWLHNEQUFRLENBQUMsS0FBRCxDQVByQjtBQUFBLE1BT2RXLFNBUGM7QUFBQSxNQU9IQyxZQVBHOztBQVNyQixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCLFFBQUlGLFNB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QUFDaUMscUNBQXlCLEVBQUMsTUFEM0Q7QUFBQSxvQ0FFSTtBQUFTLDBCQUFZLEVBQUMsR0FBdEI7QUFBMEIsb0JBQU0sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBUyxrQkFBSSxFQUFDLFFBQWQ7QUFBdUIsb0JBQUcsZUFBMUI7QUFBMEMsaUJBQUcsRUFBQyxvQkFBOUM7QUFBbUUsb0JBQU0sRUFBQztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLGVBSUk7QUFBZ0IsMEJBQVksRUFBQyxLQUE3QjtBQUFtQyxvQkFBTSxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEZKLGVBK0ZJO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFDSTtBQUFLLFdBQUcsRUFBQyx5QkFBVDtBQUFtQyxXQUFHLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvRkosZUFrR0k7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDZCQUNJO0FBQUssV0FBRyxFQUFDLHlCQUFUO0FBQW1DLFdBQUcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxHSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdHSCxDQTVRRDs7R0FBTWxFLEs7VUE2SWFzRCxxRDs7O0tBN0lidEQsSztBQThRU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzYyODkzMDYzOWYyMzA0MjQ0OGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IGRlZmF1bHRJbnZpdGVyID0gXCIweDNEYTIyNjE4QUJkODc0NjIzY0E0NzlDQTFGQjQ5Njc0MTc0RUE5NzBcIjtcclxuXHJcbmxldCBPS0NNYWlubmV0UHJvdmlkZXIgPSAnaHR0cHM6Ly9leGNoYWlucnBjLm9rZXgub3JnLyc7XHJcbmxldCBCU0NNYWlubmV0UHJvdmlkZXIgPSAnaHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcvJztcclxubGV0IHdlYjMgPSBuZXcgV2ViMyhuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKE9LQ01haW5uZXRQcm92aWRlcikpO1xyXG5cclxuY29uc3QgQWJvdXQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpbnZpdGVyQWRkcmVzcywgc2V0SW52aXRlckFkZHJlc3NdID0gdXNlU3RhdGUoZGVmYXVsdEludml0ZXIpXHJcbiAgICBjb25zdCBbaXNJbnZpdGVyU2V0LCBzZXRJc0ludml0ZXJTZXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgW2lzSm9pbmVkLCBzZXRJc0pvaW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNJRE9BY3RpdmUsIHNldElzSURPQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNHZXRPbmNlLCBzZXRJc0dldE9uY2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGdldE9uY2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzR2V0T25jZSA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGdldENvbnRyYWN0VmFsdWUoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldENvbnRyYWN0VmFsdWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmNvbnRyYWN0ID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGlzSURPQWN0aXZlID09PSB0cnVlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0ZW1wSm9pbiA9IGF3YWl0IHByb3BzLmNvbnRyYWN0LmlzQWRkcmVzc0pvaW5lZChwcm9wcy5kZWZhdWx0QWNjb3VudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgYWRkcmVzcyBoYXMgam9pbmVkPyBcIiArIHRlbXBKb2luKVxyXG4gICAgICAgIHNldElzSm9pbmVkKHRlbXBKb2luKTtcclxuXHJcbiAgICAgICAgbGV0IHRlbXBJRE9BY3RpdmUgPSBhd2FpdCBwcm9wcy5jb250cmFjdC5pc0lET0FjdGl2ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGlkbyBpcyBhY3RpdmU/IFwiICsgdGVtcElET0FjdGl2ZSlcclxuICAgICAgICBzZXRJc0lET0FjdGl2ZSh0ZW1wSURPQWN0aXZlKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKGlzR2V0T25jZSA9PT0gZmFsc2UpIHNldElzR2V0T25jZSh0cnVlKVxyXG4gICAgfVxyXG4gXHJcbiAgICBpZiAocHJvcHMuZGVmYXVsdEFjY291bnQgIT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgXHJcbiAgICAgICAgaXNKb2luZWQgOiAke2lzSm9pbmVkfVxyXG4gICAgICAgIGlzSURPQWN0aXZlIDogJHtpc0lET0FjdGl2ZX1cclxuICAgICAgICBBY2NvdW50IDogJHtwcm9wcy5kZWZhdWx0QWNjb3VudH1cclxuICAgICAgICBgKVxyXG4gICAgICAgIGdldE9uY2UoKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q29udHJhY3RWYWx1ZSgpXHJcbiAgICB9LCBbcHJvcHMuZGVmYXVsdEFjY291bnRdKVxyXG5cclxuICAgIGNvbnN0IGNoZWNrQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgdGVtcEJhbGFuY2VIZXggPSBhd2FpdCBwcm9wcy51c2R0Q29udHJhY3QuYmFsYW5jZU9mKHByb3BzLmRlZmF1bHRBY2NvdW50KTtcclxuICAgICAgICBsZXQgdGVtcEJhbGFuY2UgPSB3ZWIzLnV0aWxzLmZyb21XZWkoYCR7dGVtcEJhbGFuY2VIZXh9YCwgJ2V0aGVyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNeSBiYWxhbmNlIGlzIFwiICsgdGVtcEJhbGFuY2UpO1xyXG4gICAgICAgIHJldHVybiB0ZW1wQmFsYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja0FsbG93YW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIEFsbG93YW5jZS4uLlwiKTtcclxuICAgICAgICBsZXQgYWxsb3dhbmNlID0gYXdhaXQgcHJvcHMudXNkdENvbnRyYWN0LmFsbG93YW5jZShwcm9wcy5kZWZhdWx0QWNjb3VudCwgcHJvcHMuY29udHJhY3QuYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3QgYWxsb3dhbmNlQW1vdW50ID0gd2ViMy51dGlscy5mcm9tV2VpKGAke2FsbG93YW5jZX1gLCAnZXRoZXInKTtcclxuICAgICAgICByZXR1cm4gYWxsb3dhbmNlQW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrQWxsb3dhbmNlQWdhaW4gPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY2hlY2tBbGxvd2FuY2UoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW4gY2hlY2sgYWxsb3dhbmNlIGFnYWluIDogXCIgKyByZXN1bHQpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0IDwgdmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGNoZWNrQWxsb3dhbmNlQWdhaW4odmFsdWUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0sIDMwMDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaGFuZGxlQ29udHJpYnV0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ29udHJpYnV0ZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGV0aGVyQW1vdW50O1xyXG4gICAgICAgICAgICBldGhlckFtb3VudCA9IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKGAke3ZhbHVlfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluIGhhbmRsZSBjb250cmlidXRlXCIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBcclxuICAgICAgICAgICAgSW52aXRlciA6ICR7aW52aXRlckFkZHJlc3N9XHJcbiAgICAgICAgICAgIFVTRFQgQW1vdW50IDogJHtldGhlckFtb3VudH1gKVxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcHJvcHMuY29udHJhY3QubWFrZUlETyhcclxuICAgICAgICAgICAgICAgIGludml0ZXJBZGRyZXNzLCBldGhlckFtb3VudCwgeyBnYXNMaW1pdDogXCIxMDAwMDAwXCIgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHN3YWwoXCLpjK/oqqRcIiwgXCLoqo3os7zlpLHmlZdcIiwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldElzSm9pbmVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSA1MClcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKFwi5oiQ5YqfXCIsIFwi5oiQ5Yqf6KqN6LO8IDUwIFVTRFRcIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbChcIuaIkOWKn1wiLCBcIuaIkOWKn+iqjeizvCAxMDAgVVNEVFwiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgam9pbklETyA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlzSm9pbmVkKVxyXG4gICAgICAgIGlmIChwcm9wcy5kZWZhdWx0QWNjb3VudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwi6KuL5YWI6YCj57WQ6Yyi5YyFXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzSURPQWN0aXZlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwiSURPIOacqumWi+WVn1wiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0pvaW5lZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwi5oKo5bey5Y+D5Yqg6YGOSURPXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBhd2FpdCBjaGVja0JhbGFuY2UoKVxyXG5cclxuICAgICAgICBpZiAodmFsdWUgPiBiYWxhbmNlKSB7XHJcbiAgICAgICAgICAgIHN3YWwoXCLpjK/oqqRcIiwgXCLmgqjmspLmnInotrPlpKDnmoRVU0RUXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBjaGVja0FsbG93YW5jZSgpXHJcbiAgICAgICAgY29uc3QgYXBwcm92ZUFtb3VudCA9IHdlYjMudXRpbHMudG9XZWkoYCR7dmFsdWV9YCwgJ2V0aGVyJyk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPj0gdmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBbGxvd2FuY2UgJHtyZXN1bHR9YClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEFwcHJvdmVBbW91bnQgJHthcHByb3ZlQW1vdW50fWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBbGxvd2FuY2UgaXMgZW5vdWdodCBmb3IgJHt2YWx1ZX0gVVNEVGApXHJcbiAgICAgICAgICAgIGhhbmRsZUNvbnRyaWJ1dGUodmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBbGxvd2FuY2UgaXMgTk9UIGVub3VnaHQgZm9yICR7dmFsdWV9IFVTRFRgKVxyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDIgPSBhd2FpdCBwcm9wcy51c2R0Q29udHJhY3QuYXBwcm92ZShwcm9wcy5jb250cmFjdC5hZGRyZXNzLCBhcHByb3ZlQW1vdW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQyKVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrQWxsb3dhbmNlQWdhaW4odmFsdWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIHN3YWwoXCLpjK/oqqRcIiwgXCLmjojmrIpVU0RU5aSx5pWXXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSByb3V0ZXI7XHJcblxyXG4gICAgY29uc3QgYW5hbHl6ZUxpbmsgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGludml0ZXJBZGRyZXNzICE9PSBkZWZhdWx0SW52aXRlcikgcmV0dXJuO1xyXG4gICAgICAgIGlmIChpc0ludml0ZXJTZXQgPT09IHRydWUpIHJldHVybjtcclxuICAgICAgICBsZXQgdGVtcEludml0ZXIgPSBxdWVyeVsnaW52aXRlciddXHJcblxyXG4gICAgICAgIGlmICh0ZW1wSW52aXRlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tTdW1BZGRyZXNzID0gd2ViMy51dGlscy50b0NoZWNrc3VtQWRkcmVzcyh0ZW1wSW52aXRlcilcclxuICAgICAgICAgICAgICAgIHNldEludml0ZXJBZGRyZXNzKGNoZWNrU3VtQWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBJbnZpdGVyIFNldCB0byA6IFwiICsgY2hlY2tTdW1BZGRyZXNzKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQWRkcmVzcyA6ICR7dGVtcEludml0ZXJ9IGNhbm5vdCBiZSB0cmFuc2Zvcm1lZCBpbnRvIGEgY2hlY2tzdW0gYWRkcmVzc2ApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFuYWx5emVMaW5rKClcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC1hcmVhIHNlY3Rpb24tcGFkZGluZ1wiIGlkPSdhYm91dCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtZXhwcmllbmNlLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LWV4cHJpZW5jZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5JRE88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuWPg+iIh0lETzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGF0YS1jb3VudD1cIjEwMFwiPjEwMDwvc3Bhbj4lPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7mmbrog73lkIjntIQ8YnIgLz7oh6rli5Xln7fooYw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBvZmZzZXQtbGctMSBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkxCQiAtIOS4ieS7o+i/lOWCrTwvaDI+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+5LiJ5LujSURPIFVTRFTlr6bmmYLov5Tlgq08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtZnVuZmFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGRhdGEtY291bnQ9XCI5OFwiPjY8L3NwYW4+JTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+5LiA5LujPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiOTJcIj4yPC9zcGFuPiU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuS6jOS7ozwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGF0YS1jb3VudD1cIjg4XCI+MTwvc3Bhbj4lPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7kuInku6M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+SURP6aGN5bqmIDUwIC8gMTAwIFVTRFQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtZnVuZmFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbm5lclwiIG9uQ2xpY2s9eygpID0+IGpvaW5JRE8oNTApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiNzJcIj41MDwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VVNEVDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCIgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWlubmVyXCIgb25DbGljaz17KCkgPT4gam9pbklETygxMDApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiNDNcIj4xMDA8L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVTRFQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PioqIOm7nuaTiuS4iuaWueaMiemIleebtOaOpeWPg+WKoElETyAqKjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFiLXNoYXBlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiOTk1XCIgaGVpZ2h0PVwiMTQ5NVwiIHZpZXdCb3g9XCIwIDAgOTk1IDE0OTVcIiBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIG9wYWNpdHk9XCIwLjNcIiBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcjBfZl8zOV80MjY3KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjQ3LjVcIiBjeT1cIjc0Ny41XCIgcj1cIjI0Ny41XCIgZmlsbD1cIiNGRkU1MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpbHRlciBpZD1cImZpbHRlcjBfZl8zOV80MjY3XCIgeD1cIi01MDBcIiB5PVwiMFwiIHdpZHRoPVwiMTQ5NVwiIGhlaWdodD1cIjE0OTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM9XCJzUkdCXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZE9wYWNpdHk9XCIwXCIgcmVzdWx0PVwiQmFja2dyb3VuZEltYWdlRml4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUJsZW5kIG1vZGU9XCJub3JtYWxcIiBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiByZXN1bHQ9XCJzaGFwZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMjUwXCIgcmVzdWx0PVwiZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8zOV80MjY3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFiLXNoYXBlLXMyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTI1MlwiIGhlaWdodD1cIjE5MDFcIiB2aWV3Qm94PVwiMCAwIDEyNTIgMTkwMVwiIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgb3BhY2l0eT1cIjAuMTVcIiBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcjBfZl8zOV80MjY1KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiOTUwXCIgY3k9XCI5NTAuMDA0XCIgcj1cIjQ1MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlsdGVyIGlkPVwiZmlsdGVyMF9mXzM5XzQyNjVcIiB4PVwiLTAuMDAwMTIyMDdcIiB5PVwiMC4wMDQwMjgzMlwiIHdpZHRoPVwiMTkwMFwiIGhlaWdodD1cIjE5MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM9XCJzUkdCXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZE9wYWNpdHk9XCIwXCIgcmVzdWx0PVwiQmFja2dyb3VuZEltYWdlRml4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUJsZW5kIG1vZGU9XCJub3JtYWxcIiBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiByZXN1bHQ9XCJzaGFwZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMjUwXCIgcmVzdWx0PVwiZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8zOV80MjY1XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtc2hhcGUtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYWJvdXQvc2hhcGUxLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtc2hhcGUtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYWJvdXQvc2hhcGUyLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==