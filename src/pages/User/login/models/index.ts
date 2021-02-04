import { HttpResponse } from '@/services/API';
import { Login } from '@/services/login';
import { LoginType } from './type';

const login: LoginType = {
  state: {
    hasLogin: !!localStorage.getItem('token'),
  },
  namespace: 'login',
  effects: {
    /**登录 */
    *login({ payload }, { call, select, put }) {
      let hasLogin = false;
      try {
        const res: HttpResponse<any> = yield call(Login.login, payload);
        if (res.success) {
          hasLogin = true;
        }
        localStorage.setItem('accountId', res.obj.accountDto.id);
        localStorage.setItem('token', res.obj.token);
      } catch (error) {
        hasLogin = false;
      }
      yield put({
        type: 'updateState',
        payload: {
          hasLogin,
        },
      });
      return hasLogin;
    },
  },
  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default login;
