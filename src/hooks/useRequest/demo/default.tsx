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
      msg: '请求失败',
      data: {},
    };
  };
  const { data, loading, query } = useRequest(handleQuery, {
    initParam: { a: 1 },
  });
  return (
    <>
      <button onClick={() => query({ b: 2 })}>
        默认请求，点击重新请求
        {loading ? <SyncOutlined spin /> : null}
      </button>
      <div>data: {JSON.stringify(data)}</div>
    </>
  );
}
