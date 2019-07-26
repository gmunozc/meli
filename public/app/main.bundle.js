/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var connected_react_router_1 = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
var moment = __webpack_require__(/*! moment */ "moment");
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var configureStore_1 = __webpack_require__(/*! ./store/configureStore */ "./src/store/configureStore.ts");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var ItemsListView_1 = __webpack_require__(/*! ./components/items/ItemsListView */ "./src/components/items/ItemsListView.tsx");
var store = configureStore_1.default();
var NoMatch = function (_a) {
    var location = _a.location;
    return (React.createElement("div", null,
        React.createElement("h3", null,
            "No match for ",
            React.createElement("code", null, location.pathname))));
};
var App = function () { return (React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(connected_react_router_1.ConnectedRouter, { history: configureStore_1.history },
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/items", component: ItemsListView_1.default }),
            React.createElement(react_router_dom_1.Route, { component: NoMatch }))))); };
moment.locale('es');
ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));


/***/ }),

/***/ "./src/components/items/ItemsListView.tsx":
/*!************************************************!*\
  !*** ./src/components/items/ItemsListView.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./items.sass */ "./src/components/items/items.sass");
var ItemsListView = (function (_super) {
    __extends(ItemsListView, _super);
    function ItemsListView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemsListView.prototype.render = function () {
        return (React.createElement("div", null));
    };
    return ItemsListView;
}(React.Component));
exports.default = ItemsListView;


/***/ }),

/***/ "./src/components/items/items.sass":
/*!*****************************************!*\
  !*** ./src/components/items/items.sass ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var connected_react_router_1 = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
exports.default = (function (history) { return redux_1.combineReducers({
    router: connected_react_router_1.connectRouter(history)
}); });


/***/ }),

/***/ "./src/store/configureStore.ts":
/*!*************************************!*\
  !*** ./src/store/configureStore.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var connected_react_router_1 = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var reducers_1 = __webpack_require__(/*! ../reducers */ "./src/reducers/index.ts");
var redux_debounced_1 = __webpack_require__(/*! redux-debounced */ "./node_modules/redux-debounced/lib/index.js");
var redux_thunk_1 = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
var redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
var history_1 = __webpack_require__(/*! ../utils/history */ "./src/utils/history.ts");
exports.history = history_1.default;
var configureStore = function () {
    var enhancers;
    var middlewares = [connected_react_router_1.routerMiddleware(exports.history)];
    middlewares.push(redux_debounced_1.default());
    middlewares.push(redux_thunk_1.default);
    if (true) {
        var composeEnhancers = redux_devtools_extension_1.composeWithDevTools({ trace: true, traceLimit: 10 });
        enhancers = composeEnhancers(redux_1.applyMiddleware.apply(void 0, middlewares));
    }
    else {}
    return redux_1.createStore(reducers_1.default(exports.history), enhancers);
};
exports.default = configureStore;


/***/ }),

/***/ "./src/utils/history.ts":
/*!******************************!*\
  !*** ./src/utils/history.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var history_1 = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
exports.default = history_1.createBrowserHistory({
    basename: ''
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/App.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /srv/src/App.tsx */"./src/App.tsx");


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaXRlbXMvSXRlbXNMaXN0Vmlldy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaXRlbXMvaXRlbXMuc2FzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9oaXN0b3J5LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FB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QUFDLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3RSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsdUJBQWUsZUFBSSxXQUFXLEVBQUUsQ0FBQztLQUMvRDtTQUFNLEVBRU47SUFDRCxPQUFPLG1CQUFXLENBQUMsa0JBQVEsQ0FBQyxlQUFPLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUM7QUFFRixrQkFBZSxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pCOUIsNEZBQStDO0FBRS9DLGtCQUFlLDhCQUFvQixDQUFDO0lBQ2xDLFFBQVEsRUFBRSxFQUFFO0NBQ2IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKSCx3Qjs7Ozs7Ozs7Ozs7QUNBQSx1Qjs7Ozs7Ozs7Ozs7QUNBQSwwQiIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHtDb25uZWN0ZWRSb3V0ZXJ9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlLCB7aGlzdG9yeX0gZnJvbSBcIi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcbmltcG9ydCB7Um91dGUsIFJvdXRlQ29tcG9uZW50UHJvcHMsIFN3aXRjaH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgSXRlbXNMaXN0VmlldyBmcm9tIFwiLi9jb21wb25lbnRzL2l0ZW1zL0l0ZW1zTGlzdFZpZXdcIjtcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuXG5jb25zdCBOb01hdGNoID0gKHtsb2NhdGlvbn06IFJvdXRlQ29tcG9uZW50UHJvcHM8e30+KSA9PiAoXG4gIDxkaXY+XG4gICAgPGgzPk5vIG1hdGNoIGZvciA8Y29kZT57bG9jYXRpb24ucGF0aG5hbWV9PC9jb2RlPjwvaDM+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Q29ubmVjdGVkUm91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvaXRlbXNcIiBjb21wb25lbnQ9e0l0ZW1zTGlzdFZpZXd9Lz5cbiAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm9NYXRjaH0vPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Db25uZWN0ZWRSb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5tb21lbnQubG9jYWxlKCdlcycpO1xuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwLz4sXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKVxuKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9pdGVtcy5zYXNzJztcblxuaW50ZXJmYWNlIElTdGF0ZVR5cGUge1xuICBlcnJvcjogRXJyb3IgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzVHlwZSB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbXNMaXN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHNUeXBlLCBJU3RhdGVUeXBlPiB7XG5cbiAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8SVByb3BzVHlwZT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2Lz5cbiAgICApXG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NjQxNTk5NjE5NjZcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL3Nydi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHtjb25uZWN0Um91dGVyfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIElSZWR1eFN0b3JlIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCAoaGlzdG9yeTogYW55KSA9PiBjb21iaW5lUmVkdWNlcnM8SVJlZHV4U3RvcmU+KHtcbiAgcm91dGVyOiBjb25uZWN0Um91dGVyKGhpc3RvcnkpXG59KTtcbiIsImltcG9ydCB7IHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzJ1xuaW1wb3J0IGNyZWF0ZURlYm91bmNlIGZyb20gJ3JlZHV4LWRlYm91bmNlZCc7XG5pbXBvcnQgVGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCBicm93c2VySGlzdG9ydCBmcm9tIFwiLi4vdXRpbHMvaGlzdG9yeVwiO1xuXG5leHBvcnQgY29uc3QgaGlzdG9yeSA9IGJyb3dzZXJIaXN0b3J0O1xuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcbiAgbGV0IGVuaGFuY2VyczogYW55O1xuICBjb25zdCBtaWRkbGV3YXJlczogYW55W10gPSBbcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KV07XG5cbiAgbWlkZGxld2FyZXMucHVzaChjcmVhdGVEZWJvdW5jZSgpKTtcbiAgbWlkZGxld2FyZXMucHVzaChUaHVua01pZGRsZXdhcmUpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBjb25zdCBjb21wb3NlRW5oYW5jZXJzID0gY29tcG9zZVdpdGhEZXZUb29scyh7dHJhY2U6IHRydWUsIHRyYWNlTGltaXQ6IDEwIH0pO1xuICAgIGVuaGFuY2VycyA9IGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XG4gIH0gZWxzZSB7XG4gICAgZW5oYW5jZXJzID0gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKTtcbiAgfVxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlcnMoaGlzdG9yeSksIGVuaGFuY2Vycyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcbiIsImltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHtcbiAgYmFzZW5hbWU6ICcnXG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gbW9tZW50OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiXSwic291cmNlUm9vdCI6IiJ9