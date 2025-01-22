"use strict";(self.webpackChunksuid_supplement=self.webpackChunksuid_supplement||[]).push([[367],{89249:function(u,e,n){var s;n.r(e),n.d(e,{demos:function(){return i}});var l=n(17061),r=n.n(l),d=n(17156),p=n.n(d),o=n(67294),E=n(99464),m=n(92758),i={"sbtnbox-demo-example2":{component:o.memo(o.lazy(function(){return n.e(855).then(n.bind(n,60256))})),asset:{type:"BLOCK",id:"sbtnbox-demo-example2",refAtomIds:["SBtnBox"],dependencies:{"index.jsx":{type:"FILE",value:n(75344).Z},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.63"}},entry:"index.jsx"},context:{react:s||(s=n.t(o,2)),"suid-supplement":m},renderOpts:{compile:function(){var _=p()(r()().mark(function c(){var a,v=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,v));case 3:case"end":return t.stop()}},c)}));function x(){return _.apply(this,arguments)}return x}()}}}},38863:function(u,e,n){n.r(e),n.d(e,{texts:function(){return l}});var s=n(99464);const l=[{value:"\u4F7F\u7528 antd@3 \u7684 SModal \u7EC4\u4EF6\u5C01\u88C5\u7684\u4E0A\u4F20\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1},{value:"\u63CF\u8FF0",paraId:1},{value:"\u7C7B\u578B",paraId:1},{value:"\u9ED8\u8BA4\u503C",paraId:1},{value:"xxx",paraId:1},{value:"xxx",paraId:1},{value:"'file'",paraId:1},{value:"\u3001",paraId:1},{value:"'btn'",paraId:1},{value:"file",paraId:1}]},75344:function(u,e){e.Z=`import React from 'react';
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
          tip: 'xxxx xxxx xxxx xxxx z',
          disabled: true,
          onClick: (e) => {
            console.log('printer');
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
