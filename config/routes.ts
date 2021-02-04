import { IConfigFromPlugins } from '@/.umi/core/pluginConfig';

const data: IConfigFromPlugins = {
  routes: [
    {
      hideInMenu: true,
      layout: false,
      name: 'login',
      path: '/user/login',
      component: './User/login',
      wrappers: ['@/wrappers/auth'],
    },
    {
      access: 'list',
      path: '/welcome',
      name: 'welcome',
      icon: 'smile',
      component: './Welcome',
      wrappers: ['@/wrappers/auth'],
    },
    {
      path: '/admin',
      name: 'admin',
      icon: 'crown',
      access: 'canAdmin',
      component: './Admin',
      wrappers: ['@/wrappers/auth'],
      routes: [
        {
          path: '/admin/sub-page',
          name: 'sub-page',
          icon: 'smile',
          component: './Welcome',
          wrappers: ['@/wrappers/auth'],
        },
      ],
    },
    {
      name: 'list.table-list',
      icon: 'table',
      path: '/list',
      component: './TableList',
      wrappers: ['@/wrappers/auth'],
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      component: './404',
    },
  ],
};

export default data.routes as any;
