function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["name", "filedTip", "show", "filedOptions", "fieldLayout", "autoScale", "initialValue", "rules", "onChange", "renderCondition", "tip", "tipIcon", "hideMb8px", "styleFiled", "className", "style", "label", "colon", "extra", "hasFeedback", "help", "htmlFor", "labelCol", "wrapperCol", "labelAlign", "required", "validateStatus"],
  _excluded2 = ["hide", "flexSpan", "offset", "order", "pull", "push", "span", "xs", "sm", "md", "lg", "xl", "xxl"],
  _excluded3 = ["form", "labelCol", "wrapperCol", "justShow", "initialValues", "onFinish", "itemPropsDefault", "children", "noFormWrap", "passageValue", "disabled"],
  _excluded4 = ["form"],
  _excluded5 = ["formButtons", "children", "basicSpan", "align", "gutter", "justify", "rowType"],
  _excluded6 = ["loading", "form"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useDeepCompareEffect, useMemoizedFn } from 'ahooks';
import { Button, Form } from 'antd';
import classnames from 'classnames';
import objectPath from 'object-path';
import React, { createContext, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import SCheckbox from "../Field/SCheckbox";
import SDatePicker from "../Field/SDatePicker";
import SInput from "../Field/SInput";
import SInputNumber from "../Field/SInputNumber";
import SRadio from "../Field/SRadio";
import SSearchPro from "../Field/SSearchPro";
import SSelect from "../Field/SSelect";
import SSwitch from "../Field/SSwitch";
import STags from "../Field/STags";
import STextArea from "../Field/STextArea";
import STimePicker from "../Field/STimePicker";
import SAddix from "../SAddix";
import { SIcon } from "../SIconBox";
import SRow from "../SRow";
import styles from "./styles.module.less";
var LabelBox = function LabelBox(_ref) {
  var label = _ref.label,
    tip = _ref.tip,
    _ref$tipIcon = _ref.tipIcon,
    tipIcon = _ref$tipIcon === void 0 ? 'question-circle-o' : _ref$tipIcon;
  return /*#__PURE__*/React.createElement("span", {
    title: label
  }, label, tip && /*#__PURE__*/React.createElement(React.Fragment, null, "\xA0", /*#__PURE__*/React.createElement(SIcon, {
    type: tipIcon,
    title: tip
  })));
};
var SCol = SRow.SCol;

// Context
export var SFormContext = /*#__PURE__*/createContext();
export var useGetForm = function useGetForm() {
  return React.useContext(SFormContext);
};
export var SRowContext = /*#__PURE__*/createContext();

/**
 * 表单项值监听
 * @param names {Array} 监听的表单项名称
 * @param f {Object} form对象
 *
 * @returns {Object} 返回监听的表单项值
 * */
export var useWatch = function useWatch(names, f) {
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    watch = _useState2[0],
    setWatch = _useState2[1];
  var formObj = useGetForm();
  var form = f || (formObj === null || formObj === void 0 ? void 0 : formObj.form);
  var vals = (form === null || form === void 0 ? void 0 : form.getFieldsValue(names)) || {};
  useDeepCompareEffect(function () {
    setWatch(vals);
  }, [vals]);
  return watch;
};

// 创建Form.Item包裹的表单项
export var withFormItem = function withFormItem(Component, type) {
  var App = function App(props) {
    var _ref2 = useGetForm() || {
        form: props.form
      },
      form = _ref2.form,
      disabled = _ref2.disabled,
      justShow = _ref2.justShow,
      formLabelCol = _ref2.labelCol,
      formWrapperCol = _ref2.wrapperCol,
      initialValues = _ref2.initialValues,
      itemPropsDefault = _ref2.itemPropsDefault;
    var _props = _objectSpread(_objectSpread({}, itemPropsDefault || {}), props),
      name = _props.name,
      filedTip = _props.filedTip,
      show = _props.show,
      _props$filedOptions = _props.filedOptions,
      filedOptions = _props$filedOptions === void 0 ? {} : _props$filedOptions,
      fieldLayout = _props.fieldLayout,
      _props$autoScale = _props.autoScale,
      autoScale = _props$autoScale === void 0 ? 0 : _props$autoScale,
      initialValue = _props.initialValue,
      rules = _props.rules,
      onChange = _props.onChange,
      renderCondition = _props.renderCondition,
      tip = _props.tip,
      tipIcon = _props.tipIcon,
      hideMb8px = _props.hideMb8px,
      styleFiled = _props.styleFiled,
      className = _props.className,
      style = _props.style,
      label = _props.label,
      colon = _props.colon,
      extra = _props.extra,
      hasFeedback = _props.hasFeedback,
      help = _props.help,
      htmlFor = _props.htmlFor,
      labelCol = _props.labelCol,
      wrapperCol = _props.wrapperCol,
      labelAlign = _props.labelAlign,
      required = _props.required,
      validateStatus = _props.validateStatus,
      residue = _objectWithoutProperties(_props, _excluded);
    if (!form || !form.getFieldDecorator) {
      // 如果没有form对象，直接返回null
      return null;
    }
    if (renderCondition !== undefined) {
      // 条件判断，该项是否需要渲染到表单上
      var flag = renderCondition;
      if (typeof renderCondition === 'function') {
        flag = renderCondition(form);
      } else {
        try {
          var str = '';
          var _iterator = _createForOfIteratorHelper(renderCondition),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 3),
                key = _step$value[0],
                valArr = _step$value[1],
                operation = _step$value[2];
              var valTrue = form.getFieldValue(key);
              str += valArr.includes(valTrue) + (operation || '');
            }
            // eslint-disable-next-line no-eval
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          flag = eval(str);
        } catch (error) {
          throw new Error('renderCondition 格式错误');
        }
      }
      if (!flag) return null;
    }
    if (!form) return null;
    var getFieldDecorator = form.getFieldDecorator;
    var layoutLabelCol = labelCol || formLabelCol || {
      span: 8
    };
    var layoutWrapperCol = wrapperCol || formWrapperCol || {
      span: 16
    };
    var hideMb8pxFlag = hideMb8px === undefined ? justShow : hideMb8px;
    var showOwn = typeof show === 'function' ? show(form) : show;
    var showFlag = show !== undefined ? showOwn : justShow;
    var scale = layoutLabelCol.span / (layoutLabelCol.span + layoutWrapperCol.span);
    var initVal = initialValues ? objectPath.get(initialValues, name) : initialValue;
    var filed = getFieldDecorator(name, _objectSpread({
      type: type,
      initialValue: initVal,
      rules: rules
    }, filedOptions))( /*#__PURE__*/React.createElement(Component, _extends({
      show: showFlag,
      form: form,
      onChange: onChange && function () {
        for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
          params[_key] = arguments[_key];
        }
        return onChange.apply(void 0, params.concat([form]));
      },
      disabled: disabled,
      style: styleFiled
    }, residue)));
    return /*#__PURE__*/React.createElement(Form.Item, {
      label: label && /*#__PURE__*/React.createElement(LabelBox, {
        tip: tip,
        label: label,
        tipIcon: tipIcon
      }),
      style: _objectSpread(_objectSpread(_objectSpread({}, hideMb8pxFlag ? {
        marginBottom: '0'
      } : {}), style || {}), autoScale ? {
        display: 'flex'
      } : {}),
      labelCol: autoScale ? {
        style: {
          width: "calc(".concat(autoScale * scale, " * 100%)")
        }
      } : layoutLabelCol,
      wrapperCol: autoScale ? {
        style: {
          width: "calc(".concat(1 - autoScale * scale, " * 100%)")
        }
      } : layoutWrapperCol,
      className: classnames(styles['ss-form-item'], className),
      colon: colon,
      extra: extra,
      hasFeedback: hasFeedback,
      help: help,
      htmlFor: htmlFor,
      labelAlign: labelAlign,
      required: required,
      validateStatus: validateStatus
    }, filed);
  };
  return App;
};

