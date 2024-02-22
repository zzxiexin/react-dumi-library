import { MutableRefObject, useEffect, useState } from 'react';

const useClick = (dom: MutableRefObject<any>) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    window.addEventListener('click', (e) => {
      e.stopPropagation();
      if (dom?.current?.contains(e.target)) {
        setCount((prevCount) => prevCount + 1);
      }
    });
    return () => {
      window.removeEventListener('click', () => {});
    };
  }, []);
  return {
    count,
  };
};

export default useClick;
