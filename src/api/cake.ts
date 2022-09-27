import request from 'umi-request'
import { message } from 'antd'
import { history } from 'umi'

// 登录接口
export const login = (user: any) => {
  return request.post('/login', {
    data: user
  })
}

// 获取分类
export const cateGet = async () => {
  const res = await request.get('/classes/category')
  // console.log(res)
  return res
}

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

export const bannerGet = async () => {
  const res = await request.get('/classes/catebanner')
  // console.log('banner', res)
  return res
}

export const bannerAdd = async (bannerObj: any) => {
  const res = await request.post('/classes/catebanner', {
    data: bannerObj
  })
  console.log(res)
  if(res.objectId) {
    message.success('添加成功')
  } else {
    message.warning('添加失败')
  }
}

export const bannerUpdate = async (objectId: string, bannerObj: any) => {
  const res = await request.put(`/classes/catebanner/${objectId}`, {
    data: bannerObj
  })
  // console.log('更新', res)
  if(res.objectId) {
    message.success('更新成功')
    history.push('/banner/list')
  } else {
    message.warning('更新失败')
  }
  return res
}

export const bannerDel = (objectId: number) => {
  console.log('删除')
  return request.delete(`/classes/catebanner/${objectId}`)
  // console.log(res)
}

interface batchType {
  requests: any
}

export const roleGet = () => {
  return request.get('/classes/CakeRole')
}

export const roleAdd = async (roleObj: any) => {
  const res = await request.post('/classes/CakeRole', {
    data: roleObj
  })
  if(res.objectId) {
    message.success('添加成功')
  } else {
    message.warning('添加失败')
  }
  return res
}

export const userReg = (user: any) => {
  return request.post('/users', {
    data: user
  })
}

export const areaGet = (city: string) => {
  return request.get(`/classes/CakeArea?where={"city": "${city}"}`)
}

export const areaAdd = async (areaObj: any) => {
  const res = await request.post(`/classes/CakeArea`, {
    data: areaObj
  })
  // console.log('更新', res)
  if(res.objectId) {
    message.success('添加区域成功')
  } else {
    message.warning('添加区域失败')
  }
  return res
}

// 批量转存
export const goodsExChange = (goodsList: any, values: any) => {
  let batchObj: batchType = {
    requests: []
  }
  goodsList.forEach((item: any) => {
    batchObj.requests.push({
      method: "POST",
      path: "/1.1/classes/cakegoods",
      body: item
    })
  })
  return request.post('/batch', {
    data: batchObj
  })
}
