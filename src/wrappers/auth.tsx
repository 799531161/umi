import { FC } from 'react';
import { connect, Redirect } from 'umi';

interface Props {
  login: any;
  children: any;
}

const Auth: FC<Props> = (props: Props) => {
  const { login } = props;
  if (login.hasLogin && !!localStorage.getItem('token')) {
    return props.children;
  }
  return <Redirect to="/user/login" />;
};

export default connect(({ login, loading }) => ({
  login,
  loading,
}))(Auth);
