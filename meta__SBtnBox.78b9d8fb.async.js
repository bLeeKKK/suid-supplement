"use strict";(self.webpackChunksuid_supplement=self.webpackChunksuid_supplement||[]).push([[367],{89249:function(l,e,n){n.r(e),n.d(e,{demos:function(){return m}});var o=n(17061),s=n.n(o),a=n(17156),d=n.n(a),u=n(67294),v=n(99464),m={"sbtnbox-demo-example2":{component:u.memo(u.lazy(function(){return n.e(855).then(n.bind(n,60256))})),asset:{type:"BLOCK",id:"sbtnbox-demo-example2",refAtomIds:["SBtnBox"],dependencies:{"index.jsx":{type:"FILE",value:n(75344).Z},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.52"}},entry:"index.jsx"},context:{react:n(67294),"suid-supplement":n(92758)},renderOpts:{compile:function(){var p=d()(s()().mark(function _(){var r,c=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,c));case 3:case"end":return t.stop()}},_)}));function i(){return p.apply(this,arguments)}return i}()}}}},38863:function(l,e,n){n.r(e),n.d(e,{texts:function(){return s}});var o=n(99464);const s=[{value:"\u4F7F\u7528 antd@3 \u7684 SModal \u7EC4\u4EF6\u5C01\u88C5\u7684\u4E0A\u4F20\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1},{value:"\u63CF\u8FF0",paraId:1},{value:"\u7C7B\u578B",paraId:1},{value:"\u9ED8\u8BA4\u503C",paraId:1},{value:"xxx",paraId:1},{value:"xxx",paraId:1},{value:"'file'",paraId:1},{value:"\u3001",paraId:1},{value:"'btn'",paraId:1},{value:"file",paraId:1}]},75344:function(l,e){e.Z=`import React from 'react';
import { BtnsBox } from 'suid-supplement';

export default () => {
  return (
    <BtnsBox
      limt="3"
      btnArr={[
        {
          title: '\u67E5\u770B',
          tip: '\u67E5\u770Bxxxxxxxxx',
          type: 'primary',
          icon: 'file-search',
          onClick: () => {
            const p = new Promise((resolve) => {
              setTimeout(resolve, 2000);
            });
            return p;
          },
        },
        {
          title: '\u7F16\u8F91',
          icon: 'edit',
          disabled: true,
          onClick: console.log,
        },
        {
          title: '\u5220\u9664',
          icon: 'delete',
          onClick: console.log,
        },
        {
          title: '\u6253\u5370',
          icon: 'printer',
          onClick: console.log,
          disabled: true,
          onClick: (e) => {
            const p = new Promise((resolve) => {
              console.log(e);
              setTimeout(resolve, 2000);
            });
            return p;
          },
        },
      ]}
    />
  );
};
`}}]);
