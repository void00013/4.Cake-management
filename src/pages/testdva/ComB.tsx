import { connect } from 'umi'
import { Button } from 'antd'

function ComB(props: any) {
  return (
    <>
      <div>ComB{props.count}</div>
      <Button type='primary' onClick={() => {props.dispatch({ type: 'count/sub' })}}>-1</Button>
    </>
  )
}

export default connect(({ count }) => ({ count }))(ComB)
