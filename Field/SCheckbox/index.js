function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["show", "renderForShow", "className", "form"],
  _excluded2 = ["show", "renderForShow", "form", "options", "store", "storeOption", "children", "reader", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useControllableValue, useRequest } from 'ahooks';
import { Checkbox, Icon, Spin, Tooltip } from 'antd';
import classnames from 'classnames';
import React, { createContext, forwardRef, useMemo } from 'react';
import "./style.less";
var CheckboxContext = /*#__PURE__*/createContext();
var useCheckboxContext = function useCheckboxContext() {
  return React.useContext(CheckboxContext);
};
var CheckboxGroup = Checkbox.Group;
var SCheckbox = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    renderForShow = _ref.renderForShow,
    className = _ref.className,
    form = _ref.form,
    props = _objectWithoutProperties(_ref, _excluded);
  var _ref2 = useCheckboxContext() || {},
    showGroup = _ref2.show,
    inGroup = _ref2.inGroup;
  var _useControllableValue = useControllableValue(props),
    _useControllableValue2 = _slicedToArray(_useControllableValue, 1),
    value = _useControllableValue2[0];
  var _useMemo = useMemo(function () {
      var flag = showGroup !== null && showGroup !== void 0 ? showGroup : !!show;
      var val = /*#__PURE__*/React.createElement(Checkbox, _extends({}, props, {
        className: classnames({
          'ant-checkbox-group-item': !!inGroup
        }, className),
        checked: value,
        disabled: true,
        onChange: function onChange() {},
        ref: ref
      }));
      if (typeof renderForShow === 'function') {
        val = renderForShow({
          value: value,
          form: form,
          defaultShow: val
        });
      }
      return [flag, val];
    }, [show, showGroup, value, form, renderForShow
    // overflowShowTip
    ]),
    _useMemo2 = _slicedToArray(_useMemo, 2),
    showFlag = _useMemo2[0],
    showValue = _useMemo2[1];
  return showFlag ? showValue : /*#__PURE__*/React.createElement(Checkbox, _extends({}, props, {
    className: classnames({
      'ant-checkbox-group-item': !!inGroup
    }, className),
    checked: value,
    ref: ref
  }));
});

// checkbox组的项目，优先级 children > options > store
var SCheckboxGroup = /*#__PURE__*/forwardRef(function (_ref3, ref) {
  var _ref3$show = _ref3.show,
    show = _ref3$show === void 0 ? false : _ref3$show,
    renderForShow = _ref3.renderForShow,
    form = _ref3.form,
    options = _ref3.options,
    store = _ref3.store,
    _ref3$storeOption = _ref3.storeOption,
    storeOption = _ref3$storeOption === void 0 ? {} : _ref3$storeOption,
    children = _ref3.children,
    reader = _ref3.reader,
    className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  var _useRequest = useRequest(store, _objectSpread({
      // 必须 store 存在时才会自动请求
      ready: !!store
    }, storeOption)),
    _useRequest$data = _useRequest.data,
    data = _useRequest$data === void 0 ? [] : _useRequest$data,
    error = _useRequest.error,
    loading = _useRequest.loading,
    refresh = _useRequest.refresh;
  var errorMessage = error && error.message;
  var arrOptions = useMemo(function () {
    var newData = Array.isArray(data) ? data : [];
    var arr = typeof options === 'function' ? options(newData) : options;
    var newArr = arr || newData;
    if (reader) {
      return newArr.map(function (res, i) {
        return _objectSpread(_objectSpread({}, res), {}, {
          value: res[reader.value] || i,
          label: res[reader.label]
        });
      });
    } else {
      return newArr;
    }
  }, [options, data, reader]);
  var optionChildren = typeof children === 'function' ? children(arrOptions) : children;
  var _useControllableValue3 = useControllableValue(props),
    _useControllableValue4 = _slicedToArray(_useControllableValue3, 1),
    value = _useControllableValue4[0];
  var _useMemo3 = useMemo(function () {
      var flag = !!show;
      var val = /*#__PURE__*/React.createElement(CheckboxGroup, _extends({}, props, {
        className: classnames('s-checkbox-group', className),
        options: optionChildren ? undefined : arrOptions,
        checked: value,
        onChange: function onChange() {},
        ref: ref,
        disabled: true
      }), optionChildren);
      if (typeof renderForShow === 'function') {
        val = renderForShow({
          value: value,
          form: form,
          defaultShow: val
        });
      }

      // if (overflowShowTip) {
      //   val = (
      //     <div style={{ height: '40px' }}>
      //       <OverflowShowbox>{val}</OverflowShowbox>
      //     </div>
      //   );
      // }

      return [flag, val];
    }, [show, value, form, renderForShow
    // overflowShowTip
    ]),
    _useMemo4 = _slicedToArray(_useMemo3, 2),
    showFlag = _useMemo4[0],
    showValue = _useMemo4[1];
  return /*#__PURE__*/React.createElement(CheckboxContext.Provider, {
    value: {
      show: show,
      inGroup: true
    }
  }, showFlag ? showValue : /*#__PURE__*/React.createElement(Spin, {
    spinning: loading
  }, /*#__PURE__*/React.createElement(CheckboxGroup, _extends({}, props, {
    className: classnames('s-checkbox-group', className),
    options: optionChildren ? undefined : arrOptions,
    checked: value,
    ref: ref
  }), optionChildren), errorMessage && /*#__PURE__*/React.createElement(Tooltip, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Error: ", errorMessage, /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 4,
        fontSize: 12
      }
    }, loading ? /*#__PURE__*/React.createElement(Icon, {
      type: "loading",
      onClick: function onClick(e) {
        e.stopPropagation();
      }
    }) : /*#__PURE__*/React.createElement(Icon, {
      onClick: function onClick(e) {
        e.stopPropagation();
        refresh();
        return false;
      },
      type: "reload"
    })))
  }, /*#__PURE__*/React.createElement(Icon, {
    type: "warning"
  }))));
});
SCheckbox.SCheckboxGroup = SCheckboxGroup;
export default SCheckbox;