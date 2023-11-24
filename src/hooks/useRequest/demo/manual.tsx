import { SyncOutlined } from '@ant-design/icons';
import axios from 'axios';
import React from 'react';
import { useRequest } from 'yxhooks';
export default function App() {
  const handleQuery = async (params) => {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1',
      { params },
    );
    if (res?.data) {
      return {
        success: res?.data ? true : false,
        data: res?.data,
      };
    }
    return {
      success: false,
      data: {},
    };
  };
  const { data, loading, query } = useRequest(handleQuery, {
    initParam: { a: 1 },
    isAuto: false,
  });
  return (
    <>
      <button onClick={() => query({ b: 2 })}>
        取消默认请求，点击发起手动请求
        {loading ? <SyncOutlined spin /> : null}
      </button>
      <div>data: {JSON.stringify(data)}</div>
    </>
  );
}
