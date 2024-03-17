import { TableProps } from 'antd/lib/table';
import { PaginationData } from 'rc-pagination';
import React, { useCallback, useEffect, useState } from 'react';

type ReturnType<TData> = {
  data: TData[];
  total: number;
};

type Fetch<TData> = (
  current: number,
  pageSize: number,
) => Promise<ReturnType<TData>>;

type OptionsType<TData> = TableProps<TData> & {
  manual?: boolean;
  isRowSelect?: boolean;
  remeberRow?: boolean;
};

const defOptions = {
  manual: false,
  isRowSelect: false,
  remeberRow: false,
  pagination: {
    current: 1,
    pageSize: 10,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total: number) => `总共${total}条数据`,
    pageSizeOptions: ['10', '25', '50', '100'],
  },
};

const useTable = <TData = any>(
  fetch: Fetch<TData>,
  options: OptionsType<TData> = defOptions,
) => {
  const [tableProps, setTableProps] = useState<TableProps<TData>>({
    ...defOptions,
    ...options,
    pagination: options?.pagination
      ? { ...defOptions.pagination, ...options?.pagination }
      : defOptions?.pagination,
  } as TableProps<TData>);
  const [selectRowsKeys, setSelectRowsKeys] = useState<React.Key[]>([]);

  const getTable = useCallback(
    (current: number, pageSize: number) => {
      setTableProps({ ...tableProps, loading: true });
      if (!options.remeberRow) {
        setSelectRowsKeys([]);
      }
      fetch(current, pageSize)
        .then((res) => {
          setTableProps({
            ...tableProps,
            loading: false,
            dataSource: res?.data,
            pagination: {
              ...tableProps?.pagination,
              total: res?.total,
              current,
              pageSize,
            },
          });
        })
        .catch(() => {
          setTableProps({
            ...tableProps,
            loading: false,
            dataSource: [],
            pagination: {
              ...tableProps?.pagination,
              total: 0,
              current,
              pageSize,
            },
          });
        });
    },
    [fetch],
  );

  useEffect(() => {
    if (!options.manual) {
      const { pagination } = tableProps;
      getTable(
        (pagination as PaginationData)?.current,
        (pagination as PaginationData)?.pageSize,
      );
    }
  }, []);

  const reset = useCallback(() => {
    const { pagination } = defOptions;
    getTable(pagination.current, pagination.pageSize);
  }, [getTable]);

  const renew = useCallback(() => {
    const { pagination } = tableProps;
    getTable(
      (pagination as PaginationData)?.current,
      (pagination as PaginationData)?.pageSize,
    );
  }, [getTable]);

  return {
    tableProps: {
      ...tableProps,
      pagination: {
        ...tableProps.pagination,
        onChange: getTable,
        onShowSizeChange: getTable,
      },
      rowSelection: options?.isRowSelect
        ? {
            preserveSelectedRowKeys: options?.remeberRow,
            onChange: (selectedRowKeys: React.Key[]) => {
              setSelectRowsKeys(selectedRowKeys);
            },
          }
        : null,
    },
    reset,
    renew,
    selectRowsKeys,
  };
};

export default useTable;
