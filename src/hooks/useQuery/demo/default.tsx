import React from 'react';
import { useQuery } from 'react-ui-dumi-library';
export default function App() {
  const handleQuery = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1');
  };
  const { data, loading, query } = useQuery(handleQuery);
  return <button onClick={query}>自动请求</button>;
}
