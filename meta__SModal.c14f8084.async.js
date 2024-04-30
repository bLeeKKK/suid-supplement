"use strict";(self.webpackChunksuid_supplement=self.webpackChunksuid_supplement||[]).push([[215],{12224:function(s,o,n){n.r(o),n.d(o,{demos:function(){return f}});var r=n(17061),a=n.n(r),c=n(17156),p=n.n(c),l=n(67294),f={"smodal-demo-example":{component:l.memo(l.lazy(function(){return n.e(935).then(n.bind(n,59740))})),asset:{type:"BLOCK",id:"smodal-demo-example",refAtomIds:["SModal"],dependencies:{"index.tsx":{type:"FILE",value:n(65478).Z},antd:{type:"NPM",value:"3.26.20"},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.31"}},entry:"index.tsx"},context:{antd:n(96303),react:n(67294),"suid-supplement":n(83194)},renderOpts:{compile:function(){var m=p()(a()().mark(function d(){var t,i=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},d)}));function u(){return m.apply(this,arguments)}return u}()}},"smodal-demo-example1":{component:l.memo(l.lazy(function(){return n.e(935).then(n.bind(n,58038))})),asset:{type:"BLOCK",id:"smodal-demo-example1",refAtomIds:["SModal"],dependencies:{"index.tsx":{type:"FILE",value:n(37713).Z},antd:{type:"NPM",value:"3.26.20"},react:{type:"NPM",value:"16.14.0"},"suid-supplement":{type:"NPM",value:"0.1.31"}},entry:"index.tsx"},context:{antd:n(96303),react:n(67294),"suid-supplement":n(83194)},renderOpts:{compile:function(){var m=p()(a()().mark(function d(){var t,i=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},d)}));function u(){return m.apply(this,arguments)}return u}()}}}},53829:function(s,o,n){n.r(o),n.d(o,{texts:function(){return r}});const r=[{value:"\u4F7F\u7528 antd@3 \u7684 SModal \u7EC4\u4EF6\u5C01\u88C5\u7684\u4E0A\u4F20\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u652F\u6301",paraId:1,tocIndex:0},{value:"antd3:Upload",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5C5E\u6027",paraId:2},{value:"\u63CF\u8FF0",paraId:2},{value:"\u7C7B\u578B",paraId:2},{value:"\u9ED8\u8BA4\u503C",paraId:2},{value:"xxx",paraId:2},{value:"xxx",paraId:2},{value:"'file'",paraId:2},{value:"\u3001",paraId:2},{value:"'btn'",paraId:2},{value:"file",paraId:2}]},65478:function(s,o){o.Z=`import { Button } from 'antd';
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
`},37713:function(s,o){o.Z=`import { Button } from 'antd';
import React from 'react';
import {
  ColFormInput,
  ColFormSelect,
  SFormBox,
  SModal,
  SRow,
  createModalMount,
  useModalMount,
} from 'suid-supplement';
// import ReactDOM from 'react-dom';

const FormModal = ({ visible, setVisible, afterClose, ...props }: any) => {
  console.log(visible);
  return (
    <SFormBox
      onFinish={() => {
        const p = new Promise((r) => {
          setTimeout(r, 2000);
        });
        return p;
      }}
    >
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
        <SRow basicSpan={12}>
          <ColFormInput
            label="\u540D"
            name="firstName"
            rules={[
              {
                required: true,
                message: '\u8BF7\u8F93\u5165\u540D',
              },
            ]}
          />
          <ColFormInput
            label="\u59D3"
            name="lastName"
            rules={[
              {
                required: true,
                message: '\u8BF7\u8F93\u5165\u59D3',
              },
            ]}
          />
          <div className="title-box">\u57FA\u672C\u4FE1\u606F</div>
          <ColFormInput
            label="\u7535\u8BDD1"
            name="phone"
            rules={[
              {
                required: true,
                message: '\u8BF7\u8F93\u5165\u7535\u8BDD',
              },
            ]}
          />
          <ColFormInput label="\u7535\u8BDD2" name="phoneBak" />
          <ColFormSelect label="\u7528\u6237\u7C7B\u578B" name="typeCode" allowClear />
          {/* <ColFormEditFile /> */}
          <ColFormInput span={0} name="typeName" />
          <ColFormInput label="\u7528\u6237\u90AE\u7BB1" name="mail" />
          <ColFormInput label="\u529E\u516C\u7535\u8BDD" name="companyPhone" />
          <ColFormInput label="\u516C\u53F8\u540D\u79F0" name="companyName" />
          <ColFormInput label="\u516C\u53F8\u90AE\u7BB1" name="companyMail" />
          <ColFormInput label="\u516C\u53F8\u5730\u5740" name="companyAddress" />
          <div className="title-box">\u5730\u5740</div>
          <ColFormInput label="\u8BE6\u7EC6\u5730\u5740" name="address" />
          {/* <ColFormAddress */}
          {/*   label="\u5730\u5740\u7EA7\u522B" */}
          {/*   name="addressLevel" */}
          {/*   onChange={(_, values, f) => { */}
          {/*     f.setFieldsValue({ */}
          {/*       addressLevelName: values.map((item) => item.name), */}
          {/*     }); */}
          {/*   }} */}
          {/* /> */}
          <ColFormInput label="\u5730\u5740\u7EA7\u522B\u540D\u79F0" name="addressLevelName" />
          {/* <ColFormEditFile */}
          {/*   flexSpan */}
          {/*   span={24} */}
          {/*   label="antd\u6587\u4EF6\u4E0A\u4F20" */}
          {/*   name="upload" */}
          {/* /> */}
          {/* <ColFormAntdUpload */}
          {/*   flexSpan */}
          {/*   span={24} */}
          {/*   label="\u6587\u4EF6\u4E0A\u4F20" */}
          {/*   name="upload" */}
          {/* /> */}
        </SRow>
      </SModal>
    </SFormBox>
  );
};

// const Content = () => {
//   return <div>\u8FD9\u662F\u4E00\u4E2A\u547D\u4EE4\u5F39\u68462</div>;
// };

const { show } = createModalMount(FormModal);
// const { show: show1 } = createModalMount({
//   title: '\u547D\u4EE4\u5F39\u6846',
//   // \u5982\u679C\u4F20\u5165\u7684\u4E0D\u662F\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528Modal.confirm
//   Content: Content,
//   onOk: () => {
//     const p = new Promise((r) => {
//       setTimeout(r, 2000);
//     });
//     return p;
//   },
//   extendProps: console.log,
// });

export default () => {
  const [show1, ref] = useModalMount(FormModal, { renderSave: true });
  const [show2, ref2, MyModal] = useModalMount(FormModal, {
    // \u5F00\u542FmanualOperation\u540ErenderSave\u5C06\u5931\u6548\uFF0C\u56E0\u4E3A\u4F60\u53EF\u4EE5\u81EA\u5DF1\u5904\u7406\u6A21\u6001\u6846\u653E\u5230\u54EA\u91CC\u4E86\u3002
    manualOperation: true,
  });

  return (
    <div>
      <Button onClick={() => console.log(ref, ref2)} className="mr-2">
        \u67E5\u770B\u63A7\u5236\u53F0
      </Button>

      <MyModal />
      <Button onClick={show2} className="mr-2">
        \u547D\u4EE4\u5F39\u6846(hook-\u624B\u52A8\u6302\u8F7D-\u4EAB\u53D7React\u4E0A\u4E0B\u6587)
      </Button>

      <Button onClick={show1} className="mr-2">
        \u547D\u4EE4\u5F39\u6846(hook)
      </Button>

      <Button
        onClick={async () => {
          const aaa = await show();
          console.log(aaa);
        }}
        className="mr-2"
      >
        \u547D\u4EE4\u5F39\u6846(\u4F20\u5165Modal\u7EC4\u4EF6)
      </Button>
    </div>
  );
};
`}}]);
