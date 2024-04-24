type Fn = (...args: any[]) => void;
type Delay = number;

const useDebounce = (fn: Fn, delay: Delay = 1, obj: object = window) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(obj, ...args);
    }, delay * 1000);
  };
};

export default useDebounce;
