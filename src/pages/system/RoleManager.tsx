import { Button, Form, Input, Spin } from 'antd';
import { roleAdd } from '@/api/cake'
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

const RoleManager = () => {
  const [form] = Form.useForm();

  const { loading, run } = useRequest((value) => {
    return roleAdd(value)
  }, {
    manual: true
  })

  const onFinish = (values: any) => {
    run(values)
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Spin tip="加载中..." spinning={loading}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="rolename"
          label="角色名称"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="rolecode"
          label="角色代号"
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

export default RoleManager;