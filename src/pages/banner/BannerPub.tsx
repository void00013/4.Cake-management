import { Button, Form, Input, Spin } from 'antd';
import MyUpload from '@/components/Upload';
import { bannerAdd } from '@/api/cake'
import { useRequest } from 'umi'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};

const BannerPub = () => {
  const [form] = Form.useForm();

  const { loading, run } = useRequest((value) => {
    return bannerAdd(value)
  }, {
    manual: true
  })

  const onFinish = (values: any) => {
    console.log(values)
    run(values)
  };

  const onReset = () => {
    form.resetFields();
  };

  let initData = {
    title: '五一节活动',
    link: 'https://h5.mcake.com/?key1=hd_banner&key2=xinren2022#/active?id=2236&type=2'
  }

  return (
    // <Spin tip="加载中..." spinning={loading}>
      <Form {...layout} initialValues={initData} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="title"
          label="活动名称"
          rules={[{required: true}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="link"
          label="活动链接"
          rules={[{required: true}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="imgurl"
          label="封面图片"
          // rules={[{required: true}]}
        >
          <MyUpload />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
    // </Spin>
  );
};

export default BannerPub;