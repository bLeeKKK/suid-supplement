import { defineConfig } from 'dumi';

export default defineConfig({
  // 通过<API></API>组件自动生成文档表格
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'suid-supplement',
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {}, // 在umi中，表示启用该插件
  mock: {},
});
