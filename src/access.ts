// 注意：access 文件创建后一定要重启服务，否则 access 不会生效
export default function(initialState: any) {
  // console.log('access', initialState)
  // 写法一：
  // const { userInfo } = initialState
  // // router 配置的权限 在该文件中必须 return 出去，不 return 就会报错
  // if(!userInfo) {
  //   return {
  //     isRoot: false,
  //     isAdmin: false,
  //     isWorker: false
  //   }
  // }
  // let { role } = userInfo
  // // return 的值只会控制在 router 中配置的权限，不会影响 initialState
  // return {
  //   isRoot: role === 'root',
  //   isAdmin: role === 'root' || role === 'admin',
  //   isWorker: true
  // }
  // 写法二：
  let { role } = initialState.userInfo ? initialState.userInfo : { role: '' }
  return {
    isRoot: role === 'root',
    isAdmin: role === 'root' || role === 'admin',
    isWorker: true
  }
}