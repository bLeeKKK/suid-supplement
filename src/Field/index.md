# Field

基于 antd3 的表单项

### SInput

基于[antd3.Input](https://3x.ant.design/components/input-cn/#Input)开发的组件
| 属性 | 描述 | 类型 | 默认值 |
| ------------------- | ------------------------ | --------------------------------- | ----------- |
| show | 是否展示 | `boolean` | false |
| renderForShow | show 为 true 时可以自定义展示 | `({ value: any, form: Form, defaultShow: ReactNode }) => ReactNode` | |
| overflowShowTip | 超出部分省略，并使用提示形式展示 | `boolean` | true |
| form | 如果有表单，会在展示值渲染函数`renderForShow`被带上 | `Form` | |

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

### SCheckbox

基于[antd3.Checkbox](https://3x.ant.design/components/checkbox-cn/)开发的组件
| 属性 | 描述 | 类型 | 默认值 |
| ------------------- | ------------------------ | --------------------------------- | ----------- |
| show | 是否展示。<br/> 注：如果开启了分页模式就不再将展示的`value`转换为看到的`label`。有需要请自行在`renderForShow`中处理 | `boolean` | false |
| renderForShow | show 为 true 时可以自定义展示。 | `({ value: any, form: Form, optionChildren: ReactNode[], arrOptions: option[], defaultShow: ReactNode }) => ReactNode` | |

#### SCheckbox.SCheckboxGroup

> checkbox 组的项目，优先级 children > options > store

基于[antd3.Checkbox Group](https://3x.ant.design/components/checkbox-cn/#Checkbox-Group)开发的组件
| 属性 | 描述 | 类型 | 默认值 |
| ------------------- | ------------------------ | --------------------------------- | ----------- |
| show | 是否展示。<br/> 注：如果开启了分页模式就不再将展示的`value`转换为看到的`label`。有需要请自行在`renderForShow`中处理 | `boolean` | false |
| renderForShow | show 为 true 时可以自定义展示。 | `({ value: any, form: Form, optionChildren: ReactNode[], arrOptions: option[], defaultShow: ReactNode }) => ReactNode` | |
| form | 出于那个表单，会在展示值渲染函数`renderForShow`被带上 | `Form` | |
| options | 函数情况`store`请求到了数据，则会作为函数的第一个参数被传入。如果想直接设定项目可以直接传入数组，优先级顺序参考上面。注意这里处理返回的是对象数组`[{label: '例子', value: '例子value'  }]` | `(storeData) => option[]` \| `option[]` | |
| children | 函数情况经过`store`和`options`处理后的数据，则会作为函数的第一个参数被传入。如果想直接设定项目可以直接传入数组，优先级顺序参考上面。注意这里处理返回的是对象数组`[          <SCheckbox value="xxx">xxx</SCheckbox>]` | `(storeAndOptionsData) => OptionDom[]` \| `OptionDom[]` | |
