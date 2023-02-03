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
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Loading */ "./components/Loading.js");




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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
                _context.next = 4;
                return props.contract.isAddressJoined(props.defaultAccount);

              case 4:
                tempJoin = _context.sent;
                console.log("The address has joined? " + tempJoin);
                setIsJoined(tempJoin);
                _context.next = 9;
                return props.contract.isIDOActive();

              case 9:
                tempIDOActive = _context.sent;
                console.log("The ido is active? " + tempIDOActive);
                setIsIDOActive(tempIDOActive);
                console.log("\n            isJoined : ".concat(tempJoin, "\n            isIDOActive : ").concat(tempIDOActive, "\n            "));

              case 13:
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

    getContractValue();
  }, [props.defaultAccount, props.contract]);

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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: function onClick() {
              return setIsLoading(false);
            },
            children: isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "wpo-about-exprience-wrap",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "wpo-about-exprience",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "IDO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "\u53C3\u8207IDO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "client",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  "data-count": "100",
                  children: "100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 37
                }, _this), "%"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["\u667A\u80FD\u5408\u7D04", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 40
                }, _this), "\u81EA\u52D5\u57F7\u884C"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
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
                lineNumber: 194,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 52
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "\u4E09\u4EE3IDO USDT\u5BE6\u6642\u8FD4\u50AD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
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
                        lineNumber: 202,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 202,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E00\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
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
                        lineNumber: 208,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E8C\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 209,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
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
                        lineNumber: 214,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 214,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E09\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 213,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "IDO\u984D\u5EA6 50 / 100 USDT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
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
                      lineNumber: 225,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "USDT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
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
                      lineNumber: 231,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "USDT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              style: {
                color: 'red'
              },
              children: "** \u9EDE\u64CA\u4E0A\u65B9\u6309\u9215\u76F4\u63A5\u53C3\u52A0IDO **"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
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
            lineNumber: 244,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
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
              lineNumber: 249,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "250",
              result: "effect1_foregroundBlur_39_4267"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
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
            lineNumber: 259,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
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
              lineNumber: 264,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "250",
              result: "effect1_foregroundBlur_39_4265"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "line-shape-1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/about/shape1.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "line-shape-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/about/shape2.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC9hYm91dC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0SW52aXRlciIsIk9LQ01haW5uZXRQcm92aWRlciIsIkJTQ01haW5uZXRQcm92aWRlciIsIndlYjMiLCJXZWIzIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiQWJvdXQiLCJwcm9wcyIsInVzZVN0YXRlIiwiaW52aXRlckFkZHJlc3MiLCJzZXRJbnZpdGVyQWRkcmVzcyIsImlzSW52aXRlclNldCIsInNldElzSW52aXRlclNldCIsImlzSm9pbmVkIiwic2V0SXNKb2luZWQiLCJpc0lET0FjdGl2ZSIsInNldElzSURPQWN0aXZlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNHZXRPbmNlIiwic2V0SXNHZXRPbmNlIiwidXNlRWZmZWN0IiwiZ2V0Q29udHJhY3RWYWx1ZSIsImNvbnRyYWN0IiwiaXNBZGRyZXNzSm9pbmVkIiwiZGVmYXVsdEFjY291bnQiLCJ0ZW1wSm9pbiIsImNvbnNvbGUiLCJsb2ciLCJ0ZW1wSURPQWN0aXZlIiwiY2hlY2tCYWxhbmNlIiwidXNkdENvbnRyYWN0IiwiYmFsYW5jZU9mIiwidGVtcEJhbGFuY2VIZXgiLCJ0ZW1wQmFsYW5jZSIsInV0aWxzIiwiZnJvbVdlaSIsImNoZWNrQWxsb3dhbmNlIiwiYWxsb3dhbmNlIiwiYWRkcmVzcyIsImFsbG93YW5jZUFtb3VudCIsImNoZWNrQWxsb3dhbmNlQWdhaW4iLCJ2YWx1ZSIsInJlc3VsdCIsInNldFRpbWVvdXQiLCJoYW5kbGVDb250cmlidXRlIiwiZXRoZXJBbW91bnQiLCJldGhlcnMiLCJwYXJzZUV0aGVyIiwibWFrZUlETyIsImdhc0xpbWl0Iiwic3dhbCIsImpvaW5JRE8iLCJiYWxhbmNlIiwiYXBwcm92ZUFtb3VudCIsInRvV2VpIiwiYXBwcm92ZSIsInJlc3VsdDIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwiYW5hbHl6ZUxpbmsiLCJ0ZW1wSW52aXRlciIsInVuZGVmaW5lZCIsImNoZWNrU3VtQWRkcmVzcyIsInRvQ2hlY2tzdW1BZGRyZXNzIiwiZXJyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjdXJzb3IiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRyw0Q0FBdkI7QUFFQSxJQUFJQyxrQkFBa0IsR0FBRyw4QkFBekI7QUFDQSxJQUFJQyxrQkFBa0IsR0FBRyxtQ0FBekI7QUFDQSxJQUFJQyxJQUFJLEdBQUcsSUFBSUMsMkNBQUosQ0FBUyxJQUFJQSwyQ0FBSSxDQUFDQyxTQUFMLENBQWVDLFlBQW5CLENBQWdDTCxrQkFBaEMsQ0FBVCxDQUFYOztBQUVBLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUN1QkMsc0RBQVEsQ0FBQ1QsY0FBRCxDQUQvQjtBQUFBLE1BQ2RVLGNBRGM7QUFBQSxNQUNFQyxpQkFERjs7QUFBQSxtQkFFbUJGLHNEQUFRLENBQUMsS0FBRCxDQUYzQjtBQUFBLE1BRWRHLFlBRmM7QUFBQSxNQUVBQyxlQUZBOztBQUFBLG1CQUlXSixzREFBUSxDQUFDLEtBQUQsQ0FKbkI7QUFBQSxNQUlkSyxRQUpjO0FBQUEsTUFJSkMsV0FKSTs7QUFBQSxtQkFLaUJOLHNEQUFRLENBQUMsS0FBRCxDQUx6QjtBQUFBLE1BS2RPLFdBTGM7QUFBQSxNQUtEQyxjQUxDOztBQUFBLG1CQU1hUixzREFBUSxDQUFDLEtBQUQsQ0FOckI7QUFBQSxNQU1kUyxTQU5jO0FBQUEsTUFNSEMsWUFORzs7QUFBQSxtQkFPYVYsc0RBQVEsQ0FBQyxLQUFELENBUHJCO0FBQUEsTUFPZFcsU0FQYztBQUFBLE1BT0hDLFlBUEc7O0FBU3JCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxnQkFBZ0I7QUFBQSwwWEFBRztBQUFB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QUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHSTtBQUFTLGtCQUFJLEVBQUMsUUFBZDtBQUF1QixvQkFBRyxlQUExQjtBQUEwQyxpQkFBRyxFQUFDLG9CQUE5QztBQUFtRSxvQkFBTSxFQUFDO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosZUFJSTtBQUFnQiwwQkFBWSxFQUFDLEtBQTdCO0FBQW1DLG9CQUFNLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2RkosZUFzR0k7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDZCQUNJO0FBQUssV0FBRyxFQUFDLHlCQUFUO0FBQW1DLFdBQUcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRHSixlQXlHSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsNkJBQ0k7QUFBSyxXQUFHLEVBQUMseUJBQVQ7QUFBbUMsV0FBRyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBK0dILENBelFEOztHQUFNakUsSztVQW1JYXFELHFEOzs7S0FuSWJyRCxLO0FBMlFTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMTBlODk2OGY2MGFiZmYxNzEwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJztcclxuXHJcbmNvbnN0IGRlZmF1bHRJbnZpdGVyID0gXCIweDNEYTIyNjE4QUJkODc0NjIzY0E0NzlDQTFGQjQ5Njc0MTc0RUE5NzBcIjtcclxuXHJcbmxldCBPS0NNYWlubmV0UHJvdmlkZXIgPSAnaHR0cHM6Ly9leGNoYWlucnBjLm9rZXgub3JnLyc7XHJcbmxldCBCU0NNYWlubmV0UHJvdmlkZXIgPSAnaHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcvJztcclxubGV0IHdlYjMgPSBuZXcgV2ViMyhuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKE9LQ01haW5uZXRQcm92aWRlcikpO1xyXG5cclxuY29uc3QgQWJvdXQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpbnZpdGVyQWRkcmVzcywgc2V0SW52aXRlckFkZHJlc3NdID0gdXNlU3RhdGUoZGVmYXVsdEludml0ZXIpXHJcbiAgICBjb25zdCBbaXNJbnZpdGVyU2V0LCBzZXRJc0ludml0ZXJTZXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgW2lzSm9pbmVkLCBzZXRJc0pvaW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNJRE9BY3RpdmUsIHNldElzSURPQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNHZXRPbmNlLCBzZXRJc0dldE9uY2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ2V0Q29udHJhY3RWYWx1ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLmNvbnRyYWN0ID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcEpvaW4gPSBhd2FpdCBwcm9wcy5jb250cmFjdC5pc0FkZHJlc3NKb2luZWQocHJvcHMuZGVmYXVsdEFjY291bnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBhZGRyZXNzIGhhcyBqb2luZWQ/IFwiICsgdGVtcEpvaW4pXHJcbiAgICAgICAgICAgIHNldElzSm9pbmVkKHRlbXBKb2luKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZW1wSURPQWN0aXZlID0gYXdhaXQgcHJvcHMuY29udHJhY3QuaXNJRE9BY3RpdmUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgaWRvIGlzIGFjdGl2ZT8gXCIgKyB0ZW1wSURPQWN0aXZlKVxyXG4gICAgICAgICAgICBzZXRJc0lET0FjdGl2ZSh0ZW1wSURPQWN0aXZlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICBpc0pvaW5lZCA6ICR7dGVtcEpvaW59XHJcbiAgICAgICAgICAgIGlzSURPQWN0aXZlIDogJHt0ZW1wSURPQWN0aXZlfVxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldENvbnRyYWN0VmFsdWUoKVxyXG4gICAgfSwgW3Byb3BzLmRlZmF1bHRBY2NvdW50LCBwcm9wcy5jb250cmFjdF0pXHJcblxyXG4gICAgY29uc3QgY2hlY2tCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCB0ZW1wQmFsYW5jZUhleCA9IGF3YWl0IHByb3BzLnVzZHRDb250cmFjdC5iYWxhbmNlT2YocHJvcHMuZGVmYXVsdEFjY291bnQpO1xyXG4gICAgICAgIGxldCB0ZW1wQmFsYW5jZSA9IHdlYjMudXRpbHMuZnJvbVdlaShgJHt0ZW1wQmFsYW5jZUhleH1gLCAnZXRoZXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk15IGJhbGFuY2UgaXMgXCIgKyB0ZW1wQmFsYW5jZSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBCYWxhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrQWxsb3dhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tpbmcgQWxsb3dhbmNlLi4uXCIpO1xyXG4gICAgICAgIGxldCBhbGxvd2FuY2UgPSBhd2FpdCBwcm9wcy51c2R0Q29udHJhY3QuYWxsb3dhbmNlKHByb3BzLmRlZmF1bHRBY2NvdW50LCBwcm9wcy5jb250cmFjdC5hZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBhbGxvd2FuY2VBbW91bnQgPSB3ZWIzLnV0aWxzLmZyb21XZWkoYCR7YWxsb3dhbmNlfWAsICdldGhlcicpO1xyXG4gICAgICAgIHJldHVybiBhbGxvd2FuY2VBbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tBbGxvd2FuY2VBZ2FpbiA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBjaGVja0FsbG93YW5jZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbiBjaGVjayBhbGxvd2FuY2UgYWdhaW4gOiBcIiArIHJlc3VsdCk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgY2hlY2tBbGxvd2FuY2VBZ2Fpbih2YWx1ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSwgMzAwMClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBoYW5kbGVDb250cmlidXRlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDb250cmlidXRlID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZXRoZXJBbW91bnQ7XHJcbiAgICAgICAgICAgIGV0aGVyQW1vdW50ID0gZXRoZXJzLnV0aWxzLnBhcnNlRXRoZXIoYCR7dmFsdWV9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW4gaGFuZGxlIGNvbnRyaWJ1dGVcIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFxyXG4gICAgICAgICAgICBJbnZpdGVyIDogJHtpbnZpdGVyQWRkcmVzc31cclxuICAgICAgICAgICAgVVNEVCBBbW91bnQgOiAke2V0aGVyQW1vdW50fWApXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBwcm9wcy5jb250cmFjdC5tYWtlSURPKFxyXG4gICAgICAgICAgICAgICAgaW52aXRlckFkZHJlc3MsIGV0aGVyQW1vdW50LCB7IGdhc0xpbWl0OiBcIjEwMDAwMDBcIiB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgc3dhbChcIumMr+iqpFwiLCBcIuiqjeizvOWkseaVl1wiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNKb2luZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IDUwKVxyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoXCLmiJDlip9cIiwgXCLmiJDlip/oqo3os7wgNTAgVVNEVFwiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IDEwMClcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKFwi5oiQ5YqfXCIsIFwi5oiQ5Yqf6KqN6LO8IDEwMCBVU0RUXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBqb2luSURPID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXNKb2luZWQpXHJcbiAgICAgICAgaWYgKHByb3BzLmRlZmF1bHRBY2NvdW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHN3YWwoXCLpjK/oqqRcIiwgXCLoq4vlhYjpgKPntZDpjKLljIVcIiwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNJRE9BY3RpdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHN3YWwoXCLpjK/oqqRcIiwgXCJJRE8g5pyq6ZaL5ZWfXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzSm9pbmVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHN3YWwoXCLpjK/oqqRcIiwgXCLmgqjlt7Llj4PliqDpgY5JRE9cIiwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmFsYW5jZSA9IGF3YWl0IGNoZWNrQmFsYW5jZSgpXHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA+IGJhbGFuY2UpIHtcclxuICAgICAgICAgICAgc3dhbChcIumMr+iqpFwiLCBcIuaCqOaykuaciei2s+WkoOeahFVTRFRcIiwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNoZWNrQWxsb3dhbmNlKClcclxuICAgICAgICBjb25zdCBhcHByb3ZlQW1vdW50ID0gd2ViMy51dGlscy50b1dlaShgJHt2YWx1ZX1gLCAnZXRoZXInKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCA+PSB2YWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEFsbG93YW5jZSAke3Jlc3VsdH1gKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQXBwcm92ZUFtb3VudCAke2FwcHJvdmVBbW91bnR9YClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEFsbG93YW5jZSBpcyBlbm91Z2h0IGZvciAke3ZhbHVlfSBVU0RUYClcclxuICAgICAgICAgICAgaGFuZGxlQ29udHJpYnV0ZSh2YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEFsbG93YW5jZSBpcyBOT1QgZW5vdWdodCBmb3IgJHt2YWx1ZX0gVVNEVGApXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0MiA9IGF3YWl0IHByb3BzLnVzZHRDb250cmFjdC5hcHByb3ZlKHByb3BzLmNvbnRyYWN0LmFkZHJlc3MsIGFwcHJvdmVBbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdDIpXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tBbGxvd2FuY2VBZ2Fpbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgc3dhbChcIumMr+iqpFwiLCBcIuaOiOasilVTRFTlpLHmlZdcIiwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHJvdXRlcjtcclxuXHJcbiAgICBjb25zdCBhbmFseXplTGluayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaW52aXRlckFkZHJlc3MgIT09IGRlZmF1bHRJbnZpdGVyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGlzSW52aXRlclNldCA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB0ZW1wSW52aXRlciA9IHF1ZXJ5WydpbnZpdGVyJ11cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGVtcEludml0ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrU3VtQWRkcmVzcyA9IHdlYjMudXRpbHMudG9DaGVja3N1bUFkZHJlc3ModGVtcEludml0ZXIpXHJcbiAgICAgICAgICAgICAgICBzZXRJbnZpdGVyQWRkcmVzcyhjaGVja1N1bUFkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgSW52aXRlciBTZXQgdG8gOiBcIiArIGNoZWNrU3VtQWRkcmVzcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEFkZHJlc3MgOiAke3RlbXBJbnZpdGVyfSBjYW5ub3QgYmUgdHJhbnNmb3JtZWQgaW50byBhIGNoZWNrc3VtIGFkZHJlc3NgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhbmFseXplTGluaygpXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtYXJlYSBzZWN0aW9uLXBhZGRpbmdcIiBpZD0nYWJvdXQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldElzTG9hZGluZyhmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC1leHByaWVuY2Utd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtZXhwcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPklETzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5Y+D6IiHSURPPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiMTAwXCI+MTAwPC9zcGFuPiU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuaZuuiDveWQiOe0hDxiciAvPuiHquWLleWft+ihjDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IG9mZnNldC1sZy0xIGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+TEJCIC0g5LiJ5Luj6L+U5YKtPC9oMj48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT7kuInku6NJRE8gVVNEVOWvpuaZgui/lOWCrTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC1mdW5mYWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGF0YS1jb3VudD1cIjk4XCI+Njwvc3Bhbj4lPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7kuIDku6M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGRhdGEtY291bnQ9XCI5MlwiPjI8L3NwYW4+JTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+5LqM5LujPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiODhcIj4xPC9zcGFuPiU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuS4ieS7ozwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5JRE/poY3luqYgNTAgLyAxMDAgVVNEVDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC1mdW5mYWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCIgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWlubmVyXCIgb25DbGljaz17KCkgPT4gam9pbklETyg1MCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGRhdGEtY291bnQ9XCI3MlwiPjUwPC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5VU0RUPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaW5uZXJcIiBvbkNsaWNrPXsoKSA9PiBqb2luSURPKDEwMCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGRhdGEtY291bnQ9XCI0M1wiPjEwMDwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VVNEVDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Kiog6bue5pOK5LiK5pa55oyJ6YiV55u05o6l5Y+D5YqgSURPICoqPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWItc2hhcGVcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI5OTVcIiBoZWlnaHQ9XCIxNDk1XCIgdmlld0JveD1cIjAgMCA5OTUgMTQ5NVwiIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgb3BhY2l0eT1cIjAuM1wiIGZpbHRlcj1cInVybCgjZmlsdGVyMF9mXzM5XzQyNjcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIyNDcuNVwiIGN5PVwiNzQ3LjVcIiByPVwiMjQ3LjVcIiBmaWxsPVwiI0ZGRTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlsdGVyIGlkPVwiZmlsdGVyMF9mXzM5XzQyNjdcIiB4PVwiLTUwMFwiIHk9XCIwXCIgd2lkdGg9XCIxNDk1XCIgaGVpZ2h0PVwiMTQ5NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVycz1cInNSR0JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUZsb29kIGZsb29kT3BhY2l0eT1cIjBcIiByZXN1bHQ9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlQmxlbmQgbW9kZT1cIm5vcm1hbFwiIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cIkJhY2tncm91bmRJbWFnZUZpeFwiIHJlc3VsdD1cInNoYXBlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCIyNTBcIiByZXN1bHQ9XCJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzM5XzQyNjdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpbHRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWItc2hhcGUtczJcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMjUyXCIgaGVpZ2h0PVwiMTkwMVwiIHZpZXdCb3g9XCIwIDAgMTI1MiAxOTAxXCIgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBvcGFjaXR5PVwiMC4xNVwiIGZpbHRlcj1cInVybCgjZmlsdGVyMF9mXzM5XzQyNjUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI5NTBcIiBjeT1cIjk1MC4wMDRcIiByPVwiNDUwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJmaWx0ZXIwX2ZfMzlfNDI2NVwiIHg9XCItMC4wMDAxMjIwN1wiIHk9XCIwLjAwNDAyODMyXCIgd2lkdGg9XCIxOTAwXCIgaGVpZ2h0PVwiMTkwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVycz1cInNSR0JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUZsb29kIGZsb29kT3BhY2l0eT1cIjBcIiByZXN1bHQ9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlQmxlbmQgbW9kZT1cIm5vcm1hbFwiIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cIkJhY2tncm91bmRJbWFnZUZpeFwiIHJlc3VsdD1cInNoYXBlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCIyNTBcIiByZXN1bHQ9XCJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzM5XzQyNjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpbHRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS1zaGFwZS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9hYm91dC9zaGFwZTEucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS1zaGFwZS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9hYm91dC9zaGFwZTIucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiXSwic291cmNlUm9vdCI6IiJ9