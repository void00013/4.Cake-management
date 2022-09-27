import mockjs from 'mockjs';

const dataList = mockjs.mock({
  code: 200,
  msg: '学员列表加载成功',
  'results|100': [
    {
      'objectId|+1': 1,
      name: '@cname',
      score: '@integer(50, 100)',
      city: '@city',
      time: '@date',
    },
  ],
});

const itemDel = (req, res) => {
  // console.log(req.query);
  dataList.results = dataList.results.filter(
    (item) => item.key !== req.query.key - 0,
  );
  res.send({
    code: 200,
    msg: '删除成功',
  });
};

export default {
  // GET 请求可以省略前面的方法
  // 'GET /classes/test': {
  //   username: '张三',
  //   score: 100
  // }
  // '/classes/test': {
  //   username: '张三',
  //   score: 100
  // }
  '/classes/stu': dataList,
  'DELETE /classes/stu': itemDel,
};
