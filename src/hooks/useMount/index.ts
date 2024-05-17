import { useEffect } from 'react';
/**
 *  组件加载执行回调
 *
 * @param {() => void} fn 加载执行的回调
 */

const useMount = function (fn: () => any) {
  useEffect(function () {
    if (fn && typeof fn === 'function') {
      fn?.();
    }
  }, []);
};

export default useMount;
