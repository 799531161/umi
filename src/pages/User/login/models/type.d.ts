import { Effect } from 'umi';

export interface LoginType {
  state: {};
  namespace: 'login';
  effects: {
    login: Effect;
  };
  reducers: {};
}
