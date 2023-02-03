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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Sam Lin\\OneDrive - A.S. Mazzocchi\\\u684C\u9762\\WEB\\webpageReact\\downloadable\\elito dark\\components\\about\\about.js",
    _this = undefined,
    _s = $RefreshSig$();





var defaultInviter = "0x3Da22618ABd874623cA479CA1FB49674174EA970";

var About = function About(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultInviter),
      inviterAddress = _useState[0],
      setInviterAddress = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isInviterSet = _useState2[0],
      setIsInviterSet = _useState2[1];

  var joinIDO = function joinIDO(value) {
    if (props.defaultAccount === null) {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("錯誤", "請先連結錢包", "error");
      return;
    }

    sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("成功", "".concat(value, " USDT \u6210\u529F\u52A0\u5165 LBB"), "success");
    return;
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
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
                lineNumber: 43,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "\u53C3\u8207IDO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "client",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  "data-count": "100",
                  children: "100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 37
                }, _this), "%"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["\u667A\u80FD\u5408\u7D04", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 40
                }, _this), "\u81EA\u52D5\u57F7\u884C"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
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
                lineNumber: 55,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 52
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "\u4E09\u4EE3IDO USDT\u5BE6\u6642\u8FD4\u50AD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
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
                        lineNumber: 63,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E00\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
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
                        lineNumber: 69,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E8C\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
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
                        lineNumber: 75,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E09\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "IDO\u984D\u5EA6 50 / 100 USDT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
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
                      lineNumber: 86,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "USDT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
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
                      lineNumber: 92,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "USDT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              style: {
                color: 'red'
              },
              children: "** \u9EDE\u64CA\u4E0A\u65B9\u6309\u9215\u76F4\u63A5\u53C3\u52A0IDO **"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
            lineNumber: 105,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
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
              lineNumber: 110,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "250",
              result: "effect1_foregroundBlur_39_4267"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
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
            lineNumber: 120,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
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
              lineNumber: 125,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "250",
              result: "effect1_foregroundBlur_39_4265"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "line-shape-1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/about/shape1.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "line-shape-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/about/shape2.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, _this);
};

