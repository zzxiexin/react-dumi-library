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
export type FetchType<TParams extends any[], TData> = (...params: TParams) => Promise<TData>;
declare const useQuery: <TParams extends any[], TData>(fetch: FetchType<TParams, TData>, config?: TConfig) => {
    loading: boolean;
    data: TData;
    query: (...params: TParams) => Promise<void>;
};
export default useQuery;
