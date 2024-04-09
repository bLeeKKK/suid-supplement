var _excluded = ["shortcutKey", "overflowShowTip", "show", "renderForShow", "form"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useControllableValue, useFocusWithin } from 'ahooks';
import { Input, Tooltip } from 'antd';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import OverflowShowbox from "../../OverflowShowbox";
var isMacOS = navigator.userAgentData.platform.toUpperCase().indexOf('MAC') >= 0;
var Search = Input.Search;

/**
 * @params shortcutKey {boolean} 是否开启快捷键
 * */
var SearchPro = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var shortcutKey = _ref.shortcutKey,
    _ref$overflowShowTip = _ref.overflowShowTip,
    overflowShowTip = _ref$overflowShowTip === void 0 ? true : _ref$overflowShowTip,
    _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    renderForShow = _ref.renderForShow,
    form = _ref.form,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useControllableValue = useControllableValue(props),
    _useControllableValue2 = _slicedToArray(_useControllableValue, 1),
    value = _useControllableValue2[0];
  var ckFocus = props === null || props === void 0 ? void 0 : props.ckFocus;
  var searchRef = useRef();
  var includeDiv = useRef();
  var isFocusWithin = useFocusWithin(includeDiv.current);
  var _useMemo = useMemo(function () {
      var flag = !!show;
      var val = value;
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
    }, [show, value, form, renderForShow, overflowShowTip]),
    _useMemo2 = _slicedToArray(_useMemo, 2),
    showFlag = _useMemo2[0],
    showValue = _useMemo2[1];
  var tabFocusOutSearch = useCallback(function (e) {
    if (isMacOS && e.metaKey && e.keyCode === 75) {
      searchRef.current.focus();
    } else if (!isMacOS && e.keyCode === 75 && e.ctrlKey) {
      searchRef.current.focus();
    }
  }, [searchRef]);
  useImperativeHandle(ref, function () {
    return searchRef.current;
  });
  useEffect(function () {
    if (!shortcutKey) {
      document.removeEventListener('keydown', tabFocusOutSearch);
      return;
    }
    document.addEventListener('keydown', tabFocusOutSearch);
    return function () {
      return document.removeEventListener('keydown', tabFocusOutSearch);
    };
  }, [ckFocus, shortcutKey, tabFocusOutSearch]);
  return showFlag ? showValue : /*#__PURE__*/React.createElement(Tooltip, {
    placement: "bottom",
    title: props === null || props === void 0 ? void 0 : props.placeholder
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full relative",
    ref: includeDiv,
    onKeyDown: function onKeyDown(e) {
      // esc 退出
      if (e.keyCode === 27) {
        searchRef.current.blur();
      }
    }
  }, /*#__PURE__*/React.createElement(Search, _extends({}, props, {
    ref: searchRef
  })), !isFocusWithin && shortcutKey && /*#__PURE__*/React.createElement("span", {
    onClick: function onClick(e) {
      e.preventDefault();
      // 获取焦点
      searchRef.current.focus();
    },
    className: "cursor-pointer text-xs px-2 right-[4px] rounded-full shadow absolute top-1/2 transform -translate-y-1/2 bg-white z-10"
  }, isMacOS ? '⌘' : 'Ctrl', " K")));
});
export default SearchPro;