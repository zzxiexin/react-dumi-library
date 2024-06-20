import { Button, Table } from 'antd';
import React from 'react';
import { useTable } from 'yxhooks';

export default function App() {
  const getTableData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: new Array(165)?.fill(null)?.map((item, index) => ({
            id: index + 1,
            name: `test_${index + 1}`,
            age: `${0 + index}`,
            sex: 'man',
          })),
          total: 165,
        });
      }, 500);
    });
  };
  const { tableProps, selectRowsKeys, reset, renew } = useTable(getTableData, {
    bordered: true,
    canSelect: true,
    remeberSelect: true,
    manual: true,
    pagination: {
      current: 1,
      pageSize: 20,
      showTotal: (total) => `自定义统计文案${total}试试`,
    },
  });

  console.log('selectRowsKeys', selectRowsKeys);
  return (
    <div className="App">
      <Button
        onClick={() => reset()}
        type="primary"
        style={{ marginBottom: 10 }}
      >
        手动查询
      </Button>
      <Table
        {...tableProps}
        columns={[
          { title: 'id', dataIndex: 'id' },
          { title: 'name', dataIndex: 'name' },
          { title: 'age', dataIndex: 'age' },
          { title: 'sex', dataIndex: 'sex' },
        ]}
        rowKey="id"
      />
    </div>
  );
}
