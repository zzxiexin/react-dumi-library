import type { TableProps } from 'antd/es/table';
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
declare const useTableQuery: (fetch: FetchType, options?: OptionsType) => UseTableQueryType;
export default useTableQuery;
