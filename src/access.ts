import { API } from './services/API';

// src/access.ts
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  if (!currentUser) {
    return {};
  }
  /**后台返回权限码，前端路由配置埋点 */
  const accessArr = {
    list: false,
  };
  return {
    ...accessArr,
  };
}
