"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/GrapesJS",{

/***/ "./pages/GrapesJS/index.js":
/*!*********************************!*\
  !*** ./pages/GrapesJS/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grapesjs */ \"./node_modules/grapesjs/dist/grapes.min.js\");\n/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var grapesjs_locale_pt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grapesjs/locale/pt */ \"./node_modules/grapesjs/locale/pt.js\");\n/* harmony import */ var grapesjs_dist_css_grapes_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grapesjs/dist/css/grapes.min.css */ \"./node_modules/grapesjs/dist/css/grapes.min.css\");\n/* harmony import */ var grapesjs_dist_css_grapes_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grapesjs_dist_css_grapes_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var grapesjs_preset_webpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grapesjs-preset-webpage */ \"./node_modules/grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js\");\n/* harmony import */ var grapesjs_preset_webpage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grapesjs_preset_webpage__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var grapesjs_preset_newsletter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grapesjs-preset-newsletter */ \"./node_modules/grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.min.js\");\n/* harmony import */ var grapesjs_preset_newsletter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grapesjs_preset_newsletter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _component_LayoutGrapesjs_Page_Default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/LayoutGrapesjs/Page/Default */ \"./component/LayoutGrapesjs/Page/Default.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    // layout\n    var editor = \"\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        editor = grapesjs__WEBPACK_IMPORTED_MODULE_7___default().init({\n            container: '#gjs',\n            i18n: {\n                messages: {\n                    pt: grapesjs_locale_pt__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                }\n            },\n            components: _component_LayoutGrapesjs_Page_Default__WEBPACK_IMPORTED_MODULE_6__.DefaultHtml,\n            style: _component_LayoutGrapesjs_Page_Default__WEBPACK_IMPORTED_MODULE_6__.DefaultCss,\n            fromElement: true,\n            plugins: [\n                'gjs-preset-webpage'\n            ],\n            pluginsOpts: {\n                'gjs-preset-webpage': {\n                }\n            },\n            storageManager: {\n                id: 'gjs-',\n                type: 'local',\n                autosave: true,\n                autoload: true,\n                stepsBeforeSave: 1,\n                embedAsBase64: false\n            },\n            assetManager: {\n                assets: [\n                    'http://placehold.it/350x250/78c5d6/fff/image1.jpg',\n                    // Pass an object with your properties\n                    {\n                        embedAsBase64: false\n                    }\n                ]\n            }\n        });\n        editor.Panels.addButton('options', [\n            {\n                id: 'save',\n                className: 'fa fa-floppy-o icon-blank',\n                command: function command(editor1, sender) {\n                    console.log(\"Editor:\");\n                    console.log(editor1);\n                    console.log(\"SENDER:\");\n                    console.log(sender);\n                    console.log(\"HTML:\");\n                    console.log(editor1.getHtml());\n                    console.log(editor1.getCSS());\n                },\n                attributes: {\n                    title: 'Save Template'\n                }\n            }, \n        ]);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),\n        __source: {\n            fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n            lineNumber: 61,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                __source: {\n                    fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \"Create Next App\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 17\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n                __source: {\n                    fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    id: \"gjs\",\n                    __source: {\n                        fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: _component_LayoutGrapesjs_Page_Default__WEBPACK_IMPORTED_MODULE_6__.DefaultHtml\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().footer),\n                __source: {\n                    fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                    lineNumber: 81,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    __source: {\n                        fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        \"Powered by\",\n                        ' ',\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/vercel.svg\",\n                            alt: \"Vercel Logo\",\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().logo),\n                            __source: {\n                                fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            },\n                            __self: this\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNmTCxHQUFHLEVBQUMsQ0FBcUI7Ozs7Ozs7O3dCQUM1QixDQUNhO3dCQUFDLENBQUc7NkZBQ2JNLENBQUc7NEJBQUNDLEdBQUcsRUFBQyxDQUFhOzRCQUFDQyxHQUFHLEVBQUMsQ0FBYTs0QkFBQ3BCLFNBQVMsRUFBRXpCLHFFQUFXOzs7Ozs7Ozs7Ozs7O0FBS25GLENBQUM7R0FsRnVCRyxJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvR3JhcGVzSlMvaW5kZXguanM/MjI2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBncmFwZXNqcyBmcm9tICdncmFwZXNqcydcbmltcG9ydCBwdCBmcm9tICdncmFwZXNqcy9sb2NhbGUvcHQnXG5pbXBvcnQgJ2dyYXBlc2pzL2Rpc3QvY3NzL2dyYXBlcy5taW4uY3NzJ1xuaW1wb3J0ICdncmFwZXNqcy1wcmVzZXQtd2VicGFnZSdcbmltcG9ydCAnZ3JhcGVzanMtcHJlc2V0LW5ld3NsZXR0ZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBEZWZhdWx0SHRtbCwgRGVmYXVsdENzcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9MYXlvdXRHcmFwZXNqcy9QYWdlL0RlZmF1bHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgLy8gbGF5b3V0XG4gICAgY29uc3QgZWRpdG9yID0gXCJcIlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGVkaXRvciA9IGdyYXBlc2pzLmluaXQoe1xuICAgICAgICAgICAgY29udGFpbmVyOiAnI2dqcycsXG4gICAgICAgICAgICBpMThuOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHsgcHQgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IERlZmF1bHRIdG1sLFxuICAgICAgICAgICAgc3R5bGU6IERlZmF1bHRDc3MsXG4gICAgICAgICAgICBmcm9tRWxlbWVudDogdHJ1ZSxcbiAgICAgICAgICAgIHBsdWdpbnM6IFsnZ2pzLXByZXNldC13ZWJwYWdlJ10sXG4gICAgICAgICAgICBwbHVnaW5zT3B0czoge1xuICAgICAgICAgICAgICAgICdnanMtcHJlc2V0LXdlYnBhZ2UnOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RvcmFnZU1hbmFnZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogJ2dqcy0nLCAgICAgICAgICAgICAvLyBQcmVmaXggaWRlbnRpZmllciB0aGF0IHdpbGwgYmUgdXNlZCBvbiBwYXJhbWV0ZXJzXG4gICAgICAgICAgICAgICAgdHlwZTogJ2xvY2FsJywgICAgICAgICAgLy8gVHlwZSBvZiB0aGUgc3RvcmFnZVxuICAgICAgICAgICAgICAgIGF1dG9zYXZlOiB0cnVlLCAgICAgICAgIC8vIFN0b3JlIGRhdGEgYXV0b21hdGljYWxseVxuICAgICAgICAgICAgICAgIGF1dG9sb2FkOiB0cnVlLCAgICAgICAgIC8vIEF1dG9sb2FkIHN0b3JlZCBkYXRhIG9uIGluaXRcbiAgICAgICAgICAgICAgICBzdGVwc0JlZm9yZVNhdmU6IDEsXG4gICAgICAgICAgICAgICAgZW1iZWRBc0Jhc2U2NDogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gSWYgYXV0b3NhdmUgZW5hYmxlZCwgaW5kaWNhdGVzIGhvdyBtYW55IGNoYW5nZXMgYXJlIG5lY2Vzc2FyeSBiZWZvcmUgc3RvcmUgbWV0aG9kIGlzIHRyaWdnZXJlZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzc2V0TWFuYWdlcjoge1xuICAgICAgICAgICAgICBhc3NldHM6IFtcbiAgICAgICAgICAgICAgICdodHRwOi8vcGxhY2Vob2xkLml0LzM1MHgyNTAvNzhjNWQ2L2ZmZi9pbWFnZTEuanBnJyxcbiAgICAgICAgICAgICAgIC8vIFBhc3MgYW4gb2JqZWN0IHdpdGggeW91ciBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZW1iZWRBc0Jhc2U2NDogZmFsc2UsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF19LFxuICAgICAgICB9KVxuICAgICAgICBlZGl0b3IuUGFuZWxzLmFkZEJ1dHRvbignb3B0aW9ucycsIFsgeyBpZDogJ3NhdmUnLCBjbGFzc05hbWU6ICdmYSBmYS1mbG9wcHktbyBpY29uLWJsYW5rJywgY29tbWFuZDogZnVuY3Rpb24oZWRpdG9yMSwgc2VuZGVyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFZGl0b3I6XCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVkaXRvcjEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0VOREVSOlwiKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbmRlcik7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2coXCJIVE1MOlwiKTtcbiAgICAgICAgICAgY29uc29sZS5sb2coZWRpdG9yMS5nZXRIdG1sKCkpO1xuICAgICAgICAgICBjb25zb2xlLmxvZyhlZGl0b3IxLmdldENTUygpKTtcblxuICAgICAgICAgIH0sIGF0dHJpYnV0ZXM6IHsgdGl0bGU6ICdTYXZlIFRlbXBsYXRlJyB9IH0sIF0pO1xuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgICAgICB7LyogPGhlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb1N1cGVyaW9yfT5HcmFwZXNKUzwvZGl2PlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgPGRpdj5DT05TVFJVVE9SPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+TU9ERUxPPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+V0VCPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJnanNcIj5cbiAgICAgICAgICAgICAgICAgICAge0RlZmF1bHRIdG1sfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUG93ZXJlZCBieXsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsImdyYXBlc2pzIiwicHQiLCJIZWFkIiwic3R5bGVzIiwiRGVmYXVsdEh0bWwiLCJEZWZhdWx0Q3NzIiwiSG9tZSIsImVkaXRvciIsImluaXQiLCJjb250YWluZXIiLCJpMThuIiwibWVzc2FnZXMiLCJjb21wb25lbnRzIiwic3R5bGUiLCJmcm9tRWxlbWVudCIsInBsdWdpbnMiLCJwbHVnaW5zT3B0cyIsInN0b3JhZ2VNYW5hZ2VyIiwiaWQiLCJ0eXBlIiwiYXV0b3NhdmUiLCJhdXRvbG9hZCIsInN0ZXBzQmVmb3JlU2F2ZSIsImVtYmVkQXNCYXNlNjQiLCJhc3NldE1hbmFnZXIiLCJhc3NldHMiLCJQYW5lbHMiLCJhZGRCdXR0b24iLCJjbGFzc05hbWUiLCJjb21tYW5kIiwiZWRpdG9yMSIsInNlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJnZXRIdG1sIiwiZ2V0Q1NTIiwiYXR0cmlidXRlcyIsInRpdGxlIiwiZGl2IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiZm9vdGVyIiwiYSIsInRhcmdldCIsImltZyIsInNyYyIsImFsdCIsImxvZ28iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/GrapesJS/index.js\n");

/***/ })

});