export default [
    {
        name: '首页',
        path: '/',
        component: '@/pages/index'
    },
    {
        name: '测试',
        path: '/test',
        component: '@/pages/test/test.tsx'
    },
    {
        name: '学员管理',
        path: '/stu',
        component: '@/pages/stu/stu.tsx',
        routes: [
            {
                name: '学员列表',
                path: '/stu/list',
                component: '@/pages/stu/list.tsx'
            },
            {
                name: '学员录入',
                path: '/stu/pub',
                component: '@/pages/stu/pub.tsx'
            }
        ]
    }
]
