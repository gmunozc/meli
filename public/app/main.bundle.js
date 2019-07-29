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
var ItemsDetailView_1 = __webpack_require__(/*! ./components/items/ItemsDetailView */ "./src/components/items/ItemsDetailView.tsx");
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
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: ItemsListView_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/items", component: ItemsListView_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/items/:id", component: ItemsDetailView_1.default }),
            React.createElement(react_router_dom_1.Route, { component: NoMatch }))))); };
$(function () {
    moment.locale('es');
    ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));
});


/***/ }),

/***/ "./src/actions/item.action.ts":
/*!************************************!*\
  !*** ./src/actions/item.action.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_service_1 = __webpack_require__(/*! ../services/api.service */ "./src/services/api.service.ts");
var NProgress = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
var axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var configureStore_1 = __webpack_require__(/*! ../store/configureStore */ "./src/store/configureStore.ts");
function itemLoading(loading) {
    return {
        type: '@item/LOADING',
        payload: {
            loading: loading
        }
    };
}
exports.itemLoading = itemLoading;
function itemCancelRequest(source) {
    return {
        type: '@item/CANCEL_REQUEST',
        payload: {
            source: source
        }
    };
}
exports.itemCancelRequest = itemCancelRequest;
function itemLoad(item, category) {
    return {
        type: '@item/LOAD',
        payload: {
            item: item,
            category: category
        }
    };
}
exports.itemLoad = itemLoad;
function itemGet(id, redirect) {
    return function (dispatch, getState) {
        dispatch(itemLoading(true));
        dispatch(itemCancelRequest(api_service_1.default.getSource()));
        NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });
        NProgress.start();
        api_service_1.default
            .getItem(id)
            .then(function (response) {
            var _a = response.data, item = _a.item, category = _a.category;
            dispatch(itemLoad(item, category));
            if (item) {
                document.title = "Mercado Libre | " + item.title;
            }
            dispatch(itemLoading(false));
            if (redirect) {
                configureStore_1.history.push("/items/" + id);
            }
            NProgress.done();
        })
            .catch(function (err) {
            if (!axios_1.default.isCancel(err)) {
                api_service_1.default.errorHandler(err);
            }
            NProgress.done();
            dispatch(itemLoading(false));
        });
    };
}
exports.itemGet = itemGet;


/***/ }),

/***/ "./src/actions/items.action.ts":
/*!*************************************!*\
  !*** ./src/actions/items.action.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NProgress = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
var api_service_1 = __webpack_require__(/*! ../services/api.service */ "./src/services/api.service.ts");
var axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var configureStore_1 = __webpack_require__(/*! ../store/configureStore */ "./src/store/configureStore.ts");
function itemsLoading(loading) {
    return {
        type: '@items/LOADING',
        payload: {
            loading: loading
        }
    };
}
exports.itemsLoading = itemsLoading;
function itemsCancelRequest(source) {
    return {
        type: '@items/CANCEL_REQUEST',
        payload: {
            source: source
        }
    };
}
exports.itemsCancelRequest = itemsCancelRequest;
function itemsChangeSearchText(searchText) {
    return {
        type: '@items/SEARCH',
        payload: {
            searchText: searchText
        }
    };
}
exports.itemsChangeSearchText = itemsChangeSearchText;
function itemsLoad(items, categories) {
    return {
        type: '@items/LOAD',
        payload: {
            items: items,
            categories: categories
        }
    };
}
exports.itemsLoad = itemsLoad;
function itemsSearch(_a) {
    var redirect = _a.redirect;
    return function (dispatch, getState) {
        var state = getState();
        var searchText = state.items.searchText;
        if (searchText.length) {
            NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });
            NProgress.start();
            document.title = "Mercado Libre | Buscando " + searchText;
            dispatch(itemsLoading(true));
            dispatch(itemsCancelRequest(api_service_1.default.getSource()));
            api_service_1.default
                .searchItems(searchText)
                .then(function (response) {
                if (redirect) {
                    configureStore_1.history.push({
                        pathname: '/items',
                        search: "?query=" + searchText,
                    });
                }
                dispatch(itemsLoad(response.data.items, response.data.categories));
                NProgress.done();
                dispatch(itemsLoading(false));
            })
                .catch(function (err) {
                if (!axios_1.default.isCancel(err)) {
                    api_service_1.default.errorHandler(err);
                }
                NProgress.done();
                dispatch(itemsLoading(false));
            });
        }
    };
}
exports.itemsSearch = itemsSearch;


/***/ }),

/***/ "./src/components/breadcrumb/Breadcrumb.tsx":
/*!**************************************************!*\
  !*** ./src/components/breadcrumb/Breadcrumb.tsx ***!
  \**************************************************/
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
__webpack_require__(/*! ./breadcrumb.sass */ "./src/components/breadcrumb/breadcrumb.sass");
var Breadcrumb = (function (_super) {
    __extends(Breadcrumb, _super);
    function Breadcrumb(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error: null
        };
        _this.search = function () {
            console.log('this.state', _this.state);
        };
        return _this;
    }
    Breadcrumb.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({ error: error });
    };
    Breadcrumb.prototype.render = function () {
        var text = this.props.text;
        return (React.createElement("div", { className: "breadcrumb" }, text));
    };
    Breadcrumb.propTypes = {};
    return Breadcrumb;
}(React.Component));
exports.default = Breadcrumb;


/***/ }),

/***/ "./src/components/breadcrumb/breadcrumb.sass":
/*!***************************************************!*\
  !*** ./src/components/breadcrumb/breadcrumb.sass ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/components/items/ItemPreview.tsx":
/*!**********************************************!*\
  !*** ./src/components/items/ItemPreview.tsx ***!
  \**********************************************/
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./items.sass */ "./src/components/items/items.sass");
var item_action_1 = __webpack_require__(/*! ../../actions/item.action */ "./src/actions/item.action.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var ItemPreview = (function (_super) {
    __extends(ItemPreview, _super);
    function ItemPreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: null
        };
        _this._handleGoToDetail = function () {
            var itemDetail = _this.props.itemDetail;
            _this.props.itemGet(itemDetail.id, true);
        };
        _this.formatNumber = function (num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        };
        return _this;
    }
    ItemPreview.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({ error: error });
    };
    ItemPreview.prototype.render = function () {
        var itemDetail = this.props.itemDetail;
        return (React.createElement("div", { className: "item-preview" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12 col-sm-12 col-md-9" },
                    React.createElement("div", { className: "media" },
                        React.createElement("img", { className: "thumbnail pointer", src: itemDetail.picture, alt: itemDetail.title, onClick: this._handleGoToDetail }),
                        React.createElement("div", { className: "media-body" },
                            React.createElement("h5", { onClick: this._handleGoToDetail, className: "mt-3 pointer" },
                                "$ ",
                                this.formatNumber(itemDetail.price.amount),
                                " ",
                                itemDetail.free_shipping
                                    ? React.createElement("i", { className: "fa fa-certificate text-success" })
                                    : null,
                                " "),
                            itemDetail.title))),
                React.createElement("div", { className: "col-md-3 d-none d-md-block " },
                    React.createElement("p", { className: "mt-4 text-muted text-location" }, itemDetail.location)))));
    };
    ItemPreview.propTypes = {};
    return ItemPreview;
}(React.Component));
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var mapDispatchToProps = function (dispatch) {
    return {
        dispatch: dispatch,
        itemGet: function (id, redirect) { return dispatch(item_action_1.itemGet(id, redirect)); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ItemPreview);


/***/ }),

/***/ "./src/components/items/ItemsContainers.tsx":
/*!**************************************************!*\
  !*** ./src/components/items/ItemsContainers.tsx ***!
  \**************************************************/
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
var ItemsContainers = (function (_super) {
    __extends(ItemsContainers, _super);
    function ItemsContainers() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: null
        };
        return _this;
    }
    ItemsContainers.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({ error: error });
    };
    ItemsContainers.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement("div", { className: "items-container" }, children));
    };
    ItemsContainers.propTypes = {};
    return ItemsContainers;
}(React.Component));
exports.default = ItemsContainers;


/***/ }),

