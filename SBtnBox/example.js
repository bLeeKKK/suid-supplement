import { Icon } from 'antd';
import React from 'react';
import { BtnMenus } from "./..";
var Item = BtnMenus.Item,
  SubMenu = BtnMenus.SubMenu,
  ItemGroup = BtnMenus.ItemGroup;
export default (function () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BtnMenus, {
    onClick: function onClick(_ref) {
      var key = _ref.key;
      console.log(key);
      var p = new Promise(function (resolve) {
        setTimeout(resolve, 3000);
      });
      return p;
    }
  }, /*#__PURE__*/React.createElement(Item, {
    key: "mail",
    icon: "mail"
  }, "\u90AE\u4EF6 Title"), /*#__PURE__*/React.createElement(Item, {
    key: "app",
    tip: "\u6807\u9898",
    iconDom: /*#__PURE__*/React.createElement(Icon, {
      separa: true,
      type: "appstore"
    }),
    disabled: true
  }, "xxx"), /*#__PURE__*/React.createElement(SubMenu, {
    key: "sub1",
    titleIconDom: /*#__PURE__*/React.createElement(Icon, {
      type: "setting"
    }),
    title: /*#__PURE__*/React.createElement("span", {
      className: "submenu-title-wrapper"
    }, "\u6807\u9898")
  }, /*#__PURE__*/React.createElement(Item, {
    iconDom: /*#__PURE__*/React.createElement(Icon, {
      type: "setting"
    }),
    key: "setting:1"
  }, "Option 1"), /*#__PURE__*/React.createElement(Item, {
    key: "setting:2"
  }, "Option 2"), /*#__PURE__*/React.createElement(ItemGroup, {
    title: "Item 2"
  }, /*#__PURE__*/React.createElement(Item, {
    key: "setting:3"
  }, "Option 3"), /*#__PURE__*/React.createElement(Item, {
    key: "setting:4"
  }, "Option 4")), /*#__PURE__*/React.createElement(SubMenu, {
    iconDom: /*#__PURE__*/React.createElement(Icon, {
      type: "setting"
    }),
    title: /*#__PURE__*/React.createElement("span", {
      className: "submenu-title-wrapper"
    }, "\u8BBE\u7F6E2222")
  }, /*#__PURE__*/React.createElement(Item, {
    key: "setting:1-1"
  }, /*#__PURE__*/React.createElement(Icon, {
    type: "setting"
  }), "Option 1"), /*#__PURE__*/React.createElement(Item, {
    key: "setting:2-1"
  }, "Option 2"), /*#__PURE__*/React.createElement(ItemGroup, {
    title: "Item 2"
  }, /*#__PURE__*/React.createElement(Item, {
    key: "setting:3-1"
  }, "Option 3"), /*#__PURE__*/React.createElement(Item, {
    key: "setting:4-1"
  }, "Option 4")))), /*#__PURE__*/React.createElement(Item, {
    key: "mail2",
    title: "\u90AE\u4EF6 Title2",
    iconDom: /*#__PURE__*/React.createElement(Icon, {
      type: "mail",
      antd: true
    })
  }), /*#__PURE__*/React.createElement(Item, {
    key: "app2",
    tip: "\u6807\u9898",
    iconDom: /*#__PURE__*/React.createElement(Icon, {
      separa: true,
      type: "appstore"
    }),
    disabled: true
  }, "xxx"), /*#__PURE__*/React.createElement(Item, {
    key: "alipay"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://ant.design",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Navigation Four - Link"))));
});