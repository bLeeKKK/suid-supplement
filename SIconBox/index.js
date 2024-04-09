function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["tooltip", "title", "className"],
  _excluded2 = ["render", "loading", "onClick"],
  _excluded3 = ["render", "loading", "onClick"],
  _excluded4 = ["title", "tip", "tooltip", "iconDom", "children", "className", "disabled"],
  _excluded5 = ["children"],
  _excluded6 = ["title", "titleIconDom", "children", "popupClassName"],
  _excluded7 = ["children", "onClick"];
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
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Divider, Dropdown, Icon, Menu, Tooltip } from 'antd';
import classnames from 'classnames';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import "./styles.less";
export var IconContext = /*#__PURE__*/createContext({});
export var useIconContext = function useIconContext() {
  return useContext(IconContext);
};
export var SIcon = function SIcon(props) {
  var _props$tooltip = props.tooltip,
    tooltip = _props$tooltip === void 0 ? {} : _props$tooltip,
    title = props.title,
    className = props.className,
    restProps = _objectWithoutProperties(props, _excluded);
  var icon = /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, _extends({}, restProps, {
    className: classnames(className, 'hover:text-[#198FFF]')
  })));
  return /*#__PURE__*/React.createElement(React.Fragment, null, title ? /*#__PURE__*/React.createElement(Tooltip, _extends({
    title: title
  }, tooltip), icon) : icon);
};
export var ActionIcon = function ActionIcon(_ref) {
  var props = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  var render = props.render,
    _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    onClick = props.onClick,
    resProps = _objectWithoutProperties(props, _excluded2);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    inLoading = _useState2[0],
    setInLoading = _useState2[1];
  var click = useCallback(function () {
    var r = onClick.apply(void 0, arguments);
    if (r && r.then) {
      setInLoading(true);
      r.then(function () {
        setInLoading(false);
      });
    }
    return r;
  }, [onClick]);
  var IconDom = /*#__PURE__*/React.createElement(React.Fragment, null, loading || inLoading ? /*#__PURE__*/React.createElement(SIcon, {
    type: "loading"
  }) : /*#__PURE__*/React.createElement(SIcon, _extends({
    onClick: click
  }, resProps, {
    hide: undefined
  })));
  var IconDomA = IconDom;
  return render ? render({
    dom: IconDomA,
    iconOrMenu: 'icon'
  }) : IconDomA;
};
export var ActionMenu = function ActionMenu(_ref2) {
  var res = _ref2.res;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    inLoading = _useState4[0],
    setInLoading = _useState4[1];
  var render = res.render,
    _res$loading = res.loading,
    loading = _res$loading === void 0 ? false : _res$loading,
    onClick = res.onClick,
    resProps = _objectWithoutProperties(res, _excluded3);
  var click = function click() {
    var r = onClick.apply(void 0, arguments);
    if (r && r.then) {
      setInLoading(true);
      r.then(function () {
        setInLoading(false);
      });
    }
    return r;
  };
  var load = loading || inLoading;
  var DomA = /*#__PURE__*/React.createElement(React.Fragment, null, load ? /*#__PURE__*/React.createElement(SIcon, {
    type: "loading",
    style: {
      marginRight: '8px'
    }
  }) : null, res.title || '请定义标题');
  DomA = render ? render({
    dom: DomA,
    iconOrMenu: 'menu'
  }) : DomA;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: _objectSpread({
      textAlign: 'center'
    }, load ? {
      pointerEvents: 'none',
      opacity: 0.5
    } : {}),
    onClick: click
  }, resProps), DomA);
};
export var IconsBox = function IconsBox(_ref3) {
  var _ref3$iconArr = _ref3.iconArr,
    iconArr = _ref3$iconArr === void 0 ? [] : _ref3$iconArr,
    limt = _ref3.limt,
    _ref3$moreIcon = _ref3.moreIcon,
    moreIcon = _ref3$moreIcon === void 0 ? 'more' : _ref3$moreIcon;
  var arr = iconArr.filter(function (res) {
    return !res.hide;
  });
  var len = limt || arr.length;
  var beforArr = arr.splice(0, len);
  var icons = /*#__PURE__*/React.createElement(React.Fragment, null, beforArr.map(function (res, index) {
    return /*#__PURE__*/React.createElement("span", {
      key: "map-".concat(res.type)
    }, index !== 0 ? /*#__PURE__*/React.createElement(Divider, {
      type: "vertical"
    }) : null, /*#__PURE__*/React.createElement(ActionIcon, res));
  }), arr.length ? /*#__PURE__*/React.createElement(Dropdown, {
    placement: "topLeft",
    overlay: /*#__PURE__*/React.createElement(Menu, null, arr.map(function (res) {
      return /*#__PURE__*/React.createElement(Menu.Item, {
        key: "list-".concat(res.type)
      }, /*#__PURE__*/React.createElement(ActionMenu, {
        res: res
      }));
    }))
  }, /*#__PURE__*/React.createElement("span", null, !!beforArr.length ? /*#__PURE__*/React.createElement(Divider, {
    type: "vertical"
  }) : null, /*#__PURE__*/React.createElement(SIcon, {
    type: moreIcon
  }))) : null);
  return icons;
};
var DividerLine = function DividerLine(_ref4) {
  var className = _ref4.className,
    props = _ref4.props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, _extends({
    type: "vertical",
    className: classnames(className, 's-s-icon-divider-horizontal')
  }, props)), /*#__PURE__*/React.createElement(Divider, _extends({
    type: "horizontal",
    className: classnames(className, 's-s-icon-divider-vertical')
  }, props)));
};
var Item = function Item(_ref5) {
  var title = _ref5.title,
    tip = _ref5.tip,
    tooltip = _ref5.tooltip,
    iconDom = _ref5.iconDom,
    children = _ref5.children,
    className = _ref5.className,
    disabled = _ref5.disabled,
    props = _objectWithoutProperties(_ref5, _excluded4);
  var tipStr = tip || title;
  var _useIconContext = useIconContext(),
    inLoadingObj = _useIconContext.inLoadingObj;
  var eventKey = props.eventKey;
  var icon = useMemo(function () {
    var inLoading = inLoadingObj[eventKey];
    if (inLoading) {
      return /*#__PURE__*/React.createElement(Icon, {
        type: "loading"
      });
    }
    if (iconDom) {
      return iconDom;
    }
    return null;
  }, [iconDom, tipStr, inLoadingObj]);
  return /*#__PURE__*/React.createElement(Menu.Item, _extends({
    className: classnames(className),
    disabled: disabled || inLoadingObj[eventKey]
  }, props), tipStr ? /*#__PURE__*/React.createElement(Tooltip, _extends({
    title: tipStr
  }, tooltip || {}), icon, /*#__PURE__*/React.createElement("span", {
    className: "title-span"
  }, tipStr), " ", children) : /*#__PURE__*/React.createElement(React.Fragment, null, icon, " ", children));
};
var ItemGroup = function ItemGroup(_ref6) {
  var children = _ref6.children,
    props = _objectWithoutProperties(_ref6, _excluded5);
  return /*#__PURE__*/React.createElement(Menu.ItemGroup, props, children);
};
var SubMenu = function SubMenu(_ref7) {
  var title = _ref7.title,
    titleIconDom = _ref7.titleIconDom,
    children = _ref7.children,
    popupClassName = _ref7.popupClassName,
    props = _objectWithoutProperties(_ref7, _excluded6);
  var _useIconContext2 = useIconContext(),
    inLoadingObj = _useIconContext2.inLoadingObj;
  var eventKey = props.eventKey;
  var values = Object.values(inLoadingObj);
  var titleBox = useMemo(function () {
    var titleIcon = null;
    if (titleIconDom) {
      titleIcon = titleIconDom;
    }
    if (values.some(function (val) {
      return Array.isArray(val) && val.includes(eventKey);
    })) {
      titleIcon = /*#__PURE__*/React.createElement(Icon, {
        type: "loading"
      });
    }
    var titleWithIcon = /*#__PURE__*/React.createElement(React.Fragment, null, titleIcon, " ", title);
    return titleWithIcon;
    // return tip ? (
    //   <Tooltip title={tip} {...(tooltip || {})}>
    //     {titleWithIcon}a
    //   </Tooltip>
    // ) : (
    //   titleWithIcon
    // );
  }, [titleIconDom, title, values, eventKey]);
  return /*#__PURE__*/React.createElement(Menu.SubMenu, _extends({
    title: titleBox
    // popupClassName={classnames(popupClassName, 's-s-icon-submenu')}
  }, props), children);
};
var IconMenus = function IconMenus(_ref8) {
  var children = _ref8.children,
    onClick = _ref8.onClick,
    props = _objectWithoutProperties(_ref8, _excluded7);
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    inLoadingObj = _useState6[0],
    setInLoadingObj = _useState6[1];
  var click = useCallback(function (_ref9) {
    var item = _ref9.item,
      key = _ref9.key,
      keyPath = _ref9.keyPath,
      domEvent = _ref9.domEvent;
    if (!onClick) return;

    // 防止重复点击
    // const val = inLoadingObj[key];
    // if (val) return;

    var p = onClick({
      item: item,
      key: key,
      keyPath: keyPath,
      domEvent: domEvent
    });
    if (p && p.then) {
      setInLoadingObj(function (obj) {
        return _objectSpread(_objectSpread({}, obj || {}), {}, _defineProperty({}, key, keyPath));
      });
      p.then(function () {
        setInLoadingObj(function (obj) {
          return _objectSpread(_objectSpread({}, obj || {}), {}, _defineProperty({}, key, false));
        });
      });
    }
  }, [onClick, inLoadingObj]);
  return /*#__PURE__*/React.createElement(IconContext.Provider, {
    value: {
      inLoadingObj: inLoadingObj
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "s-s-icon-menu"
  }, /*#__PURE__*/React.createElement(Menu, _extends({
    selectable: false,
    onClick: click
  }, props, {
    mode: "horizontal"
  }), children)));
};
var Dependency = function Dependency(_ref10) {
  var children = _ref10.children;
  var context = useIconContext();
  return /*#__PURE__*/React.createElement(React.Fragment, null, children(context));
};
IconMenus.Dependency = Dependency;
IconMenus.Item = Item;
IconMenus.ItemGroup = ItemGroup;
IconMenus.DividerLine = DividerLine;
IconMenus.SubMenu = SubMenu;
export default IconMenus;