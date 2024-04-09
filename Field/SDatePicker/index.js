function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["show", "format", "renderForShow", "overflowShowTip", "form", "style"],
  _excluded2 = ["show", "format", "renderForShow", "overflowShowTip", "form", "style"],
  _excluded3 = ["show", "format", "renderForShow", "overflowShowTip", "form", "style"],
  _excluded4 = ["show", "format", "renderForShow", "overflowShowTip", "form", "style", "separator", "showTime"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useControllableValue } from 'ahooks';
import { DatePicker } from 'antd';
import React, { forwardRef, useMemo } from 'react';
import OverflowShowbox from "../../OverflowShowbox";
var RangePicker = DatePicker.RangePicker,
  MonthPicker = DatePicker.MonthPicker,
  WeekPicker = DatePicker.WeekPicker;
var SDatePicker = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    format = _ref.format,
    renderForShow = _ref.renderForShow,
    _ref$overflowShowTip = _ref.overflowShowTip,
    overflowShowTip = _ref$overflowShowTip === void 0 ? true : _ref$overflowShowTip,
    form = _ref.form,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useControllableValue = useControllableValue(props),
    _useControllableValue2 = _slicedToArray(_useControllableValue, 1),
    value = _useControllableValue2[0];
  var _useMemo = useMemo(function () {
      var flag = !!show;
      var val = value === null || value === void 0 ? void 0 : value.format(format || 'YYYY-MM-DD');
      if (typeof renderForShow === 'function') {
        val = renderForShow({
          value: value,
          form: form,
          defaultShow: val
        });
      }
      if (overflowShowTip) {
        val = /*#__PURE__*/React.createElement("div", {
          style: {
            height: '40px'
          }
        }, /*#__PURE__*/React.createElement(OverflowShowbox, null, val));
      }
      return [flag, val];
    }, [show, value, form, renderForShow, overflowShowTip, format]),
    _useMemo2 = _slicedToArray(_useMemo, 2),
    showFlag = _useMemo2[0],
    showValue = _useMemo2[1];
  return showFlag ? showValue : /*#__PURE__*/React.createElement(DatePicker, _extends({}, props, {
    style: _objectSpread({
      width: '100%'
    }, style || {}),
    format: format,
    ref: ref
  }));
});
var SMonthPicker = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var _ref2$show = _ref2.show,
    show = _ref2$show === void 0 ? false : _ref2$show,
    format = _ref2.format,
    renderForShow = _ref2.renderForShow,
    _ref2$overflowShowTip = _ref2.overflowShowTip,
    overflowShowTip = _ref2$overflowShowTip === void 0 ? true : _ref2$overflowShowTip,
    form = _ref2.form,
    style = _ref2.style,
    props = _objectWithoutProperties(_ref2, _excluded2);
  var _useControllableValue3 = useControllableValue(props),
    _useControllableValue4 = _slicedToArray(_useControllableValue3, 1),
    value = _useControllableValue4[0];
  var _useMemo3 = useMemo(function () {
      var flag = !!show;
      var val = value === null || value === void 0 ? void 0 : value.format(format || 'YYYY-MM');
      if (typeof renderForShow === 'function') {
        val = renderForShow({
          value: value,
          form: form,
          defaultShow: val
        });
      }
      if (overflowShowTip) {
        val = /*#__PURE__*/React.createElement("div", {
          style: {
            height: '40px'
          }
        }, /*#__PURE__*/React.createElement(OverflowShowbox, null, val));
      }
      return [flag, val];
    }, [show, value, form, renderForShow, overflowShowTip, format]),
    _useMemo4 = _slicedToArray(_useMemo3, 2),
    showFlag = _useMemo4[0],
    showValue = _useMemo4[1];
  return showFlag ? showValue : /*#__PURE__*/React.createElement(MonthPicker, _extends({}, props, {
    style: _objectSpread({
      width: '100%'
    }, style || {}),
    format: format,
    ref: ref
  }));
});
var SWeekPicker = /*#__PURE__*/forwardRef(function (_ref3, ref) {
  var _ref3$show = _ref3.show,
    show = _ref3$show === void 0 ? false : _ref3$show,
    format = _ref3.format,
    renderForShow = _ref3.renderForShow,
    _ref3$overflowShowTip = _ref3.overflowShowTip,
    overflowShowTip = _ref3$overflowShowTip === void 0 ? true : _ref3$overflowShowTip,
    form = _ref3.form,
    style = _ref3.style,
    props = _objectWithoutProperties(_ref3, _excluded3);
  var _useControllableValue5 = useControllableValue(props),
    _useControllableValue6 = _slicedToArray(_useControllableValue5, 1),
    value = _useControllableValue6[0];
  var _useMemo5 = useMemo(function () {
      var flag = !!show;
      var val = value === null || value === void 0 ? void 0 : value.format(format || 'YYYY-wo');
      if (typeof renderForShow === 'function') {
        val = renderForShow({
          value: value,
          form: form,
          defaultShow: val
        });
      }
      if (overflowShowTip) {
        val = /*#__PURE__*/React.createElement("div", {
          style: {
            height: '40px'
          }
        }, /*#__PURE__*/React.createElement(OverflowShowbox, null, val));
      }
      return [flag, val];
    }, [show, value, form, renderForShow, overflowShowTip, format]),
    _useMemo6 = _slicedToArray(_useMemo5, 2),
    showFlag = _useMemo6[0],
    showValue = _useMemo6[1];
  return showFlag ? showValue : /*#__PURE__*/React.createElement(WeekPicker, _extends({}, props, {
    style: _objectSpread({
      width: '100%'
    }, style || {}),
    format: format,
    ref: ref
  }));
});
var SRangePicker = /*#__PURE__*/forwardRef(function (_ref4, ref) {
  var _ref4$show = _ref4.show,
    show = _ref4$show === void 0 ? false : _ref4$show,
    format = _ref4.format,
    renderForShow = _ref4.renderForShow,
    _ref4$overflowShowTip = _ref4.overflowShowTip,
    overflowShowTip = _ref4$overflowShowTip === void 0 ? true : _ref4$overflowShowTip,
    form = _ref4.form,
    style = _ref4.style,
    separator = _ref4.separator,
    showTime = _ref4.showTime,
    props = _objectWithoutProperties(_ref4, _excluded4);
  var _useControllableValue7 = useControllableValue(props),
    _useControllableValue8 = _slicedToArray(_useControllableValue7, 1),
    value = _useControllableValue8[0];
  var _useMemo7 = useMemo(function () {
      var flag = !!show;
      var _ref5 = value || [],
        _ref6 = _slicedToArray(_ref5, 2),
        startDate = _ref6[0],
        endDate = _ref6[1];
      var defaultFormat = showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
      var val = startDate && endDate ? "".concat(startDate.format(format || defaultFormat) || '').concat(separator || ' ~ ').concat(endDate.format(format || defaultFormat) || '') : value;
      if (typeof renderForShow === 'function') {
        val = renderForShow({
          value: value,
          form: form,
          defaultShow: val
        });
      }
      if (overflowShowTip) {
        val = /*#__PURE__*/React.createElement("div", {
          style: {
            height: '40px'
          }
        }, /*#__PURE__*/React.createElement(OverflowShowbox, null, val));
      }
      return [flag, val];
    }, [show, value, form, renderForShow, overflowShowTip, format, showTime]),
    _useMemo8 = _slicedToArray(_useMemo7, 2),
    showFlag = _useMemo8[0],
    showValue = _useMemo8[1];
  return showFlag ? showValue : /*#__PURE__*/React.createElement(RangePicker, _extends({}, props, {
    separator: separator,
    style: _objectSpread({
      width: '100%'
    }, style || {}),
    format: format,
    showTime: showTime,
    ref: ref
  }));
});
SDatePicker.SRangePicker = SRangePicker;
SDatePicker.SMonthPicker = SMonthPicker;
SDatePicker.SWeekPicker = SWeekPicker;
export default SDatePicker;