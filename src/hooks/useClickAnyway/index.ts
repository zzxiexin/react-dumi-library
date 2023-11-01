import { Ref, useEffect } from 'react';

type ClickHandler<T extends Event = Event> = (event: T) => void;
type RefType = Ref<HTMLDivElement>;

function useClickAntway<T extends Event = Event>(
  click: ClickHandler<T>,
  ref: RefType,
) {
  useEffect(() => {
    const handleClick = (event: Event) => {
      if (!(ref as any)?.current) {
        throw new Error('ref current is null');
      } else {
        if (!(ref as any)?.current?.contains(event.target as HTMLDivElement)) {
          click(event as T);
        }
      }
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [click, ref]);
}

export default useClickAntway;
