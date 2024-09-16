"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styles/custom.css */ "./assets/styles/custom.css");
/* harmony import */ var _components_RoomList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/RoomList */ "./assets/js/components/RoomList.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    darkMode = _useState2[0],
    setDarkMode = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.setAttribute('data-theme', 'dark');
    }
  }, []);
  var toggleDarkMode = function toggleDarkMode() {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("button", {
    className: "btn btn-outline-secondary theme-toggle",
    onClick: toggleDarkMode
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
    icon: darkMode ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__.faSun : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__.faMoon
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "column",
    style: {
      width: '30%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(_components_RoomList__WEBPACK_IMPORTED_MODULE_18__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "column",
    style: {
      width: '70%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    id: "todo-list-container"
  })));
};
react_dom__WEBPACK_IMPORTED_MODULE_15__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/components/AITodoGenerator.js":
/*!*************************************************!*\
  !*** ./assets/js/components/AITodoGenerator.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/InputGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }




























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var AITodoGenerator = function AITodoGenerator(_ref) {
  var roomId = _ref.roomId,
    onTodosGenerated = _ref.onTodosGenerated,
    setGlobalLoading = _ref.setGlobalLoading;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    prompt = _useState2[0],
    setPrompt = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showInput = _useState4[0],
    setShowInput = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var handleGenerate = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, errorData, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(prompt.trim() === '')) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setLoading(true);
            setGlobalLoading(true);
            setShowInput(false);
            _context.prev = 5;
            _context.next = 8;
            return fetch('/api/generate-todos', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                prompt: prompt,
                room_id: roomId
              })
            });
          case 8:
            response = _context.sent;
            if (response.ok) {
              _context.next = 14;
              break;
            }
            _context.next = 12;
            return response.json();
          case 12:
            errorData = _context.sent;
            throw new Error(errorData.error);
          case 14:
            _context.next = 16;
            return response.json();
          case 16:
            data = _context.sent;
            onTodosGenerated(data.todos);
            setPrompt('');
            _context.next = 24;
            break;
          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](5);
            console.error('Error generating todos:', _context.t0.message);
          case 24:
            _context.prev = 24;
            setLoading(false);
            setGlobalLoading(false);
            return _context.finish(24);
          case 28:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 21, 24, 28]]);
    }));
    return function handleGenerate() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleGenerate();
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_29__["default"], {
    variant: "secondary",
    onClick: function onClick() {
      return setShowInput(!showInput);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_30__.BsStars, null)), showInput && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_31__["default"], {
    style: {
      position: 'fixed',
      top: '75px',
      left: '55%',
      transform: 'translateX(-50%)',
      width: '50%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_32__["default"], {
    style: {
      width: '100%',
      color: '#D3D3D3',
      backgroundColor: '#343a40',
      borderColor: '#495057'
    },
    placeholder: "Ask AI to create some todos about a topic...",
    "aria-label": "AI Prompt",
    "aria-describedby": "basic-addon2",
    value: prompt,
    onChange: function onChange(e) {
      return setPrompt(e.target.value);
    },
    onKeyPress: handleKeyPress,
    className: "ai-todo-input"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AITodoGenerator);

/***/ }),

/***/ "./assets/js/components/Modal.js":
/*!***************************************!*\
  !*** ./assets/js/components/Modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");


var CustomModal = function CustomModal(_ref) {
  var show = _ref.show,
    handleClose = _ref.handleClose,
    title = _ref.title,
    children = _ref.children,
    handleSave = _ref.handleSave;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    show: show,
    onHide: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Title, null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Body, null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "secondary",
    onClick: handleClose
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "primary",
    onClick: handleSave
  }, "Save Changes")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomModal);

/***/ }),

/***/ "./assets/js/components/RoomList.js":
/*!******************************************!*\
  !*** ./assets/js/components/RoomList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.every.js */ "./node_modules/core-js/modules/es.array.every.js");
