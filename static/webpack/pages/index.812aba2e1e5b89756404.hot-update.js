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
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\Sam Lin\\OneDrive - A.S. Mazzocchi\\\u684C\u9762\\WEB\\webpageReact\\downloadable\\elito dark\\components\\about\\about.js",
    _this = undefined,
    _s = $RefreshSig$();





var defaultInviter = "0x3Da22618ABd874623cA479CA1FB49674174EA970";

var About = function About(props) {
  _s();

  console.log(props);

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

  var checkBalance = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var tempBalanceHex, tempBalance;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return props.usdtContract.balanceOf(props.defaultAccount);

            case 2:
              tempBalanceHex = _context.sent;
              tempBalance = props.web3.utils.fromWei("".concat(tempBalanceHex), 'ether');
              console.log("My balance is " + tempBalance);
              return _context.abrupt("return", tempBalance);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkBalance() {
      return _ref.apply(this, arguments);
    };
  }();

  var joinIDO = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(value) {
      var balance;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(isJoined);

              if (!(props.defaultAccount === null)) {
                _context2.next = 4;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "請先連結錢包", "error");
              return _context2.abrupt("return");

            case 4:
              if (!(isIDOActive === false)) {
                _context2.next = 7;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "IDO 未開啟", "error");
              return _context2.abrupt("return");

            case 7:
              if (!(isJoined === true)) {
                _context2.next = 10;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "您已參加過IDO", "error");
              return _context2.abrupt("return");

            case 10:
              _context2.next = 12;
              return checkBalance();

            case 12:
              balance = _context2.sent;
              console.log("The balance is " + balance);
              setIsJoined(true);
              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("成功", "".concat(value, " USDT \u6210\u529F\u52A0\u5165 LBB"), "success");
              return _context2.abrupt("return");

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function joinIDO(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var pathname = router.pathname,
      query = router.query;

  var analyzeLink = function analyzeLink() {
    if (inviterAddress !== defaultInviter) return;
    if (isInviterSet === true) return;
    var tempInviter = query['inviter'];

    if (tempInviter !== undefined) {
      setInviterAddress(tempInviter);
      console.log("The Inviter Set to : " + tempInviter);
    }
  };

  var getContractValue = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var tempJoin, tempIDOActive;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(props.contract === null)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.next = 4;
              return props.contract.isAddressJoined(props.defaultAccount);

            case 4:
              tempJoin = _context3.sent;
              console.log("The address has joined? " + tempJoin);
              setIsJoined(tempJoin);
              _context3.next = 9;
              return props.contract.isIDOActive();

            case 9:
              tempIDOActive = _context3.sent;
              setIsIDOActive(tempIDOActive);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getContractValue() {
      return _ref3.apply(this, arguments);
    };
  }();

  analyzeLink();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (props.defaultAccount !== null) {
      getContractValue();
    }
  }, [props.defaultAccount]);
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
                lineNumber: 89,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "\u53C3\u8207IDO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "client",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  "data-count": "100",
                  children: "100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 37
                }, _this), "%"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["\u667A\u80FD\u5408\u7D04", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 40
                }, _this), "\u81EA\u52D5\u57F7\u884C"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
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
                lineNumber: 101,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 52
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "\u4E09\u4EE3IDO USDT\u5BE6\u6642\u8FD4\u50AD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
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
                        lineNumber: 109,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E00\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
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
                        lineNumber: 115,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E8C\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
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
                        lineNumber: 121,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E09\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "IDO\u984D\u5EA6 50 / 100 USDT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
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
                      lineNumber: 132,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "USDT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
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
                      lineNumber: 138,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "USDT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              style: {
                color: 'red'
              },
              children: "** \u9EDE\u64CA\u4E0A\u65B9\u6309\u9215\u76F4\u63A5\u53C3\u52A0IDO **"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
            lineNumber: 151,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
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
              lineNumber: 156,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "250",
              result: "effect1_foregroundBlur_39_4267"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
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
            lineNumber: 166,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
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
              lineNumber: 171,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "250",
              result: "effect1_foregroundBlur_39_4265"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "line-shape-1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/about/shape1.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "line-shape-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/about/shape2.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 9
  }, _this);
};

