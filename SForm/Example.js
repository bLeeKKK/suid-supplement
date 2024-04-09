function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Button, Switch } from 'antd';
import React from 'react';
import { ActionBtn, FormInput, FormTextArea, SFormBox, SRow } from "./..";

// const getDirctData = async (code, count, filters) => {
//   const { data } = await axios.get(`/api/dict`, {
//     params: {
//       dictCode: code,
//       count,
//       filters,
//     },
//   });
//
//   return data.data.map((item) => ({
//     value: item.dataValue,
//     label: item.dataName,
//   }));
// };

export default (function () {
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    checked = _React$useState2[0],
    setChecked = _React$useState2[1];
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
  }, "\u83B7\u53D6Ref"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/React.createElement(SFormBox, {
    style: {
      width: '500px'
    },
    justShow: checked,
    onFinish: function onFinish(values) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          console.log(values);
          resolve();
        }, 2000);
      });
    },
    ref: formRef
  }, /*#__PURE__*/React.createElement(FormTextArea, {
    label: "\u63CF\u8FF0",
    name: "des",
    initialValue: "\u8FD9\u662F\u63CF\u8FF0",
    rules: [{
      required: true,
      message: '请输入用户名'
    }]
  }), /*#__PURE__*/React.createElement(FormInput, {
    label: "\u7528\u6237",
    name: "user-formbox",
    rules: [{
      required: true,
      message: '请输入用户名'
    }],
    initialValue: "\u674E\u56DB"
  }), /*#__PURE__*/React.createElement(FormInput, {
    label: "\u5E74\u9F84",
    name: "ages",
    rules: [{
      required: true,
      message: '请输入年龄'
    }],
    initialValue: 18
  }), /*#__PURE__*/React.createElement(SRow, {
    type: "flex",
    justify: "center"
  }, /*#__PURE__*/React.createElement(SRow.SCol, {
    className: "mb-2 flex justify-center",
    span: 8
  }, /*#__PURE__*/React.createElement(SFormBox.Consumer, null, function (_ref) {
    var form = _ref.form,
      loading = _ref.loading;
    return /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      onClick: function onClick() {
        return form.finish();
      },
      loading: loading
    }, "\u5185\u90E8\u6309\u94AE");
  }))))), /*#__PURE__*/React.createElement(ActionBtn, {
    onClick: function onClick() {
      var _formRef$current, _formRef$current$fini;
      return formRef === null || formRef === void 0 || (_formRef$current = formRef.current) === null || _formRef$current === void 0 || (_formRef$current$fini = _formRef$current.finish) === null || _formRef$current$fini === void 0 ? void 0 : _formRef$current$fini.call(_formRef$current);
    }
  }, "\u81EA\u5B9A\u4E49\u63D0\u4EA42"));
});