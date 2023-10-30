/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';

type successType = {
  msg: Array<string>;
  flag: Array<string>;
  dataKey: Array<string>;
  callback: (...params: any[]) => void;
};

type errorType = {
  msg: Array<string>;
  callback: (...params: any[]) => void;
};

export type TConfig = Partial<{
  isAuto: boolean;
  success: Partial<successType>;
  error: Partial<errorType>;
}>;

export type FetchType<TParams extends any[], TData> = (
  ...params: TParams
) => Promise<TData>;

const defConfig: TConfig = {
  isAuto: true,
  success: {
    msg: ['data', 'successMsg'],
    flag: ['data', 'success'],
    dataKey: ['data', 'result'],
  },
  error: {
    msg: ['data', 'errMsg'],
  },
};

const handleGetProps = (keys: Array<string>, obj: any) => {
  const value = keys.reduce((acc, key) => acc?.[key], obj);
  return value;
};

const useQuery = <TParams extends any[], TData>(
  fetch: FetchType<TParams, TData>,
  config?: TConfig,
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<TData>({} as TData);
  const { isAuto, success, error } = config || defConfig;
  const query = useCallback(
    async (...params: TParams) => {
      try {
        if (loading) {
          return alert('不要重复请求');
        }
        console.log('send request');
        setLoading(true);
        const res = await fetch(...params);
        console.log(res);
        const {
          flag = defConfig.success?.flag,
          callback = null,
          msg = defConfig.success?.msg,
          dataKey = defConfig.success?.dataKey,
        } = (success || defConfig.success) as Required<successType>;
        const {
          msg: errMsg = defConfig.error?.msg,
          callback: errCallback = defConfig.error?.callback,
        } = (error || defConfig.error) as Required<errorType>;
        if (handleGetProps(flag as string[], res)) {
          setLoading(false);
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          callback && callback(handleGetProps(msg as string[], res));
          return setData(handleGetProps(dataKey as string[], res));
        }
        setLoading(false);
        return (
          errCallback && errCallback(handleGetProps(errMsg as string[], res))
        );
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
    [fetch, success, error],
  );

  useEffect(() => {
    if (isAuto) {
      query(...([] as unknown as TParams));
    }
  }, []);

  return { loading, data, query };
};

export default useQuery;
