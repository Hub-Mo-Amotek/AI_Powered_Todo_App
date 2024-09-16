"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/custom.css */ "./assets/styles/custom.css");
/* harmony import */ var _components_RoomList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/RoomList */ "./assets/js/components/RoomList.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    darkMode = _useState2[0],
    setDarkMode = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-outline-secondary theme-toggle",
    onClick: toggleDarkMode
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
    icon: darkMode ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faSun : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faMoon
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "column",
    style: {
      width: '30%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_RoomList__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "column",
    style: {
      width: '70%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "todo-list-container"
  })));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById('root'));

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/InputGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.mjs");
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    prompt = _useState2[0],
    setPrompt = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showInput = _useState4[0],
    setShowInput = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "secondary",
    onClick: function onClick() {
      return setShowInput(!showInput);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsStars, null)), showInput && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      position: 'fixed',
      top: '75px',
      left: '55%',
      transform: 'translateX(-50%)',
      width: '50%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ "./assets/js/components/TodoList.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ "./assets/js/components/Modal.js");
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    rooms = _useState2[0],
    setRooms = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedRoom = _useState4[0],
    setSelectedRoom = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showModal = _useState6[0],
    setShowModal = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: '',
      description: ''
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    roomForm = _useState8[0],
    setRoomForm = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isEditing = _useState10[0],
    setIsEditing = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
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
    react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TodoList__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex justify-content-around"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Rooms"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleShowModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaPlus, null), " New Room")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.Droppable, {
    droppableId: "rooms"
  }, function (provided) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({}, provided.droppableProps, {
      ref: provided.innerRef,
      className: "mt-5 mb-3"
    }), rooms.map(function (room, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.Draggable, {
        key: room.id,
        draggableId: String(room.id),
        index: index
      }, function (provided) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          className: "col-md-12 mb-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "card card-custom p-3 ".concat(selectedRoom && selectedRoom.id === room.id ? 'selected-room' : '', " "),
          onClick: function onClick() {
            return handleRoomClick(room);
          },
          style: {
            cursor: 'pointer'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "d-flex justify-content-between"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "d-flex flex-row align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "ms-2 c-details"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
          className: "mb-0"
        }, room.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, room.description)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "mt-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "progress"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "mt-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "text1"
        }, room.todos.filter(function (todo) {
          return todo.status;
        }).length, " Completed", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "text2"
        }, " of ", room.todos.length, " todos")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "mt-3 d-flex justify-content-end"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "primary",
          onClick: function onClick(e) {
            return handleEditRoom(room, e);
          },
          className: "mr-2 m-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaEdit, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "danger",
          onClick: function onClick(e) {
            return handleDeleteRoom(room.id, e);
          },
          className: "mr-2 m-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTrash, null)))));
      });
    }), provided.placeholder);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: showModal,
    handleClose: handleCloseModal,
    title: isEditing ? 'Edit Room' : 'Add Room',
    handleSave: handleSaveRoom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Label, null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Control, {
    type: "text",
    name: "name",
    value: roomForm.name,
    onChange: handleFormChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Label, null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Control, {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./assets/js/components/Modal.js");
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confetti */ "./node_modules/react-confetti/dist/react-confetti.min.js");
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-use/lib/useWindowSize */ "./node_modules/react-use/lib/useWindowSize.js");
/* harmony import */ var _AITodoGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AITodoGenerator */ "./assets/js/components/AITodoGenerator.js");
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-spinners/ClipLoader */ "./node_modules/react-spinners/ClipLoader.js");
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_10__);
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    todos = _useState2[0],
    setTodos = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showModal = _useState4[0],
    setShowModal = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      title: '',
      description: '',
      status: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    todoForm = _useState6[0],
    setTodoForm = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedTodo = _useState8[0],
    setSelectedTodo = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isEditing = _useState10[0],
    setIsEditing = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    confettiPieces = _useState12[0],
    setConfettiPieces = _useState12[1];
  var _useWindowSize = (0,react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    width = _useWindowSize.width,
    height = _useWindowSize.height;
  var prevAllCompleted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("/api/todos?room_id=".concat(room.id)).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setTodos(data);
    });
  }, [room]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, confettiPieces > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_confetti__WEBPACK_IMPORTED_MODULE_2___default()), {
    width: width,
    height: height,
    numberOfPieces: confettiPieces
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, room.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex align-items-center justify-content-around"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleShowModal,
    style: {
      width: '200%',
      marginRight: '3px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaPlus, null), " To Do"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AITodoGenerator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    roomId: room.id,
    onTodosGenerated: handleTodosGenerated,
    setGlobalLoading: setLoading,
    className: "m-1"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Droppable, {
    droppableId: "todos"
  }, function (provided) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
      className: "card-columns mt-5"
    }, provided.droppableProps, {
      ref: provided.innerRef
    }), todos.map(function (todo, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Draggable, {
        key: todo.id,
        draggableId: String(todo.id),
        index: index
      }, function (provided) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          className: "card-todo mb-3 ".concat(todo.status ? 'done' : '')
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Title, null, todo.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Text, null, todo.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "status-badge"
        }, todo.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "badge bg-success"
        }, "Done") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "badge bg-secondary"
        }, "Not done")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "d-flex justify-content-between"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: todo.status ? 'secondary' : 'success',
          onClick: function onClick() {
            return handleTodoClick(todo);
          },
          className: "mr-2 m-1"
        }, todo.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTimes, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCheck, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "primary",
          onClick: function onClick() {
            return handleEditTodo(todo);
          },
          className: "mr-2 m-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaEdit, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "danger",
          onClick: function onClick() {
            return handleDeleteTodo(todo.id);
          },
          className: "mr-2 m-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTrash, null))))));
      });
    }), provided.placeholder);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    show: showModal,
    handleClose: handleCloseModal,
    title: isEditing ? 'Edit Todo' : 'Add Todo',
    handleSave: handleSaveTodo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Label, null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Control, {
    type: "text",
    name: "title",
    value: todoForm.title,
    onChange: handleFormChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Label, null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Control, {
    as: "textarea",
    rows: 3,
    name: "description",
    value: todoForm.description,
    onChange: handleFormChange
  })))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '1000'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_10___default()), {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_bootstrap_dist_cs-269241"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksRUFBRSxLQUFLO01BQ1hDLFNBQVMsRUFBRSx1QkFBdUI7TUFDbEMrSSxNQUFNLEVBQUU7SUFDWjtFQUFFLGdCQUNFbFcsZ0RBQUEsQ0FBQ3lLLG1FQUFVO0lBQUMyQyxLQUFLLEVBQUMsU0FBUztJQUFDK0ksSUFBSSxFQUFFO0VBQUcsQ0FBRSxDQUN0QyxDQUVSLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVwSCxRQUFROzs7Ozs7Ozs7OztBQ25SdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FJVG9kb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Sb29tTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2N1c3RvbS5jc3M/ZjJkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvY3VzdG9tLmNzcyc7IFxuaW1wb3J0IFJvb21MaXN0IGZyb20gJy4vY29tcG9uZW50cy9Sb29tTGlzdCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFTdW4sIGZhTW9vbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCBbZGFya01vZGUsIHNldERhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICAgICAgaWYgKHNhdmVkVGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgICAgICAgc2V0RGFya01vZGUodHJ1ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdkYXJrJyk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcbiAgICAgICAgc2V0RGFya01vZGUoIWRhcmtNb2RlKTtcbiAgICAgICAgaWYgKCFkYXJrTW9kZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRoZW1lJyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHRoZW1lLXRvZ2dsZVwiIG9uQ2xpY2s9e3RvZ2dsZURhcmtNb2RlfT5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2RhcmtNb2RlID8gZmFTdW4gOiBmYU1vb259IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCIgc3R5bGU9e3sgd2lkdGg6ICczMCUnIH19PlxuICAgICAgICAgICAgICAgIDxSb29tTGlzdCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiIHN0eWxlPXt7IHdpZHRoOiAnNzAlJyB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidG9kby1saXN0LWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIElucHV0R3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IEJzU3RhcnMgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCBDbGlwTG9hZGVyIGZyb20gJ3JlYWN0LXNwaW5uZXJzL0NsaXBMb2FkZXInO1xuXG5jb25zdCBBSVRvZG9HZW5lcmF0b3IgPSAoeyByb29tSWQsIG9uVG9kb3NHZW5lcmF0ZWQsIHNldEdsb2JhbExvYWRpbmcgfSkgPT4ge1xuICAgIGNvbnN0IFtwcm9tcHQsIHNldFByb21wdF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Nob3dJbnB1dCwgc2V0U2hvd0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVHZW5lcmF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHByb21wdC50cmltKCkgPT09ICcnKSByZXR1cm47XG5cbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgc2V0R2xvYmFsTG9hZGluZyh0cnVlKTtcbiAgICAgICAgc2V0U2hvd0lucHV0KGZhbHNlKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZW5lcmF0ZS10b2RvcycsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHByb21wdCwgcm9vbV9pZDogcm9vbUlkIH0pLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5lcnJvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBvblRvZG9zR2VuZXJhdGVkKGRhdGEudG9kb3MpO1xuICAgICAgICAgICAgc2V0UHJvbXB0KCcnKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdlbmVyYXRpbmcgdG9kb3M6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEdsb2JhbExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGhhbmRsZUdlbmVyYXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dJbnB1dCghc2hvd0lucHV0KX0+XG4gICAgICAgICAgICAgICAgPEJzU3RhcnMgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAge3Nob3dJbnB1dCAmJiAoXG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXAgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIHRvcDogJzc1cHgnLCBsZWZ0OiAnNTUlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsIHdpZHRoOiAnNTAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBjb2xvcjogJyNEM0QzRDMnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMzQzYTQwJywgYm9yZGVyQ29sb3I6ICcjNDk1MDU3JyB9fSDCoFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBc2sgQUkgdG8gY3JlYXRlIHNvbWUgdG9kb3MgYWJvdXQgYSB0b3BpYy4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQUkgUHJvbXB0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb21wdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvbXB0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWktdG9kby1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFJVG9kb0dlbmVyYXRvcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgQ3VzdG9tTW9kYWwgPSAoeyBzaG93LCBoYW5kbGVDbG9zZSwgdGl0bGUsIGNoaWxkcmVuLCBoYW5kbGVTYXZlIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWwgc2hvdz17c2hvd30gb25IaWRlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT57dGl0bGV9PC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPE1vZGFsLkJvZHk+e2NoaWxkcmVufTwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTYXZlfT5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBGYVBsdXMsIEZhRWRpdCwgRmFUcmFzaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZSB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vVG9kb0xpc3QnO1xuaW1wb3J0IEN1c3RvbU1vZGFsIGZyb20gJy4vTW9kYWwnO1xuXG5jb25zdCBSb29tTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBbcm9vbXMsIHNldFJvb21zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRSb29tLCBzZXRTZWxlY3RlZFJvb21dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcm9vbUZvcm0sIHNldFJvb21Gb3JtXSA9IHVzZVN0YXRlKHsgbmFtZTogJycsIGRlc2NyaXB0aW9uOiAnJyB9KTtcbiAgICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goJy9hcGkvcm9vbXMnKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jvb21zIGZldGNoZWQ6JywgZGF0YSk7XG4gICAgICAgICAgICAgICAgc2V0Um9vbXMoZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHJvb21zOicsIGVycm9yKSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlUm9vbUNsaWNrID0gKHJvb20pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Jvb20gY2xpY2tlZDonLCByb29tKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRSb29tKHJvb20pO1xuICAgICAgICBSZWFjdERPTS5yZW5kZXIoPFRvZG9MaXN0IHJvb209e3Jvb219IG9uVG9kb1VwZGF0ZT17KCkgPT4gZmV0Y2hSb29tcygpfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdC1jb250YWluZXInKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZldGNoUm9vbXMgPSAoKSA9PiB7XG4gICAgICAgIGZldGNoKCcvYXBpL3Jvb21zJylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc2V0Um9vbXMoZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcm9vbXM6JywgZXJyb3IpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU2hvd01vZGFsID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldFNob3dNb2RhbChmYWxzZSk7XG4gICAgICAgIHNldElzRWRpdGluZyhmYWxzZSk7XG4gICAgICAgIHNldFJvb21Gb3JtKHsgbmFtZTogJycsIGRlc2NyaXB0aW9uOiAnJyB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRm9ybUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRSb29tRm9ybSh7IC4uLnJvb21Gb3JtLCBbbmFtZV06IHZhbHVlIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTYXZlUm9vbSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gaXNFZGl0aW5nID8gJ1BVVCcgOiAnUE9TVCc7XG4gICAgICAgIGNvbnN0IHVybCA9IGlzRWRpdGluZyA/IGAvYXBpL3Jvb21zLyR7c2VsZWN0ZWRSb29tPy5pZH1gIDogJy9hcGkvcm9vbXMnO1xuXG4gICAgICAgIGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyb29tRm9ybSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSb29tIHNhdmVkOicsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChpc0VkaXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Um9vbXMocm9vbXMubWFwKHIgPT4gKHIuaWQgPT09IGRhdGEuaWQgPyBkYXRhIDogcikpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRSb29tcyhbLi4ucm9vbXMsIGRhdGFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgcm9vbTonLCBlcnJvcikpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVFZGl0Um9vbSA9IChyb29tLCBlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHNldFNlbGVjdGVkUm9vbShyb29tKTtcbiAgICAgICAgc2V0Um9vbUZvcm0ocm9vbSk7XG4gICAgICAgIHNldElzRWRpdGluZyh0cnVlKTtcbiAgICAgICAgaGFuZGxlU2hvd01vZGFsKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZVJvb20gPSAocm9vbUlkLCBlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGZldGNoKGAvYXBpL3Jvb21zLyR7cm9vbUlkfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSb29tIGRlbGV0ZWQ6Jywgcm9vbUlkKTtcbiAgICAgICAgICAgICAgICBzZXRSb29tcyhyb29tcy5maWx0ZXIociA9PiByLmlkICE9PSByb29tSWQpKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRSb29tICYmIHNlbGVjdGVkUm9vbS5pZCA9PT0gcm9vbUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkUm9vbShudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHJvb206JywgZXJyb3IpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FsY3VsYXRlUHJvZ3Jlc3MgPSAocm9vbSkgPT4ge1xuICAgICAgICBjb25zdCB0b3RhbFRvZG9zID0gcm9vbS50b2Rvcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFRvZG9zID0gcm9vbS50b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLnN0YXR1cykubGVuZ3RoO1xuICAgICAgICByZXR1cm4gKHRvdGFsVG9kb3MgPT09IDApID8gMCA6IChjb21wbGV0ZWRUb2RvcyAvIHRvdGFsVG9kb3MpICogMTAwO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0FsbFRvZG9zQ29tcGxldGVkID0gKHJvb20pID0+IHtcbiAgICAgICAgcmV0dXJuIHJvb20udG9kb3MubGVuZ3RoID4gMCAmJiByb29tLnRvZG9zLmV2ZXJ5KHRvZG8gPT4gdG9kby5zdGF0dXMpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEcmFnRW5kID0gKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShyb29tcyk7XG4gICAgICAgIGNvbnN0IFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcbiAgICAgICAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVvcmRlcmVkSXRlbSk7XG5cbiAgICAgICAgc2V0Um9vbXMoaXRlbXMpO1xuXG4gICAgICAgIGZldGNoKCcvYXBpL3Jvb21zL3VwZGF0ZS1vcmRlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpdGVtcy5tYXAoKHJvb20sIGluZGV4KSA9PiAoeyBpZDogcm9vbS5pZCwgb3JkZXI6IGluZGV4IH0pKSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPcmRlciB1cGRhdGVkOicsIGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgb3JkZXI6JywgZXJyb3IpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZCc+XG4gICAgICAgICAgICAgICAgPGgyPlJvb21zPC9oMj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNob3dNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgIDxGYVBsdXMgLz4gTmV3IFJvb21cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PlxuICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJyb29tc1wiPlxuICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30gcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gY2xhc3NOYW1lPVwibXQtNSBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvb21zLm1hcCgocm9vbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e3Jvb20uaWR9IGRyYWdnYWJsZUlkPXtTdHJpbmcocm9vbS5pZCl9IGluZGV4PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbC1tZC0xMiBtYi0yYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNhcmQgY2FyZC1jdXN0b20gcC0zICR7c2VsZWN0ZWRSb29tICYmIHNlbGVjdGVkUm9vbS5pZCA9PT0gcm9vbS5pZCA/ICdzZWxlY3RlZC1yb29tJyA6ICcnfSBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUm9vbUNsaWNrKHJvb20pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcy0yIGMtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTBcIj57cm9vbS5uYW1lfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cm9vbS5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke2NhbGN1bGF0ZVByb2dyZXNzKHJvb20pfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnd2lkdGggMC41cyBlYXNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0FsbFRvZG9zQ29tcGxldGVkKHJvb20pID8gJ2dyZWVuJyA6ICdibHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW5vdz17Y2FsY3VsYXRlUHJvZ3Jlc3Mocm9vbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvb20udG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5zdGF0dXMpLmxlbmd0aH0gQ29tcGxldGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0MlwiPiBvZiB7cm9vbS50b2Rvcy5sZW5ndGh9IHRvZG9zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlRWRpdFJvb20ocm9vbSwgZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgbS0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUVkaXQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlRGVsZXRlUm9vbShyb29tLmlkLCBlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiBtLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhVHJhc2ggLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxuICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XG4gICAgICAgICAgICA8Q3VzdG9tTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtzaG93TW9kYWx9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2lzRWRpdGluZyA/ICdFZGl0IFJvb20nIDogJ0FkZCBSb29tJ31cbiAgICAgICAgICAgICAgICBoYW5kbGVTYXZlPXtoYW5kbGVTYXZlUm9vbX0+XG4gICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+TmFtZTwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb29tRm9ybS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5EZXNjcmlwdGlvbjwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvb21Gb3JtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L0N1c3RvbU1vZGFsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm9vbUxpc3Q7XG4iLCIvLyBhc3NldHMvanMvY29tcG9uZW50cy9Ub2RvTGlzdC5qc1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBGYVBsdXMsIEZhRWRpdCwgRmFUcmFzaCwgRmFDaGVjaywgRmFUaW1lcyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJvcHBhYmxlLCBEcmFnZ2FibGUgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJztcbmltcG9ydCBDdXN0b21Nb2RhbCBmcm9tICcuL01vZGFsJztcbmltcG9ydCBDb25mZXR0aSBmcm9tICdyZWFjdC1jb25mZXR0aSc7XG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICdyZWFjdC11c2UvbGliL3VzZVdpbmRvd1NpemUnO1xuaW1wb3J0IEFJVG9kb0dlbmVyYXRvciBmcm9tICcuL0FJVG9kb0dlbmVyYXRvcic7XG5pbXBvcnQgQ2xpcExvYWRlciBmcm9tICdyZWFjdC1zcGlubmVycy9DbGlwTG9hZGVyJztcblxuY29uc3QgVG9kb0xpc3QgPSAoeyByb29tLCBvblRvZG9VcGRhdGUgfSkgPT4ge1xuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3RvZG9Gb3JtLCBzZXRUb2RvRm9ybV0gPSB1c2VTdGF0ZSh7IHRpdGxlOiAnJywgZGVzY3JpcHRpb246ICcnLCBzdGF0dXM6IGZhbHNlIH0pO1xuICAgIGNvbnN0IFtzZWxlY3RlZFRvZG8sIHNldFNlbGVjdGVkVG9kb10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjb25mZXR0aVBpZWNlcywgc2V0Q29uZmV0dGlQaWVjZXNdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB1c2VXaW5kb3dTaXplKCk7XG4gICAgY29uc3QgcHJldkFsbENvbXBsZXRlZCA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goYC9hcGkvdG9kb3M/cm9vbV9pZD0ke3Jvb20uaWR9YClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc2V0VG9kb3MoZGF0YSkpO1xuICAgIH0sIFtyb29tXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxUb2Rvc0NvbXBsZXRlZCA9IHRvZG9zLmxlbmd0aCA+IDAgJiYgdG9kb3MuZXZlcnkodG9kbyA9PiB0b2RvLnN0YXR1cyk7XG5cbiAgICAgICAgaWYgKGFsbFRvZG9zQ29tcGxldGVkICYmICFwcmV2QWxsQ29tcGxldGVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHNldENvbmZldHRpUGllY2VzKDIwMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmV0dGlQaWVjZXMocHJldiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldiA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldiAtIDEwO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2QWxsQ29tcGxldGVkLmN1cnJlbnQgPSBhbGxUb2Rvc0NvbXBsZXRlZDtcbiAgICB9LCBbdG9kb3NdKTtcblxuICAgIGNvbnN0IGhhbmRsZVNob3dNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICAgICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRUb2RvRm9ybSh7IHRpdGxlOiAnJywgZGVzY3JpcHRpb246ICcnLCBzdGF0dXM6IGZhbHNlIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVGb3JtQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgICAgIHNldFRvZG9Gb3JtKHsgLi4udG9kb0Zvcm0sIFtuYW1lXTogdmFsdWUgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNhdmVUb2RvID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRob2QgPSBpc0VkaXRpbmcgPyAnUFVUJyA6ICdQT1NUJztcbiAgICAgICAgY29uc3QgdXJsID0gaXNFZGl0aW5nID8gYC9hcGkvdG9kb3MvJHtzZWxlY3RlZFRvZG8uaWR9YCA6ICcvYXBpL3RvZG9zJztcblxuICAgICAgICBsZXQgbmV3VG9kbyA9IHsgLi4udG9kb0Zvcm0sIHJvb21faWQ6IHJvb20uaWQgfTtcblxuICAgICAgICBpZiAoIWlzRWRpdGluZykge1xuICAgICAgICAgICAgY29uc3QgbWF4T3JkZXIgPSB0b2Rvcy5yZWR1Y2UoKG1heCwgdG9kbykgPT4gKHRvZG8ub3JkZXIgPiBtYXggPyB0b2RvLm9yZGVyIDogbWF4KSwgLTEpO1xuICAgICAgICAgICAgbmV3VG9kby5vcmRlciA9IG1heE9yZGVyICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdUb2RvKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRWRpdGluZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUb2Rvcyh0b2Rvcy5tYXAodCA9PiAodC5pZCA9PT0gZGF0YS5pZCA/IGRhdGEgOiB0KSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRvZG9zKFsuLi50b2RvcywgZGF0YV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgb25Ub2RvVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRWRpdFRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZFRvZG8odG9kbyk7XG4gICAgICAgIHNldFRvZG9Gb3JtKHRvZG8pO1xuICAgICAgICBzZXRJc0VkaXRpbmcodHJ1ZSk7XG4gICAgICAgIGhhbmRsZVNob3dNb2RhbCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEZWxldGVUb2RvID0gKHRvZG9JZCkgPT4ge1xuICAgICAgICBmZXRjaChgL2FwaS90b2Rvcy8ke3RvZG9JZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUb2Rvcyh0b2Rvcy5maWx0ZXIodCA9PiB0LmlkICE9PSB0b2RvSWQpKTtcbiAgICAgICAgICAgICAgICBvblRvZG9VcGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVUb2RvQ2xpY2sgPSAodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkVG9kbyA9IHsgLi4udG9kbywgc3RhdHVzOiAhdG9kby5zdGF0dXMgfTtcbiAgICAgICAgZmV0Y2goYC9hcGkvdG9kb3MvJHt0b2RvLmlkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRUb2RvKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VG9kb3ModG9kb3MubWFwKHQgPT4gdC5pZCA9PT0gZGF0YS5pZCA/IGRhdGEgOiB0KSk7XG4gICAgICAgICAgICAgICAgb25Ub2RvVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcblxuICAgICAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20odG9kb3MpO1xuICAgICAgICBjb25zdCBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XG4gICAgICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pO1xuXG4gICAgICAgIHNldFRvZG9zKGl0ZW1zKTtcblxuICAgICAgICBmZXRjaCgnL2FwaS90b2Rvcy91cGRhdGUtb3JkZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaXRlbXMubWFwKCh0b2RvLCBpbmRleCkgPT4gKHsgaWQ6IHRvZG8uaWQsIG9yZGVyOiBpbmRleCB9KSkpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT3JkZXIgdXBkYXRlZDonLCBkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIG9yZGVyOicsIGVycm9yKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbGN1bGF0ZVByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b3RhbFRvZG9zID0gdG9kb3MubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb21wbGV0ZWRUb2RvcyA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uc3RhdHVzKS5sZW5ndGg7XG4gICAgICAgIHJldHVybiAodG90YWxUb2RvcyA9PT0gMCkgPyAwIDogKGNvbXBsZXRlZFRvZG9zIC8gdG90YWxUb2RvcykgKiAxMDA7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRvZG9zR2VuZXJhdGVkID0gKGdlbmVyYXRlZFRvZG9zKSA9PiB7XG4gICAgICAgIHNldFRvZG9zKChwcmV2VG9kb3MpID0+IFsuLi5wcmV2VG9kb3MsIC4uLmdlbmVyYXRlZFRvZG9zXSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2NvbmZldHRpUGllY2VzID4gMCAmJiA8Q29uZmV0dGkgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gbnVtYmVyT2ZQaWVjZXM9e2NvbmZldHRpUGllY2VzfSAvPn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgIDxoMj57cm9vbS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTaG93TW9kYWx9IHN0eWxlPXt7IHdpZHRoOiAnMjAwJScsIG1hcmdpblJpZ2h0OiAnM3B4JywgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhUGx1cyAvPiBUbyBEb1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEFJVG9kb0dlbmVyYXRvciByb29tSWQ9e3Jvb20uaWR9IG9uVG9kb3NHZW5lcmF0ZWQ9e2hhbmRsZVRvZG9zR2VuZXJhdGVkfSBzZXRHbG9iYWxMb2FkaW5nPXtzZXRMb2FkaW5nfSBjbGFzc05hbWU9XCJtLTFcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke2NhbGN1bGF0ZVByb2dyZXNzKCl9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3dpZHRoIDAuNXMgZWFzZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmV2QWxsQ29tcGxldGVkLmN1cnJlbnQgPyAnZ3JlZW4nIDogJ2JsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW5vdz17Y2FsY3VsYXRlUHJvZ3Jlc3MoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PlxuICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJ0b2Rvc1wiPlxuICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29sdW1ucyBtdC01XCIgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17dG9kby5pZH0gZHJhZ2dhYmxlSWQ9e1N0cmluZyh0b2RvLmlkKX0gaW5kZXg9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2FyZC10b2RvIG1iLTMgJHt0b2RvLnN0YXR1cyA/ICdkb25lJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+e3RvZG8udGl0bGV9PC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD57dG9kby5kZXNjcmlwdGlvbn08L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzLWJhZGdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvZG8uc3RhdHVzID8gPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmctc3VjY2Vzc1wiPkRvbmU8L3NwYW4+IDogPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmctc2Vjb25kYXJ5XCI+Tm90IGRvbmU8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9e3RvZG8uc3RhdHVzID8gJ3NlY29uZGFyeScgOiAnc3VjY2Vzcyd9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVRvZG9DbGljayh0b2RvKX0gY2xhc3NOYW1lPVwibXItMiBtLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2RvLnN0YXR1cyA/IDxGYVRpbWVzIC8+IDogPEZhQ2hlY2sgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0VG9kbyh0b2RvKX0gY2xhc3NOYW1lPVwibXItMiBtLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUVkaXQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRhbmdlclwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVRvZG8odG9kby5pZCl9IGNsYXNzTmFtZT1cIm1yLTIgbS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFUcmFzaCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxuICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XG4gICAgICAgICAgICA8Q3VzdG9tTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtzaG93TW9kYWx9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2lzRWRpdGluZyA/ICdFZGl0IFRvZG8nIDogJ0FkZCBUb2RvJ31cbiAgICAgICAgICAgICAgICBoYW5kbGVTYXZlPXtoYW5kbGVTYXZlVG9kb30+XG4gICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VGl0bGU8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvZG9Gb3JtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkRlc2NyaXB0aW9uPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG9kb0Zvcm0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9DdXN0b21Nb2RhbD5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiAnMTAwMCdcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPENsaXBMb2FkZXIgY29sb3I9XCIjMDAwMEZGXCIgc2l6ZT17NTB9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlYWN0RE9NIiwiUm9vbUxpc3QiLCJGb250QXdlc29tZUljb24iLCJmYVN1biIsImZhTW9vbiIsIkFwcCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImRhcmtNb2RlIiwic2V0RGFya01vZGUiLCJzYXZlZFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRvY3VtZW50IiwiYm9keSIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZURhcmtNb2RlIiwic2V0SXRlbSIsInJlbW92ZUF0dHJpYnV0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaWNvbiIsInN0eWxlIiwid2lkdGgiLCJpZCIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiaXNBcnJheSIsIkJ1dHRvbiIsIklucHV0R3JvdXAiLCJGb3JtQ29udHJvbCIsIkJzU3RhcnMiLCJDbGlwTG9hZGVyIiwiQUlUb2RvR2VuZXJhdG9yIiwiX3JlZiIsInJvb21JZCIsIm9uVG9kb3NHZW5lcmF0ZWQiLCJzZXRHbG9iYWxMb2FkaW5nIiwicHJvbXB0Iiwic2V0UHJvbXB0IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJzaG93SW5wdXQiLCJzZXRTaG93SW5wdXQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlR2VuZXJhdGUiLCJfcmVmMiIsIl9jYWxsZWUiLCJyZXNwb25zZSIsImVycm9yRGF0YSIsImRhdGEiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidHJpbSIsImZldGNoIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyb29tX2lkIiwib2siLCJqc29uIiwidG9kb3MiLCJ0MCIsImNvbnNvbGUiLCJtZXNzYWdlIiwiaGFuZGxlS2V5UHJlc3MiLCJldmVudCIsInBvc2l0aW9uIiwidmFyaWFudCIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJNb2RhbCIsIkN1c3RvbU1vZGFsIiwic2hvdyIsImhhbmRsZUNsb3NlIiwidGl0bGUiLCJjaGlsZHJlbiIsImhhbmRsZVNhdmUiLCJvbkhpZGUiLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIlRpdGxlIiwiQm9keSIsIkZvb3RlciIsIkZvcm0iLCJGYVBsdXMiLCJGYUVkaXQiLCJGYVRyYXNoIiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJvcHBhYmxlIiwiRHJhZ2dhYmxlIiwiVG9kb0xpc3QiLCJyb29tcyIsInNldFJvb21zIiwic2VsZWN0ZWRSb29tIiwic2V0U2VsZWN0ZWRSb29tIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiX3VzZVN0YXRlNyIsImRlc2NyaXB0aW9uIiwiX3VzZVN0YXRlOCIsInJvb21Gb3JtIiwic2V0Um9vbUZvcm0iLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJsb2ciLCJoYW5kbGVSb29tQ2xpY2siLCJyb29tIiwib25Ub2RvVXBkYXRlIiwiZmV0Y2hSb29tcyIsImhhbmRsZVNob3dNb2RhbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVGb3JtQ2hhbmdlIiwiX2UkdGFyZ2V0IiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImhhbmRsZVNhdmVSb29tIiwidXJsIiwiY29uY2F0IiwibWFwIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaGFuZGxlRWRpdFJvb20iLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVEZWxldGVSb29tIiwiZmlsdGVyIiwiY2FsY3VsYXRlUHJvZ3Jlc3MiLCJ0b3RhbFRvZG9zIiwiY29tcGxldGVkVG9kb3MiLCJ0b2RvIiwic3RhdHVzIiwiaXNBbGxUb2Rvc0NvbXBsZXRlZCIsImV2ZXJ5IiwiaGFuZGxlRHJhZ0VuZCIsInJlc3VsdCIsImRlc3RpbmF0aW9uIiwiaXRlbXMiLCJfaXRlbXMkc3BsaWNlIiwic3BsaWNlIiwic291cmNlIiwiaW5kZXgiLCJfaXRlbXMkc3BsaWNlMiIsInJlb3JkZXJlZEl0ZW0iLCJvcmRlciIsIm9uRHJhZ0VuZCIsImRyb3BwYWJsZUlkIiwicHJvdmlkZWQiLCJfZXh0ZW5kcyIsImRyb3BwYWJsZVByb3BzIiwicmVmIiwiaW5uZXJSZWYiLCJkcmFnZ2FibGVJZCIsIlN0cmluZyIsImRyYWdnYWJsZVByb3BzIiwiZHJhZ0hhbmRsZVByb3BzIiwiY3Vyc29yIiwicm9sZSIsInRyYW5zaXRpb24iLCJHcm91cCIsIkxhYmVsIiwiQ29udHJvbCIsImFzIiwicm93cyIsInVzZVJlZiIsIkNhcmQiLCJGYUNoZWNrIiwiRmFUaW1lcyIsIkNvbmZldHRpIiwidXNlV2luZG93U2l6ZSIsInNldFRvZG9zIiwidG9kb0Zvcm0iLCJzZXRUb2RvRm9ybSIsInNlbGVjdGVkVG9kbyIsInNldFNlbGVjdGVkVG9kbyIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJjb25mZXR0aVBpZWNlcyIsInNldENvbmZldHRpUGllY2VzIiwiX3VzZVdpbmRvd1NpemUiLCJoZWlnaHQiLCJwcmV2QWxsQ29tcGxldGVkIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImFsbFRvZG9zQ29tcGxldGVkIiwiY3VycmVudCIsInNldFRpbWVvdXQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZVNhdmVUb2RvIiwibmV3VG9kbyIsIm1heE9yZGVyIiwicmVkdWNlIiwibWF4IiwiaGFuZGxlRWRpdFRvZG8iLCJoYW5kbGVEZWxldGVUb2RvIiwidG9kb0lkIiwiaGFuZGxlVG9kb0NsaWNrIiwidXBkYXRlZFRvZG8iLCJoYW5kbGVUb2Rvc0dlbmVyYXRlZCIsImdlbmVyYXRlZFRvZG9zIiwicHJldlRvZG9zIiwibnVtYmVyT2ZQaWVjZXMiLCJtYXJnaW5SaWdodCIsIlRleHQiLCJ6SW5kZXgiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==