import { Card, Form, Input, Table, TableProps } from 'antd';
import React, { FC } from 'react';
import styles from './index.less';
type fromProps = {
  name: string;
  label: string;
};
interface Props extends TableProps<any> {
  formdata: fromProps[];
}

const InitFromData: FC<Props> = (props: Props) => {
  const { formdata } = props;
  const onFinish = () => {};
  const onFinishFailed = () => {};
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {formdata.map((item) => {
        return (
          <Form.Item key={item.name} label={item.label} name={item.name}>
            <Input />
          </Form.Item>
        );
      })}
    </Form>
  );
};

const PageTable: FC<Props> = (props: Props) => {
  const { columns = [], dataSource = [], pagination, ...rest } = props;
  return (
    <Card>
      <InitFromData {...props}></InitFromData>
      <Table
        className={styles.tableContent}
        {...rest}
        pagination={{ ...pagination, showSizeChanger: true, showQuickJumper: true }}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 1000 }}
      />
    </Card>
  );
};

export default PageTable;
