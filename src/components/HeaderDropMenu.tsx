import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message, Space } from 'antd';
import { useModel, history, connect } from 'umi'

const handleButtonClick = (e: any) => {
  console.log('click left button', e);
}

const HeaderDropMenu = ({notice}) => {
  const { setInitialState } = useModel('@@initialState')

  const handleMenuClick = ({ key }) => {
    // console.log('click', key)
    if(key === '2') {
      setInitialState({
        isLogin: false,
        userInfo: null
      })
      localStorage.removeItem('userInfo')
      sessionStorage.removeItem('userInfo')
      history.push('/login')
      message.success('退出成功')
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: '个人中心',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: '退出登录',
          key: '2',
          icon: <LogoutOutlined />,
        }
      ]}
    />
  )

  return (
    <Space wrap>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        下拉菜单
        {
          notice.data.filter((item: any) => !item.read).length
        }
      </Dropdown.Button>
    </Space>
  )
}

export default connect(({notice}) => ({notice}))(HeaderDropMenu);