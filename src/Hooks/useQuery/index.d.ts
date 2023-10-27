/* eslint-disable @typescript-eslint/no-explicit-any */
export type TConfig = {
  isManual?: boolean;
  successKey?: string;
  errorKey?: string;
  dataKey?: string;
};

export type FetchType<TParams extends any[], TData> = (
  ...params: TParams
) => Promise<TData>;
