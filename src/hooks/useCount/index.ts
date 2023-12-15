import { useCallback, useState } from 'react';

export interface USE_COUNT_TYPES {
  count: number;
}

const useCount = (props: USE_COUNT_TYPES) => {
  const [count, setCount] = useState(props.count);

  const start = useCallback(() => {
    const timer = setInterval(() => {
      setCount((preCount) => {
        if (preCount === 1) {
          clearInterval(timer);
        }
        return preCount - 1;
      });
    }, 1000);
  }, [props.count]);
  return { count, start };
};

export default useCount;
