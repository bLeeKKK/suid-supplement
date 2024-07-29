(self.webpackChunksuid_supplement=self.webpackChunksuid_supplement||[]).push([[329],{12527:function(d,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return i}});var s=n(17061),a=n.n(s),o=n(17156),r=n.n(o),u=n(67294),c=n(19867),i={"stable-demo-example":{component:u.memo(u.lazy(function(){return Promise.all([n.e(683),n.e(638)]).then(n.bind(n,19809))})),asset:{type:"BLOCK",id:"stable-demo-example",refAtomIds:["STable"],dependencies:{"index.tsx":{type:"FILE",value:n(34814).Z},axios:{type:"NPM",value:"1.7.2"},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.52"}},entry:"index.tsx"},context:{axios:n(82233),react:n(67294),"suid-supplement":n(92758)},renderOpts:{compile:function(){var m=r()(a()().mark(function _(){var l,I=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(335).then(n.bind(n,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,I));case 3:case"end":return t.stop()}},_)}));function p(){return m.apply(this,arguments)}return p}()}}}},38093:function(d,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return a}});var s=n(19867);const a=[{value:"\u4F7F\u7528 antd@3 \u7684 SModal \u7EC4\u4EF6\u5C01\u88C5\u7684\u4E0A\u4F20\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u652F\u6301",paraId:1,tocIndex:0},{value:"antd3:Upload",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5C5E\u6027",paraId:2},{value:"\u63CF\u8FF0",paraId:2},{value:"\u7C7B\u578B",paraId:2},{value:"\u9ED8\u8BA4\u503C",paraId:2},{value:"xxx",paraId:2},{value:"xxx",paraId:2},{value:"'file'",paraId:2},{value:"\u3001",paraId:2},{value:"'btn'",paraId:2},{value:"file",paraId:2}]},34814:function(d,e){"use strict";e.Z=`import axios from 'axios';
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
`},35338:function(){},48147:function(){},61793:function(){},70621:function(){},24654:function(){},52361:function(){},94616:function(){}}]);
