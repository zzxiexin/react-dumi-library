import { Ref } from 'react';
type ClickHandler<T extends Event = Event> = (event: T) => void;
type RefType = Ref<HTMLDivElement>;
declare function useClickAntway<T extends Event = Event>(click: ClickHandler<T>, ref: RefType): void;
export default useClickAntway;