/***/ "./src/components/items/ItemsDetailView.tsx":
/*!**************************************************!*\
  !*** ./src/components/items/ItemsDetailView.tsx ***!
  \**************************************************/
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var react_1 = __webpack_require__(/*! react */ "react");
var Application_1 = __webpack_require__(/*! ../../containers/application/Application */ "./src/containers/application/Application.tsx");
var Breadcrumb_1 = __webpack_require__(/*! ../breadcrumb/Breadcrumb */ "./src/components/breadcrumb/Breadcrumb.tsx");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
__webpack_require__(/*! ./items.sass */ "./src/components/items/items.sass");
var item_action_1 = __webpack_require__(/*! ../../actions/item.action */ "./src/actions/item.action.ts");
var ItemsDetailView = (function (_super) {
    __extends(ItemsDetailView, _super);
    function ItemsDetailView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: null
        };
        _this.formatNumber = function (num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        };
        return _this;
    }
    ItemsDetailView.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({ error: error });
    };
    ItemsDetailView.prototype.componentWillUnmount = function () {
        if (this.props.item.source) {
            this.props.item.source.cancel('Operation canceled by the user.');
        }
    };
    ItemsDetailView.prototype.componentDidMount = function () {
        var item = this.props.item.item;
        var id = this.props.match.params.id;
        if (!item || (item && item.id != id)) {
            var id_1 = this.props.match.params.id;
            this.props.itemGet(id_1);
        }
    };
    ItemsDetailView.prototype.render = function () {
        var item = this.props.item.item;
        var id = this.props.match.params.id;
        return (React.createElement(Application_1.default, __assign({}, this.props),
            React.createElement("div", { className: "container" }, item && item.id == id
                ?
                    React.createElement(react_1.Fragment, null,
                        React.createElement(Breadcrumb_1.default, { text: item.category }),
                        React.createElement("div", { className: "items-container" },
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-12 col-md-8" },
                                    React.createElement("img", { className: "thumbnail detail pointer pb-2", src: item.picture, alt: item.title }),
                                    React.createElement("h5", null, "Descripci\u00F3n del producto"),
                                    React.createElement("p", { className: "text-muted" }, item.description
                                        ? item.description.split('\n').map(function (item) {
                                            return React.createElement(react_1.Fragment, null,
                                                item,
                                                React.createElement("br", null));
                                        })
                                        : '')),
                                React.createElement("div", { className: "col-12 col-md-4 mt-3" },
                                    React.createElement("p", { className: "text-muted" },
                                        item.condition,
                                        " - ",
                                        item.sold_quantity,
                                        " vendidos"),
                                    React.createElement("h5", null, item.title),
                                    React.createElement("h1", { className: "mt-3" },
                                        "$ ",
                                        this.formatNumber(item.price.amount),
                                        React.createElement("small", { className: "decimal " }, item.price.decimals ? item.price.decimals : '00')),
                                    React.createElement("button", { type: "button", className: "btn btn-primary btn-block mt-4  mb-4" }, "Comprar")))))
                : null)));
    };
    ItemsDetailView.propTypes = {};
    return ItemsDetailView;
}(React.Component));
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var mapDispatchToProps = function (dispatch) {
    return {
        dispatch: dispatch,
        itemGet: function (id) { return dispatch(item_action_1.itemGet(id)); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ItemsDetailView);


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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var react_1 = __webpack_require__(/*! react */ "react");
var Application_1 = __webpack_require__(/*! ../../containers/application/Application */ "./src/containers/application/Application.tsx");
var Breadcrumb_1 = __webpack_require__(/*! ../breadcrumb/Breadcrumb */ "./src/components/breadcrumb/Breadcrumb.tsx");
var ItemsContainers_1 = __webpack_require__(/*! ./ItemsContainers */ "./src/components/items/ItemsContainers.tsx");
var ItemPreview_1 = __webpack_require__(/*! ./ItemPreview */ "./src/components/items/ItemPreview.tsx");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
__webpack_require__(/*! ./items.sass */ "./src/components/items/items.sass");
var ItemsListView = (function (_super) {
    __extends(ItemsListView, _super);
    function ItemsListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: null
        };
        return _this;
    }
    ItemsListView.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({ error: error });
    };
    ItemsListView.prototype.componentDidMount = function () {
        document.title = "Mercado Libre";
    };
    ItemsListView.prototype.render = function () {
        var _this = this;
        var _a = this.props, items = _a.items, router = _a.router;
        return (React.createElement(Application_1.default, __assign({}, this.props), router.location && router.location.search.length ?
            React.createElement("div", { className: "container" },
                React.createElement(react_1.Fragment, null,
                    React.createElement(Breadcrumb_1.default, { text: items.categories.length ? items.categories[0] : '' }),
                    React.createElement(ItemsContainers_1.default, null, items.items.map(function (item, index) { return (React.createElement(ItemPreview_1.default, __assign({ key: index, itemDetail: item }, _this.props))); }))))
            : null));
    };
    ItemsListView.propTypes = {};
    return ItemsListView;
}(React.Component));
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var mapDispatchToProps = function (dispatch) {
    return {
        dispatch: dispatch
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ItemsListView);


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

/***/ "./src/components/search/SearchBar.tsx":
/*!*********************************************!*\
  !*** ./src/components/search/SearchBar.tsx ***!
  \*********************************************/
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./search.sass */ "./src/components/search/search.sass");
var items_action_1 = __webpack_require__(/*! ../../actions/items.action */ "./src/actions/items.action.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var SearchBar = (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error: null
        };
        _this._handleKeyDown = function (e) {
            var searchText = _this.props.items.searchText;
            if (searchText.length && e.key === 'Enter') {
                _this._submitSearch(true);
            }
        };
        _this._handleChangeSearch = function (e) {
            _this.props.itemsChangeSearchText(e.target.value);
        };
        _this._submitSearch = function (redirect) {
            _this.props.itemsSearch({ redirect: redirect });
        };
        _this._getQuery = function (params) {
            var urlParams = new URLSearchParams(params);
            return urlParams.get('query') || '';
        };
        return _this;
    }
    SearchBar.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({ error: error });
    };
    SearchBar.prototype.componentDidMount = function () {
        if (!this.props.items.items.length) {
            var searchText = this._getQuery(this.props.location.search);
            this.props.itemsChangeSearchText(searchText);
            this._submitSearch(false);
        }
    };
    SearchBar.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        var props = this.props;
        var searchText = this._getQuery(nextProps.location.search);
        if (!props.items.loading &&
            props.location.search !== nextProps.location.search
            && props.items.searchText !== searchText) {
            this.props.itemsChangeSearchText(searchText);
            this._submitSearch(false);
        }
    };
    SearchBar.prototype.componentWillUnmount = function () {
        if (this.props.items.source) {
            this.props.items.source.cancel('Operation canceled by the user.');
        }
    };
    SearchBar.prototype.render = function () {
        var _this = this;
        var _a = this.props.items, searchText = _a.searchText, loading = _a.loading;
        return (React.createElement("div", { className: "search-bar" },
            React.createElement("div", { className: "input-group" },
                React.createElement("input", { type: "text", value: searchText, className: "form-control", placeholder: "Nunca dejes de buscar", onChange: this._handleChangeSearch, onKeyDown: this._handleKeyDown }),
                React.createElement("div", { className: "input-group-append" },
                    React.createElement("button", { className: "btn btn-search", type: "button", onClick: function () { return _this._submitSearch(true); } },
                        React.createElement("i", { className: "fa fa-search" }))))));
    };
    SearchBar.propTypes = {};
    return SearchBar;
}(React.Component));
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var mapDispatchToProps = function (dispatch) {
    return {
        itemsSearch: function (_a) {
            var redirect = _a.redirect;
            return dispatch(items_action_1.itemsSearch({ redirect: redirect }));
        },
        itemsChangeSearchText: function (searchText) { return dispatch(items_action_1.itemsChangeSearchText(searchText)); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SearchBar);


/***/ }),

/***/ "./src/components/search/search.sass":
/*!*******************************************!*\
  !*** ./src/components/search/search.sass ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/containers/application/Application.tsx":
/*!****************************************************!*\
  !*** ./src/containers/application/Application.tsx ***!
  \****************************************************/
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var react_1 = __webpack_require__(/*! react */ "react");
var Header_1 = __webpack_require__(/*! ../header/Header */ "./src/containers/header/Header.tsx");
__webpack_require__(/*! ./application.sass */ "./src/containers/application/application.sass");
var Application = (function (_super) {
    __extends(Application, _super);
    function Application() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Application.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({ error: error });
    };
    Application.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(react_1.Fragment, null,
            React.createElement(Header_1.default, __assign({}, this.props)),
            children));
    };
    Application.propTypes = {};
    return Application;
}(React.Component));
exports.default = Application;


/***/ }),

/***/ "./src/containers/application/application.sass":
/*!*****************************************************!*\
  !*** ./src/containers/application/application.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/containers/header/Header.tsx":
/*!******************************************!*\
  !*** ./src/containers/header/Header.tsx ***!
  \******************************************/
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var SearchBar_1 = __webpack_require__(/*! ../../components/search/SearchBar */ "./src/components/search/SearchBar.tsx");
__webpack_require__(/*! ./header.sass */ "./src/containers/header/header.sass");
var items_action_1 = __webpack_require__(/*! ../../actions/items.action */ "./src/actions/items.action.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: null
        };
        _this.goHome = function () {
            _this.props.itemsChangeSearchText('');
            _this.props.history.push('/');
        };
        return _this;
    }
    Header.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({ error: error });
    };
    Header.prototype.render = function () {
        return (React.createElement("div", { className: "header" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-2 col-sm-2 col-md-1 col-lg-1 logo" },
                        React.createElement("img", { className: "pointer", src: "/static/images/logo.png", alt: "logo mercado libre", onClick: this.goHome })),
                    React.createElement("div", { className: "col-10 col-sm-10 col-md-11 col-lg-11" },
                        React.createElement(SearchBar_1.default, __assign({}, this.props)))))));
    };
    Header.propTypes = {};
    return Header;
}(React.Component));
var mapStateToProps = function (state) {
    return __assign({}, state);
};
var mapDispatchToProps = function (dispatch) {
    return {
        itemsChangeSearchText: function (searchText) { return dispatch(items_action_1.itemsChangeSearchText(searchText)); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Header);


/***/ }),

