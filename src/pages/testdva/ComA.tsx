import { connect } from 'umi'
import { Button } from 'antd'

function ComA(props: any) {
  console.log('props', props)
  return (
    <>
      <div>ComA{props.count}</div>
      <Button type='primary' onClick={() => {props.dispatch({
        type: 'count/addN',
        payload: 10
      })}}>+10</Button>
      <Button type='primary' onClick={() => {props.dispatch({
        type: 'count/addAsync',
        payload: 5
      })}}>异步+5</Button>
    </>
  )
}

export default connect(({count}) => ({count}))(ComA)

// export default connect(({count}) => {
//   // console.log(state)
//   // 必须return一个值，否则会报错
//   // return的值将会存放在ComA的props中
//   return { count }
//   // 一般不会直接return state 因为有些属性用不到
//   // state中的数据存在在以模块名为键名的属性中
//   // return state
// })(ComA)
