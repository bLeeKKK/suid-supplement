---
order: 0
group: '数据录入'
toc: content
demo:
  cols: 2
---

# Upload

使用 antd@3 的 Upload 组件封装的上传组件

<code src="./UploadExample1.tsx" title="默认组件"></code>
<code src="./UploadExample2.tsx" title="自定义上传触发按钮"></code>
<code src="./UploadExample3.tsx" title="关闭拖拽粘贴功能"></code>

支持[antd3:Upload](https://3x.ant.design/components/upload-cn)组件

| 属性                | 描述                     | 类型                              | 默认值      |
| ------------------- | ------------------------ | --------------------------------- | ----------- |
| uploadType          | 默认的上传按钮触发样式   | `'file'`、`'btn'`                 | `file`      |
| loading             | 上传中状态，包裹整个组件 | `boolean`                         | false       |
| pastePower          | 是否开启粘贴上传         | `boolean`                         | true        |
| dragPower           | 是否开启拖拽上传         | `boolean`                         | true        |
| uploadHandlerRender | 自定义上传触发样式       | ReactNode ｜ (props) => ReactNode | `undefined` |
| uploadHandlerShow   | 上传触发样式是否展示     | `boolean`                         | true        |
| areaStyle           | 上传区域添加样式         | CSSProperties                     | `undefined` |

<!-- <API></API> -->
