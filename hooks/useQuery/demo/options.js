import React from 'react';
import { useQuery } from 'react-ui-dumi-library';
export default function App() {
  var handleQuery = function handleQuery() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1');
  };
  var _useQuery = useQuery(handleQuery, {
      isAuto: false,
      success: {
        msg: ['data', 'successMsg'],
        flag: ['data', 'success'],
        dataKey: ['data', 'result'],
        callback: alert
      },
      error: {
        msg: ['data', 'errMsg'],
        callback: alert
      }
    }),
    data = _useQuery.data,
    loading = _useQuery.loading,
    query = _useQuery.query;
  return /*#__PURE__*/React.createElement("button", {
    onClick: query
  }, "\u624B\u52A8\u8BF7\u6C42");
}