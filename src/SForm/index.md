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

### ColItemField

| 属性     | 描述                                                                                                                    | 类型                            | 默认值 |
| -------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------ |
| flexSpan | 开启根据整个表单项的 label 和输入框比例，的默认值对齐 label 后的`:`。<br/>注：开启`flexSpan`会自动传入`autoScale`的比例 | `boolean`                       |        |
| span     | 当前项目占用多少 Col                                                                                                    | 0-24                            |        |
| hide     | 使用`display: 'none'`隐藏该项目。<br/>注：开启`hide`后`rules`将会失效                                                   | `boolean`                       |        |
| colProps | 自定义 Col 属性                                                                                                         | `ColProps `                     |        |
| ...props | 剩余属性产考`FormItemField`                                                                                             | [FormItemField](#formitemfield) |        |

### FormItemField

> `form` 可以包裹在 SForm 组件下自动获取，也可以传入。

| 属性            | 描述                                                                                                                                                                                | 类型                                               | 默认值 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------ |
| form            | 表单实例，在 SForm 组件 children 中不必传                                                                                                                                           | Form                                               |        |
| name            | 字段表单项目名                                                                                                                                                                      | string                                             |        |
| type            | 表单类型                                                                                                                                                                            | [type](#type)                                      |        |
| tip             | label 中的字段提示                                                                                                                                                                  | ReactNode                                          |        |
| show            | 是否展示标识                                                                                                                                                                        | `boolean` \| `(form) => Boolean`                   |        |
| filedOptions    | 表单`form.getFieldDecorator`的第二个参数配置项                                                                                                                                      | `Object`                                           | {}     |
| fieldLayout     | 每个表单项目中 label 和 wrapper 的默认布局                                                                                                                                          | `{ labelCol: ColProps, wrapperCol: ColProps }`     |        |
| hideMb8px       | 隐藏 Form.Item 下方的 8px 的 margin                                                                                                                                                 | `boolean`                                          |        |
| autoScale       | label/(label + wapper) \* autoScale = label 所占百分比。一般不使用该参数。开启`ColItemField`的`flexSpan`自动计算就行                                                                |                                                    |        |
| initialValue    | 表单项初始值                                                                                                                                                                        | `any`                                              |        |
| rules           | 表单规则产考 antd3.Form                                                                                                                                                             | []                                                 |        |
| renderCondition | 根据表单上的值，传入一个二维数组或函数，决定是否渲染该表单项目,注意区分`hide`是`display: none`, 这个是控制不渲染。<br/>例：`[['name1', ['张三', '李四'], '&&'], ['name2', '王五']]` | `(form) => boolean`\| `[[name, value, operation]]` |        |

### type

| 属性   | 描述     | 来自                |
| ------ | -------- | ------------------- |
| input  | 文字输入 | [SInput](#sinput)   |
| select | 选择框   | [SSelect](#sselect) |

### SInput

基于[antd3.Input](https://3x.ant.design/components/input-cn/#Input)开发的组件
| 属性 | 描述 | 类型 | 默认值 |
| ------------------- | ------------------------ | --------------------------------- | ----------- |
| show | 是否展示 | `boolean` | false |
| renderForShow | show 为 true 时可以自定义展示 | `({ value: any, form: Form, defaultShow: ReactNode }) => ReactNode` | |
| overflowShowTip | 超出部分省略，并使用提示形式展示 | `boolean` | true |
| form | 出于那个表单，会在展示值渲染函数`renderForShow`被带上 | `Form` | |

### SSelect

基于[antd3.Select](https://3x.ant.design/components/select-cn/)开发的组件
| 属性 | 描述 | 类型 | 默认值 |
| ------------------- | ------------------------ | --------------------------------- | ----------- |
| show | 是否展示。<br/> 注：如果开启了分页模式就不再将展示的`value`转换为看到的`label`。有需要请自行在`renderForShow`中处理 | `boolean` | false |
| renderForShow | show 为 true 时可以自定义展示。 | `({ value: any, form: Form, optionChildren: ReactNode[], arrOptions: option[], defaultShow: ReactNode }) => ReactNode` | |
| overflowShowTip | 超出部分省略，并使用提示形式展示 | `boolean` | true |
| form | 出于那个表单，会在展示值渲染函数`renderForShow`被带上 | `Form` | |
| options | 自定义选项。<br/>注：当`options`传递为数组的时候，将忽略`store`字段 | `Array` \| `(data: store请求返回的数据) => ([])` | |
| store | 网络请求配置项目参考[ahooks3.useAntdTable](https://ahooks.js.org/zh-CN/hooks/use-antd-table)的第一个参数 | `(...args) => Promise<{ total: number; list: any[] } \| any[] > ` | |
| storeOption | 网络请求配置项目参考[ahooks3.useRequest](https://ahooks.js.org/zh-CN/hooks/use-antd-table)的第二个参数<br/>注：分页模式可以在这里开启`paginated: true`，store 请求返回的 data 数据结构需要为{list: Item[], total: number} | `Object` | |
| reader | 如何解析选项(option)对象的值 | `Object` | `{label: 'label',value: 'value'}` |
| children | 在 Option 渲染时进行自定义 Option | `(arrOptions: any[], Option: Select.Option, originOptionsRender: ReactNode) => <Option>ReactNode</Option>` | |
| noWarp | 选中展示值是否做不换行处理 | `boolean` | false |
| searchForStore | 开启搜索框 | `boolean` | false |
| paginated | 开启分页器 | `boolean` | false |