/***/ "./src/containers/header/header.sass":
/*!*******************************************!*\
  !*** ./src/containers/header/header.sass ***!
  \*******************************************/
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
var items_reducer_1 = __webpack_require__(/*! ./items.reducer */ "./src/reducers/items.reducer.ts");
var item_reducer_1 = __webpack_require__(/*! ./item.reducer */ "./src/reducers/item.reducer.ts");
exports.default = (function (history) { return redux_1.combineReducers({
    items: items_reducer_1.default,
    item: item_reducer_1.default,
    router: connected_react_router_1.connectRouter(history)
}); });


/***/ }),

/***/ "./src/reducers/item.reducer.ts":
/*!**************************************!*\
  !*** ./src/reducers/item.reducer.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var initialState = {
    item: null,
    category: '',
    loading: false,
    source: null
};
function itemReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case '@item/LOADING':
            return __assign({}, state, { loading: action.payload.loading });
        case '@item/CANCEL_REQUEST':
            return __assign({}, state, { source: action.payload.source });
        case '@item/LOAD':
            return __assign({}, state, { item: action.payload.item, category: action.payload.category || '' });
        default:
            return state;
    }
}
exports.default = itemReducer;


/***/ }),

/***/ "./src/reducers/items.reducer.ts":
/*!***************************************!*\
  !*** ./src/reducers/items.reducer.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var urlParams = new URLSearchParams(window.location.search);
var searchText = urlParams.get('query');
var initialState = {
    categories: [],
    items: [],
    searchText: searchText ? searchText : '',
    loading: false,
    source: null
};
function itemsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case '@items/LOADING':
            return __assign({}, state, { loading: action.payload.loading });
        case '@items/CANCEL_REQUEST':
            return __assign({}, state, { source: action.payload.source });
        case '@items/SEARCH':
            return __assign({}, state, { searchText: action.payload.searchText });
        case '@items/LOAD':
            return __assign({}, state, { items: action.payload.items, categories: action.payload.categories });
        default:
            return state;
    }
}
exports.default = itemsReducer;


/***/ }),

