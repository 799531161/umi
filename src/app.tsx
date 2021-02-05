import RightContent from '@/components/RightContent';
import type { MenuDataItem, Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import React from 'react';
import type { RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import { API } from './services/API';
import { queryCurrent, queryRoutes } from './services/user';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  menuData?: MenuDataItem[];
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
  fetchMenuData?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    const accountId = localStorage.getItem('accountId');
    try {
      const currentUser = await queryCurrent({ accountId });
      return currentUser.obj;
    } catch (error) {
      history.push('/user/login');
    }

    return undefined;
  };
  const fetchMenuData = async () => {
    try {
      const menuData = await queryRoutes();
      const data = menuData.obj.map((item) => {
        return {
          name: item.menuName,
          path: item.url,
        };
      });
      return data;
    } catch (error) {}

    return [];
  };
  // 如果是登录页面，不执行
  if (history.location.pathname !== '/user/login') {
    const res = await fetchUserInfo();
    const data = await fetchMenuData();
    return {
      menuData: data,
      fetchUserInfo,
      fetchMenuData,
      currentUser: res,
      settings: {},
    };
  }
  return {
    menuData: [],
    fetchUserInfo,
    fetchMenuData,
    settings: {},
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    onPageChange: () => {
      const { currentUser } = initialState;
      const { location } = history;
      if (!currentUser?.username && location.pathname !== '/user/login') {
        history.push('/user/login');
      }
      if (location.pathname === '/user/login' && localStorage.getItem('token')) {
        // history.goBack();
      }
    },
    menuDataRender: (menuData) => [...menuData, ...initialState.menuData],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
