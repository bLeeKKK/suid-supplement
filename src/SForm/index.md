# SForm

基于 antd3 的表单

<code src='./Example1'></code>

## API

### SForm

更多参考 [antd3Form](https://3x.ant.design/components/form-cn/)
| 属性 | 描述 | 类型 | 默认值 |
| ------------------- | ------------------------ | --------------------------------- | ----------- |
| onFieldsChange | 监听字段状态变化 | Function(changedFields, props) | `undefined` |
| onValuesChange | 监听字段变化 | Function(changedFields, props) | `undefined` |
| form | 表单。可以传入，也可以不传将自己生成 | `Form` | |
| basicSpan | 表单项在表单中的默认布局 span 占用 | 0-24 | 8 |
| rowProps | 表单布局 Row 的属性值 | `Object` | {} |
| justShow | 每个表单项是否使用展示模式。他的优先级低于`FormItemField`组件上的`show`。且当它开启时会自动默认打开`FormItemField`上的`hideMb8px`, 优先级也低 | `boolean` | false |
| formLayout | 每个表单项目中 label 和 wrapper 的默认布局 | `{ labelCol: ColProps, wrapperCol: ColProps }` | |
| onFinish | 调用`form.finish()`执行的函数。finish 是组件扩展到 form 上的 | `(values, types) => {}` | |
| initialValues | 表单默认的初始值，它的优先级大于吧`FormItemField`上的`initialValue` | `(values, types) => {}` | |
