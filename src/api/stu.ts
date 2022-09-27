import request from 'umi-request';

const stuGet = () => {
  return request.get('/classes/stu');
}

// mock
// const stuDel = (key: number) => {
//   return request.delete(`/classes/stu?key=${key}`)
// }

// 对于数据表的修改和删除需要在： 控制台-数据表-权限-默认ACL权限-修改为无限制  完成这个操作后才能修改
const stuDel = (objectId: number) => {
  // console.log(objectId)
  return request.delete(`/classes/stu/${objectId}`)
}

export {
  stuGet,
  stuDel
}
