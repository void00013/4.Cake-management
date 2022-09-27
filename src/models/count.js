export default {
  state: 100,
  // 返回的结果将作为state的新值，只有reducers中的函数才能直接修改state的值，effects中的方法只能通过调用reducers的方法间接的修改state的值
  // reducer类似于vuex的mutation
  reducers: {
    addN(state, action) {
      // console.log(action);
      let n = action.payload ? action.payload : 1;
      return state + n;
    },
    sub(state) {
      return state - 1;
    },
  },
  // effects类似于vuex中的action
  effects: {
    *addAsync(action, { call, put }) {
      let delay = (ms) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // console.log(action);
            resolve();
          }, ms);
        });
      };
      // yield关键字可以分段执行函数段
      // call 用于处理异步任务
      yield call(delay, 2000);
      // put 相当于dispatch，传入action能直接调用该模块内的方法
      yield put({
        type: 'addN',
        payload: action.payload,
      });
    },
  },
};
