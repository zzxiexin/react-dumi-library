import { Table } from 'antd';
import React from 'react';
import { useTable } from 'react-ui-dumi-library';
export default function App() {
  var getTableData = function getTableData(_ref) {
    var current = _ref.current,
      pageSize = _ref.pageSize;
    var query = "page=".concat(current, "&size=").concat(pageSize);
    return fetch("https://randomuser.me/api?results=55&".concat(query)).then(function (res) {
      return res.json();
    }).then(function (res) {
      return {
        total: res.info.results,
        list: res.results
      };
    });
  };
  var _useTable = useTable(getTableData({
      current: 1,
      pageSize: 10
    })),
    tableProps = _useTable.tableProps,
    queryTable = _useTable.queryTable;
  return /*#__PURE__*/React.createElement(Table, tableProps);
}