"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/FeatureCard.jsx":
/*!************************************!*\
  !*** ./Components/FeatureCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar FeatureCard = function(param) {\n    var imgSrc = param.imgSrc, heading = param.heading, paragraph = param.paragraph;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-2 relative top-0 hover:top-[-10px] ease-in-out duration-300 cursor-pointer p-4 h-[200px] w-full sm:w-[350px] border-[1px] flex flex-col justify-between items-start\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"w-[120px]\",\n                    src: imgSrc,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/divyanshsharma/Desktop/doctaverse.com/Components/FeatureCard.jsx\",\n                    lineNumber: 7,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl md:text-3xl font-bold\",\n                    children: heading\n                }, void 0, false, {\n                    fileName: \"/Users/divyanshsharma/Desktop/doctaverse.com/Components/FeatureCard.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-md md:text-l\",\n                    children: paragraph\n                }, void 0, false, {\n                    fileName: \"/Users/divyanshsharma/Desktop/doctaverse.com/Components/FeatureCard.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/divyanshsharma/Desktop/doctaverse.com/Components/FeatureCard.jsx\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/divyanshsharma/Desktop/doctaverse.com/Components/FeatureCard.jsx\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, _this);\n};\n_c = FeatureCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeatureCard);\nvar _c;\n$RefreshReg$(_c, \"FeatureCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0ZlYXR1cmVDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUF5QjtBQUV6QixJQUFNQyxXQUFXLEdBQUcsZ0JBQW9DO1FBQWpDQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLFNBQVMsU0FBVEEsU0FBUztJQUM3QyxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsdUtBQXVLO2tCQUNsTCw0RUFBQ0QsS0FBRzs7OEJBQ0EsOERBQUNFLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxXQUFXO29CQUFDRSxHQUFHLEVBQUVOLE1BQU07b0JBQUVPLEdBQUcsRUFBQyxFQUFFOzs7Ozt5QkFBRzs4QkFDakQsOERBQUNDLElBQUU7b0JBQUNKLFNBQVMsRUFBQywrQkFBK0I7OEJBQUVILE9BQU87Ozs7O3lCQUFNOzhCQUM1RCw4REFBQ1EsR0FBQztvQkFBQ0wsU0FBUyxFQUFDLG1CQUFtQjs4QkFBRUYsU0FBUzs7Ozs7eUJBQUs7Ozs7OztpQkFDOUM7Ozs7O2FBQ0osQ0FDVDtDQUNKO0FBVktILEtBQUFBLFdBQVc7QUFZakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9GZWF0dXJlQ2FyZC5qc3g/YWY1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZlYXR1cmVDYXJkID0gKHsgaW1nU3JjLCBoZWFkaW5nLCBwYXJhZ3JhcGggfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtLTIgcmVsYXRpdmUgdG9wLTAgaG92ZXI6dG9wLVstMTBweF0gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIGN1cnNvci1wb2ludGVyIHAtNCBoLVsyMDBweF0gdy1mdWxsIHNtOnctWzM1MHB4XSBib3JkZXItWzFweF0gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQnPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndy1bMTIwcHhdJyBzcmM9e2ltZ1NyY30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXhsIG1kOnRleHQtM3hsIGZvbnQtYm9sZCc+e2hlYWRpbmd9PC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtbWQgbWQ6dGV4dC1sJz57cGFyYWdyYXBofTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVDYXJkIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmVhdHVyZUNhcmQiLCJpbWdTcmMiLCJoZWFkaW5nIiwicGFyYWdyYXBoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/FeatureCard.jsx\n"));

/***/ })

});