import { IConfigFromPlugins } from '@/.umi/core/pluginConfig';
import { MenuDataItem } from '@ant-design/pro-layout';

const data: IConfigFromPlugins = {
  routes: [
    {
      hideInMenu: true,
      // wrappers: ['@/wrappers/auth'],
      layout: false,
      name: 'login',
      path: '/user/login',
      component: './User/login',
    },
    {
      // access: 'list',
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
      // access: 'canAdmin',
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
      name: '控制管理中心',
      hideInMenu: true,
      wrappers: ['@/wrappers/auth'],
      component: './TableList',
      path: '/controlCenter/control',
    },
    {
      name: '资产管理中心',
      hideInMenu: true,
      wrappers: ['@/wrappers/auth'],
      component: './TableList',
      path: '/propertyMgr/acceptance',
    },
    {
      name: '能源管理中心',
      hideInMenu: true,
      wrappers: ['@/wrappers/auth'],
      component: './TableList',
      path: '/energyMgr/list',
    },
    {
      name: '音视频管理中心',
      hideInMenu: true,
      wrappers: ['@/wrappers/auth'],
      component: './TableList',
      path: '/multimedia/audioLive',
    },
    {
      name: '数据管理中心',
      hideInMenu: true,
      wrappers: ['@/wrappers/auth'],
      component: './TableList',
      path: '/dataMC/classroomMgr/campus',
    },
    {
      name: '运维管理中心',
      hideInMenu: true,
      wrappers: ['@/wrappers/auth'],
      component: './TableList',
      path: '/operationCenter/fault',
    },
    {
      name: '用户管理中心',
      hideInMenu: true,
      wrappers: ['@/wrappers/auth'],
      component: './TableList',
      path: '/userMC/userMgr',
    },
    {
      name: '系统配置中心',
      hideInMenu: true,
      wrappers: ['@/wrappers/auth'],
      component: './TableList',
      path: '/systemConf/matrix/matrixPage',
    },
    {
      name: '场景管理中心',
      hideInMenu: true,
      wrappers: ['@/wrappers/auth'],
      component: './TableList',
      path: '/scene/controlScene',
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      layout: {
        hideMenu: false,
        hideNav: false,
        hideFooter: false,
      },
      // hideInMenu: true,
      // layout: false,
      // wrappers: ['@/wrappers/auth'],
      component: './404',
    },
  ] as MenuDataItem[],
};

export default data.routes as any;
