import { Space, Table, Button, Image } from 'antd'
import { useEffect, useState } from 'react';
import { bannerGet, bannerDel } from '../../api/cake'
import { history, useAccess } from 'umi'

const BannerList = () => {
  // 按钮级别的权限控制
  const access = useAccess()
  // console.log(access)
  let { isRoot } = access
  const columns = [
    {
      title: 'ID',
      dataIndex: 'objectId',
      key: 'objectId',
    },
    {
      title: '活动名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '活动链接',
      dataIndex: 'link',
      key: 'link',
      render: (url: string) => <a href={url} target="_blank">点击预览</a>
    },
    {
      title: '封面图片',
      key: 'imgurl',
      dataIndex: 'imgurl',
      render: () => <Image height={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => {
        // console.log(record)
        return (
        <Space size="middle">
          <Button type="primary" size="small" disabled={!isRoot} ghost onClick={() => {
            history.push({
              pathname: '/banner/edit',
              query: record
            })
          }}>编辑</Button>
          <Button type="primary" size="small" danger ghost onClick={() => itemDel(record.objectId)}>删除</Button>
        </Space>
      )},
    },
  ]

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = () => {
    bannerGet()
    .then(res => {
      // console.log(res)
      // if(res.code !== 200) return
      setData(res.results)
      setLoading(false)
    })
    .catch(err => console.log(err))
  }

  const itemDel = (objectId: number) => {
    console.log('objectId', objectId)
    bannerDel(objectId)
    .then(res => {
      if(res.results) return
      getData()
    })
    .catch(err => console.log(err))
  }
  useEffect(() => {
    getData()
  }, [])
  return <Table loading={loading} columns={columns} dataSource={data} rowKey="objectId"/>;
}

export default BannerList;
