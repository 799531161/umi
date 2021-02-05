import request from '@/utils/request';
import { API } from './API';

// export async function query() {
//   return request<API.CurrentUser[]>('/api/users');
// }

export async function queryCurrent(params: any) {
  return request.get('/sys-svr/userInfoSettings/getUserInfo', {
    params,
  });
}

export async function queryNotices(): Promise<any> {
  return request<{ data: API.NoticeIconData[] }>('/api/notices');
}

export async function queryRoutes() {
  return request.get('/sys-svr/sysMenuSetting/getUserAuthorityMenuByUsername?menuType=1');
}
