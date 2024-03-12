import { Icon } from 'antd';
import React from 'react';
import { IconMenus } from 'suid-supplement';

const {
  Item,
  SubMenu,
  ItemGroup,
  DividerLine,
  // Dependency
} = IconMenus;

export default () => {
  return (
    <div style={{ width: '100px' }}>
      <IconMenus
        onClick={({ key }) => {
          console.log(key);
          const p = new Promise((resolve) => {
            setTimeout(resolve, 3000);
          });
          return p;
        }}
      >
        <Item
          key="mail"
          title="邮件 Title"
          iconDom={<Icon type="mail" antd />}
        />
        <DividerLine />
        <Item
          key="app"
          tip="标题"
          iconDom={<Icon separa type="appstore" />}
          disabled
        >
          xxx
        </Item>
        <DividerLine />
        <SubMenu
          key="sub1"
          titleIconDom={<Icon type="setting" />}
          title={<span className="submenu-title-wrapper">标题</span>}
        >
          <Item iconDom={<Icon type="setting" />} key="setting:1">
            Option 1
          </Item>
          <Item key="setting:2">Option 2</Item>
          <ItemGroup title="Item 2">
            <Item key="setting:3">Option 3</Item>
            <Item key="setting:4">Option 4</Item>
          </ItemGroup>
          <SubMenu
            iconDom={<Icon type="setting" />}
            title={<span className="submenu-title-wrapper">设置2222</span>}
          >
            <Item key="setting:1-1">
              <Icon type="setting" />
              Option 1
            </Item>
            <Item key="setting:2-1">Option 2</Item>
            <ItemGroup title="Item 2">
              <Item key="setting:3-1">Option 3</Item>
              <Item key="setting:4-1">Option 4</Item>
            </ItemGroup>
          </SubMenu>
        </SubMenu>
        <DividerLine />
        <Item
          key="mail2"
          title="邮件 Title2"
          iconDom={<Icon type="mail" antd />}
        />
        <DividerLine />
        <Item
          key="app2"
          tip="标题"
          iconDom={<Icon separa type="appstore" />}
          disabled
        >
          xxx
        </Item>
        <DividerLine />
        <Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation Four - Link
          </a>
        </Item>
        {/* <Dependency> */}
        {/*   {({ inLoadingObj }) => { */}
        {/*     return Object.keys(inLoadingObj); */}
        {/*   }} */}
        {/* </Dependency> */}
      </IconMenus>
    </div>
  );
};
