"use strict";(self.webpackChunksuid_supplement=self.webpackChunksuid_supplement||[]).push([[88],{88586:function(s,e,n){n.r(e),n.d(e,{demos:function(){return p}});var d=n(17061),u=n.n(d),r=n(17156),l=n.n(r),a=n(67294),v=n(61998),p={"saffix-demo-example1":{component:a.memo(a.lazy(function(){return n.e(96).then(n.bind(n,47799))})),asset:{type:"BLOCK",id:"saffix-demo-example1",refAtomIds:["SAffix"],dependencies:{"index.jsx":{type:"FILE",value:n(934).Z},antd:{type:"NPM",value:"3.26.20"},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.55"}},entry:"index.jsx"},context:{antd:n(96303),react:n(67294),"suid-supplement":n(92758)},renderOpts:{compile:function(){var m=l()(u()().mark(function f(){var o,_=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,_));case 3:case"end":return t.stop()}},f)}));function i(){return m.apply(this,arguments)}return i}()}}}},72927:function(s,e,n){n.r(e),n.d(e,{texts:function(){return u}});var d=n(61998);const u=[{value:"\u57FA\u4E8E antd3 \u7684 Affix",paraId:0,tocIndex:0},{value:"\u66F4\u591A\u53C2\u8003 ",paraId:1},{value:"antd3.Affix",paraId:1},{value:"\u5C5E\u6027",paraId:2},{value:"\u63CF\u8FF0",paraId:2},{value:"\u7C7B\u578B",paraId:2},{value:"\u9ED8\u8BA4\u503C",paraId:2},{value:"scope",paraId:2},{value:"dom",paraId:2},{value:"\u4F20\u5982\u4E00\u4E2A dom \u5F53\uFF0C\u8BE5\u5143\u7D20\u4E0D\u5728\u53EF\u89C6\u7A97\u53E3\u65F6\u9690\u85CF\u6389\u56FE\u9489",paraId:2},{value:"`dom",paraId:2}]},934:function(s,e){e.Z=`import { Button } from 'antd';
import React, { useRef } from 'react';
import { SAffix } from 'suid-supplement';

export default () => {
  const warp = useRef();

  return (
    <>
      <div
        style={{ width: '100px', height: '1000px', background: 'blue' }}
      ></div>

      <div ref={warp}>
        <div
          style={{ width: '100px', height: '600px', background: 'red' }}
        ></div>
        <SAffix scope={warp} offsetBottom={32}>
          <Button>\u56FE\u9489\u5185\u5BB9\u6709scope</Button>
        </SAffix>
        <SAffix offsetBottom={0}>
          <Button>\u56FE\u9489\u5185\u5BB9\u65E0scope</Button>
        </SAffix>
      </div>
    </>
  );
};
`}}]);
