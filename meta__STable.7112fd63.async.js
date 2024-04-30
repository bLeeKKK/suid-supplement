"use strict";(self.webpackChunksuid_supplement=self.webpackChunksuid_supplement||[]).push([[329],{3008:function(d,e,n){n.r(e),n.d(e,{demos:function(){return p}});var t=n(17061),s=n.n(t),o=n(17156),r=n.n(o),l=n(67294),p={"stable-demo-example":{component:l.memo(l.lazy(function(){return n.e(638).then(n.bind(n,78516))})),asset:{type:"BLOCK",id:"stable-demo-example",refAtomIds:["STable"],dependencies:{"index.tsx":{type:"FILE",value:n(34814).Z},axios:{type:"NPM",value:"0.27.2"},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.30"}},entry:"index.tsx"},context:{axios:n(9669),react:n(67294),"suid-supplement":n(83194)},renderOpts:{compile:function(){var m=r()(s()().mark(function I(){var u,v=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(335).then(n.bind(n,37335));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,v));case 3:case"end":return a.stop()}},I)}));function i(){return m.apply(this,arguments)}return i}()}}}},26948:function(d,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u4F7F\u7528 antd@3 \u7684 SModal \u7EC4\u4EF6\u5C01\u88C5\u7684\u4E0A\u4F20\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u652F\u6301",paraId:1,tocIndex:0},{value:"antd3:Upload",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5C5E\u6027",paraId:2},{value:"\u63CF\u8FF0",paraId:2},{value:"\u7C7B\u578B",paraId:2},{value:"\u9ED8\u8BA4\u503C",paraId:2},{value:"xxx",paraId:2},{value:"xxx",paraId:2},{value:"'file'",paraId:2},{value:"\u3001",paraId:2},{value:"'btn'",paraId:2},{value:"file",paraId:2}]},34814:function(d,e){e.Z=`import axios from 'axios';
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
