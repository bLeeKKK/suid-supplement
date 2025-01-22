"use strict";(self.webpackChunksuid_supplement=self.webpackChunksuid_supplement||[]).push([[88],{88586:function(d,n,e){var u;e.r(n),e.d(n,{demos:function(){return i}});var s=e(17061),r=e.n(s),l=e(17156),p=e.n(l),a=e(67294),c=e(61998),m=e(96303),_=e(92758),i={"saffix-demo-example1":{component:a.memo(a.lazy(function(){return e.e(96).then(e.bind(e,47799))})),asset:{type:"BLOCK",id:"saffix-demo-example1",refAtomIds:["SAffix"],dependencies:{"index.jsx":{type:"FILE",value:e(934).Z},antd:{type:"NPM",value:"3.26.20"},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.63"}},entry:"index.jsx"},context:{antd:m,react:u||(u=e.t(a,2)),"suid-supplement":_},renderOpts:{compile:function(){var f=p()(r()().mark(function E(){var o,h=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(764),e.e(335)]).then(e.bind(e,37335));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,h));case 3:case"end":return t.stop()}},E)}));function v(){return f.apply(this,arguments)}return v}()}}}},72927:function(d,n,e){e.r(n),e.d(n,{texts:function(){return s}});var u=e(61998);const s=[{value:"\u57FA\u4E8E antd3 \u7684 Affix",paraId:0,tocIndex:0},{value:"\u66F4\u591A\u53C2\u8003 ",paraId:1},{value:"antd3.Affix",paraId:1},{value:"\u5C5E\u6027",paraId:2},{value:"\u63CF\u8FF0",paraId:2},{value:"\u7C7B\u578B",paraId:2},{value:"\u9ED8\u8BA4\u503C",paraId:2},{value:"scope",paraId:2},{value:"dom",paraId:2},{value:"\u4F20\u5982\u4E00\u4E2A dom \u5F53\uFF0C\u8BE5\u5143\u7D20\u4E0D\u5728\u53EF\u89C6\u7A97\u53E3\u65F6\u9690\u85CF\u6389\u56FE\u9489",paraId:2},{value:"`dom",paraId:2}]},934:function(d,n){n.Z=`import { Button } from 'antd';
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
