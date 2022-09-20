// 在这个项目中没有使用 umi 中的request，使用的是 umi-request 中的 request，所以拦截器要参考umi-request中进行配置
import request from 'umi-request'

request.interceptors.request.use(
  (url: any, options: any) => {
    console.log('请求拦截器', url, options);
    url = `https://fxbpezlc.lc-cn-n1-shared.com/1.1${url}`
    options.headers = {
      'X-LC-Id': 'FxBPezLctNB0zgZpqcye1L9a-gzGzoHsz',
      'X-LC-Key': 'SsOZRQfl3MxPIUYIpRBYp8fE',
      'Content-Type': 'application/json'
    }
    return { ...options, url };
  }
);

// response拦截器, 处理response
request.interceptors.response.use(
  (response: any, options: any) => {
    console.log('响应拦截器', response, options);
    return response;
  }
);
