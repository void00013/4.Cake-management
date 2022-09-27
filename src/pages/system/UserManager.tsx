import { Button, Form, Input, Select, message } from 'antd';
import { roleGet, userReg } from '@/api/cake'
import { useEffect, useState } from 'react';

const { Option } = Select

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

const UserManager = () => {
  const [roleList, setRoleList] = useState([])
  useEffect(() => {
    roleGet().then(res => setRoleList(res.results))
  }, [])

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // console.log(values)
    userReg(values).then(res => {
      // console.log(res)
      if(!res.objectId) {
        return message.error('账号分配失败')
      }
      message.success('账号分配成功')
    })
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="username"
        label="账号"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="role"
        label="角色"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="请选择角色">
          {
            roleList.map((item: any) => <Option value={item.rolecode} key={item.objectId}>{item.rolename}</Option>)
          }
        </Select>
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
  );
};

export default UserManager;