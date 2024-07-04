"use strict";(self.webpackChunksuid_supplement=self.webpackChunksuid_supplement||[]).push([[215],{8898:function(l,t,n){n.r(t),n.d(t,{demos:function(){return f}});var i=n(17061),o=n.n(i),c=n(17156),p=n.n(c),s=n(67294),M=n(63511),f={"smodal-demo-example":{component:s.memo(s.lazy(function(){return n.e(935).then(n.bind(n,44663))})),asset:{type:"BLOCK",id:"smodal-demo-example",refAtomIds:["SModal"],dependencies:{"index.tsx":{type:"FILE",value:n(65478).Z},antd:{type:"NPM",value:"3.26.20"},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.50"}},entry:"index.tsx"},context:{antd:n(96303),react:n(67294),"suid-supplement":n(30232)},renderOpts:{compile:function(){var r=p()(o()().mark(function d(){var a,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,m));case 3:case"end":return e.stop()}},d)}));function u(){return r.apply(this,arguments)}return u}()}},"smodal-demo-example1":{component:s.memo(s.lazy(function(){return n.e(935).then(n.bind(n,1504))})),asset:{type:"BLOCK",id:"smodal-demo-example1",refAtomIds:["SModal"],dependencies:{"index.tsx":{type:"FILE",value:n(37713).Z},antd:{type:"NPM",value:"3.26.20"},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.50"}},entry:"index.tsx"},context:{antd:n(96303),react:n(67294),"suid-supplement":n(30232)},renderOpts:{compile:function(){var r=p()(o()().mark(function d(){var a,m=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,m));case 3:case"end":return e.stop()}},d)}));function u(){return r.apply(this,arguments)}return u}()}}}},44598:function(l,t,n){n.r(t),n.d(t,{texts:function(){return o}});var i=n(63511);const o=[{value:"\u4F7F\u7528 antd@3 \u7684 SModal \u7EC4\u4EF6\u5C01\u88C5\u7684\u4E0A\u4F20\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u652F\u6301",paraId:1,tocIndex:0},{value:"antd3:Modal",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5C5E\u6027",paraId:2},{value:"\u63CF\u8FF0",paraId:2},{value:"\u7C7B\u578B",paraId:2},{value:"\u9ED8\u8BA4\u503C",paraId:2},{value:"xxx",paraId:2},{value:"xxx",paraId:2},{value:"'file'",paraId:2},{value:"\u3001",paraId:2},{value:"'btn'",paraId:2},{value:"file",paraId:2}]},65478:function(l,t){t.Z=`import { Button } from 'antd';
import React, { useRef } from 'react';
import {
  BtnsBox,
  ColFormInput,
  ColFormInputNumber,
  SFormBox,
  SModal,
  SRow,
} from 'suid-supplement';

export default () => {
  const formRef = useRef<any>();
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(true)}>Open Modal</Button>
      <SFormBox
        ref={formRef}
        onFinish={() => {
          const p = new Promise((r) => {
            setTimeout(r, 2000);
          });
          return p;
        }}
      >
        <SFormBox.Consumer>
          {({ loading, form }: any) => (
            <SModal
              visible={visible}
              title="\u8868\u5355"
              onCancel={() => setVisible(false)}
              footer={
                <BtnsBox
                  limt="3"
                  btnArr={[
                    {
                      title: '\u91CD\u7F6E',
                      // tip: '\u70B9\u51FB\u540E\u91CD\u7F6E\u8868\u5355',
                      disabled: loading,
                      onClick: () => {
                        return form.resetFields();
                      },
                    },
                    {
                      title: '\u4FDD\u5B58',
                      // tip: '\u70B9\u51FB\u540E\u4FDD\u5B58\u6570\u636E',
                      type: 'primary',
                      // icon: 'file-search',
                      onClick: () => {
                        return form.finish();
                      },
                    },
                  ]}
                />
              }
            >
              <SRow basicSpan={12}>
                <ColFormInput
                  label="\u7528\u6237\u540D"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
                    },
                  ]}
                  initialValue="\u674E\u56DB"
                />
                <ColFormInputNumber label="\u5E74\u9F84" name="age" />
              </SRow>
            </SModal>
          )}
        </SFormBox.Consumer>
      </SFormBox>
    </div>
  );
};
`},37713:function(l,t){t.Z=`import { Button } from 'antd';
import React, { useState } from 'react';
import {
  ColFormInput,
  SForm,
  SModal,
  createModalMount,
  useComponentModal,
  useModalMount,
} from 'suid-supplement';
// import ReactDOM from 'react-dom';

const FormModal = ({
  visible,
  data,
  setData,
  setVisible,
  afterClose,
  ...props
}: any) => {
  return (
    <SModal
      visible={visible}
      onCancel={() => setVisible(false)}
      // \u5173\u95ED\u540E\u7684\u56DE\u8C03\uFF0C\u8BF7\u8C03\u7528\u9500\u6BC1\u6CA1\u7528\u7684\u5F39\u7A97
      afterClose={afterClose}
      title="\u8868\u5355"
      onOk={() => {
        const p = new Promise((r) => {
          setTimeout(r, 2000);
        });
        return p;
      }}
      {...props}
    >
      <Button onClick={() => setData && setData({ name: 888 })}>
        \u5207\u6362\u72B6\u6001
      </Button>
      {JSON.stringify(data ? data : {})}
      <SForm initialValues={data}>
        <ColFormInput name="name" />
      </SForm>
    </SModal>
  );
};

const { show } = createModalMount(FormModal);

export default () => {
  const [show1, ref] = useModalMount(FormModal, {
    renderSave: true,
  });
  const [data, setData] = useState({
    name: 999,
  });

  // \u5E9F\u5F03\uFF0C\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528\u3002\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528
  const { modalCounter: app, show: show2 } = useComponentModal(FormModal, {
    data,
    setData,
  });

  return (
    <div>
      <Button onClick={() => console.log(ref)} className="mr-2">
        \u67E5\u770B\u63A7\u5236\u53F0
      </Button>

      <Button onClick={() => show1({ setData, data })} className="mr-2">
        \u547D\u4EE4\u5F39\u6846(hook)
      </Button>

      <Button onClick={show} className="mr-2">
        \u547D\u4EE4\u5F39\u6846(\u4F20\u5165Modal\u7EC4\u4EF6)
      </Button>

      {app}
      <Button onClick={show2} className="mr-2">
        \u547D\u4EE4\u5F39\u6846hook-\u624B\u52A8\u6302\u8F7D-\u4EAB\u53D7React\u4E0A\u4E0B\u6587
      </Button>
    </div>
  );
};
`}}]);
