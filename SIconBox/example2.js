import React from 'react';
import { IconsBox } from "./..";
export default (function () {
  return /*#__PURE__*/React.createElement(IconsBox, {
    limt: "3",
    iconArr: [{
      title: '查看',
      type: 'file-search',
      onClick: function onClick() {
        var p = new Promise(function (resolve) {
          setTimeout(resolve, 2000);
        });
        return p;
      }
    }, {
      title: '编辑',
      type: 'edit',
      onClick: console.log
    }, {
      title: '删除',
      type: 'delete',
      onClick: console.log
    }, {
      title: '打印',
      type: 'printer',
      onClick: console.log
    }]
  });
});