_s(About, "W0vkSRrfmcautv5ub5Oq5RLTwYs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC9hYm91dC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0SW52aXRlciIsIkFib3V0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImludml0ZXJBZGRyZXNzIiwic2V0SW52aXRlckFkZHJlc3MiLCJpc0ludml0ZXJTZXQiLCJzZXRJc0ludml0ZXJTZXQiLCJqb2luSURPIiwidmFsdWUiLCJkZWZhdWx0QWNjb3VudCIsInN3YWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwiYW5hbHl6ZUxpbmsiLCJ0ZW1wSW52aXRlciIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImN1cnNvciIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsY0FBYyxHQUFHLDRDQUF2Qjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDdUJDLHNEQUFRLENBQUNILGNBQUQsQ0FEL0I7QUFBQSxNQUNkSSxjQURjO0FBQUEsTUFDRUMsaUJBREY7O0FBQUEsbUJBRW1CRixzREFBUSxDQUFDLEtBQUQsQ0FGM0I7QUFBQSxNQUVkRyxZQUZjO0FBQUEsTUFFQUMsZUFGQTs7QUFJckIsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCLFFBQUlQLEtBQUssQ0FBQ1EsY0FBTixLQUF5QixJQUE3QixFQUFtQztBQUMvQkMsdURBQUksQ0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixPQUFqQixDQUFKO0FBQ0E7QUFDSDs7QUFDREEscURBQUksQ0FBQyxJQUFELFlBQVVGLEtBQVYseUNBQWlDLFNBQWpDLENBQUo7QUFDQTtBQUNILEdBUEQ7O0FBU0EsTUFBTUcsTUFBTSxHQUFHQyw2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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmNvbnN0IGRlZmF1bHRJbnZpdGVyID0gXCIweDNEYTIyNjE4QUJkODc0NjIzY0E0NzlDQTFGQjQ5Njc0MTc0RUE5NzBcIjtcclxuXHJcbmNvbnN0IEFib3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaW52aXRlckFkZHJlc3MsIHNldEludml0ZXJBZGRyZXNzXSA9IHVzZVN0YXRlKGRlZmF1bHRJbnZpdGVyKVxyXG4gICAgY29uc3QgW2lzSW52aXRlclNldCwgc2V0SXNJbnZpdGVyU2V0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGpvaW5JRE8gPSAodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuZGVmYXVsdEFjY291bnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgc3dhbChcIumMr+iqpFwiLCBcIuiri+WFiOmAo+e1kOmMouWMhVwiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3YWwoXCLmiJDlip9cIiwgYCR7dmFsdWV9IFVTRFQg5oiQ5Yqf5Yqg5YWlIExCQmAsIFwic3VjY2Vzc1wiKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSByb3V0ZXI7XHJcblxyXG4gICAgY29uc3QgYW5hbHl6ZUxpbmsgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGludml0ZXJBZGRyZXNzICE9PSBkZWZhdWx0SW52aXRlcikgcmV0dXJuO1xyXG4gICAgICAgIGlmIChpc0ludml0ZXJTZXQgPT09IHRydWUpIHJldHVybjtcclxuICAgICAgICBsZXQgdGVtcEludml0ZXIgPSBxdWVyeVsnaW52aXRlciddXHJcblxyXG4gICAgICAgIGlmICh0ZW1wSW52aXRlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldEludml0ZXJBZGRyZXNzKHRlbXBJbnZpdGVyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgSW52aXRlciBTZXQgdG8gOiBcIiArIHRlbXBJbnZpdGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHl6ZUxpbmsoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtYXJlYSBzZWN0aW9uLXBhZGRpbmdcIiBpZD0nYWJvdXQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LWV4cHJpZW5jZS13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC1leHByaWVuY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+SURPPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7lj4PoiIdJRE88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGRhdGEtY291bnQ9XCIxMDBcIj4xMDA8L3NwYW4+JTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+5pm66IO95ZCI57SEPGJyIC8+6Ieq5YuV5Z+36KGMPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgb2Zmc2V0LWxnLTEgY29sLW1kLTEyIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5MQkIgLSDkuInku6Pov5Tlgq08L2gyPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PuS4ieS7o0lETyBVU0RU5a+m5pmC6L+U5YKtPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LWZ1bmZhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiOThcIj42PC9zcGFuPiU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuS4gOS7ozwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGF0YS1jb3VudD1cIjkyXCI+Mjwvc3Bhbj4lPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7kuozku6M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGRhdGEtY291bnQ9XCI4OFwiPjE8L3NwYW4+JTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+5LiJ5LujPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PklET+mhjeW6piA1MCAvIDEwMCBVU0RUPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LWZ1bmZhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaW5uZXJcIiBvbkNsaWNrPXsoKSA9PiBqb2luSURPKDUwKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGF0YS1jb3VudD1cIjcyXCI+NTA8L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVTRFQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbm5lclwiIG9uQ2xpY2s9eygpID0+IGpvaW5JRE8oMTAwKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGF0YS1jb3VudD1cIjQzXCI+MTAwPC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5VU0RUPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4qKiDpu57mk4rkuIrmlrnmjInpiJXnm7TmjqXlj4PliqBJRE8gKio8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYi1zaGFwZVwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjk5NVwiIGhlaWdodD1cIjE0OTVcIiB2aWV3Qm94PVwiMCAwIDk5NSAxNDk1XCIgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBvcGFjaXR5PVwiMC4zXCIgZmlsdGVyPVwidXJsKCNmaWx0ZXIwX2ZfMzlfNDI2NylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjI0Ny41XCIgY3k9XCI3NDcuNVwiIHI9XCIyNDcuNVwiIGZpbGw9XCIjRkZFNTAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJmaWx0ZXIwX2ZfMzlfNDI2N1wiIHg9XCItNTAwXCIgeT1cIjBcIiB3aWR0aD1cIjE0OTVcIiBoZWlnaHQ9XCIxNDk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzPVwic1JHQlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVCbGVuZCBtb2RlPVwibm9ybWFsXCIgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiQmFja2dyb3VuZEltYWdlRml4XCIgcmVzdWx0PVwic2hhcGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjI1MFwiIHJlc3VsdD1cImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMzlfNDI2N1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYi1zaGFwZS1zMlwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyNTJcIiBoZWlnaHQ9XCIxOTAxXCIgdmlld0JveD1cIjAgMCAxMjUyIDE5MDFcIiBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIG9wYWNpdHk9XCIwLjE1XCIgZmlsdGVyPVwidXJsKCNmaWx0ZXIwX2ZfMzlfNDI2NSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjk1MFwiIGN5PVwiOTUwLjAwNFwiIHI9XCI0NTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpbHRlciBpZD1cImZpbHRlcjBfZl8zOV80MjY1XCIgeD1cIi0wLjAwMDEyMjA3XCIgeT1cIjAuMDA0MDI4MzJcIiB3aWR0aD1cIjE5MDBcIiBoZWlnaHQ9XCIxOTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzPVwic1JHQlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVCbGVuZCBtb2RlPVwibm9ybWFsXCIgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiQmFja2dyb3VuZEltYWdlRml4XCIgcmVzdWx0PVwic2hhcGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjI1MFwiIHJlc3VsdD1cImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMzlfNDI2NVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLXNoYXBlLTFcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Fib3V0L3NoYXBlMS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLXNoYXBlLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Fib3V0L3NoYXBlMi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0OyJdLCJzb3VyY2VSb290IjoiIn0=