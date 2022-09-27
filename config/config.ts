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
  // dva是配置开启的，不配置是找不到model的
  dva: {
    immer: true,
    hmr: false,
  },
  // proxy: {
  //   '/1.1/fileTokens': {
  //     'target': 'https://fxbpezlc.lc-cn-n1-shared.com',
  //     'changeOrigin': true,
  //     // 'pathRewrite': { '^/api' : '' },
  //   },
  // }
  // umijs/preset-react 插件集都在这个文件中进行配置
  // antd: {
  //   dark: false
  // }
});
