import request from 'umi-request';

const stuGet = () => {
  return request.get('/classes/stu');
}

const stuDel = (key: number) => {
  return request.delete(`/classes/stu?key=${key}`)
}

export {
  stuGet,
  stuDel
}
