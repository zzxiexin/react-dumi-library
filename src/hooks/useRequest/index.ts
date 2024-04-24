/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';

export type ReqConfig<Res> = Partial<{
  manual: boolean;
  init: Record<string, any>;
  onSuccess: (arg: Res) => void;
  onError: (error: Error) => void;
  onRepeat: () => void;
}>;

export type Response<Res> = {
  data: Res;
  success: boolean;
  msg?: string;
};

export type FetchType<Res> = (...params: any[]) => Promise<Response<Res>>;

const defConfig: ReqConfig<any> = {
  manual: false,
  init: {},
};

const useRequest = <Res = object>(
  fetch: FetchType<Res>,
  config?: ReqConfig<Res>,
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Res>({} as Res);
  const { manual, init, onError, onSuccess, onRepeat } = {
    ...defConfig,
    ...config,
  };

  const handleError = (error: Error) => {
    console.log(error);
    setLoading(false);
    if (onError && typeof onError === 'function') {
      onError(error as Error);
    }
  };

  const query = useCallback(
    async (...params: any[]) => {
      try {
        if (loading) {
          onRepeat?.();
          console.log('不要重复请求');
          return;
        }
        setLoading(true);
        setData({} as Res);
        try {
          const res = await fetch(...params);
          if (res?.success) {
            setData(res?.data);
            setLoading(false);
            if (typeof onSuccess === 'function') {
              onSuccess?.(res.data);
            }
            return;
          }
          setData({} as Res);
          setLoading(false);
        } catch (error) {
          return handleError(error as Error);
        }
      } catch (error) {
        return handleError(error as Error);
      }
    },
    [fetch, config],
  );

  useEffect(() => {
    if (manual) {
      query(init);
    }
  }, []);

  return { loading, data, query };
};

export default useRequest;
