/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TablePaginationConfig, TableProps } from 'antd/es/table';
import { useCallback, useEffect, useMemo, useState } from 'react';
type FetchType = (...params: any[]) => Promise<any>;

interface OptionsType extends TableProps<any> {
  isAuto?: boolean;
  onSuccess?: (...params: any[]) => void;
  onError?: (...params: any[]) => void;
}

type UseTableQueryType = {
  queryTable: (...params: any[]) => void;
  tableProps: TableProps<any>;
};

const defOptions: Partial<OptionsType> = {
  isAuto: true,
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0,
  },
};

const useTableQuery = (
  fetch: FetchType,
  options?: OptionsType,
): UseTableQueryType => {
  const {
    isAuto = defOptions.isAuto,
    pagination = defOptions.pagination,
    onSuccess,
    onError,
    ...rest
  } = options || {};
  const [tableInfo, setTableInfo] = useState<TableProps<any>>({
    loading: false,
  });
  const queryTable = useCallback(
    async (...params: any[]) => {
      setTableInfo({ ...tableInfo, loading: true });
      try {
        const res = await fetch(...params);
        console.log('res', res);
        if ((res as any)?.success) {
          // 请求参数为(curren: 1, pageSize: 10)
          const [params1, params2] = params;
          setTableInfo({
            ...tableInfo,
            ...rest,
            pagination: {
              ...(options?.pagination
                ? options?.pagination
                : tableInfo?.pagination),
              total: (res as any).total,
              current: params1,
              pageSize: params2,
            },
            dataSource: (res as any)?.list,
            loading: false,
          });
          if (typeof onSuccess === 'function') {
            onSuccess(res);
          }
        } else {
          setTableInfo({ ...tableInfo, loading: false });
          if (typeof onError === 'function') {
            onError(res);
          }
        }
      } catch (error) {
        setTableInfo({ ...tableInfo, loading: false });
      }
    },
    [fetch],
  );
  const onChange = (...params: any[]) => {
    queryTable(...params);
  };

  const tableProps = useMemo(() => {
    return {
      ...tableInfo,
      pagination: {
        ...(tableInfo as TableProps<any>).pagination,
        onChange,
        onShowSizeChange: onChange,
      },
    };
  }, [tableInfo]);

  useEffect(() => {
    // 自动触发
    if (isAuto) {
      const { current: defCurrent, pageSize: defPageSize } =
        defOptions.pagination as Partial<TablePaginationConfig>;
      const { current = defCurrent, pageSize = defPageSize } =
        pagination as Partial<TablePaginationConfig>;
      queryTable(current, pageSize);
    }
  }, []);

  return { queryTable, tableProps };
};

export default useTableQuery;
