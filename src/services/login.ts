import request from '@/utils/request';

export type LoginParamsType = {
  username: string;
  password: string;
};

export class Login {
  static login(data: LoginParamsType) {
    return request.post('/sys-svr/account/login', { data });
  }
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

export async function outLogin() {
  return request('/api/login/outLogin');
}
