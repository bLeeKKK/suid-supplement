import React from 'react';
import { Upload } from "./..";
export default (function () {
  return /*#__PURE__*/React.createElement(Upload, {
    listType: "text",
    uploadHandlerRender: function uploadHandlerRender() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          background: 'red',
          color: '#fff',
          padding: '16px',
          cursor: 'pointer'
        }
      }, "\u81EA\u5B9A\u4E49\u4E0A\u4F20\u89E6\u53D1");
    }
  });
});