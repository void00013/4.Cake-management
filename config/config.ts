import { defineConfig } from 'umi';
import routes from './router'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'Ant Design',
    locale: true,
    layout: 'side',
  },
  // umijs/preset-react 插件集都在这个文件中进行配置
  // antd: {
  //   dark: false
  // }
});
