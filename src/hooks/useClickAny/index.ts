import { MutableRefObject, useEffect } from 'react';

type Fn = () => void;

export default function useClickAnyway(fn: Fn, ref: MutableRefObject<any>) {
  function listenFun(event: any) {
    if (ref?.current?.contains(event?.target)) {
      fn?.();
    }
  }
  useEffect(() => {
    window.addEventListener('click', function (event) {
      listenFun(event);
      return () => {
        this.removeEventListener('click', listenFun);
      };
    });
  }, []);
}
