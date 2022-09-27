import { Button, Form, Select, Spin, message } from 'antd';
import { cateGet, cateAdd, goodsExChange } from '@/api/cake'
import { useRequest } from 'umi'
import { useEffect, useState } from 'react';
import RichText from '@/components/RichText';
import { getOriginData } from '@/api/originData'

const { Option } = Select

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 21,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};

const GoodsPub = () => {
  const [form] = Form.useForm();
  const [cateList, setCateList] = useState([])

  const { loading, run } = useRequest((value) => {
    // console.log('执行')
    return cateAdd(value)
  }, {
    manual: true
  })

  useEffect(() => {
    cateGet().then(res => {
      // console.log(res)
      setCateList(res.results)
    })
  }, [])

  const onFinish = (values: any) => {
    console.log(values);
    // run(values)
  };

  const onReset = () => {
    form.resetFields();
  };

  const reSave = async () => {
    try {
      const res = await getOriginData()
      console.log('res', res)
      if(res.code !== 1) return
      const res2 = await goodsExChange(res.data.list, '')
      console.log('res2', res2)
      if(res2.length === 0) {
        return message.warning('当前接口数据已经全部转存完成')
      }
      message.success('转存成功')
    } catch (error) {
      console.log('GoodsPub.tsx', error)
    }
  }

  return (
    <Spin tip="加载中..." spinning={loading}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="cateId"
          label="分类选择"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="请选择商品分类">
            {
              // ?表示如果有则执行后面的，如果没有，则不执行
              cateList.map((item: any) => <Option value={item.objectId} key={item.objectId}>{item.catename}</Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item
          name="detail"
          label="商品详情"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <RichText />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
          <Button type='dashed' htmlType="button" onClick={reSave}>
            批量转存
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default GoodsPub;