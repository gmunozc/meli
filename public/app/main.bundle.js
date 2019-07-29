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
        })
            .catch(function (err) {
            if (!axios_1.default.isCancel(err)) {
                api_service_1.default.errorHandler(err);
            }
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
                dispatch(itemsLoading(false));
            })
                .catch(function (err) {
                if (!axios_1.default.isCancel(err)) {
                    api_service_1.default.errorHandler(err);
                }
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
                                    React.createElement("p", { className: "text-muted" }, item.description)),
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
                    React.createElement("button", { className: "btn btn-search", type: "button", onClick: function () { return _this._submitSearch(true); } }, loading
                        ? React.createElement("i", { className: "fa fa-spin fa-spinner" })
                        : React.createElement("i", { className: "fa fa-search" }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaXRlbS5hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaXRlbXMuYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JyZWFkY3J1bWIvQnJlYWRjcnVtYi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaXRlbXMvSXRlbVByZXZpZXcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2l0ZW1zL0l0ZW1zQ29udGFpbmVycy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaXRlbXMvSXRlbXNEZXRhaWxWaWV3LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pdGVtcy9JdGVtc0xpc3RWaWV3LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pdGVtcy9pdGVtcy5zYXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hCYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guc2FzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvYXBwbGljYXRpb24vYXBwbGljYXRpb24uc2FzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9oZWFkZXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9oZWFkZXIvaGVhZGVyLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pdGVtLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2l0ZW1zLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2FwaS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGlzdG9yeS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFD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RyxnQkFBZ0IsQ0FBQyx1QkFBZSxlQUFJLFdBQVcsRUFBRSxDQUFDO0tBQy9EO1NBQU0sRUFFTjtJQUNELE9BQU8sbUJBQVcsQ0FBQyxrQkFBUSxDQUFDLGVBQU8sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQztBQUVGLGtCQUFlLGNBQWMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekI5Qiw0RkFBK0M7QUFFL0Msa0JBQWUsOEJBQW9CLENBQUM7SUFDbEMsUUFBUSxFQUFFLEVBQUU7Q0FDYixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pILHdCOzs7Ozs7Ozs7OztBQ0FBLHVCOzs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQge0Nvbm5lY3RlZFJvdXRlcn0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUsIHtoaXN0b3J5fSBmcm9tIFwiLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xuaW1wb3J0IHtSb3V0ZSwgUm91dGVDb21wb25lbnRQcm9wcywgU3dpdGNofSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBJdGVtc0xpc3RWaWV3IGZyb20gXCIuL2NvbXBvbmVudHMvaXRlbXMvSXRlbXNMaXN0Vmlld1wiO1xuaW1wb3J0IEl0ZW1zRGV0YWlsVmlldyBmcm9tIFwiLi9jb21wb25lbnRzL2l0ZW1zL0l0ZW1zRGV0YWlsVmlld1wiO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5cbmNvbnN0IE5vTWF0Y2ggPSAoe2xvY2F0aW9ufTogUm91dGVDb21wb25lbnRQcm9wczx7fT4pID0+IChcbiAgPGRpdj5cbiAgICA8aDM+Tm8gbWF0Y2ggZm9yIDxjb2RlPntsb2NhdGlvbi5wYXRobmFtZX08L2NvZGU+PC9oMz5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxDb25uZWN0ZWRSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0l0ZW1zTGlzdFZpZXd9Lz5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvaXRlbXNcIiBjb21wb25lbnQ9e0l0ZW1zTGlzdFZpZXd9Lz5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvaXRlbXMvOmlkXCIgY29tcG9uZW50PXtJdGVtc0RldGFpbFZpZXd9Lz5cbiAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm9NYXRjaH0vPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Db25uZWN0ZWRSb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG4kKCgpID0+IHtcbiAgbW9tZW50LmxvY2FsZSgnZXMnKTtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxBcHAvPixcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJylcbiAgKTtcbn0pO1xuXG4iLCJpbXBvcnQge0Rpc3BhdGNofSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7SVJlZHV4U3RvcmV9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IEFwaVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IEF4aW9zLCB7QXhpb3NFcnJvciwgQXhpb3NSZXNwb25zZSwgQ2FuY2VsVG9rZW5Tb3VyY2V9IGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtoaXN0b3J5fSBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcbmltcG9ydCB7SUl0ZW19IGZyb20gXCIuL2l0ZW1zLmFjdGlvblwiO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUl0ZW1TdGF0ZSB7XG4gIGl0ZW06IElJdGVtIHwgbnVsbDtcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgc291cmNlOiBDYW5jZWxUb2tlblNvdXJjZSB8IG51bGw7XG59XG5cbmludGVyZmFjZSBJSXRlbUxvYWRpbmcge1xuICB0eXBlOiAnQGl0ZW0vTE9BRElORyc7XG4gIHBheWxvYWQ6IHtcbiAgICBsb2FkaW5nOiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXRlbUxvYWRpbmcobG9hZGluZzogYm9vbGVhbik6IElJdGVtTG9hZGluZyB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0BpdGVtL0xPQURJTkcnLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGxvYWRpbmdcbiAgICB9XG4gIH07XG59XG5cblxuaW50ZXJmYWNlIElJdGVtQ2FuY2VsUmVxdWVzdCB7XG4gIHR5cGU6ICdAaXRlbS9DQU5DRUxfUkVRVUVTVCc7XG4gIHBheWxvYWQ6IHtcbiAgICBzb3VyY2U6IENhbmNlbFRva2VuU291cmNlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXRlbUNhbmNlbFJlcXVlc3Qoc291cmNlOiBDYW5jZWxUb2tlblNvdXJjZSk6IElJdGVtQ2FuY2VsUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0BpdGVtL0NBTkNFTF9SRVFVRVNUJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBzb3VyY2VcbiAgICB9XG4gIH07XG59XG5cbmludGVyZmFjZSBJSXRlbUxvYWQge1xuICB0eXBlOiAnQGl0ZW0vTE9BRCc7XG4gIHBheWxvYWQ6IHtcbiAgICBpdGVtOiBJSXRlbTtcbiAgICBjYXRlZ29yeTogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXRlbUxvYWQoaXRlbTogSUl0ZW0sIGNhdGVnb3J5OnN0cmluZyk6IElJdGVtTG9hZCB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0BpdGVtL0xPQUQnLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGl0ZW0sXG4gICAgICBjYXRlZ29yeVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGl0ZW1HZXQoaWQ6IHN0cmluZywgcmVkaXJlY3Q/OmJvb2xlYW4pIHtcbiAgcmV0dXJuIChcbiAgICBkaXNwYXRjaDogRGlzcGF0Y2g8SXRlbVJlZHV4QWN0aW9ucz4sIGdldFN0YXRlOiAoKSA9PiBJUmVkdXhTdG9yZVxuICApID0+IHtcbiAgICBkaXNwYXRjaChpdGVtTG9hZGluZyh0cnVlKSk7XG4gICAgZGlzcGF0Y2goaXRlbUNhbmNlbFJlcXVlc3QoQXBpU2VydmljZS5nZXRTb3VyY2UoKSkpO1xuICAgIEFwaVNlcnZpY2VcbiAgICAgIC5nZXRJdGVtKGlkKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtpdGVtLCBjYXRlZ29yeX0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBkaXNwYXRjaChpdGVtTG9hZChpdGVtLCBjYXRlZ29yeSkpO1xuICAgICAgICBpZihpdGVtKXtcbiAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IGBNZXJjYWRvIExpYnJlIHwgJHtpdGVtLnRpdGxlfWA7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2goaXRlbUxvYWRpbmcoZmFsc2UpKTtcbiAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgaGlzdG9yeS5wdXNoKGAvaXRlbXMvJHtpZH1gKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyOiBBeGlvc0Vycm9yKSA9PiB7XG4gICAgICAgIGlmICghQXhpb3MuaXNDYW5jZWwoZXJyKSkge1xuICAgICAgICAgIEFwaVNlcnZpY2UuZXJyb3JIYW5kbGVyKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2goaXRlbUxvYWRpbmcoZmFsc2UpKTtcbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbmV4cG9ydCB0eXBlIEl0ZW1SZWR1eEFjdGlvbnMgPVxuICBJSXRlbUNhbmNlbFJlcXVlc3QgfFxuICBJSXRlbUxvYWQgfFxuICBJSXRlbUxvYWRpbmc7IiwiaW1wb3J0IHtEaXNwYXRjaH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge0lSZWR1eFN0b3JlfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcbmltcG9ydCBBcGlTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCBBeGlvcywge0F4aW9zRXJyb3IsIEF4aW9zUmVzcG9uc2UsIENhbmNlbFRva2VuU291cmNlfSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7aGlzdG9yeX0gZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUl0ZW0ge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBwcmljZToge1xuICAgIGN1cnJlbmN5OiBzdHJpbmc7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgZGVjaW1hbHM6IG51bWJlclxuICB9O1xuICBwaWN0dXJlOiBzdHJpbmc7XG4gIGNvbmRpdGlvbjogc3RyaW5nO1xuICBmcmVlX3NoaXBwaW5nOiBib29sZWFuO1xuICAvLyBvbmx5IGluIHNlYXJjaFxuICBsb2NhdGlvbj86IHN0cmluZyxcbiAgLy8gb25seSBpbiBkZXRhaWxcbiAgc29sZF9xdWFudGl0eT86IG51bWJlcixcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgY2F0ZWdvcnk6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJdGVtc1N0YXRlIHtcbiAgY2F0ZWdvcmllczogc3RyaW5nW107XG4gIGl0ZW1zOiBBcnJheTxJSXRlbT47XG4gIHNlYXJjaFRleHQ6IHN0cmluZztcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgc291cmNlOiBDYW5jZWxUb2tlblNvdXJjZSB8IG51bGw7XG59XG5cbmludGVyZmFjZSBJSXRlbXNMb2FkaW5nIHtcbiAgdHlwZTogJ0BpdGVtcy9MT0FESU5HJztcbiAgcGF5bG9hZDoge1xuICAgIGxvYWRpbmc6IGJvb2xlYW47XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpdGVtc0xvYWRpbmcobG9hZGluZzogYm9vbGVhbik6IElJdGVtc0xvYWRpbmcge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdAaXRlbXMvTE9BRElORycsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbG9hZGluZ1xuICAgIH1cbiAgfTtcbn1cblxuXG5pbnRlcmZhY2UgSUl0ZW1zQ2FuY2VsUmVxdWVzdCB7XG4gIHR5cGU6ICdAaXRlbXMvQ0FOQ0VMX1JFUVVFU1QnO1xuICBwYXlsb2FkOiB7XG4gICAgc291cmNlOiBDYW5jZWxUb2tlblNvdXJjZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGl0ZW1zQ2FuY2VsUmVxdWVzdChzb3VyY2U6IENhbmNlbFRva2VuU291cmNlKTogSUl0ZW1zQ2FuY2VsUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0BpdGVtcy9DQU5DRUxfUkVRVUVTVCcsXG4gICAgcGF5bG9hZDoge1xuICAgICAgc291cmNlXG4gICAgfVxuICB9O1xufVxuXG5pbnRlcmZhY2UgSUl0ZW1zU2VhcmNoIHtcbiAgdHlwZTogJ0BpdGVtcy9TRUFSQ0gnO1xuICBwYXlsb2FkOiB7XG4gICAgc2VhcmNoVGV4dDogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXRlbXNDaGFuZ2VTZWFyY2hUZXh0KHNlYXJjaFRleHQ6IHN0cmluZyk6IElJdGVtc1NlYXJjaCB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0BpdGVtcy9TRUFSQ0gnLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIHNlYXJjaFRleHRcbiAgICB9XG4gIH07XG59XG5cblxuaW50ZXJmYWNlIElJdGVtc0xvYWQge1xuICB0eXBlOiAnQGl0ZW1zL0xPQUQnO1xuICBwYXlsb2FkOiB7XG4gICAgaXRlbXM6IEFycmF5PElJdGVtPjtcbiAgICBjYXRlZ29yaWVzOiBzdHJpbmdbXTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGl0ZW1zTG9hZChpdGVtczogQXJyYXk8SUl0ZW0+LCBjYXRlZ29yaWVzOiBzdHJpbmdbXSk6IElJdGVtc0xvYWQge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdAaXRlbXMvTE9BRCcsXG4gICAgcGF5bG9hZDoge1xuICAgICAgaXRlbXMsXG4gICAgICBjYXRlZ29yaWVzXG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXRlbXNTZWFyY2goe3JlZGlyZWN0fTogeyByZWRpcmVjdDogYm9vbGVhbiB9KSB7XG4gIHJldHVybiAoXG4gICAgZGlzcGF0Y2g6IERpc3BhdGNoPEl0ZW1zUmVkdXhBY3Rpb25zPiwgZ2V0U3RhdGU6ICgpID0+IElSZWR1eFN0b3JlXG4gICkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICBjb25zdCB7c2VhcmNoVGV4dH0gPSBzdGF0ZS5pdGVtcztcbiAgICBpZiAoc2VhcmNoVGV4dC5sZW5ndGgpIHtcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gYE1lcmNhZG8gTGlicmUgfCBCdXNjYW5kbyAke3NlYXJjaFRleHR9YDtcbiAgICAgIGRpc3BhdGNoKGl0ZW1zTG9hZGluZyh0cnVlKSk7XG4gICAgICBkaXNwYXRjaChpdGVtc0NhbmNlbFJlcXVlc3QoQXBpU2VydmljZS5nZXRTb3VyY2UoKSkpO1xuICAgICAgQXBpU2VydmljZVxuICAgICAgICAuc2VhcmNoSXRlbXMoc2VhcmNoVGV4dClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICBwYXRobmFtZTogJy9pdGVtcycsXG4gICAgICAgICAgICAgIHNlYXJjaDogYD9xdWVyeT0ke3NlYXJjaFRleHR9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXNwYXRjaChpdGVtc0xvYWQocmVzcG9uc2UuZGF0YS5pdGVtcywgcmVzcG9uc2UuZGF0YS5jYXRlZ29yaWVzKSk7XG4gICAgICAgICAgZGlzcGF0Y2goaXRlbXNMb2FkaW5nKGZhbHNlKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyOiBBeGlvc0Vycm9yKSA9PiB7XG4gICAgICAgICAgaWYgKCFBeGlvcy5pc0NhbmNlbChlcnIpKSB7XG4gICAgICAgICAgICBBcGlTZXJ2aWNlLmVycm9ySGFuZGxlcihlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXNwYXRjaChpdGVtc0xvYWRpbmcoZmFsc2UpKTtcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuXG5leHBvcnQgdHlwZSBJdGVtc1JlZHV4QWN0aW9ucyA9XG4gIElJdGVtc0NhbmNlbFJlcXVlc3QgfFxuICBJSXRlbXNTZWFyY2ggfFxuICBJSXRlbXNMb2FkIHxcbiAgSUl0ZW1zTG9hZGluZzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Vycm9ySW5mb30gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCAnLi9icmVhZGNydW1iLnNhc3MnXG5pbnRlcmZhY2UgSVN0YXRlVHlwZSB7XG4gIGVycm9yOiBFcnJvciB8IG51bGw7XG59XG5cbmludGVyZmFjZSBJUHJvcHNUeXBlIHtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmVhZGNydW1iIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wc1R5cGUsIElTdGF0ZVR5cGU+IHtcblxuICByZWFkb25seSBzdGF0ZSA9IHtcbiAgICBlcnJvcjogbnVsbFxuICB9O1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzVHlwZSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogRXJyb3JJbmZvKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3J9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3RFbGVtZW50PElQcm9wc1R5cGU+IHtcbiAgICBjb25zdCB7dGV4dH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBwcml2YXRlIHNlYXJjaCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZygndGhpcy5zdGF0ZScsIHRoaXMuc3RhdGUpO1xuICB9XG59XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NjQzNTU4MjYwODNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL3Nydi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFcnJvckluZm99IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGVDb21wb25lbnRQcm9wc30gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHtJSXRlbX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvaXRlbXMuYWN0aW9uXCI7XG5cbmltcG9ydCAnLi9pdGVtcy5zYXNzJztcbmltcG9ydCB7SVJlZHV4U3RvcmV9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHtpdGVtR2V0LCBJdGVtUmVkdXhBY3Rpb25zfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9pdGVtLmFjdGlvblwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW50ZXJmYWNlIElTdGF0ZVR5cGUge1xuICBlcnJvcjogRXJyb3IgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzVHlwZSBleHRlbmRzIFJvdXRlQ29tcG9uZW50UHJvcHM8e30+LCBJUmVkdXhTdG9yZSB7XG4gIGl0ZW1HZXQoaWQ6IHN0cmluZywgcmVkaXJlY3Q6IGJvb2xlYW4pOiBJdGVtUmVkdXhBY3Rpb25zO1xuICBpdGVtRGV0YWlsOiBJSXRlbTtcbn1cblxuY2xhc3MgSXRlbVByZXZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzVHlwZSwgSVN0YXRlVHlwZT4ge1xuXG4gIHJlYWRvbmx5IHN0YXRlID0ge1xuICAgIGVycm9yOiBudWxsXG4gIH07XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHt9O1xuXG4gIHB1YmxpYyBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogRXJyb3JJbmZvKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3J9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3RFbGVtZW50PElQcm9wc1R5cGU+IHtcbiAgICBjb25zdCB7aXRlbURldGFpbH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tcHJldmlld1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtOVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGh1bWJuYWlsIHBvaW50ZXJcIlxuICAgICAgICAgICAgICAgIHNyYz17aXRlbURldGFpbC5waWN0dXJlfVxuICAgICAgICAgICAgICAgIGFsdD17aXRlbURldGFpbC50aXRsZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9oYW5kbGVHb1RvRGV0YWlsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUdvVG9EZXRhaWx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zIHBvaW50ZXJcIlxuICAgICAgICAgICAgICAgID4kIHt0aGlzLmZvcm1hdE51bWJlcihpdGVtRGV0YWlsLnByaWNlLmFtb3VudCl9IHtcbiAgICAgICAgICAgICAgICAgIGl0ZW1EZXRhaWwuZnJlZV9zaGlwcGluZ1xuICAgICAgICAgICAgICAgICAgICA/IDxpIGNsYXNzTmFtZT1cImZhIGZhLWNlcnRpZmljYXRlIHRleHQtc3VjY2Vzc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfSA8L2g1PlxuICAgICAgICAgICAgICAgIHtpdGVtRGV0YWlsLnRpdGxlfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgZC1ub25lIGQtbWQtYmxvY2sgXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtbXV0ZWQgdGV4dC1sb2NhdGlvblwiPntpdGVtRGV0YWlsLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVHb1RvRGV0YWlsID0gKCkgPT57XG4gICAgY29uc3Qge2l0ZW1EZXRhaWx9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnByb3BzLml0ZW1HZXQoaXRlbURldGFpbC5pZCwgdHJ1ZSlcbiAgfTtcblxuICBwcml2YXRlIGZvcm1hdE51bWJlciA9IChudW06IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csICckMS4nKVxuICB9XG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElSZWR1eFN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGVcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9ICggZGlzcGF0Y2g6IGFueSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGRpc3BhdGNoLFxuICAgIGl0ZW1HZXQ6IChpZDogc3RyaW5nLCByZWRpcmVjdDogYm9vbGVhbikgPT4gZGlzcGF0Y2goaXRlbUdldChpZCwgcmVkaXJlY3QpKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBJUHJvcHNUeXBlLCBJUmVkdXhTdG9yZT4oXG4gIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEl0ZW1QcmV2aWV3KTtcblxuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Vycm9ySW5mb30gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vaXRlbXMuc2Fzcyc7XG5cbmludGVyZmFjZSBJU3RhdGVUeXBlIHtcbiAgZXJyb3I6IEVycm9yIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIElQcm9wc1R5cGUge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbXNDb250YWluZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wc1R5cGUsIElTdGF0ZVR5cGU+IHtcblxuICByZWFkb25seSBzdGF0ZSA9IHtcbiAgICBlcnJvcjogbnVsbFxuICB9O1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7fTtcblxuICBwdWJsaWMgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBlcnJvckluZm86IEVycm9ySW5mbykge1xuICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudDxJUHJvcHNUeXBlPiB7XG4gICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY29udGFpbmVyXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFcnJvckluZm8sIEZyYWdtZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSBcIi4uLy4uL2NvbnRhaW5lcnMvYXBwbGljYXRpb24vQXBwbGljYXRpb25cIjtcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gXCIuLi9icmVhZGNydW1iL0JyZWFkY3J1bWJcIjtcbmltcG9ydCB7Um91dGVDb21wb25lbnRQcm9wc30gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHtJUmVkdXhTdG9yZX0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtJdGVtc1JlZHV4QWN0aW9uc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvaXRlbXMuYWN0aW9uXCI7XG5cbmltcG9ydCAnLi9pdGVtcy5zYXNzJztcbmltcG9ydCB7aXRlbUdldCwgSXRlbVJlZHV4QWN0aW9uc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvaXRlbS5hY3Rpb25cIjtcblxuaW50ZXJmYWNlIElTdGF0ZVR5cGUge1xuICBlcnJvcjogRXJyb3IgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzVHlwZSBleHRlbmRzIElSZWR1eFN0b3JlLCBSb3V0ZUNvbXBvbmVudFByb3BzPHtpZDogc3RyaW5nfT4ge1xuICBpdGVtR2V0KGlkOiBzdHJpbmcpOiBJdGVtUmVkdXhBY3Rpb25zO1xuICBpdGVtc1NlYXJjaCh7cmVkaXJlY3R9OiB7IHJlZGlyZWN0OiBib29sZWFuIH0pOiBJdGVtc1JlZHV4QWN0aW9ucztcbiAgaXRlbXNDaGFuZ2VTZWFyY2hUZXh0KHNlYXJjaFRleHQ6IHN0cmluZyk6IEl0ZW1zUmVkdXhBY3Rpb25zO1xufVxuXG5jbGFzcyBJdGVtc0RldGFpbFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzVHlwZSwgSVN0YXRlVHlwZT4ge1xuXG4gIHJlYWRvbmx5IHN0YXRlID0ge1xuICAgIGVycm9yOiBudWxsXG4gIH07XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHt9O1xuXG4gIHB1YmxpYyBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogRXJyb3JJbmZvKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3J9KTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pdGVtLnNvdXJjZSkge1xuICAgICAgdGhpcy5wcm9wcy5pdGVtLnNvdXJjZS5jYW5jZWwoJ09wZXJhdGlvbiBjYW5jZWxlZCBieSB0aGUgdXNlci4nKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgY29uc3Qge2l0ZW19ID0gdGhpcy5wcm9wcy5pdGVtO1xuICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcztcbiAgICBpZiAoIWl0ZW0gfHwgKGl0ZW0gJiYgaXRlbS5pZCAhPSBpZCkpIHtcbiAgICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcztcbiAgICAgIHRoaXMucHJvcHMuaXRlbUdldChpZClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudDxJUHJvcHNUeXBlPiB7XG4gICAgY29uc3Qge2l0ZW19ID0gdGhpcy5wcm9wcy5pdGVtO1xuICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcztcbiAgICByZXR1cm4gKFxuICAgICAgPEFwcGxpY2F0aW9uIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBpdGVtICYmIGl0ZW0uaWQgPT0gaWRcbiAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIgdGV4dD17aXRlbS5jYXRlZ29yeX0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRodW1ibmFpbCBkZXRhaWwgcG9pbnRlciBwYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5waWN0dXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1PkRlc2NyaXBjacOzbiBkZWwgcHJvZHVjdG88L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNCBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29uZGl0aW9ufSAtIHtpdGVtLnNvbGRfcXVhbnRpdHl9IHZlbmRpZG9zXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNT57aXRlbS50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC0zXCI+JCB7dGhpcy5mb3JtYXROdW1iZXIoaXRlbS5wcmljZS5hbW91bnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlY2ltYWwgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJpY2UuZGVjaW1hbHMgPyBpdGVtLnByaWNlLmRlY2ltYWxzIDogJzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIG10LTQgIG1iLTRcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXByYXJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQXBwbGljYXRpb24+XG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXROdW1iZXIgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEuJylcbiAgfVxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSVJlZHV4U3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZVxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKCBkaXNwYXRjaDogYW55KSA9PiB7XG4gIHJldHVybiB7XG4gICAgZGlzcGF0Y2gsXG4gICAgaXRlbUdldDogKGlkOiBzdHJpbmcpID0+IGRpc3BhdGNoKGl0ZW1HZXQoaWQpKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBJUHJvcHNUeXBlLCBJUmVkdXhTdG9yZT4oXG4gIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEl0ZW1zRGV0YWlsVmlldyk7XG5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RXJyb3JJbmZvLCBGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gXCIuLi8uLi9jb250YWluZXJzL2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tIFwiLi4vYnJlYWRjcnVtYi9CcmVhZGNydW1iXCI7XG5pbXBvcnQgSXRlbXNDb250YWluZXJzIGZyb20gXCIuL0l0ZW1zQ29udGFpbmVyc1wiO1xuaW1wb3J0IEl0ZW1QcmV2aWV3IGZyb20gXCIuL0l0ZW1QcmV2aWV3XCI7XG5pbXBvcnQge1JvdXRlQ29tcG9uZW50UHJvcHN9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7SVJlZHV4U3RvcmV9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7SXRlbXNSZWR1eEFjdGlvbnN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2l0ZW1zLmFjdGlvblwiO1xuXG5pbXBvcnQgJy4vaXRlbXMuc2Fzcyc7XG5pbXBvcnQge0l0ZW1SZWR1eEFjdGlvbnN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2l0ZW0uYWN0aW9uXCI7XG5cbmludGVyZmFjZSBJU3RhdGVUeXBlIHtcbiAgZXJyb3I6IEVycm9yIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIElQcm9wc1R5cGUgZXh0ZW5kcyBJUmVkdXhTdG9yZSwgUm91dGVDb21wb25lbnRQcm9wczx7fT4ge1xuICBpdGVtR2V0KGlkOiBzdHJpbmcpOiBJdGVtUmVkdXhBY3Rpb25zO1xuICBpdGVtc1NlYXJjaCgpOiBJdGVtc1JlZHV4QWN0aW9ucztcbiAgaXRlbXNTZWFyY2goe3JlZGlyZWN0fTogeyByZWRpcmVjdDogYm9vbGVhbiB9KTogSXRlbXNSZWR1eEFjdGlvbnM7XG4gIGl0ZW1zQ2hhbmdlU2VhcmNoVGV4dChzZWFyY2hUZXh0OiBzdHJpbmcpOiBJdGVtc1JlZHV4QWN0aW9ucztcbn1cblxuY2xhc3MgSXRlbXNMaXN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHNUeXBlLCBJU3RhdGVUeXBlPiB7XG5cbiAgcmVhZG9ubHkgc3RhdGUgPSB7XG4gICAgZXJyb3I6IG51bGxcbiAgfTtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge307XG5cbiAgcHVibGljIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgZXJyb3JJbmZvOiBFcnJvckluZm8pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlcnJvcn0pO1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIGRvY3VtZW50LnRpdGxlID0gYE1lcmNhZG8gTGlicmVgO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8SVByb3BzVHlwZT4ge1xuICAgIGNvbnN0IHtpdGVtcywgcm91dGVyfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcHBsaWNhdGlvbiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHtcbiAgICAgICAgICByb3V0ZXIubG9jYXRpb24gJiYgcm91dGVyLmxvY2F0aW9uLnNlYXJjaC5sZW5ndGggP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iIHRleHQ9e2l0ZW1zLmNhdGVnb3JpZXMubGVuZ3RoID8gaXRlbXMuY2F0ZWdvcmllc1swXSA6ICcnfS8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zQ29udGFpbmVycz5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtUHJldmlldyBrZXk9e2luZGV4fSBpdGVtRGV0YWlsPXtpdGVtfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0l0ZW1zQ29udGFpbmVycz5cbiAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L0FwcGxpY2F0aW9uPlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElSZWR1eFN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGVcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9ICggZGlzcGF0Y2g6IGFueSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGRpc3BhdGNoXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgSVByb3BzVHlwZSwgSVJlZHV4U3RvcmU+KFxuICBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShJdGVtc0xpc3RWaWV3KTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2NDM3NDA3NDczMlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Vycm9ySW5mb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZUNvbXBvbmVudFByb3BzfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgJy4vc2VhcmNoLnNhc3MnXG5pbXBvcnQge0lSZWR1eFN0b3JlfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcbmltcG9ydCB7aXRlbXNDaGFuZ2VTZWFyY2hUZXh0LCBJdGVtc1JlZHV4QWN0aW9ucywgaXRlbXNTZWFyY2h9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2l0ZW1zLmFjdGlvblwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW50ZXJmYWNlIElTdGF0ZVR5cGUge1xuICBlcnJvcjogRXJyb3IgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzVHlwZSBleHRlbmRzIElSZWR1eFN0b3JlICxSb3V0ZUNvbXBvbmVudFByb3BzPHt9PntcbiAgaXRlbXNTZWFyY2goe3JlZGlyZWN0fTogeyByZWRpcmVjdDogYm9vbGVhbiB9KTogSXRlbXNSZWR1eEFjdGlvbnM7XG4gIGl0ZW1zQ2hhbmdlU2VhcmNoVGV4dChzZWFyY2hUZXh0OiBzdHJpbmcpOiBJdGVtc1JlZHV4QWN0aW9ucztcbn1cblxuY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wc1R5cGUsIElTdGF0ZVR5cGU+IHtcblxuICByZWFkb25seSBzdGF0ZSA9IHtcbiAgICBlcnJvcjogbnVsbFxuICB9O1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzVHlwZSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogRXJyb3JJbmZvKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3J9KTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICBpZighdGhpcy5wcm9wcy5pdGVtcy5pdGVtcy5sZW5ndGgpe1xuICAgICAgY29uc3Qgc2VhcmNoVGV4dCA9IHRoaXMuX2dldFF1ZXJ5KHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgIHRoaXMucHJvcHMuaXRlbXNDaGFuZ2VTZWFyY2hUZXh0KHNlYXJjaFRleHQpO1xuICAgICAgdGhpcy5fc3VibWl0U2VhcmNoKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFJlYWRvbmx5PElQcm9wc1R5cGU+LCBuZXh0Q29udGV4dDogYW55KTogdm9pZCB7XG4gICAgY29uc3Qge3Byb3BzfSA9IHRoaXM7XG4gICAgY29uc3Qgc2VhcmNoVGV4dCA9IHRoaXMuX2dldFF1ZXJ5KG5leHRQcm9wcy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIGlmICghcHJvcHMuaXRlbXMubG9hZGluZyAmJlxuICAgICAgcHJvcHMubG9jYXRpb24uc2VhcmNoICE9PSBuZXh0UHJvcHMubG9jYXRpb24uc2VhcmNoXG4gICAgICAmJiBwcm9wcy5pdGVtcy5zZWFyY2hUZXh0ICE9PSBzZWFyY2hUZXh0XG4gICAgKXtcbiAgICAgIHRoaXMucHJvcHMuaXRlbXNDaGFuZ2VTZWFyY2hUZXh0KHNlYXJjaFRleHQpO1xuICAgICAgdGhpcy5fc3VibWl0U2VhcmNoKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXRlbXMuc291cmNlKSB7XG4gICAgICB0aGlzLnByb3BzLml0ZW1zLnNvdXJjZS5jYW5jZWwoJ09wZXJhdGlvbiBjYW5jZWxlZCBieSB0aGUgdXNlci4nKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudDxJUHJvcHNUeXBlPiB7XG4gICAgY29uc3QgeyBzZWFyY2hUZXh0LCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzLml0ZW1zO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOdW5jYSBkZWplcyBkZSBidXNjYXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUNoYW5nZVNlYXJjaH1cbiAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5faGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2VhcmNoXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLl9zdWJtaXRTZWFyY2godHJ1ZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgID8gPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3BpbiBmYS1zcGlubmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgOiA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7c2VhcmNoVGV4dH0gPSB0aGlzLnByb3BzLml0ZW1zO1xuICAgIGlmIChzZWFyY2hUZXh0Lmxlbmd0aCAmJiBlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5fc3VibWl0U2VhcmNoKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIF9oYW5kbGVDaGFuZ2VTZWFyY2ggPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+e1xuICAgICAgdGhpcy5wcm9wcy5pdGVtc0NoYW5nZVNlYXJjaFRleHQoZS50YXJnZXQudmFsdWUpXG4gIH07XG5cbiAgcHJpdmF0ZSBfc3VibWl0U2VhcmNoID0gKHJlZGlyZWN0OiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgdGhpcy5wcm9wcy5pdGVtc1NlYXJjaCh7cmVkaXJlY3R9KTtcbiAgfTtcblxuICBwcml2YXRlIF9nZXRRdWVyeSA9IChwYXJhbXM6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKTtcbiAgICByZXR1cm4gdXJsUGFyYW1zLmdldCgncXVlcnknKSB8fCAnJztcbiAgfTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBJUmVkdXhTdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoIGRpc3BhdGNoOiBhbnkpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpdGVtc1NlYXJjaDogKHtyZWRpcmVjdH06IHsgcmVkaXJlY3Q6IGJvb2xlYW4gfSkgPT4gZGlzcGF0Y2goaXRlbXNTZWFyY2goe3JlZGlyZWN0fSkpLFxuICAgIGl0ZW1zQ2hhbmdlU2VhcmNoVGV4dDogKHNlYXJjaFRleHQ6IHN0cmluZykgPT4gZGlzcGF0Y2goaXRlbXNDaGFuZ2VTZWFyY2hUZXh0KHNlYXJjaFRleHQpKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBJUHJvcHNUeXBlLCBJUmVkdXhTdG9yZT4oXG4gIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFNlYXJjaEJhcik7XG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2NDM1NTgyNjE4NFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Vycm9ySW5mbywgRnJhZ21lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2hlYWRlci9IZWFkZXJcIjtcblxuaW1wb3J0ICcuL2FwcGxpY2F0aW9uLnNhc3MnO1xuaW1wb3J0IHtSb3V0ZUNvbXBvbmVudFByb3BzfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQge0l0ZW1zUmVkdXhBY3Rpb25zfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9pdGVtcy5hY3Rpb25cIjtcbmltcG9ydCB7SVJlZHV4U3RvcmV9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xuXG5pbnRlcmZhY2UgSVN0YXRlVHlwZSB7XG4gIGVycm9yOiBFcnJvciB8IG51bGw7XG59XG5cbmludGVyZmFjZSBJUHJvcHNUeXBlIGV4dGVuZHMgSVJlZHV4U3RvcmUsIFJvdXRlQ29tcG9uZW50UHJvcHM8e30+IHtcbiAgaXRlbXNTZWFyY2goe3JlZGlyZWN0fTogeyByZWRpcmVjdDogYm9vbGVhbiB9KTogSXRlbXNSZWR1eEFjdGlvbnM7XG4gIGl0ZW1zQ2hhbmdlU2VhcmNoVGV4dChzZWFyY2hUZXh0OiBzdHJpbmcpOiBJdGVtc1JlZHV4QWN0aW9ucztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzVHlwZSwgSVN0YXRlVHlwZT4ge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7fTtcblxuICBwdWJsaWMgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBlcnJvckluZm86IEVycm9ySW5mbykge1xuICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudDxJUHJvcHNUeXBlPiB7XG4gICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPEhlYWRlciB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2NDM1NTgyNjE2MFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaEJhclwiO1xuXG5pbXBvcnQgJy4vaGVhZGVyLnNhc3MnXG5pbXBvcnQge0Vycm9ySW5mb30gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1JvdXRlQ29tcG9uZW50UHJvcHN9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7SVJlZHV4U3RvcmV9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHtpdGVtc0NoYW5nZVNlYXJjaFRleHQsIEl0ZW1zUmVkdXhBY3Rpb25zLCBpdGVtc1NlYXJjaH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvaXRlbXMuYWN0aW9uXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbnRlcmZhY2UgSVN0YXRlVHlwZSB7XG4gIGVycm9yOiBFcnJvciB8IG51bGw7XG59XG5cbmludGVyZmFjZSBJUHJvcHNUeXBlIGV4dGVuZHMgSVJlZHV4U3RvcmUgLFJvdXRlQ29tcG9uZW50UHJvcHM8e30+e1xuICBpdGVtc1NlYXJjaCh7cmVkaXJlY3R9OiB7IHJlZGlyZWN0OiBib29sZWFuIH0pOiBJdGVtc1JlZHV4QWN0aW9ucztcbiAgaXRlbXNDaGFuZ2VTZWFyY2hUZXh0KHNlYXJjaFRleHQ6IHN0cmluZyk6IEl0ZW1zUmVkdXhBY3Rpb25zO1xufVxuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzVHlwZSwgSVN0YXRlVHlwZT4ge1xuXG4gIHJlYWRvbmx5IHN0YXRlID0ge1xuICAgIGVycm9yOiBudWxsXG4gIH07XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHt9O1xuXG4gIHB1YmxpYyBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogRXJyb3JJbmZvKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3J9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3RFbGVtZW50PElQcm9wc1R5cGU+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMiBjb2wtc20tMiBjb2wtbWQtMSBjb2wtbGctMSBsb2dvXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwibG9nbyBtZXJjYWRvIGxpYnJlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvSG9tZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgY29sLXNtLTEwIGNvbC1tZC0xMSBjb2wtbGctMTFcIj5cbiAgICAgICAgICAgICAgPFNlYXJjaEJhciB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBnb0hvbWUgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5pdGVtc0NoYW5nZVNlYXJjaFRleHQoJycpO1xuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcbiAgfVxufVxuXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBJUmVkdXhTdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoIGRpc3BhdGNoOiBhbnkpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpdGVtc0NoYW5nZVNlYXJjaFRleHQ6IChzZWFyY2hUZXh0OiBzdHJpbmcpID0+IGRpc3BhdGNoKGl0ZW1zQ2hhbmdlU2VhcmNoVGV4dChzZWFyY2hUZXh0KSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgSVByb3BzVHlwZSwgSVJlZHV4U3RvcmU+KFxuICBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShIZWFkZXIpO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTY0MzU1ODI2MTQwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7Y29ubmVjdFJvdXRlcn0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQgaXRlbXNSZWR1Y2VyIGZyb20gJy4vaXRlbXMucmVkdWNlcic7XG5pbXBvcnQgaXRlbVJlZHVjZXIgZnJvbSAnLi9pdGVtLnJlZHVjZXInO1xuaW1wb3J0IHtJSXRlbXNTdGF0ZX0gZnJvbSBcIi4uL2FjdGlvbnMvaXRlbXMuYWN0aW9uXCI7XG5pbXBvcnQge1JvdXRlclN0YXRlfSBmcm9tIFwicmVhY3Qtcm91dGVyLXJlZHV4XCI7XG5pbXBvcnQge0lJdGVtU3RhdGV9IGZyb20gXCIuLi9hY3Rpb25zL2l0ZW0uYWN0aW9uXCI7XG5cblxuZXhwb3J0IGludGVyZmFjZSBJUmVkdXhTdG9yZSB7XG4gIGl0ZW1zOiBJSXRlbXNTdGF0ZTtcbiAgaXRlbTogSUl0ZW1TdGF0ZTtcbiAgcm91dGVyOiBSb3V0ZXJTdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGhpc3Rvcnk6IGFueSkgPT4gY29tYmluZVJlZHVjZXJzPElSZWR1eFN0b3JlPih7XG4gIGl0ZW1zOiBpdGVtc1JlZHVjZXIsXG4gIGl0ZW06IGl0ZW1SZWR1Y2VyLFxuICByb3V0ZXI6IGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSlcbn0pO1xuIiwiaW1wb3J0IHtJSXRlbVN0YXRlLCBJdGVtUmVkdXhBY3Rpb25zfSBmcm9tIFwiLi4vYWN0aW9ucy9pdGVtLmFjdGlvblwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IElJdGVtU3RhdGUgPSB7XG4gIGl0ZW06IG51bGwsXG4gIGNhdGVnb3J5OiAnJyxcbiAgbG9hZGluZzogZmFsc2UsXG4gIHNvdXJjZTogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXRlbVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogSXRlbVJlZHV4QWN0aW9ucyk6IElJdGVtU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQGl0ZW0vTE9BRElORyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLnBheWxvYWQubG9hZGluZ1xuICAgICAgfTtcbiAgICBjYXNlICdAaXRlbS9DQU5DRUxfUkVRVUVTVCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc291cmNlOiBhY3Rpb24ucGF5bG9hZC5zb3VyY2VcbiAgICAgIH07XG4gICAgY2FzZSAnQGl0ZW0vTE9BRCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbTogYWN0aW9uLnBheWxvYWQuaXRlbSxcbiAgICAgICAgY2F0ZWdvcnk6IGFjdGlvbi5wYXlsb2FkLmNhdGVnb3J5IHx8ICcnXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQge0lJdGVtc1N0YXRlLCBJdGVtc1JlZHV4QWN0aW9uc30gZnJvbSBcIi4uL2FjdGlvbnMvaXRlbXMuYWN0aW9uXCI7XG5cbmNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5jb25zdCBzZWFyY2hUZXh0ID0gdXJsUGFyYW1zLmdldCgncXVlcnknKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJSXRlbXNTdGF0ZSA9IHtcbiAgY2F0ZWdvcmllczogW10sXG4gIGl0ZW1zOiBbXSxcbiAgc2VhcmNoVGV4dDogc2VhcmNoVGV4dCA/IHNlYXJjaFRleHQgOiAnJyxcbiAgbG9hZGluZzogZmFsc2UsXG4gIHNvdXJjZTogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXRlbXNSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEl0ZW1zUmVkdXhBY3Rpb25zKTogSUl0ZW1zU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQGl0ZW1zL0xPQURJTkcnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGFjdGlvbi5wYXlsb2FkLmxvYWRpbmdcbiAgICAgIH07XG4gICAgY2FzZSAnQGl0ZW1zL0NBTkNFTF9SRVFVRVNUJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzb3VyY2U6IGFjdGlvbi5wYXlsb2FkLnNvdXJjZVxuICAgICAgfTtcbiAgICBjYXNlICdAaXRlbXMvU0VBUkNIJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWFyY2hUZXh0OiBhY3Rpb24ucGF5bG9hZC5zZWFyY2hUZXh0XG4gICAgICB9O1xuICAgIGNhc2UgJ0BpdGVtcy9MT0FEJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGVtczogYWN0aW9uLnBheWxvYWQuaXRlbXMsXG4gICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5wYXlsb2FkLmNhdGVnb3JpZXNcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCBBeGlvcywge0F4aW9zRXJyb3IsIEF4aW9zSW5zdGFuY2UsIEF4aW9zUHJvbWlzZSwgQ2FuY2VsVG9rZW5Tb3VyY2UsIENhbmNlbFRva2VuU3RhdGljfSBmcm9tIFwiYXhpb3NcIjtcblxuXG5jbGFzcyBBcGlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBpbnN0YW5jZTogQXhpb3NJbnN0YW5jZTtcbiAgcHJpdmF0ZSBDYW5jZWxUb2tlbjogQ2FuY2VsVG9rZW5TdGF0aWM7XG4gIHByaXZhdGUgc291cmNlOiBDYW5jZWxUb2tlblNvdXJjZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gQXhpb3MuY3JlYXRlKCk7XG4gICAgdGhpcy5DYW5jZWxUb2tlbiA9IEF4aW9zLkNhbmNlbFRva2VuO1xuICB9XG5cbiAgIHB1YmxpYyBlcnJvckhhbmRsZXIoZXJyOiBBeGlvc0Vycm9yKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2VycicsIGVycik7XG4gICAgLy8gaWYgKGVyci5yZXNwb25zZSkge1xuICAgIC8vICAgaWYgKFs1MDBdLmluY2x1ZGVzKGVyci5yZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgLy8gICAgIFJhdmVuLmNhcHR1cmVFeGNlcHRpb24oSlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlKSk7XG4gICAgLy8gICAgIHN3YWwoJ1VwcyBoYSBvY3VycmlkbyB1biBlcnJvcicsIGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgPyBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlIDogZXJyLnJlc3BvbnNlLmRhdGEuZXJybXNnLCAnZXJyb3InKTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHN3YWwoJ1VwcyBoYSBvY3VycmlkbyB1biBlcnJvcicsIGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgPyBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlIDogZXJyLnJlc3BvbnNlLmRhdGEuZXJybXNnLCAnZXJyb3InKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9IGVsc2UgaWYgKGVyci5yZXF1ZXN0KSB7XG4gICAgLy8gICBSYXZlbi5jYXB0dXJlRXhjZXB0aW9uKEpTT04uc3RyaW5naWZ5KGVyci5yZXF1ZXN0KSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIFJhdmVuLmNhcHR1cmVFeGNlcHRpb24oSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgLy8gfVxuICB9XG5cbiAgcHVibGljIGdldFNvdXJjZSgpOiBDYW5jZWxUb2tlblNvdXJjZSB7XG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLkNhbmNlbFRva2VuLnNvdXJjZSgpO1xuICAgIHJldHVybiB0aGlzLnNvdXJjZTtcbiAgfVxuXG4gIHB1YmxpYyBzZWFyY2hJdGVtcyh0ZXh0OiBzdHJpbmcpOiBBeGlvc1Byb21pc2Uge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldChcbiAgICAgIGAvYXBpL2l0ZW1zP3F1ZXJ5PSR7dGV4dH1gXG4gICAgICAsIHtcbiAgICAgICAgY2FuY2VsVG9rZW46IHRoaXMuc291cmNlLnRva2VuXG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJdGVtKGlkOiBzdHJpbmcpOiBBeGlvc1Byb21pc2Uge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldChcbiAgICAgIGAvYXBpL2l0ZW1zLyR7aWR9YFxuICAgICAgLCB7XG4gICAgICAgIGNhbmNlbFRva2VuOiB0aGlzLnNvdXJjZS50b2tlblxuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwaVNlcnZpY2UoKTsiLCJpbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuLi9yZWR1Y2VycydcbmltcG9ydCBjcmVhdGVEZWJvdW5jZSBmcm9tICdyZWR1eC1kZWJvdW5jZWQnO1xuaW1wb3J0IFRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgYnJvd3Nlckhpc3RvcnQgZnJvbSBcIi4uL3V0aWxzL2hpc3RvcnlcIjtcblxuZXhwb3J0IGNvbnN0IGhpc3RvcnkgPSBicm93c2VySGlzdG9ydDtcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gIGxldCBlbmhhbmNlcnM6IGFueTtcbiAgY29uc3QgbWlkZGxld2FyZXM6IGFueVtdID0gW3JvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSldO1xuXG4gIG1pZGRsZXdhcmVzLnB1c2goY3JlYXRlRGVib3VuY2UoKSk7XG4gIG1pZGRsZXdhcmVzLnB1c2goVGh1bmtNaWRkbGV3YXJlKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoe3RyYWNlOiB0cnVlLCB0cmFjZUxpbWl0OiAxMCB9KTtcbiAgICBlbmhhbmNlcnMgPSBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xuICB9IGVsc2Uge1xuICAgIGVuaGFuY2VycyA9IGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyk7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzKGhpc3RvcnkpLCBlbmhhbmNlcnMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmU7XG4iLCJpbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCcm93c2VySGlzdG9yeSh7XG4gIGJhc2VuYW1lOiAnJ1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1vbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==