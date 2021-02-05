import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="无资源"
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        回到主页
      </Button>
    }
  />
);

export default NoFoundPage;
