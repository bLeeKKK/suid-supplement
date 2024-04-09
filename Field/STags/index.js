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
import { useControllableValue } from 'ahooks';
import { Icon, Input, Tag, Tooltip } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
var SelectTags = function SelectTags(props) {
  var _useControllableValue = useControllableValue(props),
    _useControllableValue2 = _slicedToArray(_useControllableValue, 2),
    tags = _useControllableValue2[0],
    setTags = _useControllableValue2[1];
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    inputVisible = _useState2[0],
    setInputVisible = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];
  var input = useRef();
  var show = props.show === 'true' || props.show === true;
  var tagsFlag = Array.isArray(tags);
  var handleClose = function handleClose(removedTag) {
    var t = tags.filter(function (tag) {
      return tag !== removedTag;
    });
    setTags(t);
  };
  var handleInputConfirm = useCallback(function () {
    var arr = _toConsumableArray(tags || []);
    if (inputValue && arr.indexOf(inputValue) === -1) {
      arr = [].concat(_toConsumableArray(arr), [inputValue]);
    }
    setTags(arr);
    setInputVisible(false);
    setInputValue('');
  }, [inputValue, tags, setTags]);
  return /*#__PURE__*/React.createElement("div", null, tagsFlag && tags.map(function (tag) {
    var isLongTag = tag.length > 10;
    var str = tag;
    // 超过10个字符串，就让字符串前后展示3个字符，中间使用...省略
    if (isLongTag) {
      str = "".concat(tag.slice(0, 3), "...").concat(tag.slice(-3));
    }
    var tagElem = /*#__PURE__*/React.createElement(Tag, {
      key: tag,
      closable: !show,
      onClose: function onClose() {
        return handleClose(tag);
      }
    }, str);
    return isLongTag ? /*#__PURE__*/React.createElement(Tooltip, {
      title: tag,
      key: tag
    }, tagElem) : tagElem;
  }), show ? null : /*#__PURE__*/React.createElement(React.Fragment, null, inputVisible && /*#__PURE__*/React.createElement(Input, {
    ref: input,
    type: "text",
    size: "small",
    style: {
      width: 78
    },
    value: inputValue,
    onChange: function onChange(event) {
      return setInputValue(event.target.value);
    },
    onBlur: handleInputConfirm,
    onPressEnter: handleInputConfirm
  }), !inputVisible && /*#__PURE__*/React.createElement(Tag, {
    onClick: function onClick() {
      return setInputVisible(true);
    },
    style: {
      background: '#fff',
      borderStyle: 'dashed'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    type: "plus"
  }), " New Tag")));
};
export default SelectTags;