// 在这个项目中没有使用 umi 中的request，使用的是 umi-request 中的 request，所以拦截器要参考umi-request中进行配置
import { history } from 'umi';
import { message } from 'antd';
import request from 'umi-request';
import HeaderDropMenu from '@/components/HeaderDropMenu.tsx';
import '@/utils/init-leancloud-sdk.js';

request.interceptors.request.use((url, options) => {
  // console.log('请求拦截器', url, options);
  url = `https://fxbpezlc.lc-cn-n1-shared.com/1.1${url}`;
  options.headers = {
    'X-LC-Id': 'FxBPezLctNB0zgZpqcye1L9a-gzGzoHsz',
    'X-LC-Key': 'SsOZRQfl3MxPIUYIpRBYp8fE',
    'Content-Type': 'application/json',
  };
  return { ...options, url };
});

// response拦截器, 处理response
request.interceptors.response.use((response, options) => {
  // console.log('响应拦截器', response, options);
  return response;
});

export function getInitialState() {
  let userState = {
    isLogin: false,
    userInfo: null,
  };
  const user =
    localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo');
  // console.log(user)
  if (user) {
    userState = {
      isLogin: true,
      userInfo: JSON.parse(user),
    };
  }
  return userState;
}

export const layout = ({ initialState }) => {
  // console.log('layout', initialState)
  let { isLogin } = initialState;
  return {
    // 监听页面的改变
    onPageChange: () => {
      if (!isLogin) {
        history.push('/login');
        message.warning('请先登录');
      }
    },
    // 控制头像位置的渲染
    rightContentRender: () => <HeaderDropMenu />,
  };
};