/***/ "./src/services/api.service.ts":
/*!*************************************!*\
  !*** ./src/services/api.service.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var ApiService = (function () {
    function ApiService() {
        this.instance = axios_1.default.create();
        this.CancelToken = axios_1.default.CancelToken;
    }
    ApiService.prototype.errorHandler = function (err) {
        console.log('err', err);
    };
    ApiService.prototype.getSource = function () {
        this.source = this.CancelToken.source();
        return this.source;
    };
    ApiService.prototype.searchItems = function (text) {
        return this.instance.get("/api/items?query=" + text, {
            cancelToken: this.source.token
        });
    };
    ApiService.prototype.getItem = function (id) {
        return this.instance.get("/api/items/" + id, {
            cancelToken: this.source.token
        });
    };
    return ApiService;
}());
exports.default = new ApiService();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaXRlbS5hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaXRlbXMuYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JyZWFkY3J1bWIvQnJlYWRjcnVtYi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaXRlbXMvSXRlbVByZXZpZXcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2l0ZW1zL0l0ZW1zQ29udGFpbmVycy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaXRlbXMvSXRlbXNEZXRhaWxWaWV3LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pdGVtcy9JdGVtc0xpc3RWaWV3LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pdGVtcy9pdGVtcy5zYXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hCYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guc2FzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvYXBwbGljYXRpb24vYXBwbGljYXRpb24uc2FzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9oZWFkZXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9oZWFkZXIvaGVhZGVyLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pdGVtLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2l0ZW1zLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2FwaS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGlzdG9yeS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFD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QUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDO0FBRUQsa0JBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkRoQyx1SUFBMEQ7QUFDMUQsbUZBQW1EO0FBQ25ELG1GQUFrQztBQUNsQyxrSEFBNkM7QUFDN0MscUdBQTBDO0FBQzFDLHlJQUE2RDtBQUM3RCxzRkFBOEM7QUFFakMsZUFBTyxHQUFHLGlCQUFjLENBQUM7QUFFdEMsSUFBTSxjQUFjLEdBQUc7SUFDckIsSUFBSSxTQUFjLENBQUM7SUFDbkIsSUFBTSxXQUFXLEdBQVUsQ0FBQyx5Q0FBZ0IsQ0FBQyxlQUFPLENBQUMsQ0FBQyxDQUFDO0lBRXZELFdBQVcsQ0FBQyxJQUFJLENBQUMseUJBQWMsRUFBRSxDQUFDLENBQUM7SUFDbkMsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBZSxDQUFDLENBQUM7SUFDbEMsSUFBSSxJQUFzQyxFQUFFO1FBQzFDLElBQU0sZ0JBQWdCLEdBQUcsOENBQW1CLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyx1QkFBZSxlQUFJLFdBQVcsRUFBRSxDQUFDO0tBQy9EO1NBQU0sRUFFTjtJQUNELE9BQU8sbUJBQVcsQ0FBQyxrQkFBUSxDQUFDLGVBQU8sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQztBQUVGLGtCQUFlLGNBQWMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekI5Qiw0RkFBK0M7QUFFL0Msa0JBQWUsOEJBQW9CLENBQUM7SUFDbEMsUUFBUSxFQUFFLEVBQUU7Q0FDYixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pILHdCOzs7Ozs7Ozs7OztBQ0FBLHVCOzs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQge0Nvbm5lY3RlZFJvdXRlcn0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUsIHtoaXN0b3J5fSBmcm9tIFwiLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xuaW1wb3J0IHtSb3V0ZSwgUm91dGVDb21wb25lbnRQcm9wcywgU3dpdGNofSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBJdGVtc0xpc3RWaWV3IGZyb20gXCIuL2NvbXBvbmVudHMvaXRlbXMvSXRlbXNMaXN0Vmlld1wiO1xuaW1wb3J0IEl0ZW1zRGV0YWlsVmlldyBmcm9tIFwiLi9jb21wb25lbnRzL2l0ZW1zL0l0ZW1zRGV0YWlsVmlld1wiO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5cbmNvbnN0IE5vTWF0Y2ggPSAoe2xvY2F0aW9ufTogUm91dGVDb21wb25lbnRQcm9wczx7fT4pID0+IChcbiAgPGRpdj5cbiAgICA8aDM+Tm8gbWF0Y2ggZm9yIDxjb2RlPntsb2NhdGlvbi5wYXRobmFtZX08L2NvZGU+PC9oMz5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxDb25uZWN0ZWRSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0l0ZW1zTGlzdFZpZXd9Lz5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvaXRlbXNcIiBjb21wb25lbnQ9e0l0ZW1zTGlzdFZpZXd9Lz5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvaXRlbXMvOmlkXCIgY29tcG9uZW50PXtJdGVtc0RldGFpbFZpZXd9Lz5cbiAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm9NYXRjaH0vPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Db25uZWN0ZWRSb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG4kKCgpID0+IHtcbiAgbW9tZW50LmxvY2FsZSgnZXMnKTtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxBcHAvPixcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJylcbiAgKTtcbn0pO1xuXG4iLCJpbXBvcnQge0Rpc3BhdGNofSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7SVJlZHV4U3RvcmV9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcbmltcG9ydCBBeGlvcywge0F4aW9zRXJyb3IsIEF4aW9zUmVzcG9uc2UsIENhbmNlbFRva2VuU291cmNlfSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7aGlzdG9yeX0gZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XG5pbXBvcnQge0lJdGVtfSBmcm9tIFwiLi9pdGVtcy5hY3Rpb25cIjtcblxuXG5leHBvcnQgaW50ZXJmYWNlIElJdGVtU3RhdGUge1xuICBpdGVtOiBJSXRlbSB8IG51bGw7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIHNvdXJjZTogQ2FuY2VsVG9rZW5Tb3VyY2UgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgSUl0ZW1Mb2FkaW5nIHtcbiAgdHlwZTogJ0BpdGVtL0xPQURJTkcnO1xuICBwYXlsb2FkOiB7XG4gICAgbG9hZGluZzogYm9vbGVhbjtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGl0ZW1Mb2FkaW5nKGxvYWRpbmc6IGJvb2xlYW4pOiBJSXRlbUxvYWRpbmcge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdAaXRlbS9MT0FESU5HJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBsb2FkaW5nXG4gICAgfVxuICB9O1xufVxuXG5cbmludGVyZmFjZSBJSXRlbUNhbmNlbFJlcXVlc3Qge1xuICB0eXBlOiAnQGl0ZW0vQ0FOQ0VMX1JFUVVFU1QnO1xuICBwYXlsb2FkOiB7XG4gICAgc291cmNlOiBDYW5jZWxUb2tlblNvdXJjZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGl0ZW1DYW5jZWxSZXF1ZXN0KHNvdXJjZTogQ2FuY2VsVG9rZW5Tb3VyY2UpOiBJSXRlbUNhbmNlbFJlcXVlc3Qge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdAaXRlbS9DQU5DRUxfUkVRVUVTVCcsXG4gICAgcGF5bG9hZDoge1xuICAgICAgc291cmNlXG4gICAgfVxuICB9O1xufVxuXG5pbnRlcmZhY2UgSUl0ZW1Mb2FkIHtcbiAgdHlwZTogJ0BpdGVtL0xPQUQnO1xuICBwYXlsb2FkOiB7XG4gICAgaXRlbTogSUl0ZW07XG4gICAgY2F0ZWdvcnk6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGl0ZW1Mb2FkKGl0ZW06IElJdGVtLCBjYXRlZ29yeTpzdHJpbmcpOiBJSXRlbUxvYWQge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdAaXRlbS9MT0FEJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBpdGVtLFxuICAgICAgY2F0ZWdvcnlcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpdGVtR2V0KGlkOiBzdHJpbmcsIHJlZGlyZWN0Pzpib29sZWFuKSB7XG4gIHJldHVybiAoXG4gICAgZGlzcGF0Y2g6IERpc3BhdGNoPEl0ZW1SZWR1eEFjdGlvbnM+LCBnZXRTdGF0ZTogKCkgPT4gSVJlZHV4U3RvcmVcbiAgKSA9PiB7XG4gICAgZGlzcGF0Y2goaXRlbUxvYWRpbmcodHJ1ZSkpO1xuICAgIGRpc3BhdGNoKGl0ZW1DYW5jZWxSZXF1ZXN0KEFwaVNlcnZpY2UuZ2V0U291cmNlKCkpKTtcbiAgICBOUHJvZ3Jlc3MuY29uZmlndXJlKHsgZWFzaW5nOiAnZWFzZScsIHNwZWVkOiA1MDAsIHNob3dTcGlubmVyOiBmYWxzZSB9KTtcbiAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICBBcGlTZXJ2aWNlXG4gICAgICAuZ2V0SXRlbShpZClcbiAgICAgIC50aGVuKChyZXNwb25zZTogQXhpb3NSZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCB7aXRlbSwgY2F0ZWdvcnl9ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgZGlzcGF0Y2goaXRlbUxvYWQoaXRlbSwgY2F0ZWdvcnkpKTtcbiAgICAgICAgaWYoaXRlbSl7XG4gICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBgTWVyY2FkbyBMaWJyZSB8ICR7aXRlbS50aXRsZX1gO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoKGl0ZW1Mb2FkaW5nKGZhbHNlKSk7XG4gICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgIGhpc3RvcnkucHVzaChgL2l0ZW1zLyR7aWR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgTlByb2dyZXNzLmRvbmUoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycjogQXhpb3NFcnJvcikgPT4ge1xuICAgICAgICBpZiAoIUF4aW9zLmlzQ2FuY2VsKGVycikpIHtcbiAgICAgICAgICBBcGlTZXJ2aWNlLmVycm9ySGFuZGxlcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICAgIGRpc3BhdGNoKGl0ZW1Mb2FkaW5nKGZhbHNlKSk7XG4gICAgICB9KVxuICB9XG59XG5cblxuXG5leHBvcnQgdHlwZSBJdGVtUmVkdXhBY3Rpb25zID1cbiAgSUl0ZW1DYW5jZWxSZXF1ZXN0IHxcbiAgSUl0ZW1Mb2FkIHxcbiAgSUl0ZW1Mb2FkaW5nOyIsImltcG9ydCB7RGlzcGF0Y2h9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0ICogYXMgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcbmltcG9ydCB7SVJlZHV4U3RvcmV9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IEF4aW9zLCB7QXhpb3NFcnJvciwgQXhpb3NSZXNwb25zZSwgQ2FuY2VsVG9rZW5Tb3VyY2V9IGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtoaXN0b3J5fSBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJSXRlbSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHByaWNlOiB7XG4gICAgY3VycmVuY3k6IHN0cmluZztcbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgICBkZWNpbWFsczogbnVtYmVyXG4gIH07XG4gIHBpY3R1cmU6IHN0cmluZztcbiAgY29uZGl0aW9uOiBzdHJpbmc7XG4gIGZyZWVfc2hpcHBpbmc6IGJvb2xlYW47XG4gIC8vIG9ubHkgaW4gc2VhcmNoXG4gIGxvY2F0aW9uPzogc3RyaW5nLFxuICAvLyBvbmx5IGluIGRldGFpbFxuICBzb2xkX3F1YW50aXR5PzogbnVtYmVyLFxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUl0ZW1zU3RhdGUge1xuICBjYXRlZ29yaWVzOiBzdHJpbmdbXTtcbiAgaXRlbXM6IEFycmF5PElJdGVtPjtcbiAgc2VhcmNoVGV4dDogc3RyaW5nO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBzb3VyY2U6IENhbmNlbFRva2VuU291cmNlIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIElJdGVtc0xvYWRpbmcge1xuICB0eXBlOiAnQGl0ZW1zL0xPQURJTkcnO1xuICBwYXlsb2FkOiB7XG4gICAgbG9hZGluZzogYm9vbGVhbjtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGl0ZW1zTG9hZGluZyhsb2FkaW5nOiBib29sZWFuKTogSUl0ZW1zTG9hZGluZyB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0BpdGVtcy9MT0FESU5HJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBsb2FkaW5nXG4gICAgfVxuICB9O1xufVxuXG5cbmludGVyZmFjZSBJSXRlbXNDYW5jZWxSZXF1ZXN0IHtcbiAgdHlwZTogJ0BpdGVtcy9DQU5DRUxfUkVRVUVTVCc7XG4gIHBheWxvYWQ6IHtcbiAgICBzb3VyY2U6IENhbmNlbFRva2VuU291cmNlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXRlbXNDYW5jZWxSZXF1ZXN0KHNvdXJjZTogQ2FuY2VsVG9rZW5Tb3VyY2UpOiBJSXRlbXNDYW5jZWxSZXF1ZXN0IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQGl0ZW1zL0NBTkNFTF9SRVFVRVNUJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBzb3VyY2VcbiAgICB9XG4gIH07XG59XG5cbmludGVyZmFjZSBJSXRlbXNTZWFyY2gge1xuICB0eXBlOiAnQGl0ZW1zL1NFQVJDSCc7XG4gIHBheWxvYWQ6IHtcbiAgICBzZWFyY2hUZXh0OiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpdGVtc0NoYW5nZVNlYXJjaFRleHQoc2VhcmNoVGV4dDogc3RyaW5nKTogSUl0ZW1zU2VhcmNoIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQGl0ZW1zL1NFQVJDSCcsXG4gICAgcGF5bG9hZDoge1xuICAgICAgc2VhcmNoVGV4dFxuICAgIH1cbiAgfTtcbn1cblxuXG5pbnRlcmZhY2UgSUl0ZW1zTG9hZCB7XG4gIHR5cGU6ICdAaXRlbXMvTE9BRCc7XG4gIHBheWxvYWQ6IHtcbiAgICBpdGVtczogQXJyYXk8SUl0ZW0+O1xuICAgIGNhdGVnb3JpZXM6IHN0cmluZ1tdO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXRlbXNMb2FkKGl0ZW1zOiBBcnJheTxJSXRlbT4sIGNhdGVnb3JpZXM6IHN0cmluZ1tdKTogSUl0ZW1zTG9hZCB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0BpdGVtcy9MT0FEJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBpdGVtcyxcbiAgICAgIGNhdGVnb3JpZXNcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpdGVtc1NlYXJjaCh7cmVkaXJlY3R9OiB7IHJlZGlyZWN0OiBib29sZWFuIH0pIHtcbiAgcmV0dXJuIChcbiAgICBkaXNwYXRjaDogRGlzcGF0Y2g8SXRlbXNSZWR1eEFjdGlvbnM+LCBnZXRTdGF0ZTogKCkgPT4gSVJlZHV4U3RvcmVcbiAgKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHtzZWFyY2hUZXh0fSA9IHN0YXRlLml0ZW1zO1xuICAgIGlmIChzZWFyY2hUZXh0Lmxlbmd0aCkge1xuICAgICAgTlByb2dyZXNzLmNvbmZpZ3VyZSh7IGVhc2luZzogJ2Vhc2UnLCBzcGVlZDogNTAwLCBzaG93U3Bpbm5lcjogZmFsc2UgfSk7XG4gICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gYE1lcmNhZG8gTGlicmUgfCBCdXNjYW5kbyAke3NlYXJjaFRleHR9YDtcbiAgICAgIGRpc3BhdGNoKGl0ZW1zTG9hZGluZyh0cnVlKSk7XG4gICAgICBkaXNwYXRjaChpdGVtc0NhbmNlbFJlcXVlc3QoQXBpU2VydmljZS5nZXRTb3VyY2UoKSkpO1xuICAgICAgQXBpU2VydmljZVxuICAgICAgICAuc2VhcmNoSXRlbXMoc2VhcmNoVGV4dClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICBwYXRobmFtZTogJy9pdGVtcycsXG4gICAgICAgICAgICAgIHNlYXJjaDogYD9xdWVyeT0ke3NlYXJjaFRleHR9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXNwYXRjaChpdGVtc0xvYWQocmVzcG9uc2UuZGF0YS5pdGVtcywgcmVzcG9uc2UuZGF0YS5jYXRlZ29yaWVzKSk7XG4gICAgICAgICAgTlByb2dyZXNzLmRvbmUoKTtcbiAgICAgICAgICBkaXNwYXRjaChpdGVtc0xvYWRpbmcoZmFsc2UpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnI6IEF4aW9zRXJyb3IpID0+IHtcbiAgICAgICAgICBpZiAoIUF4aW9zLmlzQ2FuY2VsKGVycikpIHtcbiAgICAgICAgICAgIEFwaVNlcnZpY2UuZXJyb3JIYW5kbGVyKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICAgICAgZGlzcGF0Y2goaXRlbXNMb2FkaW5nKGZhbHNlKSk7XG4gICAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cblxuZXhwb3J0IHR5cGUgSXRlbXNSZWR1eEFjdGlvbnMgPVxuICBJSXRlbXNDYW5jZWxSZXF1ZXN0IHxcbiAgSUl0ZW1zU2VhcmNoIHxcbiAgSUl0ZW1zTG9hZCB8XG4gIElJdGVtc0xvYWRpbmc7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFcnJvckluZm99IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgJy4vYnJlYWRjcnVtYi5zYXNzJ1xuaW50ZXJmYWNlIElTdGF0ZVR5cGUge1xuICBlcnJvcjogRXJyb3IgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzVHlwZSB7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJlYWRjcnVtYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHNUeXBlLCBJU3RhdGVUeXBlPiB7XG5cbiAgcmVhZG9ubHkgc3RhdGUgPSB7XG4gICAgZXJyb3I6IG51bGxcbiAgfTtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge307XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wc1R5cGUpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBlcnJvckluZm86IEVycm9ySW5mbykge1xuICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudDxJUHJvcHNUeXBlPiB7XG4gICAgY29uc3Qge3RleHR9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBzZWFyY2ggPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuc3RhdGUnLCB0aGlzLnN0YXRlKTtcbiAgfVxufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTY0NDI0NDAzNjA2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RXJyb3JJbmZvfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1JvdXRlQ29tcG9uZW50UHJvcHN9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7SUl0ZW19IGZyb20gXCIuLi8uLi9hY3Rpb25zL2l0ZW1zLmFjdGlvblwiO1xuXG5pbXBvcnQgJy4vaXRlbXMuc2Fzcyc7XG5pbXBvcnQge0lSZWR1eFN0b3JlfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcbmltcG9ydCB7aXRlbUdldCwgSXRlbVJlZHV4QWN0aW9uc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvaXRlbS5hY3Rpb25cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmludGVyZmFjZSBJU3RhdGVUeXBlIHtcbiAgZXJyb3I6IEVycm9yIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIElQcm9wc1R5cGUgZXh0ZW5kcyBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PiwgSVJlZHV4U3RvcmUge1xuICBpdGVtR2V0KGlkOiBzdHJpbmcsIHJlZGlyZWN0OiBib29sZWFuKTogSXRlbVJlZHV4QWN0aW9ucztcbiAgaXRlbURldGFpbDogSUl0ZW07XG59XG5cbmNsYXNzIEl0ZW1QcmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wc1R5cGUsIElTdGF0ZVR5cGU+IHtcblxuICByZWFkb25seSBzdGF0ZSA9IHtcbiAgICBlcnJvcjogbnVsbFxuICB9O1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7fTtcblxuICBwdWJsaWMgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBlcnJvckluZm86IEVycm9ySW5mbykge1xuICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudDxJUHJvcHNUeXBlPiB7XG4gICAgY29uc3Qge2l0ZW1EZXRhaWx9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXByZXZpZXdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRodW1ibmFpbCBwb2ludGVyXCJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW1EZXRhaWwucGljdHVyZX1cbiAgICAgICAgICAgICAgICBhbHQ9e2l0ZW1EZXRhaWwudGl0bGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5faGFuZGxlR29Ub0RldGFpbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9oYW5kbGVHb1RvRGV0YWlsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMyBwb2ludGVyXCJcbiAgICAgICAgICAgICAgICA+JCB7dGhpcy5mb3JtYXROdW1iZXIoaXRlbURldGFpbC5wcmljZS5hbW91bnQpfSB7XG4gICAgICAgICAgICAgICAgICBpdGVtRGV0YWlsLmZyZWVfc2hpcHBpbmdcbiAgICAgICAgICAgICAgICAgICAgPyA8aSBjbGFzc05hbWU9XCJmYSBmYS1jZXJ0aWZpY2F0ZSB0ZXh0LXN1Y2Nlc3NcIi8+XG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH0gPC9oNT5cbiAgICAgICAgICAgICAgICB7aXRlbURldGFpbC50aXRsZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGQtbm9uZSBkLW1kLWJsb2NrIFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LW11dGVkIHRleHQtbG9jYXRpb25cIj57aXRlbURldGFpbC5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlR29Ub0RldGFpbCA9ICgpID0+e1xuICAgIGNvbnN0IHtpdGVtRGV0YWlsfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5wcm9wcy5pdGVtR2V0KGl0ZW1EZXRhaWwuaWQsIHRydWUpXG4gIH07XG5cbiAgcHJpdmF0ZSBmb3JtYXROdW1iZXIgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEuJylcbiAgfVxufVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBJUmVkdXhTdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoIGRpc3BhdGNoOiBhbnkpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBkaXNwYXRjaCxcbiAgICBpdGVtR2V0OiAoaWQ6IHN0cmluZywgcmVkaXJlY3Q6IGJvb2xlYW4pID0+IGRpc3BhdGNoKGl0ZW1HZXQoaWQsIHJlZGlyZWN0KSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgSVByb3BzVHlwZSwgSVJlZHV4U3RvcmU+KFxuICBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShJdGVtUHJldmlldyk7XG5cblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFcnJvckluZm99IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL2l0ZW1zLnNhc3MnO1xuXG5pbnRlcmZhY2UgSVN0YXRlVHlwZSB7XG4gIGVycm9yOiBFcnJvciB8IG51bGw7XG59XG5cbmludGVyZmFjZSBJUHJvcHNUeXBlIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1zQ29udGFpbmVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHNUeXBlLCBJU3RhdGVUeXBlPiB7XG5cbiAgcmVhZG9ubHkgc3RhdGUgPSB7XG4gICAgZXJyb3I6IG51bGxcbiAgfTtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge307XG5cbiAgcHVibGljIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgZXJyb3JJbmZvOiBFcnJvckluZm8pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlcnJvcn0pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8SVByb3BzVHlwZT4ge1xuICAgIGNvbnN0IHtjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNvbnRhaW5lclwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RXJyb3JJbmZvLCBGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gXCIuLi8uLi9jb250YWluZXJzL2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tIFwiLi4vYnJlYWRjcnVtYi9CcmVhZGNydW1iXCI7XG5pbXBvcnQge1JvdXRlQ29tcG9uZW50UHJvcHN9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7SVJlZHV4U3RvcmV9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7SXRlbXNSZWR1eEFjdGlvbnN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2l0ZW1zLmFjdGlvblwiO1xuXG5pbXBvcnQgJy4vaXRlbXMuc2Fzcyc7XG5pbXBvcnQge2l0ZW1HZXQsIEl0ZW1SZWR1eEFjdGlvbnN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2l0ZW0uYWN0aW9uXCI7XG5cbmludGVyZmFjZSBJU3RhdGVUeXBlIHtcbiAgZXJyb3I6IEVycm9yIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIElQcm9wc1R5cGUgZXh0ZW5kcyBJUmVkdXhTdG9yZSwgUm91dGVDb21wb25lbnRQcm9wczx7aWQ6IHN0cmluZ30+IHtcbiAgaXRlbUdldChpZDogc3RyaW5nKTogSXRlbVJlZHV4QWN0aW9ucztcbiAgaXRlbXNTZWFyY2goe3JlZGlyZWN0fTogeyByZWRpcmVjdDogYm9vbGVhbiB9KTogSXRlbXNSZWR1eEFjdGlvbnM7XG4gIGl0ZW1zQ2hhbmdlU2VhcmNoVGV4dChzZWFyY2hUZXh0OiBzdHJpbmcpOiBJdGVtc1JlZHV4QWN0aW9ucztcbn1cblxuY2xhc3MgSXRlbXNEZXRhaWxWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wc1R5cGUsIElTdGF0ZVR5cGU+IHtcblxuICByZWFkb25seSBzdGF0ZSA9IHtcbiAgICBlcnJvcjogbnVsbFxuICB9O1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7fTtcblxuICBwdWJsaWMgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBlcnJvckluZm86IEVycm9ySW5mbykge1xuICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yfSk7XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXRlbS5zb3VyY2UpIHtcbiAgICAgIHRoaXMucHJvcHMuaXRlbS5zb3VyY2UuY2FuY2VsKCdPcGVyYXRpb24gY2FuY2VsZWQgYnkgdGhlIHVzZXIuJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHtpdGVtfSA9IHRoaXMucHJvcHMuaXRlbTtcbiAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXM7XG4gICAgaWYgKCFpdGVtIHx8IChpdGVtICYmIGl0ZW0uaWQgIT0gaWQpKSB7XG4gICAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXM7XG4gICAgICB0aGlzLnByb3BzLml0ZW1HZXQoaWQpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8SVByb3BzVHlwZT4ge1xuICAgIGNvbnN0IHtpdGVtfSA9IHRoaXMucHJvcHMuaXRlbTtcbiAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcHBsaWNhdGlvbiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaXRlbSAmJiBpdGVtLmlkID09IGlkXG4gICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iIHRleHQ9e2l0ZW0uY2F0ZWdvcnl9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aHVtYm5haWwgZGV0YWlsIHBvaW50ZXIgcGItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ucGljdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNT5EZXNjcmlwY2nDs24gZGVsIHByb2R1Y3RvPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uZGVzY3JpcHRpb24uc3BsaXQoJ1xcbicpLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD57aXRlbX08YnIvPjwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNCBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29uZGl0aW9ufSAtIHtpdGVtLnNvbGRfcXVhbnRpdHl9IHZlbmRpZG9zXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNT57aXRlbS50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC0zXCI+JCB7dGhpcy5mb3JtYXROdW1iZXIoaXRlbS5wcmljZS5hbW91bnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlY2ltYWwgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJpY2UuZGVjaW1hbHMgPyBpdGVtLnByaWNlLmRlY2ltYWxzIDogJzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIG10LTQgIG1iLTRcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXByYXJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQXBwbGljYXRpb24+XG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXROdW1iZXIgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEuJylcbiAgfVxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSVJlZHV4U3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZVxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKCBkaXNwYXRjaDogYW55KSA9PiB7XG4gIHJldHVybiB7XG4gICAgZGlzcGF0Y2gsXG4gICAgaXRlbUdldDogKGlkOiBzdHJpbmcpID0+IGRpc3BhdGNoKGl0ZW1HZXQoaWQpKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBJUHJvcHNUeXBlLCBJUmVkdXhTdG9yZT4oXG4gIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEl0ZW1zRGV0YWlsVmlldyk7XG5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RXJyb3JJbmZvLCBGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gXCIuLi8uLi9jb250YWluZXJzL2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tIFwiLi4vYnJlYWRjcnVtYi9CcmVhZGNydW1iXCI7XG5pbXBvcnQgSXRlbXNDb250YWluZXJzIGZyb20gXCIuL0l0ZW1zQ29udGFpbmVyc1wiO1xuaW1wb3J0IEl0ZW1QcmV2aWV3IGZyb20gXCIuL0l0ZW1QcmV2aWV3XCI7XG5pbXBvcnQge1JvdXRlQ29tcG9uZW50UHJvcHN9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7SVJlZHV4U3RvcmV9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7SXRlbXNSZWR1eEFjdGlvbnN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2l0ZW1zLmFjdGlvblwiO1xuXG5pbXBvcnQgJy4vaXRlbXMuc2Fzcyc7XG5pbXBvcnQge0l0ZW1SZWR1eEFjdGlvbnN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2l0ZW0uYWN0aW9uXCI7XG5cbmludGVyZmFjZSBJU3RhdGVUeXBlIHtcbiAgZXJyb3I6IEVycm9yIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIElQcm9wc1R5cGUgZXh0ZW5kcyBJUmVkdXhTdG9yZSwgUm91dGVDb21wb25lbnRQcm9wczx7fT4ge1xuICBpdGVtR2V0KGlkOiBzdHJpbmcpOiBJdGVtUmVkdXhBY3Rpb25zO1xuICBpdGVtc1NlYXJjaCgpOiBJdGVtc1JlZHV4QWN0aW9ucztcbiAgaXRlbXNTZWFyY2goe3JlZGlyZWN0fTogeyByZWRpcmVjdDogYm9vbGVhbiB9KTogSXRlbXNSZWR1eEFjdGlvbnM7XG4gIGl0ZW1zQ2hhbmdlU2VhcmNoVGV4dChzZWFyY2hUZXh0OiBzdHJpbmcpOiBJdGVtc1JlZHV4QWN0aW9ucztcbn1cblxuY2xhc3MgSXRlbXNMaXN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHNUeXBlLCBJU3RhdGVUeXBlPiB7XG5cbiAgcmVhZG9ubHkgc3RhdGUgPSB7XG4gICAgZXJyb3I6IG51bGxcbiAgfTtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge307XG5cbiAgcHVibGljIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgZXJyb3JJbmZvOiBFcnJvckluZm8pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlcnJvcn0pO1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIGRvY3VtZW50LnRpdGxlID0gYE1lcmNhZG8gTGlicmVgO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8SVByb3BzVHlwZT4ge1xuICAgIGNvbnN0IHtpdGVtcywgcm91dGVyfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcHBsaWNhdGlvbiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHtcbiAgICAgICAgICByb3V0ZXIubG9jYXRpb24gJiYgcm91dGVyLmxvY2F0aW9uLnNlYXJjaC5sZW5ndGggP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iIHRleHQ9e2l0ZW1zLmNhdGVnb3JpZXMubGVuZ3RoID8gaXRlbXMuY2F0ZWdvcmllc1swXSA6ICcnfS8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zQ29udGFpbmVycz5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtUHJldmlldyBrZXk9e2luZGV4fSBpdGVtRGV0YWlsPXtpdGVtfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0l0ZW1zQ29udGFpbmVycz5cbiAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L0FwcGxpY2F0aW9uPlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElSZWR1eFN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGVcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9ICggZGlzcGF0Y2g6IGFueSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGRpc3BhdGNoXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgSVByb3BzVHlwZSwgSVJlZHV4U3RvcmU+KFxuICBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShJdGVtc0xpc3RWaWV3KTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2NDQyNDQwMzc1NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Vycm9ySW5mb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZUNvbXBvbmVudFByb3BzfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgJy4vc2VhcmNoLnNhc3MnXG5pbXBvcnQge0lSZWR1eFN0b3JlfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcbmltcG9ydCB7aXRlbXNDaGFuZ2VTZWFyY2hUZXh0LCBJdGVtc1JlZHV4QWN0aW9ucywgaXRlbXNTZWFyY2h9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2l0ZW1zLmFjdGlvblwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW50ZXJmYWNlIElTdGF0ZVR5cGUge1xuICBlcnJvcjogRXJyb3IgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzVHlwZSBleHRlbmRzIElSZWR1eFN0b3JlICxSb3V0ZUNvbXBvbmVudFByb3BzPHt9PntcbiAgaXRlbXNTZWFyY2goe3JlZGlyZWN0fTogeyByZWRpcmVjdDogYm9vbGVhbiB9KTogSXRlbXNSZWR1eEFjdGlvbnM7XG4gIGl0ZW1zQ2hhbmdlU2VhcmNoVGV4dChzZWFyY2hUZXh0OiBzdHJpbmcpOiBJdGVtc1JlZHV4QWN0aW9ucztcbn1cblxuY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wc1R5cGUsIElTdGF0ZVR5cGU+IHtcblxuICByZWFkb25seSBzdGF0ZSA9IHtcbiAgICBlcnJvcjogbnVsbFxuICB9O1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzVHlwZSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogRXJyb3JJbmZvKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3J9KTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICBpZighdGhpcy5wcm9wcy5pdGVtcy5pdGVtcy5sZW5ndGgpe1xuICAgICAgY29uc3Qgc2VhcmNoVGV4dCA9IHRoaXMuX2dldFF1ZXJ5KHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgIHRoaXMucHJvcHMuaXRlbXNDaGFuZ2VTZWFyY2hUZXh0KHNlYXJjaFRleHQpO1xuICAgICAgdGhpcy5fc3VibWl0U2VhcmNoKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFJlYWRvbmx5PElQcm9wc1R5cGU+LCBuZXh0Q29udGV4dDogYW55KTogdm9pZCB7XG4gICAgY29uc3Qge3Byb3BzfSA9IHRoaXM7XG4gICAgY29uc3Qgc2VhcmNoVGV4dCA9IHRoaXMuX2dldFF1ZXJ5KG5leHRQcm9wcy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIGlmICghcHJvcHMuaXRlbXMubG9hZGluZyAmJlxuICAgICAgcHJvcHMubG9jYXRpb24uc2VhcmNoICE9PSBuZXh0UHJvcHMubG9jYXRpb24uc2VhcmNoXG4gICAgICAmJiBwcm9wcy5pdGVtcy5zZWFyY2hUZXh0ICE9PSBzZWFyY2hUZXh0XG4gICAgKXtcbiAgICAgIHRoaXMucHJvcHMuaXRlbXNDaGFuZ2VTZWFyY2hUZXh0KHNlYXJjaFRleHQpO1xuICAgICAgdGhpcy5fc3VibWl0U2VhcmNoKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXRlbXMuc291cmNlKSB7XG4gICAgICB0aGlzLnByb3BzLml0ZW1zLnNvdXJjZS5jYW5jZWwoJ09wZXJhdGlvbiBjYW5jZWxlZCBieSB0aGUgdXNlci4nKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudDxJUHJvcHNUeXBlPiB7XG4gICAgY29uc3QgeyBzZWFyY2hUZXh0LCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzLml0ZW1zO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOdW5jYSBkZWplcyBkZSBidXNjYXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUNoYW5nZVNlYXJjaH1cbiAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5faGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2VhcmNoXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLl9zdWJtaXRTZWFyY2godHJ1ZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHtzZWFyY2hUZXh0fSA9IHRoaXMucHJvcHMuaXRlbXM7XG4gICAgaWYgKHNlYXJjaFRleHQubGVuZ3RoICYmIGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLl9zdWJtaXRTZWFyY2godHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgX2hhbmRsZUNoYW5nZVNlYXJjaCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT57XG4gICAgICB0aGlzLnByb3BzLml0ZW1zQ2hhbmdlU2VhcmNoVGV4dChlLnRhcmdldC52YWx1ZSlcbiAgfTtcblxuICBwcml2YXRlIF9zdWJtaXRTZWFyY2ggPSAocmVkaXJlY3Q6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICB0aGlzLnByb3BzLml0ZW1zU2VhcmNoKHtyZWRpcmVjdH0pO1xuICB9O1xuXG4gIHByaXZhdGUgX2dldFF1ZXJ5ID0gKHBhcmFtczogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpO1xuICAgIHJldHVybiB1cmxQYXJhbXMuZ2V0KCdxdWVyeScpIHx8ICcnO1xuICB9O1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElSZWR1eFN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGVcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9ICggZGlzcGF0Y2g6IGFueSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGl0ZW1zU2VhcmNoOiAoe3JlZGlyZWN0fTogeyByZWRpcmVjdDogYm9vbGVhbiB9KSA9PiBkaXNwYXRjaChpdGVtc1NlYXJjaCh7cmVkaXJlY3R9KSksXG4gICAgaXRlbXNDaGFuZ2VTZWFyY2hUZXh0OiAoc2VhcmNoVGV4dDogc3RyaW5nKSA9PiBkaXNwYXRjaChpdGVtc0NoYW5nZVNlYXJjaFRleHQoc2VhcmNoVGV4dCkpLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIElQcm9wc1R5cGUsIElSZWR1eFN0b3JlPihcbiAgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHNcbikoU2VhcmNoQmFyKTtcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTY0NDI0NDAzNzA0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RXJyb3JJbmZvLCBGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vaGVhZGVyL0hlYWRlclwiO1xuXG5pbXBvcnQgJy4vYXBwbGljYXRpb24uc2Fzcyc7XG5pbXBvcnQge1JvdXRlQ29tcG9uZW50UHJvcHN9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7SXRlbXNSZWR1eEFjdGlvbnN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2l0ZW1zLmFjdGlvblwiO1xuaW1wb3J0IHtJUmVkdXhTdG9yZX0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XG5cbmludGVyZmFjZSBJU3RhdGVUeXBlIHtcbiAgZXJyb3I6IEVycm9yIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIElQcm9wc1R5cGUgZXh0ZW5kcyBJUmVkdXhTdG9yZSwgUm91dGVDb21wb25lbnRQcm9wczx7fT4ge1xuICBpdGVtc1NlYXJjaCh7cmVkaXJlY3R9OiB7IHJlZGlyZWN0OiBib29sZWFuIH0pOiBJdGVtc1JlZHV4QWN0aW9ucztcbiAgaXRlbXNDaGFuZ2VTZWFyY2hUZXh0KHNlYXJjaFRleHQ6IHN0cmluZyk6IEl0ZW1zUmVkdXhBY3Rpb25zO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHNUeXBlLCBJU3RhdGVUeXBlPiB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHt9O1xuXG4gIHB1YmxpYyBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogRXJyb3JJbmZvKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3J9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3RFbGVtZW50PElQcm9wc1R5cGU+IHtcbiAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8SGVhZGVyIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTY0NDI0NDAzNjg4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWFyY2gvU2VhcmNoQmFyXCI7XG5cbmltcG9ydCAnLi9oZWFkZXIuc2FzcydcbmltcG9ydCB7RXJyb3JJbmZvfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Um91dGVDb21wb25lbnRQcm9wc30gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHtJUmVkdXhTdG9yZX0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XG5pbXBvcnQge2l0ZW1zQ2hhbmdlU2VhcmNoVGV4dCwgSXRlbXNSZWR1eEFjdGlvbnMsIGl0ZW1zU2VhcmNofSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9pdGVtcy5hY3Rpb25cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmludGVyZmFjZSBJU3RhdGVUeXBlIHtcbiAgZXJyb3I6IEVycm9yIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIElQcm9wc1R5cGUgZXh0ZW5kcyBJUmVkdXhTdG9yZSAsUm91dGVDb21wb25lbnRQcm9wczx7fT57XG4gIGl0ZW1zU2VhcmNoKHtyZWRpcmVjdH06IHsgcmVkaXJlY3Q6IGJvb2xlYW4gfSk6IEl0ZW1zUmVkdXhBY3Rpb25zO1xuICBpdGVtc0NoYW5nZVNlYXJjaFRleHQoc2VhcmNoVGV4dDogc3RyaW5nKTogSXRlbXNSZWR1eEFjdGlvbnM7XG59XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHNUeXBlLCBJU3RhdGVUeXBlPiB7XG5cbiAgcmVhZG9ubHkgc3RhdGUgPSB7XG4gICAgZXJyb3I6IG51bGxcbiAgfTtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge307XG5cbiAgcHVibGljIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgZXJyb3JJbmZvOiBFcnJvckluZm8pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlcnJvcn0pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8SVByb3BzVHlwZT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yIGNvbC1zbS0yIGNvbC1tZC0xIGNvbC1sZy0xIGxvZ29cIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIG1lcmNhZG8gbGlicmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ29Ib21lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtc20tMTAgY29sLW1kLTExIGNvbC1sZy0xMVwiPlxuICAgICAgICAgICAgICA8U2VhcmNoQmFyIHsuLi50aGlzLnByb3BzfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBwcml2YXRlIGdvSG9tZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLml0ZW1zQ2hhbmdlU2VhcmNoVGV4dCgnJyk7XG4gICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKVxuICB9XG59XG5cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElSZWR1eFN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGVcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9ICggZGlzcGF0Y2g6IGFueSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGl0ZW1zQ2hhbmdlU2VhcmNoVGV4dDogKHNlYXJjaFRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goaXRlbXNDaGFuZ2VTZWFyY2hUZXh0KHNlYXJjaFRleHQpKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBJUHJvcHNUeXBlLCBJUmVkdXhTdG9yZT4oXG4gIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEhlYWRlcik7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NjQ0MjQ0MDM2NzFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL3Nydi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHtjb25uZWN0Um91dGVyfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcbmltcG9ydCBpdGVtc1JlZHVjZXIgZnJvbSAnLi9pdGVtcy5yZWR1Y2VyJztcbmltcG9ydCBpdGVtUmVkdWNlciBmcm9tICcuL2l0ZW0ucmVkdWNlcic7XG5pbXBvcnQge0lJdGVtc1N0YXRlfSBmcm9tIFwiLi4vYWN0aW9ucy9pdGVtcy5hY3Rpb25cIjtcbmltcG9ydCB7Um91dGVyU3RhdGV9IGZyb20gXCJyZWFjdC1yb3V0ZXItcmVkdXhcIjtcbmltcG9ydCB7SUl0ZW1TdGF0ZX0gZnJvbSBcIi4uL2FjdGlvbnMvaXRlbS5hY3Rpb25cIjtcblxuXG5leHBvcnQgaW50ZXJmYWNlIElSZWR1eFN0b3JlIHtcbiAgaXRlbXM6IElJdGVtc1N0YXRlO1xuICBpdGVtOiBJSXRlbVN0YXRlO1xuICByb3V0ZXI6IFJvdXRlclN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoaGlzdG9yeTogYW55KSA9PiBjb21iaW5lUmVkdWNlcnM8SVJlZHV4U3RvcmU+KHtcbiAgaXRlbXM6IGl0ZW1zUmVkdWNlcixcbiAgaXRlbTogaXRlbVJlZHVjZXIsXG4gIHJvdXRlcjogY29ubmVjdFJvdXRlcihoaXN0b3J5KVxufSk7XG4iLCJpbXBvcnQge0lJdGVtU3RhdGUsIEl0ZW1SZWR1eEFjdGlvbnN9IGZyb20gXCIuLi9hY3Rpb25zL2l0ZW0uYWN0aW9uXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSUl0ZW1TdGF0ZSA9IHtcbiAgaXRlbTogbnVsbCxcbiAgY2F0ZWdvcnk6ICcnLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgc291cmNlOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpdGVtUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBJdGVtUmVkdXhBY3Rpb25zKTogSUl0ZW1TdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdAaXRlbS9MT0FESU5HJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ucGF5bG9hZC5sb2FkaW5nXG4gICAgICB9O1xuICAgIGNhc2UgJ0BpdGVtL0NBTkNFTF9SRVFVRVNUJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzb3VyY2U6IGFjdGlvbi5wYXlsb2FkLnNvdXJjZVxuICAgICAgfTtcbiAgICBjYXNlICdAaXRlbS9MT0FEJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGVtOiBhY3Rpb24ucGF5bG9hZC5pdGVtLFxuICAgICAgICBjYXRlZ29yeTogYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnkgfHwgJydcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCB7SUl0ZW1zU3RhdGUsIEl0ZW1zUmVkdXhBY3Rpb25zfSBmcm9tIFwiLi4vYWN0aW9ucy9pdGVtcy5hY3Rpb25cIjtcblxuY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbmNvbnN0IHNlYXJjaFRleHQgPSB1cmxQYXJhbXMuZ2V0KCdxdWVyeScpO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IElJdGVtc1N0YXRlID0ge1xuICBjYXRlZ29yaWVzOiBbXSxcbiAgaXRlbXM6IFtdLFxuICBzZWFyY2hUZXh0OiBzZWFyY2hUZXh0ID8gc2VhcmNoVGV4dCA6ICcnLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgc291cmNlOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpdGVtc1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogSXRlbXNSZWR1eEFjdGlvbnMpOiBJSXRlbXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdAaXRlbXMvTE9BRElORyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLnBheWxvYWQubG9hZGluZ1xuICAgICAgfTtcbiAgICBjYXNlICdAaXRlbXMvQ0FOQ0VMX1JFUVVFU1QnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNvdXJjZTogYWN0aW9uLnBheWxvYWQuc291cmNlXG4gICAgICB9O1xuICAgIGNhc2UgJ0BpdGVtcy9TRUFSQ0gnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlYXJjaFRleHQ6IGFjdGlvbi5wYXlsb2FkLnNlYXJjaFRleHRcbiAgICAgIH07XG4gICAgY2FzZSAnQGl0ZW1zL0xPQUQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24ucGF5bG9hZC5pdGVtcyxcbiAgICAgICAgY2F0ZWdvcmllczogYWN0aW9uLnBheWxvYWQuY2F0ZWdvcmllc1xuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IEF4aW9zLCB7QXhpb3NFcnJvciwgQXhpb3NJbnN0YW5jZSwgQXhpb3NQcm9taXNlLCBDYW5jZWxUb2tlblNvdXJjZSwgQ2FuY2VsVG9rZW5TdGF0aWN9IGZyb20gXCJheGlvc1wiO1xuXG5cbmNsYXNzIEFwaVNlcnZpY2Uge1xuICBwcml2YXRlIGluc3RhbmNlOiBBeGlvc0luc3RhbmNlO1xuICBwcml2YXRlIENhbmNlbFRva2VuOiBDYW5jZWxUb2tlblN0YXRpYztcbiAgcHJpdmF0ZSBzb3VyY2U6IENhbmNlbFRva2VuU291cmNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBBeGlvcy5jcmVhdGUoKTtcbiAgICB0aGlzLkNhbmNlbFRva2VuID0gQXhpb3MuQ2FuY2VsVG9rZW47XG4gIH1cblxuICAgcHVibGljIGVycm9ySGFuZGxlcihlcnI6IEF4aW9zRXJyb3IpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnZXJyJywgZXJyKTtcbiAgICAvLyBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgLy8gICBpZiAoWzUwMF0uaW5jbHVkZXMoZXJyLnJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICAvLyAgICAgUmF2ZW4uY2FwdHVyZUV4Y2VwdGlvbihKU09OLnN0cmluZ2lmeShlcnIucmVzcG9uc2UpKTtcbiAgICAvLyAgICAgc3dhbCgnVXBzIGhhIG9jdXJyaWRvIHVuIGVycm9yJywgZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA/IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgOiBlcnIucmVzcG9uc2UuZGF0YS5lcnJtc2csICdlcnJvcicpO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgc3dhbCgnVXBzIGhhIG9jdXJyaWRvIHVuIGVycm9yJywgZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA/IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgOiBlcnIucmVzcG9uc2UuZGF0YS5lcnJtc2csICdlcnJvcicpO1xuICAgIC8vICAgfVxuICAgIC8vIH0gZWxzZSBpZiAoZXJyLnJlcXVlc3QpIHtcbiAgICAvLyAgIFJhdmVuLmNhcHR1cmVFeGNlcHRpb24oSlNPTi5zdHJpbmdpZnkoZXJyLnJlcXVlc3QpKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgUmF2ZW4uY2FwdHVyZUV4Y2VwdGlvbihKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAvLyB9XG4gIH1cblxuICBwdWJsaWMgZ2V0U291cmNlKCk6IENhbmNlbFRva2VuU291cmNlIHtcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMuQ2FuY2VsVG9rZW4uc291cmNlKCk7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlO1xuICB9XG5cbiAgcHVibGljIHNlYXJjaEl0ZW1zKHRleHQ6IHN0cmluZyk6IEF4aW9zUHJvbWlzZSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0KFxuICAgICAgYC9hcGkvaXRlbXM/cXVlcnk9JHt0ZXh0fWBcbiAgICAgICwge1xuICAgICAgICBjYW5jZWxUb2tlbjogdGhpcy5zb3VyY2UudG9rZW5cbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEl0ZW0oaWQ6IHN0cmluZyk6IEF4aW9zUHJvbWlzZSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0KFxuICAgICAgYC9hcGkvaXRlbXMvJHtpZH1gXG4gICAgICAsIHtcbiAgICAgICAgY2FuY2VsVG9rZW46IHRoaXMuc291cmNlLnRva2VuXG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBpU2VydmljZSgpOyIsImltcG9ydCB7IHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzJ1xuaW1wb3J0IGNyZWF0ZURlYm91bmNlIGZyb20gJ3JlZHV4LWRlYm91bmNlZCc7XG5pbXBvcnQgVGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCBicm93c2VySGlzdG9ydCBmcm9tIFwiLi4vdXRpbHMvaGlzdG9yeVwiO1xuXG5leHBvcnQgY29uc3QgaGlzdG9yeSA9IGJyb3dzZXJIaXN0b3J0O1xuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcbiAgbGV0IGVuaGFuY2VyczogYW55O1xuICBjb25zdCBtaWRkbGV3YXJlczogYW55W10gPSBbcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KV07XG5cbiAgbWlkZGxld2FyZXMucHVzaChjcmVhdGVEZWJvdW5jZSgpKTtcbiAgbWlkZGxld2FyZXMucHVzaChUaHVua01pZGRsZXdhcmUpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBjb25zdCBjb21wb3NlRW5oYW5jZXJzID0gY29tcG9zZVdpdGhEZXZUb29scyh7dHJhY2U6IHRydWUsIHRyYWNlTGltaXQ6IDEwIH0pO1xuICAgIGVuaGFuY2VycyA9IGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XG4gIH0gZWxzZSB7XG4gICAgZW5oYW5jZXJzID0gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKTtcbiAgfVxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlcnMoaGlzdG9yeSksIGVuaGFuY2Vycyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcbiIsImltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHtcbiAgYmFzZW5hbWU6ICcnXG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gbW9tZW50OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiXSwic291cmNlUm9vdCI6IiJ9