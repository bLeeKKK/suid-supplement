"use strict";(self.webpackChunksuid_supplement=self.webpackChunksuid_supplement||[]).push([[623],{70951:function(T,C,a){a.r(C);var B=a(861),g=a.n(B),y=a(27424),E=a.n(y),P=a(17061),n=a.n(P),m=a(17156),A=a.n(m),D=a(3836),p=a(59314),d=a(88961),k=a(54683),e=a(67294),u=a(92758),o=function(){var s=A()(n()().mark(function _(h,F,b){var v,x;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,k.Z.get("/api/dict",{params:{dictCode:h,count:F,filters:b}});case 2:return v=i.sent,x=v.data,i.abrupt("return",x.data.map(function(R){return{value:R.dataValue,label:R.dataName}}));case 5:case"end":return i.stop()}},_)}));return function(h,F,b){return s.apply(this,arguments)}}(),r=function(){var _=(0,u.useWatch)(["description"]);return console.log(_,"watch1"),e.createElement(e.Fragment,null,"watch")};C.default=D.Z.create()(function(s){var _=s.form,h=e.useState(!1),F=E()(h,2),b=F[0],v=F[1],x=e.useState(0),O=E()(x,2),i=O[0],R=O[1],I=e.useState(!1),M=E()(I,2),S=M[0],W=M[1],f=e.useRef(),U=(0,u.useWatch)(["userName1"],_);return console.log(U,"watch2"),e.createElement(e.Fragment,null,e.createElement(p.Z,{checked:S,onChange:function(){return W(function(t){return!t})}}),e.createElement(d.Z,{onClick:function(){return console.log(f)}},"\u83B7\u53D6Ref"),e.createElement(d.Z,{onClick:function(){return v(function(t){return!t})}},"\u8FFD\u52A0\u8F93\u5165\u6846"),e.createElement("hr",null),e.createElement(u.SForm,{form:_,justShow:S,basicSpan:12,formButtons:!S,onFinish:function(t){return new Promise(function(c){setTimeout(function(){console.log(t),c()},2e3)})},ref:f},e.createElement(r,null),b&&e.createElement(u.ColFormInput,{label:"\u8FFD\u52A0Input",name:"addInput"}),e.createElement(u.ColFormTextArea,{label:"\u63CF\u8FF0",span:24,flexSpan:!0,name:"description",initialValue:"\u8FD9\u662F\u63CF\u8FF0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]}),e.createElement(u.ColFormInput,{label:"\u7528\u6237\u540D1",name:"userName1",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],initialValue:"\u674E\u56DB"}),e.createElement(u.ColFormSearch,{placeholder:"\u641C\u7D22\u9879\u3001\u641C\u7D22\u9879\u3001\u641C\u7D22\u9879",label:"\u641C\u7D22",flexSpan:!0,span:24,name:"searchVal",type:"search",onSearch:console.log,shortcutKey:!0,filedOptions:{hidden:!0}}),e.createElement(u.ColFormSelect,{span:16,flexSpan:!0,mode:"multiple",options:[{label:"Apple",value:"apple"},{label:"Pear",value:"pear"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"}],noWrap:!0,initialValue:["apple","pear","xxxx"],label:"\u7528\u6237",name:"typeCode3",extra:"\u8FD9\u91CC\u662F\u989D\u5916\u8BF4\u660E",storeOption:{defaultPageSize:5,refreshDeps:[i]}}),e.createElement(u.ColFormInput,{tip:"\u8FD9\u91CC\u662F\u3010\u7528\u6237\u540D\u3011\u7684\u8BF4\u660E\u63D0\u793A",filedTip:"\u8FD9\u91CC\u662F\u3010\u7528\u6237\u540D\u3011\u7684\u8BF4\u660E\u63D0\u793A XXXXX X XXXXXXX",label:"\u7528\u6237\u540D",overflowShowTip:!1,name:"user.userName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],initialValue:"\u674E\u56DB"}),e.createElement(u.ColFormInput,{tip:"\u8FD9\u91CC\u662F\u3010\u7528\u6237\u540D\u3011\u7684\u8BF4\u660E\u63D0\u793A",filedTip:{title:"\u8FD9\u91CC\u662F\u3010\u7528\u6237\u540D\u3011\u7684\u8BF4\u660E\u63D0\u793A2 ",placement:"bottom"},label:"\u7528\u6237\u540D",name:"userName",initialValue:"\u674E\u56DB"}),e.createElement(u.ColFormInput,{label:"\u7535\u8BDD",name:"user.phone",initialValue:"123",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7535\u8BDD"}]}),e.createElement(u.ColFormInput,{label:"\u7535\u8BDD\u9690\u85CF",name:"phoneHide",span:0}),e.createElement(u.ColFormInput,{label:"\u5730\u5740\u9009\u62E9",flexSpan:!0,name:"address1",initialValue:["110000","110101"]}),e.createElement(u.ColFormInput,{label:"\u5730\u5740",name:"address"}),e.createElement(u.ColFormInputNumber,{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u91D1\u989D"}],label:"\u91D1\u989D",name:"money",type:"number",initialValue:100}),e.createElement(u.ColFormSelect,{label:"\u7528\u6237\u7C7B\u578B1",name:"typeCode1",store:function(){return o("ocmcUserType")},initialValue:"personal_zh-CN",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u7C7B\u578B"}],onChange:function(){var t;(t=console).log.apply(t,arguments)}}),e.createElement(u.ColFormSelect,{label:"\u7528\u6237\u7C7B\u578B2",name:"typeCode2",store:function(t){var c=t.filters;return o("ocmcUserType",i,c)},storeOption:{refreshDeps:[i]},initialValue:["personal_zh-CN"],noWrap:!0,searchForStore:!0},function(l,t){return[].concat(g()(l),[{label:"\u8FFD\u52A0\u7684\u6570\u636E",value:"xxx"}]).map(function(c){return e.createElement(t,{key:c.value},c.label)})}),e.createElement(u.ColFormTimePicker,{label:"\u65F6\u95F4\u9009\u62E9",name:"time"}),e.createElement(u.ColFormDatePicker,{label:"\u65E5\u671F\u9009\u62E9",name:"date"}),e.createElement(u.ColFormRangePicker,{label:"\u65F6\u95F4\u6BB5\u9009\u62E9",name:"dateRange"}),e.createElement(u.ColFormMonthPicker,{label:"\u6708\u4EFD\u9009\u62E9",name:"dateMounth"}),e.createElement(u.ColFormWeekPicker,{label:"\u5468\u9009\u62E9",name:"dateWeek"}),e.createElement(u.ColFormCheckbox,{label:"\u590D\u9009\u6846",name:"checkbox"}),e.createElement(u.ColFormCheckboxGroup,{filedTip:"\u8FD9\u91CC\u662F\u3010\u7528\u6237\u540D\u3011\u7684\u8BF4\u660E\u63D0\u793A XXXXX X XXXXXXX",label:"\u590D\u9009\u6846(\u5B50\u9879)",name:"checkboxGroup"},e.createElement(u.SCheckbox,{value:"xxx"},"xxx"),e.createElement(u.SCheckbox,{value:"yyy"},"yyy"),e.createElement(u.SCheckbox,{value:"zzz"},"zzz"),e.createElement(u.SCheckbox,{value:"aaa"},"aaa")),e.createElement(u.ColFormCheckboxGroup,{label:"\u590D\u9009\u6846(\u914D\u7F6E)",name:"checkboxGroup2",options:["Apple","Pear","Orange"]}),e.createElement(u.ColFormCheckboxGroup,{label:"\u590D\u9009\u6846(\u914D\u7F6E)",name:"checkboxGroup3",options:[{label:"Apple",value:"apple"},{label:"Pear",value:"pear"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"}]}),e.createElement(u.ColFormTimePicker,{label:"\u65F6\u95F4\u9009\u62E9",name:"time"}),e.createElement(u.ColFormCheckboxGroup,{label:"\u590D\u9009\u6846(\u914D\u7F6E-\u8BF7\u6C42)",name:"checkboxGroup4",store:function(){return o("ocmcUserType")}}),e.createElement(u.ColFormCheckboxGroup,{label:"\u590D\u9009\u6846(\u5B50\u9879-\u8BF7\u6C42)",name:"checkboxGroup5",store:function(){return o("ocmcUserType")}},function(l){return e.createElement(e.Fragment,null,l.map(function(t){return e.createElement(u.SCheckbox,{key:t.value,value:t.value},t.label)}),e.createElement(u.SCheckbox,{value:"xxx"},"xxx"),e.createElement(u.SCheckbox,{value:"yyy"},"yyy"))}),e.createElement(u.ColFormRadioGroup,{label:"\u590D\u9009\u6846(\u914D\u7F6E-\u8BF7\u6C42)",name:"radioGroup4",store:function(){return o("ocmcUserType")}},function(l){return e.createElement(e.Fragment,null,l.map(function(t){return e.createElement(u.SRadio,{key:t.value,value:t.value},t.label)}),e.createElement(u.SRadio,{value:"xxx"},"xxx"),e.createElement(u.SRadio,{value:"yyy"},"yyy"))}),e.createElement(u.ColFormSwitch,{label:"\u590D\u9009\u6846(\u914D\u7F6E-\u8BF7\u6C42)",name:"switch4"}),e.createElement(u.SRow.SCol,{style:{marginBottom:"8px"},span:24},e.createElement(u.SFormBox.Consumer,null,function(l){var t=l.form,c=l.loading;return e.createElement(d.Z,{onClick:function(){return t.finish()},loading:c},"\u5185\u90E8\u81EA\u5B9A\u4E49\u6309\u94AE(\u80FD\u83B7\u53D6\u72B6\u6001)")}))),e.createElement(u.ActionBtn,{onClick:function(){var t,c;return f==null||(t=f.current)===null||t===void 0||(c=t.finish)===null||c===void 0?void 0:c.call(t)}},"\u81EA\u5B9A\u4E49\u63D0\u4EA42"))})},94267:function(T,C,a){a.r(C);var B=a(27424),g=a.n(B),y=a(90105),E=a(88961),P=a(59314),n=a(67294),m=a(92758),A=function(){var p=(0,m.useWatch)(["namexxx"]);return console.log(p),n.createElement(m.FormInput,{label:"\u7528\u6237",name:"namexxx",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],initialValue:"\u674E\u56DBxxx"})};C.default=function(){var D=n.useState(!1),p=g()(D,2),d=p[0],k=p[1],e=(0,y.Z)(),u=n.useRef();return n.createElement(n.Fragment,null,n.createElement(m.FormInput,{name:"xxx",label:"xxx"}),n.createElement(E.Z,{onClick:e},"\u91CD\u65B0\u6E32\u67D3\u7236\u7EC4\u4EF6"),n.createElement(P.Z,{checked:d,onChange:function(){return k(function(r){return!r})}}),n.createElement(E.Z,{onClick:function(){return console.log(u)}},"\u83B7\u53D6Ref"),n.createElement("hr",null),n.createElement("div",{className:"flex justify-center"},n.createElement(m.SFormBox,{style:{width:"500px"},justShow:d,onFinish:function(r){return new Promise(function(s){setTimeout(function(){console.log(r),s()},2e3)})},ref:u},n.createElement(A,null),n.createElement(m.FormBoxDependency,{nameList:["age3"]},function(o){var r=o.age3;return r?n.createElement(m.FormTextArea,{disabled:!1,label:"\u63CF\u8FF0",name:"des",initialValue:"\u8FD9\u662F\u63CF\u8FF0",errInline:!0,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]}):null}),n.createElement(m.FormBoxDependency,{nameList:["userFormbox"]},function(o){var r=o.userFormbox;return r?n.createElement(n.Fragment,null,n.createElement(m.FormInput,{initialValue:1,label:"\u5E74\u9F843",name:"age3"})):null}),n.createElement(m.FormInput,{label:"\u7528\u6237",name:"userFormbox",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],initialValue:"\u674E\u56DB"}),n.createElement(m.FormInput,{label:"\u5E74\u9F84",name:"age",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5E74\u9F84"}],initialValue:18,transform:function(r){return"".concat(r,"\u5C81")}}),n.createElement(m.SRow,{type:"flex",justify:"center"},n.createElement(m.SRow.SCol,{className:"mb-2 flex justify-center",span:8},n.createElement(m.SFormBox.Consumer,null,function(o){var r=o.form,s=o.loading;return[n.createElement(E.Z,{key:"reset",className:"mr-2",onClick:function(){r.resetFields()},loading:s},"\u91CD\u7F6E"),n.createElement(E.Z,{key:"submit",type:"primary",onClick:function(){r.finish()},loading:s},"\u5185\u90E8\u6309\u94AE")]}))))),n.createElement(m.ActionBtn,{onClick:function(){var r,s;return u==null||(r=u.current)===null||r===void 0||(s=r.finish)===null||s===void 0?void 0:s.call(r)}},"\u81EA\u5B9A\u4E49\u63D0\u4EA42"))}}}]);