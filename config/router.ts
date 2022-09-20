export default [
    {
        name: '首页',
        path: '/',
        component: '@/pages/index'
    },
    {
        name: '分类管理',
        path: '/cate',
        routes: [
            {
                name: '分类列表',
                path: '/cate/list',
                component: '@/pages/category/catelist.tsx'
            },
            {
                name: '分类发布',
                path: '/cate/pub',
                component: '@/pages/category/catepub.tsx'
            }
        ]
    },
    // {
    //     name: '测试',
    //     path: '/test',
    //     component: '@/pages/test/test.tsx'
    // },
    // {
    //     name: '学员管理',
    //     path: '/stu',
    //     component: '@/pages/stu/stu.tsx',
    //     routes: [
    //         {
    //             name: '学员列表',
    //             path: '/stu/list',
    //             component: '@/pages/stu/list.tsx'
    //         },
    //         {
    //             name: '学员录入',
    //             path: '/stu/pub',
    //             component: '@/pages/stu/pub.tsx'
    //         }
    //     ]
    // }
]