// 创建Col包裹的项目
export var withFormColItem = function withFormColItem(Component) {
  var App = function App(_ref3) {
    var hide = _ref3.hide,
      flexSpan = _ref3.flexSpan,
      offset = _ref3.offset,
      order = _ref3.order,
      pull = _ref3.pull,
      push = _ref3.push,
      span = _ref3.span,
      xs = _ref3.xs,
      sm = _ref3.sm,
      md = _ref3.md,
      lg = _ref3.lg,
      xl = _ref3.xl,
      xxl = _ref3.xxl,
      props = _objectWithoutProperties(_ref3, _excluded2);
    return /*#__PURE__*/React.createElement(SCol, {
      offset: offset,
      order: order,
      pull: pull,
      push: push,
      xs: xs,
      sm: sm,
      md: md,
      lg: lg,
      xl: xl,
      xxl: xxl,
      hide: hide,
      span: span
    }, function (_ref4) {
      var basicSpan = _ref4.basicSpan,
        itemSpan = _ref4.itemSpan;
      return /*#__PURE__*/React.createElement(Component, _extends({
        autoScale: flexSpan ? basicSpan / itemSpan : flexSpan // 自动计算占用比例
      }, props));
    });
  };
  return App;
};

// 切换按钮
export var FormSwitch = withFormItem(SSwitch, 'switch');
export var ColFormSwitch = withFormColItem(FormSwitch);
// 单选框
export var FormRadio = withFormItem(SRadio, 'radio');
export var ColFormRadio = withFormColItem(FormRadio);
// 单选
export var FormRadioGroup = withFormItem(SRadio.SRadioGroup, 'radioGroup');
export var ColFormRadioGroup = withFormColItem(FormRadioGroup);
// 多选
export var FormCheckboxGroup = withFormItem(SCheckbox.SCheckboxGroup, 'checkboxGroup');
export var ColFormCheckboxGroup = withFormColItem(FormCheckboxGroup);
// 复选框
export var FormCheckbox = withFormItem(SCheckbox, 'checkbox');
export var ColFormCheckbox = withFormColItem(FormCheckbox);
// 日期选择
export var FormDatePicker = withFormItem(SDatePicker, 'datePicker');
export var ColFormDatePicker = withFormColItem(FormDatePicker);
// 时间段选择
export var FormRangePicker = withFormItem(SDatePicker.SRangePicker, 'rangePicker');
export var ColFormRangePicker = withFormColItem(FormRangePicker);
// 月份时间选择
export var FormMonthPicker = withFormItem(SDatePicker.SMonthPicker, 'monthPicker');
export var ColFormMonthPicker = withFormColItem(FormMonthPicker);
// 周时间选择
export var FormWeekPicker = withFormItem(SDatePicker.SWeekPicker, 'monthPicker');
export var ColFormWeekPicker = withFormColItem(FormWeekPicker);
// 时间选择time格式
export var FormTimePicker = withFormItem(STimePicker, 'timePicker');
export var ColFormTimePicker = withFormColItem(FormTimePicker);
// 输入框
export var FormInput = withFormItem(SInput, 'input');
export var ColFormInput = withFormColItem(FormInput);
// 下拉选择
export var FormSelect = withFormItem(SSelect, 'select');
export var ColFormSelect = withFormColItem(FormSelect);
// 下拉选择
export var FormTextArea = withFormItem(STextArea, 'textArea');
export var ColFormTextArea = withFormColItem(FormTextArea);
// 自定义新增标签
export var FormTags = withFormItem(STags, 'tags');
export var ColFormTags = withFormColItem(FormTags);
// 数字输入
export var FormInputNumber = withFormItem(SInputNumber, 'number');
export var ColFormInputNumber = withFormColItem(FormInputNumber);
// 输入框（快速搜索）
export var FormSearch = withFormItem(SSearchPro, 'search');
export var ColFormSearch = withFormColItem(FormSearch);
var FormBox = /*#__PURE__*/forwardRef(function (_ref5, ref) {
  var form = _ref5.form,
    labelCol = _ref5.labelCol,
    wrapperCol = _ref5.wrapperCol,
    justShow = _ref5.justShow,
    initialValues = _ref5.initialValues,
    onFinish = _ref5.onFinish,
    itemPropsDefault = _ref5.itemPropsDefault,
    children = _ref5.children,
    _ref5$noFormWrap = _ref5.noFormWrap,
    noFormWrap = _ref5$noFormWrap === void 0 ? false : _ref5$noFormWrap,
    passageValue = _ref5.passageValue,
    disabled = _ref5.disabled,
    props = _objectWithoutProperties(_ref5, _excluded3);
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  useImperativeHandle(ref, function () {
    return form;
  });
  var finish = useMemoizedFn( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _ref7,
      _ref7$verification,
      verification,
      _ref7$trim,
      trim,
      _ref7$andScroll,
      andScroll,
      types,
      values,
      keys,
      result,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref7 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref7$verification = _ref7.verification, verification = _ref7$verification === void 0 ? true : _ref7$verification, _ref7$trim = _ref7.trim, trim = _ref7$trim === void 0 ? false : _ref7$trim, _ref7$andScroll = _ref7.andScroll, andScroll = _ref7$andScroll === void 0 ? true : _ref7$andScroll;
          types = null;
          values = null;
          if (!verification) {
            _context.next = 15;
            break;
          }
          if (!andScroll) {
            _context.next = 10;
            break;
          }
          _context.next = 7;
          return form.validateFieldsAndScroll();
        case 7:
          values = _context.sent;
          _context.next = 13;
          break;
        case 10:
          _context.next = 12;
          return form.validateFields();
        case 12:
          values = _context.sent;
        case 13:
          _context.next = 18;
          break;
        case 15:
          _context.next = 17;
          return form.getFieldsValue();
        case 17:
          values = _context.sent;
        case 18:
          keys = Object.keys(values);
          if (trim) {
            keys.forEach(function (key) {
              if (typeof values[key] === 'string') {
                values[key] = values[key].trim();
              }
            });
          }
          types = keys.reduce(function (obj, key) {
            var _form$getFieldProps;
            var newObj = _objectSpread({}, obj);
            var type = (_form$getFieldProps = form.getFieldProps(key)) === null || _form$getFieldProps === void 0 || (_form$getFieldProps = _form$getFieldProps['data-__meta']) === null || _form$getFieldProps === void 0 ? void 0 : _form$getFieldProps.type;
            newObj[key] = type;
            return newObj;
          }, {});
          if (!onFinish) {
            _context.next = 27;
            break;
          }
          result = onFinish(values, types);
          if (result !== null && result !== void 0 && result.finally) {
            setLoading(true);
            result.finally(function (res) {
              setLoading(false);
              return res;
            });
          }
          return _context.abrupt("return", result);
        case 27:
          return _context.abrupt("return", [values, types]);
        case 28:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));

  // eslint-disable-next-line no-param-reassign
  form.finish = finish;
  var child = typeof children === 'function' ? children(form) : children;
  return /*#__PURE__*/React.createElement(SFormContext.Provider, {
    value: _objectSpread({
      form: form,
      labelCol: labelCol,
      wrapperCol: wrapperCol,
      justShow: justShow,
      initialValues: initialValues,
      itemPropsDefault: itemPropsDefault,
      disabled: disabled !== null && disabled !== void 0 ? disabled : loading,
      loading: loading
    }, passageValue || {})
  }, noFormWrap ? child : /*#__PURE__*/React.createElement(Form, props, child));
});
var FormCom = Form.create({
  onFieldsChange: function onFieldsChange(props, changedFields) {
    if (props.onFieldsChange) props.onFieldsChange(changedFields, props);
  },
  onValuesChange: function onValuesChange(props, changedFields) {
    if (props.onValuesChange) props.onValuesChange(changedFields, props);
  }
})(FormBox);
export var SFormBox = /*#__PURE__*/forwardRef(function (_ref8, ref) {
  var form = _ref8.form,
    props = _objectWithoutProperties(_ref8, _excluded4);
  if (form) {
    return /*#__PURE__*/React.createElement(FormBox, _extends({
      form: form,
      ref: ref
    }, props));
  }
  return /*#__PURE__*/React.createElement(FormCom, _extends({
    wrappedComponentRef: function wrappedComponentRef(f) {
      if (ref) {
        // eslint-disable-next-line no-param-reassign
        ref.current = f;
      }
    }
  }, props));
});

