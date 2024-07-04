---
order: 0
# group: '弹窗'
toc: content
# demo:
#   cols: 2
---

# Upload

使用 antd@3 的 Upload 组件封装的上传组件
支持[antd3:Upload](https://3x.ant.design/components/upload-cn/)组件

### 普通使用

<code src='./UploadExample1'></code>

### 自定义上传触发

<code src='./UploadExample2'></code>

### 禁用粘贴、拖拽上传

<code src='./UploadExample3'></code>

### 禁用上传

<code src='./UploadExample4'></code>

| 属性                | 描述                            | 类型              | 默认值      |
| ------------------- | ------------------------------- | ----------------- | ----------- |
| uploadType          | 上传组件样式                    | `'file'`、`'btn'` | `file`      |
| loading             | 加载动画                        | `boolean`         | `undefined` |
| pastePower          | 粘贴上传                        | `boolean`         | `true`      |
| dragPower           | 拖拽上传                        | `boolean`         | `true`      |
| areaStyle           | 拖拽上传\粘贴上传触发区域的样式 | `StyleCss`        | `undefined` |
| disabled            | 是否禁用                        | `boolean`         | `undefined` |
| uploadHandlerRender | 自定义上传区域                  | `ReactDom`        | `undefined` |
| uploadHandlerShow   | 是否展示上传区域                | `boolean`         | `true`      |

<!-- <API></API> -->
