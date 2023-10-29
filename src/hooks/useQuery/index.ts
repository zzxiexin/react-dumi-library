/* eslint-disable @typescript-eslint/no-explicit-any */
import { message } from 'antd';
import { useCallback, useEffect, useState } from 'react';

export type TConfig = {
  isManual?: boolean;
  successKey?: string;
  errorKey?: string;
  dataKey?: string;
};

export type FetchType<TParams extends any[], TData> = (
  ...params: TParams
) => Promise<TData>;

const defConfig: TConfig = {
  isManual: false,
  successKey: 'success',
  errorKey: 'errMsg',
  dataKey: 'data',
};

const useQuery = <TParams extends any[], TData>(
  fetch: FetchType<TParams, TData>,
  config: TConfig = defConfig,
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<TData>({} as TData);
  const {
    isManual,
    successKey = 'success',
    dataKey = 'data',
    errorKey = 'errMsg',
  } = config;
  const query = useCallback(
    async (...params: TParams) => {
      setLoading(true);
      const res = await fetch(...params);
      console.log(res);
      if ((res as any)['data'][successKey]) {
        return setData((res as any)['data'][dataKey]);
      }
      return message.error((res as any)['data'][errorKey]);
    },
    [fetch, successKey, dataKey, errorKey],
  );

  useEffect(() => {
    if (!isManual) {
      query(...([] as unknown as TParams));
    }
  }, []);

  return { loading, data, query };
};

export default useQuery;
