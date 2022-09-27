export default [
    {
        name: '登录',
        path: '/login',
        component: '@/pages/login/Login.tsx',
        layout: false,
        hideInMenu: true
    },
    {
        name: '数据统计',
        path: '/',
        icon: 'BankOutlined',
        component: '@/pages/index',
        access: 'isRoot'
    },
    {
        name: '分类管理',
        path: '/cate',
        icon: 'ApartmentOutlined',
        // 控制该路由以及所有子路由的权限直接给父级加access就可以了
        access: 'isAdmin',
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
    {
        name: '轮播管理',
        path: '/banner',
        icon: 'BlockOutlined',
        access: 'isAdmin',
        routes: [
            {
                name: '轮播列表',
                path: '/banner/list',
                component: '@/pages/banner/BannerList.tsx'
            },
            {
                name: '轮播发布',
                path: '/banner/pub',
                component: '@/pages/banner/BannerPub.tsx'
            },
            {
                name: '轮播编辑',
                path: '/banner/edit',
                component: '@/pages/banner/BannerEdit.tsx',
                hideInMenu: true
            },
        ]
    },
    {
        name: '商品管理',
        path: '/goods',
        icon: 'ShoppingCartOutlined',
        access: 'isAdmin',
        routes: [
            {
                name: '商品列表',
                path: '/goods/list',
                component: '@/pages/goods/GoodsList.tsx'
            },
            {
                name: '商品发布',
                path: '/goods/pub',
                component: '@/pages/goods/GoodsPub.tsx'
            },
            {
                name: '轮播编辑',
                path: '/goods/edit',
                component: '@/pages/goods/GoodsEdit.tsx',
                hideInMenu: true
            },
        ]
    },
    {
        name: '系统设置',
        path: '/system',
        icon: 'SettingOutlined',
        access: 'isRoot',
        routes: [
            {
                name: '角色管理',
                path: '/system/role',
                component: '@/pages/system/RoleManager.tsx'
            },
            {
                name: '账号管理',
                path: '/system/user',
                component: '@/pages/system/UserManager.tsx'
            }
        ]
    },
    {
        name: '配送范围',
        path: '/area',
        access: 'isAdmin',
        icon: 'RadarChartOutlined',
        component: '@/pages/area/Area.tsx'
    },
    {
        name: '学员管理',
        path: '/stu',
        icon: 'UserOutlined',
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
    },
    {
        name: '状态管理',
        path: '/dva',
        icon: 'SlidersOutlined',
        routes: [
            {
                name: '组件A',
                path: '/dva/coma',
                component: '@/pages/testdva/ComA.tsx'
            },
            {
                name: '组件B',
                path: '/dva/comb',
                component: '@/pages/testdva/ComB.tsx'
            },
            {
                name: '消息列表',
                path: '/dva/notice',
                component: '@/pages/testdva/Notice.tsx'
            }
        ]
    },
    // {
    //     name: '测试',
    //     path: '/test',
    //     component: '@/pages/test/test.tsx'
    // },
]
