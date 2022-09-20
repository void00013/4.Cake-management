import request from 'umi-request';
import { message } from 'antd'

// 新增分类
export const cateAdd = async (cateObj: any) => {
  const res = await request.post('/classes/category', {
    data: cateObj
  })
  console.log(res)
  if(res.objectId) {
    message.success('添加成功')
  } else {
    message.warning('添加失败')
  }
}
