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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grapesjs */ \"./node_modules/grapesjs/dist/grapes.min.js\");\n/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var grapesjs_locale_pt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grapesjs/locale/pt */ \"./node_modules/grapesjs/locale/pt.js\");\n/* harmony import */ var grapesjs_dist_css_grapes_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grapesjs/dist/css/grapes.min.css */ \"./node_modules/grapesjs/dist/css/grapes.min.css\");\n/* harmony import */ var grapesjs_dist_css_grapes_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grapesjs_dist_css_grapes_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var grapesjs_preset_webpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grapesjs-preset-webpage */ \"./node_modules/grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js\");\n/* harmony import */ var grapesjs_preset_webpage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grapesjs_preset_webpage__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var grapesjs_preset_newsletter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grapesjs-preset-newsletter */ \"./node_modules/grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.min.js\");\n/* harmony import */ var grapesjs_preset_newsletter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grapesjs_preset_newsletter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _component_LayoutGrapesjs_Page_Default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/LayoutGrapesjs/Page/Default */ \"./component/LayoutGrapesjs/Page/Default.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    // layout\n    var editor = \"\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        editor = grapesjs__WEBPACK_IMPORTED_MODULE_7___default().init({\n            container: '#gjs',\n            i18n: {\n                messages: {\n                    pt: grapesjs_locale_pt__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                }\n            },\n            components: _component_LayoutGrapesjs_Page_Default__WEBPACK_IMPORTED_MODULE_6__.DefaultHtml,\n            style: _component_LayoutGrapesjs_Page_Default__WEBPACK_IMPORTED_MODULE_6__.DefaultCss,\n            fromElement: true,\n            plugins: [\n                'gjs-preset-webpage'\n            ],\n            pluginsOpts: {\n                'gjs-preset-webpage': {\n                }\n            },\n            storageManager: {\n                id: 'gjs-',\n                type: 'local',\n                autosave: true,\n                autoload: true,\n                stepsBeforeSave: 1\n            },\n            assetManager: {\n                storageType: '',\n                storeOnChange: true,\n                storeAfterUpload: true,\n                upload: 'https://localhost/assets/upload',\n                assets: [],\n                uploadFile: function uploadFile(e) {\n                    var files = e.dataTransfer ? e.dataTransfer.files : e.target.files;\n                    var formData = new FormData();\n                    for(var i in files){\n                        formData.append('file-' + i, files[i]) //containing all the selected images from local\n                        ;\n                    }\n                    $.ajax({\n                        url: 'http://localhost:3000/pmovil/',\n                        type: 'POST',\n                        data: formData,\n                        contentType: false,\n                        crossDomain: true,\n                        dataType: 'json',\n                        mimeType: \"multipart/form-data\",\n                        processData: false,\n                        success: function success(result) {\n                            var myJSON = [];\n                            $.each(result['data'], function(key, value) {\n                                myJSON[key] = value;\n                            });\n                            var images = myJSON;\n                            editor.AssetManager.add(images); //adding images to asset \n                        }\n                    });\n                }\n            }\n        });\n        editor.Panels.addButton('options', [\n            {\n                id: 'save',\n                className: 'fa fa-floppy-o icon-blank',\n                command: function command(editor1, sender) {\n                    console.log(\"Editor:\");\n                    console.log(editor1);\n                    console.log(\"SENDER:\");\n                    console.log(sender);\n                    console.log(\"HTML:\");\n                    console.log(editor1.getHtml());\n                    console.log(editor1.getCSS());\n                },\n                attributes: {\n                    title: 'Save Template'\n                }\n            }, \n        ]);\n    });\n    $.ajax({\n        url: 'http://localhost/grapeJs/src/file_uploader/fileUpload.php',\n        type: 'POST',\n        data: formData,\n        contentType: false,\n        crossDomain: true,\n        mimeType: \"multipart/form-data\",\n        processData: false,\n        success: function success(result) {\n            var images = result.data; // <- should be an array of uploaded images\n            editor.AssetManager.add(images);\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),\n        __source: {\n            fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n            lineNumber: 97,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                __source: {\n                    fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                    lineNumber: 98,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                            lineNumber: 99,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \"Create Next App\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                            lineNumber: 100,\n                            columnNumber: 17\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n                __source: {\n                    fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                    lineNumber: 103,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    id: \"gjs\",\n                    __source: {\n                        fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: _component_LayoutGrapesjs_Page_Default__WEBPACK_IMPORTED_MODULE_6__.DefaultHtml\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().footer),\n                __source: {\n                    fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                    lineNumber: 117,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    __source: {\n                        fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                        lineNumber: 118,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        \"Powered by\",\n                        ' ',\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/vercel.svg\",\n                            alt: \"Vercel Logo\",\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().logo),\n                            __source: {\n                                fileName: \"/Users/felipepelicer/Desktop/Grapesjs-webpage/pages/GrapesJS/index.js\",\n                                lineNumber: 124,\n                                columnNumber: 21\n                            },\n                            __self: this\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNYLENBQUM7SUFDRyxNQUFNLHVFQUNEZSxDQUFHO1FBQUNWLFNBQVMsRUFBRXZELDBFQUFnQjs7Ozs7Ozs7a0ZBQzNCRCxrREFBSTs7Ozs7Ozs7eUZBQ0FpRSxDQUFLOzs7Ozs7O2tDQUFDLENBQWU7O3lGQUNyQkUsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7O2lGQUd2Q0MsQ0FBSTtnQkFBQ2QsU0FBUyxFQUFFdkQscUVBQVc7Ozs7Ozs7K0ZBU3ZCaUUsQ0FBRztvQkFBQ2xELEVBQUUsRUFBQyxDQUFLOzs7Ozs7OzhCQUNSZCwrRUFBVzs7O2lGQUluQnFFLENBQU07Z0JBQUNmLFNBQVMsRUFBRXZELHVFQUFhOzs7Ozs7O2dHQUMzQnVFLENBQUM7b0JBQ0VILElBQUksRUFBQyxDQUF3RztvQkFDN0d0QyxNQUFNLEVBQUMsQ0FBUTtvQkFDZnFDLEdBQUcsRUFBQyxDQUFxQjs7Ozs7Ozs7d0JBQzVCLENBQ2E7d0JBQUMsQ0FBRzs2RkFDYkssQ0FBRzs0QkFBQ0MsR0FBRyxFQUFDLENBQWE7NEJBQUNDLEdBQUcsRUFBQyxDQUFhOzRCQUFDbkIsU0FBUyxFQUFFdkQscUVBQVc7Ozs7Ozs7Ozs7Ozs7QUFLbkYsQ0FBQztHQXRIdUJHLElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9HcmFwZXNKUy9pbmRleC5qcz8yMjYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdyYXBlc2pzIGZyb20gJ2dyYXBlc2pzJ1xuaW1wb3J0IHB0IGZyb20gJ2dyYXBlc2pzL2xvY2FsZS9wdCdcbmltcG9ydCAnZ3JhcGVzanMvZGlzdC9jc3MvZ3JhcGVzLm1pbi5jc3MnXG5pbXBvcnQgJ2dyYXBlc2pzLXByZXNldC13ZWJwYWdlJ1xuaW1wb3J0ICdncmFwZXNqcy1wcmVzZXQtbmV3c2xldHRlcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IERlZmF1bHRIdG1sLCBEZWZhdWx0Q3NzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50L0xheW91dEdyYXBlc2pzL1BhZ2UvRGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICAvLyBsYXlvdXRcbiAgICBjb25zdCBlZGl0b3IgPSBcIlwiXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZWRpdG9yID0gZ3JhcGVzanMuaW5pdCh7XG4gICAgICAgICAgICBjb250YWluZXI6ICcjZ2pzJyxcbiAgICAgICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogeyBwdCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcG9uZW50czogRGVmYXVsdEh0bWwsXG4gICAgICAgICAgICBzdHlsZTogRGVmYXVsdENzcyxcbiAgICAgICAgICAgIGZyb21FbGVtZW50OiB0cnVlLFxuICAgICAgICAgICAgcGx1Z2luczogWydnanMtcHJlc2V0LXdlYnBhZ2UnXSxcbiAgICAgICAgICAgIHBsdWdpbnNPcHRzOiB7XG4gICAgICAgICAgICAgICAgJ2dqcy1wcmVzZXQtd2VicGFnZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdG9yYWdlTWFuYWdlcjoge1xuICAgICAgICAgICAgICAgIGlkOiAnZ2pzLScsICAgICAgICAgICAgIC8vIFByZWZpeCBpZGVudGlmaWVyIHRoYXQgd2lsbCBiZSB1c2VkIG9uIHBhcmFtZXRlcnNcbiAgICAgICAgICAgICAgICB0eXBlOiAnbG9jYWwnLCAgICAgICAgICAvLyBUeXBlIG9mIHRoZSBzdG9yYWdlXG4gICAgICAgICAgICAgICAgYXV0b3NhdmU6IHRydWUsICAgICAgICAgLy8gU3RvcmUgZGF0YSBhdXRvbWF0aWNhbGx5XG4gICAgICAgICAgICAgICAgYXV0b2xvYWQ6IHRydWUsICAgICAgICAgLy8gQXV0b2xvYWQgc3RvcmVkIGRhdGEgb24gaW5pdFxuICAgICAgICAgICAgICAgIHN0ZXBzQmVmb3JlU2F2ZTogMSxcbiAgICAgICAgICAgICAgICAvLyBJZiBhdXRvc2F2ZSBlbmFibGVkLCBpbmRpY2F0ZXMgaG93IG1hbnkgY2hhbmdlcyBhcmUgbmVjZXNzYXJ5IGJlZm9yZSBzdG9yZSBtZXRob2QgaXMgdHJpZ2dlcmVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXNzZXRNYW5hZ2VyOiB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZVR5cGUgIFx0OiAnJyxcbiAgICAgICAgICAgICAgICAgICBzdG9yZU9uQ2hhbmdlICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgc3RvcmVBZnRlclVwbG9hZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgIHVwbG9hZDogJ2h0dHBzOi8vbG9jYWxob3N0L2Fzc2V0cy91cGxvYWQnLCAgICAgICAgLy9mb3IgdGVtcG9yYXJ5IHN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICBhc3NldHMgICAgXHQ6IFsgXSxcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkRmlsZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgIHZhciBmaWxlcyA9IGUuZGF0YVRyYW5zZmVyID8gZS5kYXRhVHJhbnNmZXIuZmlsZXMgOiBlLnRhcmdldC5maWxlcztcbiAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgZm9yKHZhciBpIGluIGZpbGVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZS0nK2ksIGZpbGVzW2ldKSAvL2NvbnRhaW5pbmcgYWxsIHRoZSBzZWxlY3RlZCBpbWFnZXMgZnJvbSBsb2NhbFxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Btb3ZpbC8nLFxuICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTpmYWxzZSxcbiAgICAgICAgICAgICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgIG1pbWVUeXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOmZhbHNlLFxuICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXlKU09OID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKCByZXN1bHRbJ2RhdGEnXSwgZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUpTT05ba2V5XSA9IHZhbHVlOyAgICBcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgdmFyIGltYWdlcyA9IG15SlNPTjsgICAgXG4gICAgICAgICAgICBlZGl0b3IuQXNzZXRNYW5hZ2VyLmFkZChpbWFnZXMpOyAvL2FkZGluZyBpbWFnZXMgdG8gYXNzZXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0pO1xuICAgICAgICAgICB9LFxuICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBlZGl0b3IuUGFuZWxzLmFkZEJ1dHRvbignb3B0aW9ucycsIFsgeyBpZDogJ3NhdmUnLCBjbGFzc05hbWU6ICdmYSBmYS1mbG9wcHktbyBpY29uLWJsYW5rJywgY29tbWFuZDogZnVuY3Rpb24oZWRpdG9yMSwgc2VuZGVyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFZGl0b3I6XCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVkaXRvcjEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0VOREVSOlwiKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbmRlcik7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2coXCJIVE1MOlwiKTtcbiAgICAgICAgICAgY29uc29sZS5sb2coZWRpdG9yMS5nZXRIdG1sKCkpO1xuICAgICAgICAgICBjb25zb2xlLmxvZyhlZGl0b3IxLmdldENTUygpKTtcblxuICAgICAgICAgIH0sIGF0dHJpYnV0ZXM6IHsgdGl0bGU6ICdTYXZlIFRlbXBsYXRlJyB9IH0sIF0pO1xuICAgIH0pXG5cbiAgICAkLmFqYXgoe3VybDogJ2h0dHA6Ly9sb2NhbGhvc3QvZ3JhcGVKcy9zcmMvZmlsZV91cGxvYWRlci9maWxlVXBsb2FkLnBocCcsXG4gICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICAgIGNvbnRlbnRUeXBlOmZhbHNlLFxuICAgICAgICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgICAgICAgIG1pbWVUeXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICBwcm9jZXNzRGF0YTpmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgICAgICAgdmFyIGltYWdlcyA9IHJlc3VsdC5kYXRhOyAvLyA8LSBzaG91bGQgYmUgYW4gYXJyYXkgb2YgdXBsb2FkZWQgaW1hZ2VzXG4gICAgICAgICAgICBlZGl0b3IuIEFzc2V0TWFuYWdlci5hZGQoaW1hZ2VzKTtcbiAgICAgICAgICB9XG59KTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgICAgIHsvKiA8aGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvU3VwZXJpb3J9PkdyYXBlc0pTPC9kaXY+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICA8ZGl2PkNPTlNUUlVUT1I8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5NT0RFTE88L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5XRUI8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImdqc1wiPlxuICAgICAgICAgICAgICAgICAgICB7RGVmYXVsdEh0bWx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwiZ3JhcGVzanMiLCJwdCIsIkhlYWQiLCJzdHlsZXMiLCJEZWZhdWx0SHRtbCIsIkRlZmF1bHRDc3MiLCJIb21lIiwiZWRpdG9yIiwiaW5pdCIsImNvbnRhaW5lciIsImkxOG4iLCJtZXNzYWdlcyIsImNvbXBvbmVudHMiLCJzdHlsZSIsImZyb21FbGVtZW50IiwicGx1Z2lucyIsInBsdWdpbnNPcHRzIiwic3RvcmFnZU1hbmFnZXIiLCJpZCIsInR5cGUiLCJhdXRvc2F2ZSIsImF1dG9sb2FkIiwic3RlcHNCZWZvcmVTYXZlIiwiYXNzZXRNYW5hZ2VyIiwic3RvcmFnZVR5cGUiLCJzdG9yZU9uQ2hhbmdlIiwic3RvcmVBZnRlclVwbG9hZCIsInVwbG9hZCIsImFzc2V0cyIsInVwbG9hZEZpbGUiLCJlIiwiZmlsZXMiLCJkYXRhVHJhbnNmZXIiLCJ0YXJnZXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaSIsImFwcGVuZCIsIiQiLCJhamF4IiwidXJsIiwiZGF0YSIsImNvbnRlbnRUeXBlIiwiY3Jvc3NEb21haW4iLCJkYXRhVHlwZSIsIm1pbWVUeXBlIiwicHJvY2Vzc0RhdGEiLCJzdWNjZXNzIiwicmVzdWx0IiwibXlKU09OIiwiZWFjaCIsImtleSIsInZhbHVlIiwiaW1hZ2VzIiwiQXNzZXRNYW5hZ2VyIiwiYWRkIiwiUGFuZWxzIiwiYWRkQnV0dG9uIiwiY2xhc3NOYW1lIiwiY29tbWFuZCIsImVkaXRvcjEiLCJzZW5kZXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0SHRtbCIsImdldENTUyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsImRpdiIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImZvb3RlciIsImEiLCJpbWciLCJzcmMiLCJhbHQiLCJsb2dvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/GrapesJS/index.js\n");

/***/ })

});