/* harmony import */ var core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./TodoList */ "./assets/js/components/TodoList.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Modal */ "./assets/js/components/Modal.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var RoomList = function RoomList() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    rooms = _useState2[0],
    setRooms = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedRoom = _useState4[0],
    setSelectedRoom = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showModal = _useState6[0],
    setShowModal = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)({
      name: '',
      description: ''
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    roomForm = _useState8[0],
    setRoomForm = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isEditing = _useState10[0],
    setIsEditing = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_33__.useEffect)(function () {
    fetch('/api/rooms').then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('Rooms fetched:', data);
      setRooms(data);
    })["catch"](function (error) {
      return console.error('Error fetching rooms:', error);
    });
  }, []);
  var handleRoomClick = function handleRoomClick(room) {
    console.log('Room clicked:', room);
    setSelectedRoom(room);
    react_dom__WEBPACK_IMPORTED_MODULE_34__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(_TodoList__WEBPACK_IMPORTED_MODULE_35__["default"], {
      room: room,
      onTodoUpdate: function onTodoUpdate() {
        return fetchRooms();
      }
    }), document.getElementById('todo-list-container'));
  };
  var fetchRooms = function fetchRooms() {
    fetch('/api/rooms').then(function (response) {
      return response.json();
    }).then(function (data) {
      return setRooms(data);
    })["catch"](function (error) {
      return console.error('Error fetching rooms:', error);
    });
  };
  var handleShowModal = function handleShowModal() {
    setShowModal(true);
  };
  var handleCloseModal = function handleCloseModal() {
    setShowModal(false);
    setIsEditing(false);
    setRoomForm({
      name: '',
      description: ''
    });
  };
  var handleFormChange = function handleFormChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setRoomForm(_objectSpread(_objectSpread({}, roomForm), {}, _defineProperty({}, name, value)));
  };
  var handleSaveRoom = function handleSaveRoom() {
    var method = isEditing ? 'PUT' : 'POST';
    var url = isEditing ? "/api/rooms/".concat(selectedRoom === null || selectedRoom === void 0 ? void 0 : selectedRoom.id) : '/api/rooms';
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(roomForm)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('Room saved:', data);
      if (isEditing) {
        setRooms(rooms.map(function (r) {
          return r.id === data.id ? data : r;
        }));
      } else {
        setRooms([].concat(_toConsumableArray(rooms), [data]));
      }
      handleCloseModal();
    })["catch"](function (error) {
      return console.error('Error saving room:', error);
    });
  };
  var handleEditRoom = function handleEditRoom(room, e) {
    e.stopPropagation();
    setSelectedRoom(room);
    setRoomForm(room);
    setIsEditing(true);
    handleShowModal();
  };
  var handleDeleteRoom = function handleDeleteRoom(roomId, e) {
    e.stopPropagation();
    fetch("/api/rooms/".concat(roomId), {
      method: 'DELETE'
    }).then(function () {
      console.log('Room deleted:', roomId);
      setRooms(rooms.filter(function (r) {
        return r.id !== roomId;
      }));
      if (selectedRoom && selectedRoom.id === roomId) {
        setSelectedRoom(null);
      }
    })["catch"](function (error) {
      return console.error('Error deleting room:', error);
    });
  };
  var calculateProgress = function calculateProgress(room) {
    var totalTodos = room.todos.length;
    var completedTodos = room.todos.filter(function (todo) {
      return todo.status;
    }).length;
    return totalTodos === 0 ? 0 : completedTodos / totalTodos * 100;
  };
  var isAllTodosCompleted = function isAllTodosCompleted(room) {
    return room.todos.length > 0 && room.todos.every(function (todo) {
      return todo.status;
    });
  };
  var handleDragEnd = function handleDragEnd(result) {
    if (!result.destination) return;
    var items = Array.from(rooms);
    var _items$splice = items.splice(result.source.index, 1),
      _items$splice2 = _slicedToArray(_items$splice, 1),
      reorderedItem = _items$splice2[0];
    items.splice(result.destination.index, 0, reorderedItem);
    setRooms(items);
    fetch('/api/rooms/update-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items.map(function (room, index) {
        return {
          id: room.id,
          order: index
        };
      }))
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('Order updated:', data);
    })["catch"](function (error) {
      return console.error('Error updating order:', error);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("div", {
    className: "d-flex justify-content-around"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("h2", null, "Rooms"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_37__["default"], {
    onClick: handleShowModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_38__.FaPlus, null), " New Room")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_39__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_39__.Droppable, {
    droppableId: "rooms"
  }, function (provided) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("div", _extends({}, provided.droppableProps, {
      ref: provided.innerRef,
      className: "mt-5 mb-3"
    }), rooms.map(function (room, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_39__.Draggable, {
        key: room.id,
        draggableId: String(room.id),
        index: index
      }, function (provided) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("div", _extends({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          className: "col-md-12 mb-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("div", {
          className: "card card-custom p-3 ".concat(selectedRoom && selectedRoom.id === room.id ? 'selected-room' : '', " "),
          onClick: function onClick() {
            return handleRoomClick(room);
          },
          style: {
            cursor: 'pointer'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("div", {
          className: "d-flex justify-content-between"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("div", {
          className: "d-flex flex-row align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("div", {
          className: "ms-2 c-details"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("h6", {
          className: "mb-0"
        }, room.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("span", null, room.description)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("div", {
          className: "mt-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("div", {
          className: "progress"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("div", {
          className: "progress-bar",
          role: "progressbar",
          style: {
            width: "".concat(calculateProgress(room), "%"),
            transition: 'width 0.5s ease',
            backgroundColor: isAllTodosCompleted(room) ? 'green' : 'blue'
          },
          "aria-valuenow": calculateProgress(room),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("div", {
          className: "mt-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("span", {
          className: "text1"
        }, room.todos.filter(function (todo) {
          return todo.status;
        }).length, " Completed", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("span", {
          className: "text2"
        }, " of ", room.todos.length, " todos")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement("div", {
          className: "mt-3 d-flex justify-content-end"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_37__["default"], {
          variant: "primary",
          onClick: function onClick(e) {
            return handleEditRoom(room, e);
          },
          className: "mr-2 m-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_38__.FaEdit, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_37__["default"], {
          variant: "danger",
          onClick: function onClick(e) {
            return handleDeleteRoom(room.id, e);
          },
          className: "mr-2 m-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_38__.FaTrash, null)))));
      });
    }), provided.placeholder);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_36__["default"], {
    show: showModal,
    handleClose: handleCloseModal,
    title: isEditing ? 'Edit Room' : 'Add Room',
    handleSave: handleSaveRoom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"].Label, null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"].Control, {
    type: "text",
    name: "name",
    value: roomForm.name,
    onChange: handleFormChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"].Label, null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"].Control, {
    as: "textarea",
    rows: 3,
    name: "description",
    value: roomForm.description,
    onChange: handleFormChange
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomList);

/***/ }),

/***/ "./assets/js/components/TodoList.js":
/*!******************************************!*\
  !*** ./assets/js/components/TodoList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.every.js */ "./node_modules/core-js/modules/es.array.every.js");
/* harmony import */ var core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Modal */ "./assets/js/components/Modal.js");
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-confetti */ "./node_modules/react-confetti/dist/react-confetti.min.js");
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-use/lib/useWindowSize */ "./node_modules/react-use/lib/useWindowSize.js");
/* harmony import */ var _AITodoGenerator__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./AITodoGenerator */ "./assets/js/components/AITodoGenerator.js");
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! react-spinners/ClipLoader */ "./node_modules/react-spinners/ClipLoader.js");
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_45__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// assets/js/components/TodoList.js









var TodoList = function TodoList(_ref) {
  var room = _ref.room,
    onTodoUpdate = _ref.onTodoUpdate;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_35__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    todos = _useState2[0],
    setTodos = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_35__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showModal = _useState4[0],
    setShowModal = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_35__.useState)({
      title: '',
      description: '',
      status: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    todoForm = _useState6[0],
    setTodoForm = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_35__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedTodo = _useState8[0],
    setSelectedTodo = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_35__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isEditing = _useState10[0],
    setIsEditing = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_35__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    confettiPieces = _useState12[0],
    setConfettiPieces = _useState12[1];
  var _useWindowSize = (0,react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_39__["default"])(),
    width = _useWindowSize.width,
    height = _useWindowSize.height;
  var prevAllCompleted = (0,react__WEBPACK_IMPORTED_MODULE_35__.useRef)(false);
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_35__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_35__.useEffect)(function () {
    fetch("/api/todos?room_id=".concat(room.id)).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setTodos(data);
    });
  }, [room]);
  (0,react__WEBPACK_IMPORTED_MODULE_35__.useEffect)(function () {
    var allTodosCompleted = todos.length > 0 && todos.every(function (todo) {
      return todo.status;
    });
    if (allTodosCompleted && !prevAllCompleted.current) {
      setConfettiPieces(200);
      setTimeout(function () {
        var interval = setInterval(function () {
          setConfettiPieces(function (prev) {
            if (prev <= 0) {
              clearInterval(interval);
              return 0;
            }
            return prev - 10;
          });
        }, 100);
      }, 3000);
    }
    prevAllCompleted.current = allTodosCompleted;
  }, [todos]);
  var handleShowModal = function handleShowModal() {
    setShowModal(true);
  };
  var handleCloseModal = function handleCloseModal() {
    setShowModal(false);
    setIsEditing(false);
    setTodoForm({
      title: '',
      description: '',
      status: false
    });
  };
  var handleFormChange = function handleFormChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setTodoForm(_objectSpread(_objectSpread({}, todoForm), {}, _defineProperty({}, name, value)));
  };
  var handleSaveTodo = function handleSaveTodo() {
    var method = isEditing ? 'PUT' : 'POST';
    var url = isEditing ? "/api/todos/".concat(selectedTodo.id) : '/api/todos';
    var newTodo = _objectSpread(_objectSpread({}, todoForm), {}, {
      room_id: room.id
    });
    if (!isEditing) {
      var maxOrder = todos.reduce(function (max, todo) {
        return todo.order > max ? todo.order : max;
      }, -1);
      newTodo.order = maxOrder + 1;
    }
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (isEditing) {
        setTodos(todos.map(function (t) {
          return t.id === data.id ? data : t;
        }));
      } else {
        setTodos([].concat(_toConsumableArray(todos), [data]));
      }
      handleCloseModal();
      onTodoUpdate();
    });
  };
  var handleEditTodo = function handleEditTodo(todo) {
    setSelectedTodo(todo);
    setTodoForm(todo);
    setIsEditing(true);
    handleShowModal();
  };
  var handleDeleteTodo = function handleDeleteTodo(todoId) {
    fetch("/api/todos/".concat(todoId), {
      method: 'DELETE'
    }).then(function () {
      setTodos(todos.filter(function (t) {
        return t.id !== todoId;
      }));
      onTodoUpdate();
    });
  };
  var handleTodoClick = function handleTodoClick(todo) {
    var updatedTodo = _objectSpread(_objectSpread({}, todo), {}, {
      status: !todo.status
    });
    fetch("/api/todos/".concat(todo.id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTodo)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setTodos(todos.map(function (t) {
        return t.id === data.id ? data : t;
      }));
      onTodoUpdate();
    });
  };
  var handleDragEnd = function handleDragEnd(result) {
    if (!result.destination) return;
    var items = Array.from(todos);
    var _items$splice = items.splice(result.source.index, 1),
      _items$splice2 = _slicedToArray(_items$splice, 1),
      reorderedItem = _items$splice2[0];
    items.splice(result.destination.index, 0, reorderedItem);
    setTodos(items);
    fetch('/api/todos/update-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items.map(function (todo, index) {
        return {
          id: todo.id,
          order: index
        };
      }))
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('Order updated:', data);
    })["catch"](function (error) {
      return console.error('Error updating order:', error);
    });
  };
  var calculateProgress = function calculateProgress() {
    var totalTodos = todos.length;
    var completedTodos = todos.filter(function (todo) {
      return todo.status;
    }).length;
    return totalTodos === 0 ? 0 : completedTodos / totalTodos * 100;
  };
  var handleTodosGenerated = function handleTodosGenerated(generatedTodos) {
    setTodos(function (prevTodos) {
      return [].concat(_toConsumableArray(prevTodos), _toConsumableArray(generatedTodos));
    });
    setLoading(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("div", null, confettiPieces > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement((react_confetti__WEBPACK_IMPORTED_MODULE_37___default()), {
    width: width,
    height: height,
    numberOfPieces: confettiPieces
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("h2", null, room.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("div", {
    className: "d-flex align-items-center justify-content-around"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"], {
    onClick: handleShowModal,
    style: {
      width: '200%',
      marginRight: '3px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_41__.FaPlus, null), " To Do"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(_AITodoGenerator__WEBPACK_IMPORTED_MODULE_38__["default"], {
    roomId: room.id,
    onTodosGenerated: handleTodosGenerated,
    setGlobalLoading: setLoading,
    className: "m-1"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("div", {
    className: "progress-bar",
    role: "progressbar",
    style: {
      width: "".concat(calculateProgress(), "%"),
      transition: 'width 0.5s ease',
      backgroundColor: prevAllCompleted.current ? 'green' : 'blue'
    },
    "aria-valuenow": calculateProgress(),
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_42__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_42__.Droppable, {
    droppableId: "todos"
  }, function (provided) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("div", _extends({
      className: "card-columns mt-5"
    }, provided.droppableProps, {
      ref: provided.innerRef
    }), todos.map(function (todo, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_42__.Draggable, {
        key: todo.id,
        draggableId: String(todo.id),
        index: index
      }, function (provided) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("div", _extends({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          className: "card-todo mb-3 ".concat(todo.status ? 'done' : '')
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"].Title, null, todo.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_43__["default"].Text, null, todo.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("div", {
          className: "status-badge"
        }, todo.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("span", {
          className: "badge bg-success"
        }, "Done") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("span", {
          className: "badge bg-secondary"
        }, "Not done")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("div", {
          className: "d-flex justify-content-between"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"], {
          variant: todo.status ? 'secondary' : 'success',
          onClick: function onClick() {
            return handleTodoClick(todo);
          },
          className: "mr-2 m-1"
        }, todo.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_41__.FaTimes, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_41__.FaCheck, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"], {
          variant: "primary",
          onClick: function onClick() {
            return handleEditTodo(todo);
          },
          className: "mr-2 m-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_41__.FaEdit, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_40__["default"], {
          variant: "danger",
          onClick: function onClick() {
            return handleDeleteTodo(todo.id);
          },
          className: "mr-2 m-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_41__.FaTrash, null))))));
      });
    }), provided.placeholder);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_36__["default"], {
    show: showModal,
    handleClose: handleCloseModal,
    title: isEditing ? 'Edit Todo' : 'Add Todo',
    handleSave: handleSaveTodo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_44__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_44__["default"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_44__["default"].Label, null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_44__["default"].Control, {
    type: "text",
    name: "title",
    value: todoForm.title,
    onChange: handleFormChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_44__["default"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_44__["default"].Label, null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_44__["default"].Control, {
    as: "textarea",
    rows: 3,
    name: "description",
    value: todoForm.description,
    onChange: handleFormChange
  })))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '1000'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35__.createElement((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_45___default()), {
    color: "#0000FF",
    size: 50
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);

/***/ }),

/***/ "./assets/styles/custom.css":
/*!**********************************!*\
  !*** ./assets/styles/custom.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_bootstrap_dist_cs-e058c0"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRXFSLFFBQVEsQ0FBQ2hHLEtBQU07SUFDdEJQLFFBQVEsRUFBRThDO0VBQWlCLENBQzlCLENBQ08sQ0FBQyxlQUNidFEsaURBQUEsQ0FBQ3dPLHdEQUFJLENBQUMyRSxLQUFLLHFCQUNQblQsaURBQUEsQ0FBQ3dPLHdEQUFJLENBQUM0RSxLQUFLLFFBQUMsYUFBdUIsQ0FBQyxlQUNwQ3BULGlEQUFBLENBQUN3Tyx3REFBSSxDQUFDNkUsT0FBTztJQUNUQyxFQUFFLEVBQUMsVUFBVTtJQUNiQyxJQUFJLEVBQUUsQ0FBRTtJQUNScE0sSUFBSSxFQUFDLGFBQWE7SUFDbEJ6RSxLQUFLLEVBQUVxUixRQUFRLENBQUN4RSxXQUFZO0lBQzVCL0IsUUFBUSxFQUFFOEM7RUFBaUIsQ0FDOUIsQ0FDTyxDQUNWLENBQ0csQ0FBQyxFQUNiL0UsT0FBTyxpQkFDSnZMLGlEQUFBO0lBQUsyQixLQUFLLEVBQUU7TUFDUm9MLFFBQVEsRUFBRSxPQUFPO01BQ2pCRSxHQUFHLEVBQUUsS0FBSztNQUNWQyxJQUFJLEVBQUUsS0FBSztNQUNYQyxTQUFTLEVBQUUsdUJBQXVCO01BQ2xDK0ksTUFBTSxFQUFFO0lBQ1o7RUFBRSxnQkFDRWxXLGlEQUFBLENBQUN5SyxtRUFBVTtJQUFDMkMsS0FBSyxFQUFDLFNBQVM7SUFBQytJLElBQUksRUFBRTtFQUFHLENBQUUsQ0FDdEMsQ0FFUixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlcEgsUUFBUTs7Ozs7Ozs7Ozs7QUNuUnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BSVRvZG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUm9vbUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9jdXN0b20uY3NzP2YyZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2N1c3RvbS5jc3MnOyBcbmltcG9ydCBSb29tTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvUm9vbUxpc3QnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhU3VuLCBmYU1vb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzYXZlZFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG4gICAgICAgIGlmIChzYXZlZFRoZW1lID09PSAnZGFyaycpIHtcbiAgICAgICAgICAgIHNldERhcmtNb2RlKHRydWUpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XG4gICAgICAgIHNldERhcmtNb2RlKCFkYXJrTW9kZSk7XG4gICAgICAgIGlmICghZGFya01vZGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10aGVtZScpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSB0aGVtZS10b2dnbGVcIiBvbkNsaWNrPXt0b2dnbGVEYXJrTW9kZX0+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtkYXJrTW9kZSA/IGZhU3VuIDogZmFNb29ufSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiIHN0eWxlPXt7IHdpZHRoOiAnMzAlJyB9fT5cbiAgICAgICAgICAgICAgICA8Um9vbUxpc3QgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiBzdHlsZT17eyB3aWR0aDogJzcwJScgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInRvZG8tbGlzdC1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dEdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBCc1N0YXJzIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgQ2xpcExvYWRlciBmcm9tICdyZWFjdC1zcGlubmVycy9DbGlwTG9hZGVyJztcblxuY29uc3QgQUlUb2RvR2VuZXJhdG9yID0gKHsgcm9vbUlkLCBvblRvZG9zR2VuZXJhdGVkLCBzZXRHbG9iYWxMb2FkaW5nIH0pID0+IHtcbiAgICBjb25zdCBbcHJvbXB0LCBzZXRQcm9tcHRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzaG93SW5wdXQsIHNldFNob3dJbnB1dF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlR2VuZXJhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChwcm9tcHQudHJpbSgpID09PSAnJykgcmV0dXJuO1xuXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHNldEdsb2JhbExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHNldFNob3dJbnB1dChmYWxzZSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2VuZXJhdGUtdG9kb3MnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcm9tcHQsIHJvb21faWQ6IHJvb21JZCB9KSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvckRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgb25Ub2Rvc0dlbmVyYXRlZChkYXRhLnRvZG9zKTtcbiAgICAgICAgICAgIHNldFByb21wdCgnJyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIHRvZG9zOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRHbG9iYWxMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBoYW5kbGVHZW5lcmF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93SW5wdXQoIXNob3dJbnB1dCl9PlxuICAgICAgICAgICAgICAgIDxCc1N0YXJzIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIHtzaG93SW5wdXQgJiYgKFxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIHN0eWxlPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCB0b3A6ICc3NXB4JywgbGVmdDogJzU1JScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLCB3aWR0aDogJzUwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgY29sb3I6ICcjRDNEM0QzJywgYmFja2dyb3VuZENvbG9yOiAnIzM0M2E0MCcsIGJvcmRlckNvbG9yOiAnIzQ5NTA1NycgfX0gwqBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXNrIEFJIHRvIGNyZWF0ZSBzb21lIHRvZG9zIGFib3V0IGEgdG9waWMuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFJIFByb21wdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByb21wdChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFpLXRvZG8taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBSVRvZG9HZW5lcmF0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IEN1c3RvbU1vZGFsID0gKHsgc2hvdywgaGFuZGxlQ2xvc2UsIHRpdGxlLCBjaGlsZHJlbiwgaGFuZGxlU2F2ZSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsIHNob3c9e3Nob3d9IG9uSGlkZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+e3RpdGxlfTwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxNb2RhbC5Cb2R5PntjaGlsZHJlbn08L01vZGFsLkJvZHk+XG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU2F2ZX0+XG4gICAgICAgICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbU1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgRmFQbHVzLCBGYUVkaXQsIEZhVHJhc2ggfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJvcHBhYmxlLCBEcmFnZ2FibGUgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJztcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL1RvZG9MaXN0JztcbmltcG9ydCBDdXN0b21Nb2RhbCBmcm9tICcuL01vZGFsJztcblxuY29uc3QgUm9vbUxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Jvb21zLCBzZXRSb29tc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3NlbGVjdGVkUm9vbSwgc2V0U2VsZWN0ZWRSb29tXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Jvb21Gb3JtLCBzZXRSb29tRm9ybV0gPSB1c2VTdGF0ZSh7IG5hbWU6ICcnLCBkZXNjcmlwdGlvbjogJycgfSk7XG4gICAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKCcvYXBpL3Jvb21zJylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSb29tcyBmZXRjaGVkOicsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHNldFJvb21zKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyByb29tczonLCBlcnJvcikpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZVJvb21DbGljayA9IChyb29tKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSb29tIGNsaWNrZWQ6Jywgcm9vbSk7XG4gICAgICAgIHNldFNlbGVjdGVkUm9vbShyb29tKTtcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKDxUb2RvTGlzdCByb29tPXtyb29tfSBvblRvZG9VcGRhdGU9eygpID0+IGZldGNoUm9vbXMoKX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QtY29udGFpbmVyJykpO1xuICAgIH07XG5cbiAgICBjb25zdCBmZXRjaFJvb21zID0gKCkgPT4ge1xuICAgICAgICBmZXRjaCgnL2FwaS9yb29tcycpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHNldFJvb21zKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHJvb21zOicsIGVycm9yKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNob3dNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICAgICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRSb29tRm9ybSh7IG5hbWU6ICcnLCBkZXNjcmlwdGlvbjogJycgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUZvcm1DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICAgICAgc2V0Um9vbUZvcm0oeyAuLi5yb29tRm9ybSwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU2F2ZVJvb20gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IGlzRWRpdGluZyA/ICdQVVQnIDogJ1BPU1QnO1xuICAgICAgICBjb25zdCB1cmwgPSBpc0VkaXRpbmcgPyBgL2FwaS9yb29tcy8ke3NlbGVjdGVkUm9vbT8uaWR9YCA6ICcvYXBpL3Jvb21zJztcblxuICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocm9vbUZvcm0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUm9vbSBzYXZlZDonLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNFZGl0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFJvb21zKHJvb21zLm1hcChyID0+IChyLmlkID09PSBkYXRhLmlkID8gZGF0YSA6IHIpKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Um9vbXMoWy4uLnJvb21zLCBkYXRhXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIHJvb206JywgZXJyb3IpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRWRpdFJvb20gPSAocm9vbSwgZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBzZXRTZWxlY3RlZFJvb20ocm9vbSk7XG4gICAgICAgIHNldFJvb21Gb3JtKHJvb20pO1xuICAgICAgICBzZXRJc0VkaXRpbmcodHJ1ZSk7XG4gICAgICAgIGhhbmRsZVNob3dNb2RhbCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEZWxldGVSb29tID0gKHJvb21JZCwgZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBmZXRjaChgL2FwaS9yb29tcy8ke3Jvb21JZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUm9vbSBkZWxldGVkOicsIHJvb21JZCk7XG4gICAgICAgICAgICAgICAgc2V0Um9vbXMocm9vbXMuZmlsdGVyKHIgPT4gci5pZCAhPT0gcm9vbUlkKSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkUm9vbSAmJiBzZWxlY3RlZFJvb20uaWQgPT09IHJvb21JZCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFJvb20obnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyByb29tOicsIGVycm9yKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbGN1bGF0ZVByb2dyZXNzID0gKHJvb20pID0+IHtcbiAgICAgICAgY29uc3QgdG90YWxUb2RvcyA9IHJvb20udG9kb3MubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb21wbGV0ZWRUb2RvcyA9IHJvb20udG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5zdGF0dXMpLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuICh0b3RhbFRvZG9zID09PSAwKSA/IDAgOiAoY29tcGxldGVkVG9kb3MgLyB0b3RhbFRvZG9zKSAqIDEwMDtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNBbGxUb2Rvc0NvbXBsZXRlZCA9IChyb29tKSA9PiB7XG4gICAgICAgIHJldHVybiByb29tLnRvZG9zLmxlbmd0aCA+IDAgJiYgcm9vbS50b2Rvcy5ldmVyeSh0b2RvID0+IHRvZG8uc3RhdHVzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcblxuICAgICAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20ocm9vbXMpO1xuICAgICAgICBjb25zdCBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XG4gICAgICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pO1xuXG4gICAgICAgIHNldFJvb21zKGl0ZW1zKTtcblxuICAgICAgICBmZXRjaCgnL2FwaS9yb29tcy91cGRhdGUtb3JkZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaXRlbXMubWFwKChyb29tLCBpbmRleCkgPT4gKHsgaWQ6IHJvb20uaWQsIG9yZGVyOiBpbmRleCB9KSkpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT3JkZXIgdXBkYXRlZDonLCBkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIG9yZGVyOicsIGVycm9yKSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmQnPlxuICAgICAgICAgICAgICAgIDxoMj5Sb29tczwvaDI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTaG93TW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICA8RmFQbHVzIC8+IE5ldyBSb29tXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cbiAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwicm9vbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IGNsYXNzTmFtZT1cIm10LTUgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb29tcy5tYXAoKHJvb20sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtyb29tLmlkfSBkcmFnZ2FibGVJZD17U3RyaW5nKHJvb20uaWQpfSBpbmRleD17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wtbWQtMTIgbWItMmB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjYXJkIGNhcmQtY3VzdG9tIHAtMyAke3NlbGVjdGVkUm9vbSAmJiBzZWxlY3RlZFJvb20uaWQgPT09IHJvb20uaWQgPyAnc2VsZWN0ZWQtcm9vbScgOiAnJ30gYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJvb21DbGljayhyb29tKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtMiBjLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0wXCI+e3Jvb20ubmFtZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Jvb20uZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtjYWxjdWxhdGVQcm9ncmVzcyhyb29tKX0lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3dpZHRoIDAuNXMgZWFzZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNBbGxUb2Rvc0NvbXBsZXRlZChyb29tKSA/ICdncmVlbicgOiAnYmx1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVub3c9e2NhbGN1bGF0ZVByb2dyZXNzKHJvb20pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb29tLnRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uc3RhdHVzKS5sZW5ndGh9IENvbXBsZXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dDJcIj4gb2Yge3Jvb20udG9kb3MubGVuZ3RofSB0b2Rvczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUVkaXRSb29tKHJvb20sIGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yIG0tMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFFZGl0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZURlbGV0ZVJvb20ocm9vbS5pZCwgZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgbS0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYVRyYXNoIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxuICAgICAgICAgICAgPEN1c3RvbU1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17c2hvd01vZGFsfVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtpc0VkaXRpbmcgPyAnRWRpdCBSb29tJyA6ICdBZGQgUm9vbSd9XG4gICAgICAgICAgICAgICAgaGFuZGxlU2F2ZT17aGFuZGxlU2F2ZVJvb219PlxuICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk5hbWU8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm9vbUZvcm0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RGVzY3JpcHRpb248L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb29tRm9ybS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9DdXN0b21Nb2RhbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvb21MaXN0O1xuIiwiLy8gYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9kb0xpc3QuanNcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgRmFQbHVzLCBGYUVkaXQsIEZhVHJhc2gsIEZhQ2hlY2ssIEZhVGltZXMgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJhZ2dhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XG5pbXBvcnQgQ3VzdG9tTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgQ29uZmV0dGkgZnJvbSAncmVhY3QtY29uZmV0dGknO1xuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAncmVhY3QtdXNlL2xpYi91c2VXaW5kb3dTaXplJztcbmltcG9ydCBBSVRvZG9HZW5lcmF0b3IgZnJvbSAnLi9BSVRvZG9HZW5lcmF0b3InO1xuaW1wb3J0IENsaXBMb2FkZXIgZnJvbSAncmVhY3Qtc3Bpbm5lcnMvQ2xpcExvYWRlcic7XG5cbmNvbnN0IFRvZG9MaXN0ID0gKHsgcm9vbSwgb25Ub2RvVXBkYXRlIH0pID0+IHtcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt0b2RvRm9ybSwgc2V0VG9kb0Zvcm1dID0gdXNlU3RhdGUoeyB0aXRsZTogJycsIGRlc2NyaXB0aW9uOiAnJywgc3RhdHVzOiBmYWxzZSB9KTtcbiAgICBjb25zdCBbc2VsZWN0ZWRUb2RvLCBzZXRTZWxlY3RlZFRvZG9dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY29uZmV0dGlQaWVjZXMsIHNldENvbmZldHRpUGllY2VzXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdXNlV2luZG93U2l6ZSgpO1xuICAgIGNvbnN0IHByZXZBbGxDb21wbGV0ZWQgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKGAvYXBpL3RvZG9zP3Jvb21faWQ9JHtyb29tLmlkfWApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHNldFRvZG9zKGRhdGEpKTtcbiAgICB9LCBbcm9vbV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsVG9kb3NDb21wbGV0ZWQgPSB0b2Rvcy5sZW5ndGggPiAwICYmIHRvZG9zLmV2ZXJ5KHRvZG8gPT4gdG9kby5zdGF0dXMpO1xuXG4gICAgICAgIGlmIChhbGxUb2Rvc0NvbXBsZXRlZCAmJiAhcHJldkFsbENvbXBsZXRlZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBzZXRDb25mZXR0aVBpZWNlcygyMDApO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZldHRpUGllY2VzKHByZXYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXYgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldkFsbENvbXBsZXRlZC5jdXJyZW50ID0gYWxsVG9kb3NDb21wbGV0ZWQ7XG4gICAgfSwgW3RvZG9zXSk7XG5cbiAgICBjb25zdCBoYW5kbGVTaG93TW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldFNob3dNb2RhbCh0cnVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgICAgICAgc2V0VG9kb0Zvcm0oeyB0aXRsZTogJycsIGRlc2NyaXB0aW9uOiAnJywgc3RhdHVzOiBmYWxzZSB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRm9ybUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRUb2RvRm9ybSh7IC4uLnRvZG9Gb3JtLCBbbmFtZV06IHZhbHVlIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTYXZlVG9kbyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gaXNFZGl0aW5nID8gJ1BVVCcgOiAnUE9TVCc7XG4gICAgICAgIGNvbnN0IHVybCA9IGlzRWRpdGluZyA/IGAvYXBpL3RvZG9zLyR7c2VsZWN0ZWRUb2RvLmlkfWAgOiAnL2FwaS90b2Rvcyc7XG5cbiAgICAgICAgbGV0IG5ld1RvZG8gPSB7IC4uLnRvZG9Gb3JtLCByb29tX2lkOiByb29tLmlkIH07XG5cbiAgICAgICAgaWYgKCFpc0VkaXRpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1heE9yZGVyID0gdG9kb3MucmVkdWNlKChtYXgsIHRvZG8pID0+ICh0b2RvLm9yZGVyID4gbWF4ID8gdG9kby5vcmRlciA6IG1heCksIC0xKTtcbiAgICAgICAgICAgIG5ld1RvZG8ub3JkZXIgPSBtYXhPcmRlciArIDE7XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VG9kbylcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc0VkaXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9kb3ModG9kb3MubWFwKHQgPT4gKHQuaWQgPT09IGRhdGEuaWQgPyBkYXRhIDogdCkpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRUb2RvcyhbLi4udG9kb3MsIGRhdGFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgIG9uVG9kb1VwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUVkaXRUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRUb2RvKHRvZG8pO1xuICAgICAgICBzZXRUb2RvRm9ybSh0b2RvKTtcbiAgICAgICAgc2V0SXNFZGl0aW5nKHRydWUpO1xuICAgICAgICBoYW5kbGVTaG93TW9kYWwoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlVG9kbyA9ICh0b2RvSWQpID0+IHtcbiAgICAgICAgZmV0Y2goYC9hcGkvdG9kb3MvJHt0b2RvSWR9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VG9kb3ModG9kb3MuZmlsdGVyKHQgPT4gdC5pZCAhPT0gdG9kb0lkKSk7XG4gICAgICAgICAgICAgICAgb25Ub2RvVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVG9kb0NsaWNrID0gKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRvZG8gPSB7IC4uLnRvZG8sIHN0YXR1czogIXRvZG8uc3RhdHVzIH07XG4gICAgICAgIGZldGNoKGAvYXBpL3RvZG9zLyR7dG9kby5pZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVG9kbylcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRvZG9zKHRvZG9zLm1hcCh0ID0+IHQuaWQgPT09IGRhdGEuaWQgPyBkYXRhIDogdCkpO1xuICAgICAgICAgICAgICAgIG9uVG9kb1VwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZURyYWdFbmQgPSAocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKHRvZG9zKTtcbiAgICAgICAgY29uc3QgW3Jlb3JkZXJlZEl0ZW1dID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xuICAgICAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcblxuICAgICAgICBzZXRUb2RvcyhpdGVtcyk7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvdG9kb3MvdXBkYXRlLW9yZGVyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGl0ZW1zLm1hcCgodG9kbywgaW5kZXgpID0+ICh7IGlkOiB0b2RvLmlkLCBvcmRlcjogaW5kZXggfSkpKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ09yZGVyIHVwZGF0ZWQ6JywgZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBvcmRlcjonLCBlcnJvcikpO1xuICAgIH07XG5cbiAgICBjb25zdCBjYWxjdWxhdGVQcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG90YWxUb2RvcyA9IHRvZG9zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY29tcGxldGVkVG9kb3MgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLnN0YXR1cykubGVuZ3RoO1xuICAgICAgICByZXR1cm4gKHRvdGFsVG9kb3MgPT09IDApID8gMCA6IChjb21wbGV0ZWRUb2RvcyAvIHRvdGFsVG9kb3MpICogMTAwO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVUb2Rvc0dlbmVyYXRlZCA9IChnZW5lcmF0ZWRUb2RvcykgPT4ge1xuICAgICAgICBzZXRUb2RvcygocHJldlRvZG9zKSA9PiBbLi4ucHJldlRvZG9zLCAuLi5nZW5lcmF0ZWRUb2Rvc10pO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjb25mZXR0aVBpZWNlcyA+IDAgJiYgPENvbmZldHRpIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IG51bWJlck9mUGllY2VzPXtjb25mZXR0aVBpZWNlc30gLz59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICA8aDI+e3Jvb20ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2hvd01vZGFsfSBzdHlsZT17eyB3aWR0aDogJzIwMCUnLCBtYXJnaW5SaWdodDogJzNweCcsICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYVBsdXMgLz4gVG8gRG9cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxBSVRvZG9HZW5lcmF0b3Igcm9vbUlkPXtyb29tLmlkfSBvblRvZG9zR2VuZXJhdGVkPXtoYW5kbGVUb2Rvc0dlbmVyYXRlZH0gc2V0R2xvYmFsTG9hZGluZz17c2V0TG9hZGluZ30gY2xhc3NOYW1lPVwibS0xXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtjYWxjdWxhdGVQcm9ncmVzcygpfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICd3aWR0aCAwLjVzIGVhc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJldkFsbENvbXBsZXRlZC5jdXJyZW50ID8gJ2dyZWVuJyA6ICdibHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVub3c9e2NhbGN1bGF0ZVByb2dyZXNzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cbiAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwidG9kb3NcIj5cbiAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbHVtbnMgbXQtNVwiIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30gcmVmPXtwcm92aWRlZC5pbm5lclJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvZG9zLm1hcCgodG9kbywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e3RvZG8uaWR9IGRyYWdnYWJsZUlkPXtTdHJpbmcodG9kby5pZCl9IGluZGV4PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNhcmQtdG9kbyBtYi0zICR7dG9kby5zdGF0dXMgPyAnZG9uZScgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPnt0b2RvLnRpdGxlfTwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+e3RvZG8uZGVzY3JpcHRpb259PC9DYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1cy1iYWRnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2RvLnN0YXR1cyA/IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJnLXN1Y2Nlc3NcIj5Eb25lPC9zcGFuPiA6IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJnLXNlY29uZGFyeVwiPk5vdCBkb25lPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PXt0b2RvLnN0YXR1cyA/ICdzZWNvbmRhcnknIDogJ3N1Y2Nlc3MnfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb2RvQ2xpY2sodG9kbyl9IGNsYXNzTmFtZT1cIm1yLTIgbS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9kby5zdGF0dXMgPyA8RmFUaW1lcyAvPiA6IDxGYUNoZWNrIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdFRvZG8odG9kbyl9IGNsYXNzTmFtZT1cIm1yLTIgbS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFFZGl0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVUb2RvKHRvZG8uaWQpfSBjbGFzc05hbWU9XCJtci0yIG0tMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhVHJhc2ggLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxuICAgICAgICAgICAgPEN1c3RvbU1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17c2hvd01vZGFsfVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtpc0VkaXRpbmcgPyAnRWRpdCBUb2RvJyA6ICdBZGQgVG9kbyd9XG4gICAgICAgICAgICAgICAgaGFuZGxlU2F2ZT17aGFuZGxlU2F2ZVRvZG99PlxuICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlRpdGxlPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b2RvRm9ybS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5EZXNjcmlwdGlvbjwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvZG9Gb3JtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvQ3VzdG9tTW9kYWw+XG4gICAgICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogJzEwMDAnXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxDbGlwTG9hZGVyIGNvbG9yPVwiIzAwMDBGRlwiIHNpemU9ezUwfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZWFjdERPTSIsIlJvb21MaXN0IiwiRm9udEF3ZXNvbWVJY29uIiwiZmFTdW4iLCJmYU1vb24iLCJBcHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJkYXJrTW9kZSIsInNldERhcmtNb2RlIiwic2F2ZWRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkb2N1bWVudCIsImJvZHkiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGVEYXJrTW9kZSIsInNldEl0ZW0iLCJyZW1vdmVBdHRyaWJ1dGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsImljb24iLCJzdHlsZSIsIndpZHRoIiwiaWQiLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibGVuIiwiYXJyMiIsImlzQXJyYXkiLCJCdXR0b24iLCJJbnB1dEdyb3VwIiwiRm9ybUNvbnRyb2wiLCJCc1N0YXJzIiwiQ2xpcExvYWRlciIsIkFJVG9kb0dlbmVyYXRvciIsIl9yZWYiLCJyb29tSWQiLCJvblRvZG9zR2VuZXJhdGVkIiwic2V0R2xvYmFsTG9hZGluZyIsInByb21wdCIsInNldFByb21wdCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2hvd0lucHV0Iiwic2V0U2hvd0lucHV0IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUdlbmVyYXRlIiwiX3JlZjIiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJlcnJvckRhdGEiLCJkYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInRyaW0iLCJmZXRjaCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5Iiwicm9vbV9pZCIsIm9rIiwianNvbiIsInRvZG9zIiwidDAiLCJjb25zb2xlIiwibWVzc2FnZSIsImhhbmRsZUtleVByZXNzIiwiZXZlbnQiLCJwb3NpdGlvbiIsInZhcmlhbnQiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwiTW9kYWwiLCJDdXN0b21Nb2RhbCIsInNob3ciLCJoYW5kbGVDbG9zZSIsInRpdGxlIiwiY2hpbGRyZW4iLCJoYW5kbGVTYXZlIiwib25IaWRlIiwiSGVhZGVyIiwiY2xvc2VCdXR0b24iLCJUaXRsZSIsIkJvZHkiLCJGb290ZXIiLCJGb3JtIiwiRmFQbHVzIiwiRmFFZGl0IiwiRmFUcmFzaCIsIkRyYWdEcm9wQ29udGV4dCIsIkRyb3BwYWJsZSIsIkRyYWdnYWJsZSIsIlRvZG9MaXN0Iiwicm9vbXMiLCJzZXRSb29tcyIsInNlbGVjdGVkUm9vbSIsInNldFNlbGVjdGVkUm9vbSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIl91c2VTdGF0ZTciLCJkZXNjcmlwdGlvbiIsIl91c2VTdGF0ZTgiLCJyb29tRm9ybSIsInNldFJvb21Gb3JtIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTEwIiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwibG9nIiwiaGFuZGxlUm9vbUNsaWNrIiwicm9vbSIsIm9uVG9kb1VwZGF0ZSIsImZldGNoUm9vbXMiLCJoYW5kbGVTaG93TW9kYWwiLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlRm9ybUNoYW5nZSIsIl9lJHRhcmdldCIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJoYW5kbGVTYXZlUm9vbSIsInVybCIsImNvbmNhdCIsIm1hcCIsIl90b0NvbnN1bWFibGVBcnJheSIsImhhbmRsZUVkaXRSb29tIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlRGVsZXRlUm9vbSIsImZpbHRlciIsImNhbGN1bGF0ZVByb2dyZXNzIiwidG90YWxUb2RvcyIsImNvbXBsZXRlZFRvZG9zIiwidG9kbyIsInN0YXR1cyIsImlzQWxsVG9kb3NDb21wbGV0ZWQiLCJldmVyeSIsImhhbmRsZURyYWdFbmQiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsIml0ZW1zIiwiX2l0ZW1zJHNwbGljZSIsInNwbGljZSIsInNvdXJjZSIsImluZGV4IiwiX2l0ZW1zJHNwbGljZTIiLCJyZW9yZGVyZWRJdGVtIiwib3JkZXIiLCJvbkRyYWdFbmQiLCJkcm9wcGFibGVJZCIsInByb3ZpZGVkIiwiX2V4dGVuZHMiLCJkcm9wcGFibGVQcm9wcyIsInJlZiIsImlubmVyUmVmIiwiZHJhZ2dhYmxlSWQiLCJTdHJpbmciLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyIsImN1cnNvciIsInJvbGUiLCJ0cmFuc2l0aW9uIiwiR3JvdXAiLCJMYWJlbCIsIkNvbnRyb2wiLCJhcyIsInJvd3MiLCJ1c2VSZWYiLCJDYXJkIiwiRmFDaGVjayIsIkZhVGltZXMiLCJDb25mZXR0aSIsInVzZVdpbmRvd1NpemUiLCJzZXRUb2RvcyIsInRvZG9Gb3JtIiwic2V0VG9kb0Zvcm0iLCJzZWxlY3RlZFRvZG8iLCJzZXRTZWxlY3RlZFRvZG8iLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiY29uZmV0dGlQaWVjZXMiLCJzZXRDb25mZXR0aVBpZWNlcyIsIl91c2VXaW5kb3dTaXplIiwiaGVpZ2h0IiwicHJldkFsbENvbXBsZXRlZCIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJhbGxUb2Rvc0NvbXBsZXRlZCIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVTYXZlVG9kbyIsIm5ld1RvZG8iLCJtYXhPcmRlciIsInJlZHVjZSIsIm1heCIsImhhbmRsZUVkaXRUb2RvIiwiaGFuZGxlRGVsZXRlVG9kbyIsInRvZG9JZCIsImhhbmRsZVRvZG9DbGljayIsInVwZGF0ZWRUb2RvIiwiaGFuZGxlVG9kb3NHZW5lcmF0ZWQiLCJnZW5lcmF0ZWRUb2RvcyIsInByZXZUb2RvcyIsIm51bWJlck9mUGllY2VzIiwibWFyZ2luUmlnaHQiLCJUZXh0IiwiekluZGV4Iiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=