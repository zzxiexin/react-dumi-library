type Fn = (...args: any[]) => void;
type Delay = number;

const useDebounce = (fn: Fn, delay: Delay = 1) => {
  let timer: any = null;
  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay * 1000);
  };
};

export default useDebounce;
