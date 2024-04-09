function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { BtnsBox } from "./..";
export default (function () {
  return /*#__PURE__*/React.createElement(BtnsBox, {
    limt: "3",
    btnArr: [{
      title: '查看',
      tip: '查看xxxxxxxxx',
      type: 'primary',
      icon: 'file-search',
      onClick: function onClick() {
        var p = new Promise(function (resolve) {
          setTimeout(resolve, 2000);
        });
        return p;
      }
    }, {
      title: '编辑',
      icon: 'edit',
      disabled: true,
      onClick: console.log
    }, {
      title: '删除',
      icon: 'delete',
      onClick: console.log
    }, _defineProperty({
      title: '打印',
      icon: 'printer',
      onClick: console.log,
      disabled: true
    }, "onClick", function onClick(e) {
      var p = new Promise(function (resolve) {
        console.log(e);
        setTimeout(resolve, 2000);
      });
      return p;
    })]
  });
});