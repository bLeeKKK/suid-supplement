# SFormBox 表单

基于 antd3 的表单

### SFormBox 表单

<code src='./example'></code>

| 属性             | 描述                                                                                              | 类型                           | 默认值                 |
| ---------------- | ------------------------------------------------------------------------------------------------- | ------------------------------ | ---------------------- |
| form             | 表单。可以传入，也可以不传将自己生成                                                              | `Form`                         | form                   |
| labelCol         | label 在表单项目中所占比例一共 24                                                                 | `Col` Props                    | `{ span: 8 }`          |
| wrapperCol       | wrapper 在表单项目中所占比例一共 24                                                               | `Col` Props                    | `{ span: 16 }`         |
| justShow         | 整个表单是否进入展示模式                                                                          | `Boolean`                      | `false`                |
| initialValues    | 表单初始值，设置了`initialValues`表单项上的`initialValue`将会失效                                 | `Object`                       | `undefined`            |
| onFinish         | 触发表单提交的回调函数。当`onFinish`返回一个`Promise`对象时可以，自动触发表单的加载效果           | `Function`                     | `(values, typs) => {}` |
| loading          | 表单加载状态。联动处理了表单的`disabled`，优先级要小于直接设置的`disabled`                        | `Boolean`                      | `undefined`            |
| disabled         | 禁用表单的所有项目，优先级小于在表单项上设置                                                      | `Boolean`                      | `undefined`            |
| itemPropsDefault | 给所有表单项目设置一些属性的初始值                                                                | `Object`                       | `undefined`            |
| noFormWrap       | 不使用 `<Form></Form>`标签包裹，开启后所有 antd3 中的 Form 属性将失效                             | `Boolean`                      | `false`                |
| omitNil          | 会自动清空 null 和 undefined 的数数据，如果你约定了 nil 代表某种数据，可以设置为 false 关闭此功能 | `Boolean`                      | `true`                 |
| onValuesChange   | 监听字段变化(不传入 form 时生效，传入就自己在 Form.create 的时候写)                               | Function(changedFields, props) | `undefined`            |
| onFieldsChange   | 监听字段变化(不传入 form 时生效，传入就自己在 Form.create 的时候写)                               | Function(changedFields, props) | `undefined`            |

### SForm 表单含布局

结合了 SFormBox 表单和 SRow 的布局
这两个组件的属性都可以通过去 SForm 传入

<code src='./example-form'></code>

### SForm

更多参考 [antd3.Form](https://3x.ant.design/components/form-cn/)
| 属性 | 描述 | 类型 | 默认值 |
| ------------------- | ------------------------ | --------------------------------- | ----------- |
| formButtons | 表单提交按钮。配置对象、接受函数、按钮数组 | `{ resetButtonProps: ButtonProps, okButtonProps: ButtonProps }` \| `({reset, submit, loading, form, ...props}) => ReactDom` \| `Button[]` | `undefined` |
