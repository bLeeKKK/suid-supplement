"use strict";(self.webpackChunksuid_supplement=self.webpackChunksuid_supplement||[]).push([[232],{15584:function(a,t,n){n.r(t),n.d(t,{demos:function(){return v}});var p=n(17061),s=n.n(p),c=n(17156),i=n.n(c),d=n(67294),f=n(61517),v={"src-utils-demo-example":{component:d.memo(d.lazy(function(){return n.e(433).then(n.bind(n,69774))})),asset:{type:"BLOCK",id:"src-utils-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(67202).Z},antd:{type:"NPM",value:"3.26.20"},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.52"}},entry:"index.tsx"},context:{antd:n(96303),react:n(67294),"suid-supplement":n(30232)},renderOpts:{compile:function(){var l=i()(s()().mark(function r(){var u,m=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,m));case 3:case"end":return e.stop()}},r)}));function o(){return l.apply(this,arguments)}return o}()}},"src-utils-demo-example1":{component:d.memo(d.lazy(function(){return n.e(433).then(n.bind(n,87414))})),asset:{type:"BLOCK",id:"src-utils-demo-example1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(65893).Z},antd:{type:"NPM",value:"3.26.20"},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.52"}},entry:"index.tsx"},context:{antd:n(96303),react:n(67294),"suid-supplement":n(30232)},renderOpts:{compile:function(){var l=i()(s()().mark(function r(){var u,m=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,m));case 3:case"end":return e.stop()}},r)}));function o(){return l.apply(this,arguments)}return o}()}}}},41205:function(a,t,n){n.r(t),n.d(t,{texts:function(){return s}});var p=n(61517);const s=[{value:"\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B",paraId:0,tocIndex:1},{value:"\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u63CF\u8FF0",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"channelName",paraId:1,tocIndex:2},{value:"\u9891\u9053\u540D\u79F0\uFF08\u5FC5\u4F20\uFF09",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"undefined",paraId:1,tocIndex:2},{value:"onMessage",paraId:1,tocIndex:2},{value:"\u63A5\u6536\u5230\u9891\u9053\u6D88\u606F\u7684\u56DE\u6389",paraId:1,tocIndex:2},{value:"function",paraId:1,tocIndex:2},{value:"undefined",paraId:1,tocIndex:2}]},67202:function(a,t){t.Z=`import { Button } from 'antd';
import React from 'react';
import { useChannel } from 'suid-supplement';

export default () => {
  const { send } = useChannel('xxxx', (p: any) => console.log(p, '\u89E6\u53D1\u4F4D\u7F6E1'));
  return (
    <Button
      onClick={() =>
        send({
          type: 'sendNumber',
          number: 111,
        })
      }
    >
      \u53D1\u90011
    </Button>
  );
};
`},65893:function(a,t){t.Z=`import { Button } from 'antd';
import React from 'react';
import { useChannel } from 'suid-supplement';

export default () => {
  const { send } = useChannel('xxxx', (p: any) => console.log(p, '\u89E6\u53D1\u4F4D\u7F6E2'));
  return (
    <Button
      onClick={() =>
        send({
          type: 'sendNumber',
          number: 222,
        })
      }
    >
      \u53D1\u90012
    </Button>
  );
};
`}}]);
