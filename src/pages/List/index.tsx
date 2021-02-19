import PageTable from '@/components/Table';
import { FormProps } from 'antd';
import { TableProps } from 'antd/lib/table';
import React from 'react';
let dataSource: RecordType[] = [];
for (let index = 0; index < 100; index++) {
  dataSource.push({
    id: index,
    name: index,
    age: index,
  });
}

interface RecordType {
  name: number;
  age: number;
  id: number;
}

const tableConfig = (): TableProps<RecordType> => {
  return {
    formdata: [
      {
        name: 'name',
        label: '姓名',
      },
    ],
    columns: [
      {
        title: '姓名',
        width: 100,
        fixed: 'left',
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
      },
    ],
    bordered: true,
    rowKey: 'id',
    dataSource: dataSource,
  };
};

const List = () => {
  return <PageTable {...tableConfig()} />;
};

export default List;
