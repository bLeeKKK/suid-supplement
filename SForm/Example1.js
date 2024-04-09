function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import { Button, Switch } from 'antd';
import axios from 'axios';
import React from 'react';
import { ActionBtn, ColFormCheckbox, ColFormCheckboxGroup, ColFormDatePicker, ColFormInput, ColFormInputNumber, ColFormMonthPicker, ColFormRadioGroup, ColFormRangePicker, ColFormSearch, ColFormSelect, ColFormSwitch, ColFormTextArea, ColFormTimePicker, ColFormWeekPicker, SCheckbox, SForm, SFormBox, SRadio, SRow } from "./..";
var getDirctData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(code, count, filters) {
    var _yield$axios$get, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios.get("/api/dict", {
            params: {
              dictCode: code,
              count: count,
              filters: filters
            }
          });
        case 2:
          _yield$axios$get = _context.sent;
          data = _yield$axios$get.data;
          return _context.abrupt("return", data.data.map(function (item) {
            return {
              value: item.dataValue,
              label: item.dataName
            };
          }));
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getDirctData(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// const getUserData = async ({ current, pageSize, filters }, count) => {
//   const { data } = await request(
//     '/api-gateway/ocmc-order/orderUser/findByPage',
//     {
//       method: 'POST',
//       data: {
//         pageInfo: { page: current, rows: pageSize },
//         quickSearchProperties: ['firstName'],
//         quickSearchValue: filters,
//         sortOrders: [],
//       },
//       params: { count },
//     },
//   );
//
//   return { list: data?.rows, total: data?.records };
// };

export default (function () {
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    addInput = _React$useState2[0],
    setAddInput = _React$useState2[1];
  var _React$useState3 = React.useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    count = _React$useState4[0],
    setCount = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    checked = _React$useState6[0],
    setChecked = _React$useState6[1];
  var formRef = React.useRef();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Switch, {
    checked: checked,
    onChange: function onChange() {
      return setChecked(function (check) {
        return !check;
      });
    }
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return console.log(formRef);
    }
  }, "\u83B7\u53D6Ref"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setAddInput(function (f) {
        return !f;
      });
    }
  }, "\u8FFD\u52A0\u8F93\u5165\u6846"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(SForm, {
    justShow: checked,
    basicSpan: 12,
    formButtons: !checked,
    onFinish: function onFinish(values) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          console.log(values);
          resolve();
        }, 2000);
      });
    },
    ref: formRef
    // initialValues={{
    //   description: 'zzz',
    //   userName1: 'xxx',
    //   checkbox: true,
    //   user: {
    //     userName: '张三',
    //     phone: '123',
    //   },
    // }}
  }, addInput && /*#__PURE__*/React.createElement(ColFormInput, {
    label: "\u8FFD\u52A0Input",
    name: "addInput"
  }), /*#__PURE__*/React.createElement(ColFormTextArea, {
    label: "\u63CF\u8FF0",
    span: 24,
    flexSpan: true,
    name: "description",
    initialValue: "\u8FD9\u662F\u63CF\u8FF0",
    rules: [{
      required: true,
      message: '请输入用户名'
    }]
  }), /*#__PURE__*/React.createElement(ColFormInput, {
    label: "\u7528\u6237\u540D1",
    name: "userName1",
    rules: [{
      required: true,
      message: '请输入用户名'
    }],
    initialValue: "\u674E\u56DB"
  }), /*#__PURE__*/React.createElement(ColFormSearch, {
    placeholder: "\u641C\u7D22\u9879\u3001\u641C\u7D22\u9879\u3001\u641C\u7D22\u9879",
    label: "\u641C\u7D22",
    flexSpan: true,
    span: 24,
    name: "searchVal",
    type: "search",
    onSearch: console.log,
    shortcutKey: true,
    filedOptions: {
      // 开启后将不再表单中出现，也不会做rules校验
      hidden: true
    }
  }), /*#__PURE__*/React.createElement(ColFormInput, {
    tip: "\u8FD9\u91CC\u662F\u3010\u7528\u6237\u540D\u3011\u7684\u8BF4\u660E\u63D0\u793A",
    filedTip: "\u8FD9\u91CC\u662F\u3010\u7528\u6237\u540D\u3011\u7684\u8BF4\u660E\u63D0\u793A XXXXX X XXXXXXX",
    label: "\u7528\u6237\u540D",
    overflowShowTip: false,
    name: "user.userName",
    rules: [{
      required: true,
      message: '请输入用户名'
    }],
    initialValue: "\u674E\u56DB"
  }), /*#__PURE__*/React.createElement(ColFormInput, {
    tip: "\u8FD9\u91CC\u662F\u3010\u7528\u6237\u540D\u3011\u7684\u8BF4\u660E\u63D0\u793A",
    filedTip: {
      title: '这里是【用户名】的说明提示2 ',
      placement: 'bottom'
    },
    label: "\u7528\u6237\u540D",
    name: "userName",
    initialValue: "\u674E\u56DB"
  }), /*#__PURE__*/React.createElement(ColFormInput, {
    label: "\u7535\u8BDD",
    name: "user.phone",
    initialValue: "123"
    // show={(form) => form?.getFieldValue('userName') === '张三'}
    ,
    rules: [{
      required: true,
      message: '请输入电话'
    }]
  }), /*#__PURE__*/React.createElement(ColFormInput, {
    label: "\u7535\u8BDD\u9690\u85CF",
    name: "phoneHide",
    hide: true
    // rules={[
    //   {
    //     required: true,
    //     message: '请输入电话隐藏',
    //   },
    // ]}
  }), /*#__PURE__*/React.createElement(ColFormInput, {
    label: "\u5730\u5740\u9009\u62E9",
    flexSpan: true,
    name: "address1",
    initialValue: ['110000', '110101']
  }), /*#__PURE__*/React.createElement(ColFormInput, {
    label: "\u5730\u5740",
    name: "address"
  }), /*#__PURE__*/React.createElement(ColFormInputNumber, {
    rules: [{
      required: true,
      message: '请输入金额'
    }],
    label: "\u91D1\u989D",
    name: "money",
    type: "number",
    initialValue: 100
  }), /*#__PURE__*/React.createElement(ColFormSelect, {
    label: "\u7528\u6237\u7C7B\u578B1",
    name: "typeCode1",
    store: function store() {
      return getDirctData('ocmcUserType');
    },
    initialValue: "personal_zh-CN",
    rules: [{
      required: true,
      message: '请输入用户类型'
    }],
    onChange: function onChange() {
      var _console;
      (_console = console).log.apply(_console, arguments);
    }
  }), /*#__PURE__*/React.createElement(ColFormSelect, {
    label: "\u7528\u6237\u7C7B\u578B2",
    name: "typeCode2"
    // mode="multiple"
    ,
    store: function store(_ref2) {
      var filters = _ref2.filters;
      return getDirctData('ocmcUserType', count, filters);
    },
    storeOption: {
      refreshDeps: [count]
    },
    initialValue: ['personal_zh-CN'],
    noWrap: true,
    searchForStore: true
  }, function (arr, Option) {
    return [].concat(_toConsumableArray(arr), [{
      label: '追加的数据',
      value: 'xxx'
    }]).map(function (item) {
      return /*#__PURE__*/React.createElement(Option, {
        key: item.value
      }, item.label);
    });
  }), /*#__PURE__*/React.createElement(ColFormSelect, {
    span: 16,
    flexSpan: true,
    mode: "multiple",
    label: "\u7528\u6237",
    name: "typeCode3",
    reader: {
      value: 'id',
      label: 'firstName'
    }
    // 自定义获取数据
    ,
    searchForStore: true
    // store={(...params) => getUserData(...params, count)}
    ,
    paginated: true,
    storeOption: {
      defaultPageSize: 5,
      refreshDeps: [count]
    },
    renderCondition: function renderCondition(form) {
      return (form === null || form === void 0 ? void 0 : form.getFieldValue('userName')) === '李四';
    }
  }), /*#__PURE__*/React.createElement(ColFormTimePicker, {
    label: "\u65F6\u95F4\u9009\u62E9",
    name: "time"
  }), /*#__PURE__*/React.createElement(ColFormDatePicker, {
    label: "\u65E5\u671F\u9009\u62E9",
    name: "date"
  }), /*#__PURE__*/React.createElement(ColFormRangePicker, {
    label: "\u65F6\u95F4\u6BB5\u9009\u62E9",
    name: "dateRange"
  }), /*#__PURE__*/React.createElement(ColFormMonthPicker, {
    label: "\u6708\u4EFD\u9009\u62E9",
    name: "dateMounth"
  }), /*#__PURE__*/React.createElement(ColFormWeekPicker, {
    label: "\u5468\u9009\u62E9",
    name: "dateWeek"
  }), /*#__PURE__*/React.createElement(ColFormCheckbox, {
    label: "\u590D\u9009\u6846",
    name: "checkbox"
  }), /*#__PURE__*/React.createElement(ColFormCheckboxGroup, {
    filedTip: "\u8FD9\u91CC\u662F\u3010\u7528\u6237\u540D\u3011\u7684\u8BF4\u660E\u63D0\u793A XXXXX X XXXXXXX",
    label: "\u590D\u9009\u6846(\u5B50\u9879)",
    name: "checkboxGroup"
  }, /*#__PURE__*/React.createElement(SCheckbox, {
    value: "xxx"
  }, "xxx"), /*#__PURE__*/React.createElement(SCheckbox, {
    value: "yyy"
  }, "yyy"), /*#__PURE__*/React.createElement(SCheckbox, {
    value: "zzz"
  }, "zzz"), /*#__PURE__*/React.createElement(SCheckbox, {
    value: "aaa"
  }, "aaa")), /*#__PURE__*/React.createElement(ColFormCheckboxGroup, {
    label: "\u590D\u9009\u6846(\u914D\u7F6E)",
    name: "checkboxGroup2",
    options: ['Apple', 'Pear', 'Orange']
  }), /*#__PURE__*/React.createElement(ColFormCheckboxGroup, {
    label: "\u590D\u9009\u6846(\u914D\u7F6E)",
    name: "checkboxGroup3",
    options: [{
      label: 'Apple',
      value: 'apple'
    }, {
      label: 'Pear',
      value: 'pear'
    }, {
      label: 'Banana',
      value: 'banana'
    }, {
      label: 'Orange',
      value: 'orange'
    }]
  }), /*#__PURE__*/React.createElement(ColFormTimePicker, {
    label: "\u65F6\u95F4\u9009\u62E9",
    name: "time"
  }), /*#__PURE__*/React.createElement(ColFormCheckboxGroup, {
    label: "\u590D\u9009\u6846(\u914D\u7F6E-\u8BF7\u6C42)",
    name: "checkboxGroup4",
    store: function store() {
      return getDirctData('ocmcUserType');
    }
  }), /*#__PURE__*/React.createElement(ColFormCheckboxGroup, {
    label: "\u590D\u9009\u6846(\u5B50\u9879-\u8BF7\u6C42)",
    name: "checkboxGroup5",
    store: function store() {
      return getDirctData('ocmcUserType');
    }
  }, function (arrOptions) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, arrOptions.map(function (item) {
      return /*#__PURE__*/React.createElement(SCheckbox, {
        key: item.value,
        value: item.value
      }, item.label);
    }), /*#__PURE__*/React.createElement(SCheckbox, {
      value: "xxx"
    }, "xxx"), /*#__PURE__*/React.createElement(SCheckbox, {
      value: "yyy"
    }, "yyy"));
  }), /*#__PURE__*/React.createElement(ColFormRadioGroup, {
    label: "\u590D\u9009\u6846(\u914D\u7F6E-\u8BF7\u6C42)",
    name: "radioGroup4",
    store: function store() {
      return getDirctData('ocmcUserType');
    }
  }, function (arrOptions) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, arrOptions.map(function (item) {
      return /*#__PURE__*/React.createElement(SRadio, {
        key: item.value,
        value: item.value
      }, item.label);
    }), /*#__PURE__*/React.createElement(SRadio, {
      value: "xxx"
    }, "xxx"), /*#__PURE__*/React.createElement(SRadio, {
      value: "yyy"
    }, "yyy"));
  }), /*#__PURE__*/React.createElement(ColFormSwitch, {
    label: "\u590D\u9009\u6846(\u914D\u7F6E-\u8BF7\u6C42)",
    name: "switch4"
  }), /*#__PURE__*/React.createElement(SRow.SCol, {
    style: {
      marginBottom: '8px'
    },
    span: 24
  }, /*#__PURE__*/React.createElement(SFormBox.Consumer, null, function (_ref3) {
    var form = _ref3.form,
      loading = _ref3.loading;
    return /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return form.finish();
      },
      loading: loading
    }, "\u5185\u90E8\u81EA\u5B9A\u4E49\u6309\u94AE(\u80FD\u83B7\u53D6\u72B6\u6001)");
  }))), /*#__PURE__*/React.createElement(ActionBtn, {
    onClick: function onClick() {
      var _formRef$current, _formRef$current$fini;
      return formRef === null || formRef === void 0 || (_formRef$current = formRef.current) === null || _formRef$current === void 0 || (_formRef$current$fini = _formRef$current.finish) === null || _formRef$current$fini === void 0 ? void 0 : _formRef$current$fini.call(_formRef$current);
    }
  }, "\u81EA\u5B9A\u4E49\u63D0\u4EA42"));
});