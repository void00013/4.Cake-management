import { Button, Form, Input, Spin } from 'antd';
import { cateAdd } from '@/api/cake'
import { useRequest } from 'umi'

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 3,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};

const CatePub = () => {
  const [form] = Form.useForm();

  const { loading, run } = useRequest((value) => {
    // console.log('执行')
    return cateAdd(value)
  }, {
    manual: true
  })

  const onFinish = (values: any) => {
    // console.log(values);
    run(values)
    // cateAdd(values)
    // .then(res => console.log(res))
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Spin tip="加载中..." spinning={loading}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="catename"
          label="分类名称"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
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
    </Spin>
  );
};

export default CatePub;