export default [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          path: '/user',
          component: './Welcome',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/',
          redirect: '/workplace',
        },
        {
          name: 'workplace',
          icon: 'smile',
          path: '/workplace',
          component: './workplace',
        },
        {
          name: 'result',
          icon: 'check-circle-o',
          path: '/result',
          routes: [
            // 返回结果
            {
              path: '/result/success',
              name: 'success',
              component: './result-success',
            },
            {
              path: '/result/fail',
              name: 'fail',
              component: './result-fail',
            },
          ],
        },
        
        {
          name: 'form',
          icon: 'smile',
          path: '/form',
          routes: [
            //表单类操作
            {
              path: '/form/basic',//基础表单
              name: 'basic',
              component: './basic-form',
            },
            {
              path: '/form/advanced',//高级表单
              name: 'advanced',
              component: './advanced-form',
            },
            {
              path: '/form/step',//步骤表单
              name: 'step',
              component: './step-form',
            },
          ],
        },
        {
          name: 'profile',
          icon: 'smile',
          path: '/profile',
          routes: [
            //详细内容页
            {
              path: '/profile/basic',
              name: 'basic',
              component: './basic-profile',
            },
            {
              path: '/profile/advanced',
              name: 'advanced',
              component: './advanced-profile',
            },
          ],
        },
        {
          name: 'exception',
          icon: 'smile',
          path: '/exception',
          routes: [
            //错误页
            {
              path: '/exception/403',
              name: '403',
              component: './exception-403',
            },
            {
              path: '/exception/404',
              name: '404',
              component: './exception-404',
            },
            {
              path: '/exception/500',
              name: '500',
              component: './exception-500',
            },
          ],
        },
        {
          name: 'analysis',
          //分析报表
          icon: 'smile',
          path: '/analysis',
          component: './analysis',
        },
        {
          name: 'monitor',
          //监视监测
          icon: 'smile',
          path: '/monitor',
          component: './monitor',
        },
        {
          name: 'list',
          icon: 'smile',
          path: '/list',
          routes: [
            //列表页
            {
              path: '/list/card',//卡片列表
              name: 'card',
              component: './card-list',
            },
            //{
            //  path: '/list/table',//表格列表
            //  name: 'table',
            //  component: './table-list',
            //},
          ],
        },
        //{
        //  name: 'search',
        //  icon: 'smile',
        //  path: '/search',
        //  routes: [
        //    //搜索页
        //    {
        //      path: '/search/applications',//搜索应用
        //      name: 'applications',
        //      component: './search-list-applications',
        //    },
        //    {
        //      path: '/search/articles',//搜索文章
        //      name: 'articles',
        //      component: './search-list-articles',
        //    },
        //    {
        //      path: '/search/projects',//搜索项目
        //      name: 'projects',
        //      component: './search-list-projects',
        //    },
        //  ],
        //},
        //{
        //  name: 'account',
        //  icon: 'smile',
        //  path: '/accounts',
        //  routes: [
            //个人会员中心
        //    {
        //      path: '/accounts/center',
        //      name: 'center',
        //      component: './account-center',
        //    },
            //{
            //  path: '/account/settings',
            //  name: 'settings',
            //  component: './account-settings',
            //},
        //  ],
        //},
        {
          name: 'users',
          icon: 'smile',
          path: '/users',
          routes: [
            //登录注册页
            {
              path: '/users/login',//登录
              name: 'login',
              component: './user-login',
            },
            {
              path: '/users/register',//注册
              name: 'register',
              component: './user-register',
            },
            {
              path: '/users/register-result',//注册结果
              name: 'register-result',
              component: './user-register-result',
            },
          ],
        },

      ],
    },
  ];