/**
 * 表单组件
 * @param {object} form 表单对象
 * @param {object} FormItemProps 表单项属性
 * @param {boolean} justShow 是否只显示
 * @param {ReactNode} formButtons 表单按钮
 * @param {object} initialValues 表单初始值 (注意: initialValues的优先级大于表单项目上的initialValue。)
 * @param {object} ref
 * @returns {*}
 *
 * */
var SForm = /*#__PURE__*/forwardRef(function (_ref9, ref) {
  var formButtons = _ref9.formButtons,
    children = _ref9.children,
    _ref9$basicSpan = _ref9.basicSpan,
    basicSpan = _ref9$basicSpan === void 0 ? 8 : _ref9$basicSpan,
    align = _ref9.align,
    gutter = _ref9.gutter,
    justify = _ref9.justify,
    rowType = _ref9.rowType,
    props = _objectWithoutProperties(_ref9, _excluded5);
  var warp = useRef();
  return /*#__PURE__*/React.createElement("div", {
    ref: warp
  }, /*#__PURE__*/React.createElement(SFormBox, _extends({
    ref: ref
  }, props), /*#__PURE__*/React.createElement(SRow, {
    basicSpan: basicSpan,
    align: align,
    gutter: gutter,
    justify: justify,
    type: rowType
  }, children), formButtons && /*#__PURE__*/React.createElement(SFormContext.Consumer, null, function (_ref10) {
    var loading = _ref10.loading,
      form = _ref10.form,
      props = _objectWithoutProperties(_ref10, _excluded6);
    // console.log(form.getFieldsError())

    var reset = /*#__PURE__*/React.createElement(Button, _extends({
      key: "_reset",
      disabled: loading,
      onClick: function onClick() {
        return form.resetFields();
      }
    }, (formButtons === null || formButtons === void 0 ? void 0 : formButtons.resetButtonProps) || {}), "\u91CD\u7F6E");
    var submit = /*#__PURE__*/React.createElement(Button, _extends({
      loading: loading,
      key: "_submit",
      type: "primary",
      onClick: function onClick() {
        return form.finish();
      }
    }, (formButtons === null || formButtons === void 0 ? void 0 : formButtons.okButtonProps) || {}), "\u63D0\u4EA4");
    var btns = [reset, submit];
    if (typeof formButtons === 'function') {
      btns = formButtons(_objectSpread({
        reset: reset,
        submit: submit,
        loading: loading,
        form: form
      }, props));
    } else if (Array.isArray(formButtons)) {
      btns = formButtons;
    }
    return /*#__PURE__*/React.createElement(SAddix, {
      scope: warp,
      offsetBottom: 0
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-4 text-right py-2 px-4 space-x-2 bg-white border-x-0 border-b-0 border-solid border-gray-300"
    }, btns));
  })));
});
SFormBox.Provider = SFormContext.Provider;
SFormBox.Consumer = SFormContext.Consumer;
export default SForm;