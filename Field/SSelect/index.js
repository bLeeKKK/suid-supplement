function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["show", "renderForShow", "form", "overflowShowTip", "options", "store", "storeOption", "searchForStore", "reader", "children", "mode", "noWrap", "className", "paginated"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useAntdTable, useControllableValue, useUpdateEffect } from 'ahooks';
import { Icon, Input, Pagination, Select, Spin, Tooltip } from 'antd';
import classnames from 'classnames';
import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import OverflowShowbox from "../../OverflowShowbox";
import classStyle from "./style.module.less";
var Option = Select.Option;
var Search = Input.Search;

/**
 * @description 自定义下拉框
 * @param {Array} options 传入的数据
 * @param {Object} store 请求的数据
 * @param {Object} storeOption 请求的数据
 * @param {Boolean} searchForStore 是否开启搜索
 * @param {Object} reader 数据读取器
 * @param {Boolean} show 是否展示模式
 * @param {Function} renderForShow 展示模式下的渲染函数
 * @param {Object} form 表单
 * @param {Function} children 自定义渲染函数
 *
 * */
export var SSelect = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var show = _ref.show,
    renderForShow = _ref.renderForShow,
    form = _ref.form,
    _ref$overflowShowTip = _ref.overflowShowTip,
    overflowShowTip = _ref$overflowShowTip === void 0 ? true : _ref$overflowShowTip,
    options = _ref.options,
    store = _ref.store,
    _ref$storeOption = _ref.storeOption,
    storeOption = _ref$storeOption === void 0 ? {} : _ref$storeOption,
    searchForStore = _ref.searchForStore,
    _ref$reader = _ref.reader,
    reader = _ref$reader === void 0 ? {
      label: 'label',
      value: 'value'
    } : _ref$reader,
    children = _ref.children,
    mode = _ref.mode,
    _ref$noWrap = _ref.noWrap,
    noWrap = _ref$noWrap === void 0 ? false : _ref$noWrap,
    className = _ref.className,
    paginated = _ref.paginated,
    props = _objectWithoutProperties(_ref, _excluded);
  var multiple = mode === 'multiple';
  var _useAntdTable = useAntdTable(store, _objectSpread({
      ready: !!store
    }, storeOption)),
    _useAntdTable$data = _useAntdTable.data,
    data = _useAntdTable$data === void 0 ? [] : _useAntdTable$data,
    error = _useAntdTable.error,
    loading = _useAntdTable.loading,
    refresh = _useAntdTable.refresh,
    pagination = _useAntdTable.pagination,
    tableProps = _useAntdTable.tableProps;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchVal = _useState2[0],
    setSearchVal = _useState2[1];
  useUpdateEffect(function () {
    tableProps.onChange(pagination, searchVal);
  }, [searchVal]);
  var errorMessage = error && error.message;
  var arrOptions = useMemo(function () {
    var newData = Array.isArray(data) ? data : [];
    var arr = typeof options === 'function' ? options(newData) : options;
    return (arr || newData).map(function (res, i) {
      return _objectSpread(_objectSpread({}, res), {}, {
        value: res[reader.value] || i,
        label: res[reader.label]
      });
    });
  }, [options, data, reader]);
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  var selectRef = useRef();
  var pageRef = useRef();
  var searchRef = useRef();
  var menuRef = useRef();
  var _useControllableValue = useControllableValue(props),
    _useControllableValue2 = _slicedToArray(_useControllableValue, 1),
    value = _useControllableValue2[0];
  var hide = useCallback(function (e) {
    var tDom = selectRef.current;
    var pDom = pageRef.current;
    var sDom = searchRef.current;
    var mDom = menuRef.current;
    if (tDom !== null && tDom !== void 0 && tDom.contains(e.target) || pDom !== null && pDom !== void 0 && pDom.contains(e.target) || sDom !== null && sDom !== void 0 && sDom.contains(e.target) || multiple && mDom !== null && mDom !== void 0 && mDom.contains(e.target)) {
      // 暂无需求
    } else {
      setTimeout(function () {
        setOpen(false);
      }, 100);
    }
  }, [multiple]);
  useEffect(function () {
    document.addEventListener('mousedown', hide, true);
    return function () {
      return document.removeEventListener('mousedown', hide, true);
    };
  }, [hide]);
  var option = function option(item) {
    return /*#__PURE__*/React.createElement(Option, {
      data: item,
      key: "".concat(item.value),
      value: item.value,
      label: item.label
    }, item.label);
  };
  var originOptionsRender = arrOptions && arrOptions.length > 0 && arrOptions.map(option);
  var searchMode = paginated || searchForStore ? {
    open: open,
    onDropdownVisibleChange: function onDropdownVisibleChange(val) {
      return val && setOpen(val);
    }
  } : {};
  var optionChildren = typeof children === 'function' ? children(arrOptions, Option, originOptionsRender) : originOptionsRender;
  var _useMemo = useMemo(function () {
      var flag = !!show;
      var val = value;
      // 展示模式
      // 注：这里因为Options的key值是value值，所以判定展示值用key来获取children
      // 注：建议只有不存在分页的情况使用，不然展示可能出错
      if (Array.isArray(optionChildren) && !paginated) {
        if (multiple) {
          val = optionChildren.filter(function (item) {
            return value === null || value === void 0 ? void 0 : value.includes(item.key);
          }).map(function (item) {
            return item.props.children;
          }).join('、');
        } else {
          var _optionChildren$find;
          val = (_optionChildren$find = optionChildren.find(function (item) {
            var diffVal = Array.isArray(value) ? value[0] : value;
            return item.key === diffVal;
          })) === null || _optionChildren$find === void 0 || (_optionChildren$find = _optionChildren$find.props) === null || _optionChildren$find === void 0 ? void 0 : _optionChildren$find.children;
        }
      }
      if (typeof renderForShow === 'function') {
        val = renderForShow({
          value: value,
          form: form,
          optionChildren: optionChildren,
          arrOptions: arrOptions,
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
      return [flag, val, optionChildren];
    }, [show, value, form, renderForShow, optionChildren, arrOptions, multiple, paginated, overflowShowTip]),
    _useMemo2 = _slicedToArray(_useMemo, 2),
    showFlag = _useMemo2[0],
    showValue = _useMemo2[1];
  if (showFlag) return showValue;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('w-full h-full inline-block', className, noWrap && classStyle['select-overflow-hide']),
    ref: selectRef
  }, /*#__PURE__*/React.createElement(Select, _extends({}, searchMode, {
    loading: loading
    // 搜索
    ,
    showSearch: true,
    optionFilterProp: "label"
  }, props, {
    ref: ref,
    mode: mode,
    suffixIcon: errorMessage && /*#__PURE__*/React.createElement(Tooltip, {
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
      type: "exclamation"
    })),
    dropdownRender: function dropdownRender(menu) {
      return /*#__PURE__*/React.createElement(Spin, {
        spinning: !!loading
      }, searchForStore && store && /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '8px 8px 0 8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: '1px solid rgb(222, 222, 222)'
        },
        ref: searchRef
      }, /*#__PURE__*/React.createElement(Search, {
        onSearch: function onSearch(val) {
          return setSearchVal(val);
        }
      })), /*#__PURE__*/React.createElement("div", {
        ref: menuRef
      }, menu), paginated && /*#__PURE__*/React.createElement("div", {
        style: {
          height: '42px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: '1px solid rgb(222, 222, 222)'
        },
        ref: pageRef
      }, /*#__PURE__*/React.createElement(Pagination, _extends({
        simple: true,
        disabled: loading
      }, pagination || {}))));
    }
  }), optionChildren));
});
export default SSelect;