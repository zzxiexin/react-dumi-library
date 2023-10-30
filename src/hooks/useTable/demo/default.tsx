import { Table } from 'antd';
import React from 'react';
import { useTable } from 'react-ui-dumi-library';
interface Item {
  name: {
    last: string;
  };
  email: string;
  phone: string;
  gender: 'male' | 'female';
}

interface Result {
  total: number;
  list: Item[];
}

export default function App() {
  const getTableData = ({
    current,
    pageSize,
  }: {
    current: number;
    pageSize: number;
  }): Promise<Result> => {
    const query = `page=${current}&size=${pageSize}`;

    return fetch(`https://randomuser.me/api?results=55&${query}`)
      .then((res) => res.json())
      .then((res) => ({
        total: res.info.results,
        list: res.results,
      }));
  };

  const { tableProps, queryTable } = useTable(
    getTableData({ current: 1, pageSize: 10 }),
  );
  return <Table {...tableProps} />;
}
