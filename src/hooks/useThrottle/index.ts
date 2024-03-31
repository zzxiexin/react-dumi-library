type Fn = (...args: any[]) => void;
type Throttle = number;

const getSeconds = (date) => {
  if (date) {
    return new Date(date).getTime() / 1000;
  }
  return Math.floor(Date.now() / 1000);
};

const useThrottle = (fn: Fn, throttle: Throttle = 1) => {
  let timer: any = Date.now() / 1000;
  return function (...args: any[]) {
    if (getSeconds(Date.now()) - timer > throttle) {
      fn(...args);
      timer = Date.now() / 1000;
    }
  };
};

export default useThrottle;
