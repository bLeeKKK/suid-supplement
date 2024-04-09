function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["uploadType", "loading", "pastePower", "dragPower", "disabled", "uploadHandlerRender", "uploadHandlerShow", "areaStyle"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useDrop, useHover } from 'ahooks';
import { Button, Icon, Spin, Upload } from 'antd';
import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import "./styles.css";
// let num = 0;
// interface TFileToFileListItem {
//   (
//     ...args:
//       | [file: File, other?: { [key: string]: any }]
//       | [file: File & { uid?: string }, other?: { [key: string]: any }]
//   ): UploadFile;
// }

// // file 转 UploadFile
// const fileToFileListItem: TFileToFileListItem = (file, other = {}) => {
//   const uid =
//     (file as File & UploadFile).uid ??
//     `ss-rc-upload-${file.lastModified}-${(num += 1)}`;
//
//   return {
//     ...file,
//     uid,
//     lastModifiedDate: new Date(file?.lastModified as number),
//     lastModified: file.lastModified,
//     type: file.type,
//     size: file.size,
//     name: file.name,
//     percent: 0,
//     originFileObj: file,
//     ...other,
//   };
// };

var SsUpload = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _uploadRef$current;
  var _ref$uploadType = _ref.uploadType,
    uploadType = _ref$uploadType === void 0 ? 'file' : _ref$uploadType,
    loading = _ref.loading,
    _ref$pastePower = _ref.pastePower,
    pastePower = _ref$pastePower === void 0 ? true : _ref$pastePower,
    _ref$dragPower = _ref.dragPower,
    dragPower = _ref$dragPower === void 0 ? true : _ref$dragPower,
    disabled = _ref.disabled,
    uploadHandlerRender = _ref.uploadHandlerRender,
    _ref$uploadHandlerSho = _ref.uploadHandlerShow,
    uploadHandlerShow = _ref$uploadHandlerSho === void 0 ? true : _ref$uploadHandlerSho,
    areaStyle = _ref.areaStyle,
    props = _objectWithoutProperties(_ref, _excluded);
  var defaultListType = uploadType === 'btn' ? 'text' : 'picture-card';
  var areaRef = useRef(null);
  var uploadRef = useRef(null);
  useImperativeHandle(ref, function () {
    return uploadRef.current;
  });
  var ajaxUploaderVDom = uploadRef === null || uploadRef === void 0 || (_uploadRef$current = uploadRef.current) === null || _uploadRef$current === void 0 || (_uploadRef$current = _uploadRef$current.upload) === null || _uploadRef$current === void 0 ? void 0 : _uploadRef$current.uploader;
  var isHovering = useHover(areaRef);
  var showUploadArea = useMemo(function () {
    var dom = null;
    // 自定义上传区域
    if (uploadHandlerRender) {
      if (typeof uploadHandlerRender === 'function') {
        dom = uploadHandlerRender({
          uploadType: uploadType,
          dragPower: dragPower,
          pastePower: pastePower
        });
      } else {
        dom = uploadHandlerRender;
      }
      return dom;
    }
    if (uploadType === 'file') {
      dom = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
        style: {
          fontSize: '22px'
        },
        type: "plus"
      }), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '14px'
        }
      }, "\u4E0A\u4F20"));
    } else if (uploadType === 'btn') {
      dom = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        size: "small"
      }, /*#__PURE__*/React.createElement(Icon, {
        type: "upload"
      }), /*#__PURE__*/React.createElement("span", null, "\u4E0A\u4F20")));
    }
    return dom;
  }, [uploadType, uploadHandlerRender]);

  // 绑定拖拽、粘贴功能
  useDrop(areaRef, {
    onFiles: function onFiles(files) {
      var _ajaxUploaderVDom$onC;
      // 拖拽
      if (isHovering && !disabled) ajaxUploaderVDom === null || ajaxUploaderVDom === void 0 || (_ajaxUploaderVDom$onC = ajaxUploaderVDom.onChange) === null || _ajaxUploaderVDom$onC === void 0 || _ajaxUploaderVDom$onC.call(ajaxUploaderVDom, {
        target: {
          files: files
        }
      });
    }
  });
  var options = _objectSpread({
    multiple: true,
    listType: defaultListType,
    disabled: disabled
  }, props);
  var child = uploadHandlerShow ? showUploadArea : null;
  var renderShow = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Spin, {
    spinning: !!loading
  }, /*#__PURE__*/React.createElement(Upload, _extends({}, options, {
    ref: uploadRef
  }), child)));
  if (!disabled && (pastePower || dragPower)) {
    // 粘贴文件上传
    return /*#__PURE__*/React.createElement("div", {
      ref: areaRef,
      className: "suid-s-paster-box",
      style: areaStyle
    }, renderShow);
  }
  return renderShow;
});
export default SsUpload;