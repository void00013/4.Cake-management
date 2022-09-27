import { useModel, history } from 'umi'
import { Col, Row, Button, Checkbox, Form, Input, Card } from 'antd'
import { login } from '@/api/cake'
import { message } from 'antd'
import { useState } from 'react'

export default function Login() {
  const [remember, setRemember] = useState(true)
  const { setInitialState } = useModel('@@initialState');
  const initData = {
    username: '',
    password: '',
    remember
  }

  const onFinish = async (values: any) => {
    // console.log('Success:', values);
    setRemember(values.remember)
    try {
      const res = await login(values)
      // console.log('login', res)

      if(!res.sessionToken) {
        message.error('登录失败')
        return
      }

      message.success('登录成功')

      if(values.remember) {
        // 注意：如果是对象不能直接存放在本地存储中，必须先转换为JSON格式的数据
        localStorage.setItem('userInfo', JSON.stringify(res))
        // console.log('local', JSON.parse(localStorage.getItem('userInfo')))
      } else {
        sessionStorage.setItem('userInfo', JSON.stringify(res))
      }

      setInitialState({
        isLogin: true,
        userInfo: res
      })
      .then(() => history.push('/'))
      .catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }

  return (
    <div className='login'>
    <Row align='middle' style={{height: '100vh', backgroundColor: '#f6f6f6'}}>
      <Col span={8} offset={8}>
        <Card title="请登录" extra={<a href="#">去注册</a>}>
          <Form
            name="basic"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            initialValues={initData}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
    </div>
  )
}
