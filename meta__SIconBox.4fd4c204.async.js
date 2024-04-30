"use strict";(self.webpackChunksuid_supplement=self.webpackChunksuid_supplement||[]).push([[954],{48116:function(l,t,n){n.r(t),n.d(t,{demos:function(){return c}});var a=n(17061),s=n.n(a),I=n(17156),d=n.n(I),i=n(67294),c={"siconbox-demo-example2":{component:i.memo(i.lazy(function(){return n.e(900).then(n.bind(n,30754))})),asset:{type:"BLOCK",id:"siconbox-demo-example2",refAtomIds:["SIconBox"],dependencies:{"index.jsx":{type:"FILE",value:n(93448).Z},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.30"}},entry:"index.jsx"},context:{react:n(67294),"suid-supplement":n(83194)},renderOpts:{compile:function(){var u=d()(s()().mark(function p(){var o,r=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,r));case 3:case"end":return e.stop()}},p)}));function m(){return u.apply(this,arguments)}return m}()}},"siconbox-demo-example":{component:i.memo(i.lazy(function(){return n.e(900).then(n.bind(n,38320))})),asset:{type:"BLOCK",id:"siconbox-demo-example",refAtomIds:["SIconBox"],dependencies:{"index.jsx":{type:"FILE",value:n(14444).Z},antd:{type:"NPM",value:"3.26.20"},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.30"}},entry:"index.jsx"},context:{antd:n(96303),react:n(67294),"suid-supplement":n(83194)},renderOpts:{compile:function(){var u=d()(s()().mark(function p(){var o,r=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,r));case 3:case"end":return e.stop()}},p)}));function m(){return u.apply(this,arguments)}return m}()}}}},27638:function(l,t,n){n.r(t),n.d(t,{texts:function(){return a}});const a=[{value:"\u4F7F\u7528 antd@3 \u7684 SModal \u7EC4\u4EF6\u5C01\u88C5\u7684\u4E0A\u4F20\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:`\u6D4B\u8BD5\u4E2D Icon \u83DC\u5355
`,paraId:1},{value:"\u5C5E\u6027",paraId:2},{value:"\u63CF\u8FF0",paraId:2},{value:"\u7C7B\u578B",paraId:2},{value:"\u9ED8\u8BA4\u503C",paraId:2},{value:"xxx",paraId:2},{value:"xxx",paraId:2},{value:"'file'",paraId:2},{value:"\u3001",paraId:2},{value:"'btn'",paraId:2},{value:"file",paraId:2}]},14444:function(l,t){t.Z=`import { Icon } from 'antd';
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
          title="\u90AE\u4EF6 Title"
          iconDom={<Icon type="mail" antd />}
        />
        <DividerLine />
        <Item
          key="app"
          tip="\u6807\u9898"
          iconDom={<Icon separa type="appstore" />}
          disabled
        >
          xxx
        </Item>
        <DividerLine />
        <SubMenu
          key="sub1"
          titleIconDom={<Icon type="setting" />}
          title={<span className="submenu-title-wrapper">\u6807\u9898</span>}
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
            title={<span className="submenu-title-wrapper">\u8BBE\u7F6E2222</span>}
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
          title="\u90AE\u4EF6 Title2"
          iconDom={<Icon type="mail" antd />}
        />
        <DividerLine />
        <Item
          key="app2"
          tip="\u6807\u9898"
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
`},93448:function(l,t){t.Z=`import React from 'react';
import { IconsBox } from 'suid-supplement';

export default () => {
  return (
    <IconsBox
      limt="3"
      iconArr={[
        {
          title: '\u67E5\u770B',
          type: 'file-search',
          onClick: () => {
            const p = new Promise((resolve) => {
              setTimeout(resolve, 2000);
            });
            return p;
          },
        },
        {
          title: '\u7F16\u8F91',
          type: 'edit',
          onClick: console.log,
        },
        {
          title: '\u5220\u9664',
          type: 'delete',
          onClick: console.log,
        },
        {
          title: '\u6253\u5370',
          type: 'printer',
          onClick: console.log,
        },
      ]}
    />
  );
};
`}}]);