_s(About, "cg/yFzoey1g2i2TuzUvUxQ4ZMUo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC9hYm91dC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0SW52aXRlciIsIkFib3V0IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJpbnZpdGVyQWRkcmVzcyIsInNldEludml0ZXJBZGRyZXNzIiwiaXNJbnZpdGVyU2V0Iiwic2V0SXNJbnZpdGVyU2V0IiwiaXNKb2luZWQiLCJzZXRJc0pvaW5lZCIsImlzSURPQWN0aXZlIiwic2V0SXNJRE9BY3RpdmUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjaGVja0JhbGFuY2UiLCJ1c2R0Q29udHJhY3QiLCJiYWxhbmNlT2YiLCJkZWZhdWx0QWNjb3VudCIsInRlbXBCYWxhbmNlSGV4IiwidGVtcEJhbGFuY2UiLCJ3ZWIzIiwidXRpbHMiLCJmcm9tV2VpIiwiam9pbklETyIsInZhbHVlIiwic3dhbCIsImJhbGFuY2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwiYW5hbHl6ZUxpbmsiLCJ0ZW1wSW52aXRlciIsInVuZGVmaW5lZCIsImdldENvbnRyYWN0VmFsdWUiLCJjb250cmFjdCIsImlzQWRkcmVzc0pvaW5lZCIsInRlbXBKb2luIiwidGVtcElET0FjdGl2ZSIsInVzZUVmZmVjdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY3Vyc29yIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGNBQWMsR0FBRyw0Q0FBdkI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3JCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjs7QUFEcUIsa0JBRXVCRyxzREFBUSxDQUFDTCxjQUFELENBRi9CO0FBQUEsTUFFZE0sY0FGYztBQUFBLE1BRUVDLGlC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QztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxHSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdHSCxDQW5MRDs7R0FBTTVDLEs7VUF5Q2E2QixxRDs7O0tBekNiN0IsSztBQXFMU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODEyYWJhMmUxZTViODk3NTY0MDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5jb25zdCBkZWZhdWx0SW52aXRlciA9IFwiMHgzRGEyMjYxOEFCZDg3NDYyM2NBNDc5Q0ExRkI0OTY3NDE3NEVBOTcwXCI7XHJcblxyXG5jb25zdCBBYm91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICBjb25zdCBbaW52aXRlckFkZHJlc3MsIHNldEludml0ZXJBZGRyZXNzXSA9IHVzZVN0YXRlKGRlZmF1bHRJbnZpdGVyKVxyXG4gICAgY29uc3QgW2lzSW52aXRlclNldCwgc2V0SXNJbnZpdGVyU2V0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtpc0pvaW5lZCwgc2V0SXNKb2luZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzSURPQWN0aXZlLCBzZXRJc0lET0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgdGVtcEJhbGFuY2VIZXggPSBhd2FpdCBwcm9wcy51c2R0Q29udHJhY3QuYmFsYW5jZU9mKHByb3BzLmRlZmF1bHRBY2NvdW50KTtcclxuICAgICAgICBsZXQgdGVtcEJhbGFuY2UgPSBwcm9wcy53ZWIzLnV0aWxzLmZyb21XZWkoYCR7dGVtcEJhbGFuY2VIZXh9YCwgJ2V0aGVyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNeSBiYWxhbmNlIGlzIFwiICsgdGVtcEJhbGFuY2UpO1xyXG4gICAgICAgIHJldHVybiB0ZW1wQmFsYW5jZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3Qgam9pbklETyA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlzSm9pbmVkKVxyXG4gICAgICAgIGlmIChwcm9wcy5kZWZhdWx0QWNjb3VudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwi6KuL5YWI6YCj57WQ6Yyi5YyFXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzSURPQWN0aXZlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwiSURPIOacqumWi+WVn1wiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0pvaW5lZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwi5oKo5bey5Y+D5Yqg6YGOSURPXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBhd2FpdCBjaGVja0JhbGFuY2UoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGJhbGFuY2UgaXMgXCIgKyBiYWxhbmNlKVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldElzSm9pbmVkKHRydWUpXHJcbiAgICAgICAgc3dhbChcIuaIkOWKn1wiLCBgJHt2YWx1ZX0gVVNEVCDmiJDlip/liqDlhaUgTEJCYCwgXCJzdWNjZXNzXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHJvdXRlcjtcclxuXHJcbiAgICBjb25zdCBhbmFseXplTGluayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaW52aXRlckFkZHJlc3MgIT09IGRlZmF1bHRJbnZpdGVyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGlzSW52aXRlclNldCA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB0ZW1wSW52aXRlciA9IHF1ZXJ5WydpbnZpdGVyJ11cclxuXHJcbiAgICAgICAgaWYgKHRlbXBJbnZpdGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2V0SW52aXRlckFkZHJlc3ModGVtcEludml0ZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBJbnZpdGVyIFNldCB0byA6IFwiICsgdGVtcEludml0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRDb250cmFjdFZhbHVlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5jb250cmFjdCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdGVtcEpvaW4gPSBhd2FpdCBwcm9wcy5jb250cmFjdC5pc0FkZHJlc3NKb2luZWQocHJvcHMuZGVmYXVsdEFjY291bnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGFkZHJlc3MgaGFzIGpvaW5lZD8gXCIgKyB0ZW1wSm9pbilcclxuICAgICAgICBzZXRJc0pvaW5lZCh0ZW1wSm9pbik7XHJcblxyXG4gICAgICAgIGxldCB0ZW1wSURPQWN0aXZlID0gYXdhaXQgcHJvcHMuY29udHJhY3QuaXNJRE9BY3RpdmUoKTtcclxuICAgICAgICBzZXRJc0lET0FjdGl2ZSh0ZW1wSURPQWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXplTGluaygpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuZGVmYXVsdEFjY291bnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZ2V0Q29udHJhY3RWYWx1ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLmRlZmF1bHRBY2NvdW50XSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC1hcmVhIHNlY3Rpb24tcGFkZGluZ1wiIGlkPSdhYm91dCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtZXhwcmllbmNlLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LWV4cHJpZW5jZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5JRE88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuWPg+iIh0lETzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGF0YS1jb3VudD1cIjEwMFwiPjEwMDwvc3Bhbj4lPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7mmbrog73lkIjntIQ8YnIgLz7oh6rli5Xln7fooYw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBvZmZzZXQtbGctMSBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkxCQiAtIOS4ieS7o+i/lOWCrTwvaDI+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+5LiJ5LujSURPIFVTRFTlr6bmmYLov5Tlgq08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtZnVuZmFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGRhdGEtY291bnQ9XCI5OFwiPjY8L3NwYW4+JTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+5LiA5LujPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiOTJcIj4yPC9zcGFuPiU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuS6jOS7ozwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGF0YS1jb3VudD1cIjg4XCI+MTwvc3Bhbj4lPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7kuInku6M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+SURP6aGN5bqmIDUwIC8gMTAwIFVTRFQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtZnVuZmFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbm5lclwiIG9uQ2xpY2s9eygpID0+IGpvaW5JRE8oNTApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiNzJcIj41MDwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VVNEVDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCIgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWlubmVyXCIgb25DbGljaz17KCkgPT4gam9pbklETygxMDApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiNDNcIj4xMDA8L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVTRFQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PioqIOm7nuaTiuS4iuaWueaMiemIleebtOaOpeWPg+WKoElETyAqKjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFiLXNoYXBlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiOTk1XCIgaGVpZ2h0PVwiMTQ5NVwiIHZpZXdCb3g9XCIwIDAgOTk1IDE0OTVcIiBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIG9wYWNpdHk9XCIwLjNcIiBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcjBfZl8zOV80MjY3KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjQ3LjVcIiBjeT1cIjc0Ny41XCIgcj1cIjI0Ny41XCIgZmlsbD1cIiNGRkU1MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpbHRlciBpZD1cImZpbHRlcjBfZl8zOV80MjY3XCIgeD1cIi01MDBcIiB5PVwiMFwiIHdpZHRoPVwiMTQ5NVwiIGhlaWdodD1cIjE0OTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM9XCJzUkdCXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZE9wYWNpdHk9XCIwXCIgcmVzdWx0PVwiQmFja2dyb3VuZEltYWdlRml4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUJsZW5kIG1vZGU9XCJub3JtYWxcIiBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiByZXN1bHQ9XCJzaGFwZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMjUwXCIgcmVzdWx0PVwiZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8zOV80MjY3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFiLXNoYXBlLXMyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTI1MlwiIGhlaWdodD1cIjE5MDFcIiB2aWV3Qm94PVwiMCAwIDEyNTIgMTkwMVwiIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgb3BhY2l0eT1cIjAuMTVcIiBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcjBfZl8zOV80MjY1KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiOTUwXCIgY3k9XCI5NTAuMDA0XCIgcj1cIjQ1MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlsdGVyIGlkPVwiZmlsdGVyMF9mXzM5XzQyNjVcIiB4PVwiLTAuMDAwMTIyMDdcIiB5PVwiMC4wMDQwMjgzMlwiIHdpZHRoPVwiMTkwMFwiIGhlaWdodD1cIjE5MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM9XCJzUkdCXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZE9wYWNpdHk9XCIwXCIgcmVzdWx0PVwiQmFja2dyb3VuZEltYWdlRml4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUJsZW5kIG1vZGU9XCJub3JtYWxcIiBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiByZXN1bHQ9XCJzaGFwZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMjUwXCIgcmVzdWx0PVwiZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8zOV80MjY1XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtc2hhcGUtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYWJvdXQvc2hhcGUxLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtc2hhcGUtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYWJvdXQvc2hhcGUyLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==