import { history, Link } from 'umi'
import { Button } from 'antd'

export default function test() {
  return (
    <div className="test">
      <Link to='/'>test</Link>
      <Button type='primary' onClick={() => {history.push('/')}}>按钮</Button>
    </div>
  )
}
