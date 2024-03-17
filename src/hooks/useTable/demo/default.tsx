import { Table } from 'antd';
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
  const { tableProps } = useTable(getTableData);
  return (
    <div className="App">
      <Table
        {...tableProps}
        columns={[
          { title: 'id', dataIndex: 'id' },
          { title: 'name', dataIndex: 'name' },
          { title: 'age', dataIndex: 'age' },
          { title: 'sex', dataIndex: 'sex' },
        ]}
      />
    </div>
  );
}
