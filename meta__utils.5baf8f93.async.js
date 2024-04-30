"use strict";(self.webpackChunksuid_supplement=self.webpackChunksuid_supplement||[]).push([[232],{70714:function(d,t,n){n.r(t),n.d(t,{demos:function(){return f}});var l=n(17061),s=n.n(l),c=n(17156),i=n.n(c),a=n(67294),f={"src-utils-demo-example":{component:a.memo(a.lazy(function(){return n.e(433).then(n.bind(n,97085))})),asset:{type:"BLOCK",id:"src-utils-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(67202).Z},antd:{type:"NPM",value:"3.26.20"},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.30"}},entry:"index.tsx"},context:{antd:n(96303),react:n(67294),"suid-supplement":n(83194)},renderOpts:{compile:function(){var o=i()(s()().mark(function m(){var u,p=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,p));case 3:case"end":return e.stop()}},m)}));function r(){return o.apply(this,arguments)}return r}()}},"src-utils-demo-example1":{component:a.memo(a.lazy(function(){return n.e(433).then(n.bind(n,76176))})),asset:{type:"BLOCK",id:"src-utils-demo-example1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(65893).Z},antd:{type:"NPM",value:"3.26.20"},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.30"}},entry:"index.tsx"},context:{antd:n(96303),react:n(67294),"suid-supplement":n(83194)},renderOpts:{compile:function(){var o=i()(s()().mark(function m(){var u,p=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return e.abrupt("return",(u=e.sent).default.apply(u,p));case 3:case"end":return e.stop()}},m)}));function r(){return o.apply(this,arguments)}return r}()}}}},49826:function(d,t,n){n.r(t),n.d(t,{texts:function(){return l}});const l=[{value:"\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B",paraId:0,tocIndex:1},{value:"\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u63CF\u8FF0",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"channelName",paraId:1,tocIndex:2},{value:"\u9891\u9053\u540D\u79F0\uFF08\u5FC5\u4F20\uFF09",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"undefined",paraId:1,tocIndex:2},{value:"onMessage",paraId:1,tocIndex:2},{value:"\u63A5\u6536\u5230\u9891\u9053\u6D88\u606F\u7684\u56DE\u6389",paraId:1,tocIndex:2},{value:"function",paraId:1,tocIndex:2},{value:"undefined",paraId:1,tocIndex:2}]},67202:function(d,t){t.Z=`import { Button } from 'antd';
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
`},65893:function(d,t){t.Z=`import { Button } from 'antd';
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
