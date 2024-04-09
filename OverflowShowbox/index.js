import { Tooltip } from 'antd';
import React from 'react';
import styles from "./styles.module.css";
var OverflowShowbox = function OverflowShowbox(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "h-full w-full flex items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['over-wrap']
  }, /*#__PURE__*/React.createElement("span", {
    className: styles['over-txt']
  }, children), /*#__PURE__*/React.createElement(Tooltip, {
    className: styles['over-title'],
    title: children
  }, children)));
};
export default OverflowShowbox;