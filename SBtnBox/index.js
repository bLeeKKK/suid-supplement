function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["tooltip", "tip", "children", "afterIcon", "className", "mr8"],
  _excluded2 = ["render", "loading", "onClick", "children"],
  _excluded3 = ["render", "loading", "onClick", "disabled", "icon", "style"],
  _excluded4 = ["title"];
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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Button, Dropdown, Icon, Menu, Tooltip } from 'antd';
import classnames from 'classnames';
import React, { useCallback, useState } from 'react';
import "./styles.less";
export var SBtn = function SBtn(props) {
  var _props$tooltip = props.tooltip,
    tooltip = _props$tooltip === void 0 ? {} : _props$tooltip,
    tip = props.tip,
    children = props.children,
    afterIcon = props.afterIcon,
    className = props.className,
    _props$mr = props.mr8,
    mr8 = _props$mr === void 0 ? true : _props$mr,
    restProps = _objectWithoutProperties(props, _excluded);
  var btn = /*#__PURE__*/React.createElement(Button, _extends({
    className: classnames(className, {
      's-btn-item-mr-8': mr8
    })
  }, restProps), children || '请定义标题', afterIcon);
  return /*#__PURE__*/React.createElement(React.Fragment, null, tip ? /*#__PURE__*/React.createElement(Tooltip, _extends({
    title: tip
  }, tooltip), btn) : btn);
};
export var ActionBtn = function ActionBtn(props) {
  var render = props.render,
    _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    onClick = props.onClick,
    children = props.children,
    resProps = _objectWithoutProperties(props, _excluded2);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    inLoading = _useState2[0],
    setInLoading = _useState2[1];
  var click = useCallback(function () {
    if (!onClick) return;
    var r = onClick.apply(void 0, arguments);
    console.log(r, 'r');
    if (r && r.finally) {
      setInLoading(true);
      r.finally(function () {
        setInLoading(false);
      });
    }
    return r;
  }, [onClick]);
  var load = loading || inLoading;
  var IconDom = /*#__PURE__*/React.createElement(SBtn, _extends({
    loading: load,
    onClick: click
  }, resProps), children);
  return render ? render({
    dom: IconDom,
    btnOrMenu: 'btn'
  }) : IconDom;
};
export var ActionMenu = function ActionMenu(_ref) {
  var res = _ref.res;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    inLoading = _useState4[0],
    setInLoading = _useState4[1];
  var render = res.render,
    _res$loading = res.loading,
    loading = _res$loading === void 0 ? false : _res$loading,
    onClick = res.onClick,
    disabled = res.disabled,
    icon = res.icon,
    style = res.style,
    resProps = _objectWithoutProperties(res, _excluded3);
  var click = function click() {
    var r = onClick.apply(void 0, arguments);
    if (r && r.finally) {
      setInLoading(true);
      r.finally(function () {
        setInLoading(false);
      });
    }
    return r;
  };
  var load = loading || inLoading;
  var iconDom = typeof icon === 'string' ? /*#__PURE__*/React.createElement(Icon, {
    style: {
      marginRight: '8px'
    },
    type: icon
  }) : icon;
  var DomA = /*#__PURE__*/React.createElement(React.Fragment, null, load ? /*#__PURE__*/React.createElement(Icon, {
    type: "loading",
    style: {
      marginRight: '8px'
    }
  }) : iconDom, res.title || '请定义标题！');
  DomA = render ? render({
    dom: DomA,
    btnOrMenu: 'menu'
  }) : DomA;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: _objectSpread(_objectSpread(_objectSpread({
      textAlign: 'center'
    }, style || {}), load || disabled ? {
      pointerEvents: 'none'
    } : {}), load ? {
      opacity: 0.5
    } : {}),
    onClick: click
  }, resProps), DomA);
};
var BtnMore = /*#__PURE__*/React.createElement(Button, null, "\u66F4\u591A", /*#__PURE__*/React.createElement(Icon, {
  type: "down"
}));
export var BtnsBox = function BtnsBox(_ref2) {
  var _ref2$btnArr = _ref2.btnArr,
    btnArr = _ref2$btnArr === void 0 ? [] : _ref2$btnArr,
    limt = _ref2.limt,
    _ref2$moreBtn = _ref2.moreBtn,
    moreBtn = _ref2$moreBtn === void 0 ? BtnMore : _ref2$moreBtn;
  var arr = btnArr.filter(function (res) {
    return !res.hide;
  });
  var len = limt || arr.length;
  var beforArr = arr.splice(0, len);
  var btns = /*#__PURE__*/React.createElement("div", {
    className: "s-btn-box"
  }, beforArr.map(function (_ref3) {
    var title = _ref3.title,
      res = _objectWithoutProperties(_ref3, _excluded4);
    return /*#__PURE__*/React.createElement("span", {
      key: "map-".concat(res.type)
    }, /*#__PURE__*/React.createElement(ActionBtn, res, title));
  }), arr.length ? /*#__PURE__*/React.createElement(Dropdown, {
    overlay: /*#__PURE__*/React.createElement(Menu, null, arr.map(function (res) {
      return /*#__PURE__*/React.createElement(Menu.Item, {
        disabled: res.disabled,
        key: "list-".concat(res.type)
      }, /*#__PURE__*/React.createElement(ActionMenu, {
        res: res
      }));
    }))
  }, moreBtn) : null);
  return btns;
};
export default BtnsBox;