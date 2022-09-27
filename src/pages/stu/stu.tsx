import { Space, Table, Button } from 'antd'
import { useEffect, useState } from 'react';
import { stuGet, stuDel } from '../../api/stu'

const Stu = () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: '分数',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: '城市',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: '生日',
      key: 'time',
      dataIndex: 'time',
      // render函数如果对应的数据源内有这一列的字段，则第一个参数就是这个字段的值，第二个参数就是这一行的值
      // 如果没有，则第一个和第二个参数都相同，都是这一行的数据
      // render: (_: any, { tags }: any) => (
      //   <>
      //     {tags.map((tag: any) => {
      //       let color = tag.length > 5 ? 'geekblue' : 'green';

      //       if (tag === 'loser') {
      //         color = 'volcano';
      //       }

      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </>
      // ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => {
        // console.log('学生列表', record)
        return (
        <Space size="middle">
          <Button type="primary" size="small" ghost>修改</Button>
          <Button type="primary" size="small" danger ghost onClick={() => itemDel(record.objectId)}>删除</Button>
        </Space>
      )},
    },
  ]

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = () => {
    console.log('get获取')
    stuGet()
    .then(res => {
      console.log(res)
      // if(res.code !== 200) return
      setData(res.results)
      setLoading(false)
    })
    .catch(err => console.log(err))
  }

  const itemDel = (objectId: number) => {
    // console.log(objectId)
    stuDel(objectId)
    .then(res => {
      // mock接口
      // if(res.code !== 200) return
      // leancloud接口删除成功返回一个空对象
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

export default Stu;