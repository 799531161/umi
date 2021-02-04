import type { LoginParamsType } from '@/services/login';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import ProForm, { ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import React, { useEffect, useState } from 'react';
import {
  connect,
  ConnectProps,
  Dispatch,
  FormattedMessage,
  history,
  Link,
  useIntl,
  useModel,
} from 'umi';
import styles from './index.less';

interface PageProps extends ConnectProps {
  login: {};
  loading: boolean;
  dispatch: Dispatch;
}

const Login: React.FC<PageProps> = (props: PageProps) => {
  const { login, dispatch } = props;
  const [submitting, setSubmitting] = useState(false);
  const { initialState, setInitialState } = useModel('@@initialState');
  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    console.log(userInfo, 'userInfo');

    if (userInfo) {
      setInitialState({
        ...initialState,
        currentUser: userInfo,
      });
    }
  };

  /**登录 */
  const handleSubmit = async (values: LoginParamsType) => {
    setSubmitting(true);
    const res = await dispatch({
      type: 'login/login',
      payload: {
        ...values,
      },
    });
    if (res) {
      history.replace('/');

      fetchUserInfo();
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      {login.hasLogin ? '已登录' : '未登录'}
      {/* <div className={styles.lang}>{SelectLang && <SelectLang />}</div> */}
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img alt="logo" className={styles.logo} src="/logo.svg" />
              <span className={styles.title}>Ant Design</span>
            </Link>
          </div>
          <div className={styles.desc}></div>
        </div>

        <div className={styles.main}>
          <ProForm
            submitter={{
              searchConfig: {
                submitText: intl.formatMessage({
                  id: 'pages.login.submit',
                  defaultMessage: '登录',
                }),
              },
              render: (_, dom) => dom.pop(),
              submitButtonProps: {
                loading: submitting,
                size: 'large',
                style: {
                  width: '100%',
                },
              },
            }}
            onFinish={async (values) => {
              handleSubmit(values as LoginParamsType);
            }}
          >
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.username.placeholder',
                defaultMessage: '用户名: admin or user',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.username.required"
                      defaultMessage="请输入用户名!"
                    />
                  ),
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.password.placeholder',
                defaultMessage: '密码: ant.design',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.password.required"
                      defaultMessage="请输入密码！"
                    />
                  ),
                },
              ]}
            />

            <div
              style={{
                marginBottom: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
              </ProFormCheckbox>
              <a
                style={{
                  float: 'right',
                }}
              >
                <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" />
              </a>
            </div>
          </ProForm>
        </div>
      </div>
    </div>
  );
};

export default connect(({ login, loading }) => ({ login, loading: loading.models.login }))(Login);
