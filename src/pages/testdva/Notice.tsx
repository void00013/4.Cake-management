import { Avatar, List, Badge } from 'antd';
import { connect } from 'umi';

interface Idata {
  avatar: string,
  title: string,
  desc: string,
  read: boolean,
}

const Notice = ({notice, dispatch}) => (
  <List
    itemLayout="horizontal"
    dataSource={notice.data}
    renderItem={(item: Idata, index) => (
      <List.Item onClick={
        () => {
          dispatch({
            type: 'notice/readChange',
            payload: {
              i: index
            }
          })
        }
      }>
          <List.Item.Meta
            avatar={<Badge dot={!item.read}><Avatar src={item.avatar} /></Badge>}
            title={item.title}
            description={item.desc}
          />
      </List.Item>
    )}
  />
);

export default connect(({notice}) => ({notice}))(Notice);