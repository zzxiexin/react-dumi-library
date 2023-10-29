import React from 'react';
import { useQuery } from 'react-ui-dumi-library';
export default function App() {
  const handleQuery = (...params: any[]) => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1');
  };
  const { data, loading, query } = useQuery(handleQuery, {
    isAuto: false,
    success: {
      msg: ['data', 'successMsg'],
      flag: ['data', 'success'],
      dataKey: ['data', 'result'],
      callback: alert,
    },
    error: {
      msg: ['data', 'errMsg'],
      callback: alert,
    },
  });
  return <button onClick={query}>手动请求</button>;
}
