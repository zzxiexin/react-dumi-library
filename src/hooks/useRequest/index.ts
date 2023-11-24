/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';

export type TConfig<TData> = Partial<{
  isAuto: boolean;
  initParam: any;
  onSuccess: (arg: TData) => void;
  onError: (error: Error | ResponseData<any>) => void;
}>;

export type ResponseData<TData> = {
  data: TData;
  success: boolean;
  errMsg?: string;
};

export type FetchType<TData> = (
  ...params: any[]
) => Promise<ResponseData<TData>>;

const defConfig: TConfig<any> = {
  isAuto: true,
  initParam: {},
};

const useRequest = <TData = { result: any; success: boolean }>(
  fetch: FetchType<TData>,
  config?: TConfig<TData>,
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TData>({} as TData);
  const { isAuto, initParam, onError, onSuccess } = { ...defConfig, ...config };
  const query = useCallback(
    async (...params: any[]) => {
      try {
        if (loading) {
          return alert('不要重复请求');
        }
        setLoading(true);
        setData({} as TData);
        try {
          const res = await fetch(...params);
          if (res?.success) {
            setData(res?.data);
            setLoading(false);
            return onSuccess && onSuccess(res.data);
          }
          setData({} as TData);
          setLoading(false);
          if (onError) {
            onError(res);
          }
        } catch (error) {
          setLoading(false);
          return onError && onError(error as any);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
    [fetch, config],
  );

  useEffect(() => {
    if (isAuto) {
      query(initParam);
    }
  }, []);

  return { loading, data, query };
};

export default useRequest;
