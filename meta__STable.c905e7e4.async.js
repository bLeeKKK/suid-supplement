"use strict";(self.webpackChunksuid_supplement=self.webpackChunksuid_supplement||[]).push([[329],{12527:function(l,n,e){var t;e.r(n),e.d(n,{demos:function(){return i}});var d=e(17061),u=e.n(d),o=e(17156),p=e.n(o),s=e(67294),c=e(19867),m=e(92036),_=e(92758),i={"stable-demo-example":{component:s.memo(s.lazy(function(){return e.e(638).then(e.bind(e,19809))})),asset:{type:"BLOCK",id:"stable-demo-example",refAtomIds:["STable"],dependencies:{"index.tsx":{type:"FILE",value:e(34814).Z},axios:{type:"NPM",value:"1.7.9"},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.63"}},entry:"index.tsx"},context:{axios:m,react:t||(t=e.t(s,2)),"suid-supplement":_},renderOpts:{compile:function(){var I=p()(u()().mark(function x(){var r,E=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,E));case 3:case"end":return a.stop()}},x)}));function v(){return I.apply(this,arguments)}return v}()}}}},38093:function(l,n,e){e.r(n),e.d(n,{texts:function(){return d}});var t=e(19867);const d=[{value:"\u4F7F\u7528 antd@3 \u7684 SModal \u7EC4\u4EF6\u5C01\u88C5\u7684\u4E0A\u4F20\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u652F\u6301",paraId:1,tocIndex:0},{value:"antd3:Upload",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5C5E\u6027",paraId:2},{value:"\u63CF\u8FF0",paraId:2},{value:"\u7C7B\u578B",paraId:2},{value:"\u9ED8\u8BA4\u503C",paraId:2},{value:"xxx",paraId:2},{value:"xxx",paraId:2},{value:"'file'",paraId:2},{value:"\u3001",paraId:2},{value:"'btn'",paraId:2},{value:"file",paraId:2}]},34814:function(l,n){n.Z=`import axios from 'axios';
import React from 'react';
import { STable } from 'suid-supplement';

const getList = async (...p: any) => {
  const { data } = await axios.post(\`/api/list\`, {
    params: p,
  });

  return data.data;
};

export default () => {
  return (
    <STable
      request={getList}
      // useFixedHeader
      columns={[
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 50,
          optional: false,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 50,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          width: 100,
        },
        // {
        //   title: 'email',
        //   dataIndex: 'email',
        //   width: 100,
        // },
        // {
        //   title: 'date',
        //   dataIndex: 'date',
        // },
        // {
        //   title: 'logo',
        //   dataIndex: 'logo',
        // },
        // {
        //   title: 'color',
        //   dataIndex: 'color',
        // },
      ]}
    />
  );
};
`}}]);
