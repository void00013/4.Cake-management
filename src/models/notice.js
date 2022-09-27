import { produce } from 'immer';
// import produce from 'immer';
// produce 既可以默认导入，也可以按需导入

export default {
  state: {
    data: [
      {
        avatar: 'https://joeschmoe.io/api/v1/random',
        title: '1',
        desc: '如果坚持上班到年底，将会得到1个月的年终奖',
        read: false,
      },
      {
        avatar: 'https://joeschmoe.io/api/v1/random',
        title: '2',
        desc: '如果坚持上班到年底，将会得到2个月的年终奖',
        read: true,
      },
      {
        avatar: 'https://joeschmoe.io/api/v1/random',
        title: '3',
        desc: '如果坚持上班到年底，将会得到3个月的年终奖',
        read: false,
      },
    ],
  },
  reducers: {
    readChange(state, action) {
      // immer做法
      // draft 就是 state 深拷贝的一份数据，函数中修改draft的值，如果没有返回值，最终draft的值就是obj的值，如果有返回值将会报错
      let obj = produce(state, (draft) => {
        draft.data[action.payload.i].read = true;
      });
      // console.log('immer', obj);
      return obj;

      // 普通做法
      // state.data[action.payload.i].read = true;
      // return state;

      // 下面的方法是错误的,return出去的值将直接作为state的值，此时state的值相当于是 state: { state: 数据 }, 这样显然就不对了
      // return { state };
    },
  },
};
