import { useEffect } from 'react';
function useClickAntway(click, ref) {
  useEffect(function () {
    var handleClick = function handleClick(event) {
      if (!(ref !== null && ref !== void 0 && ref.current)) {
        throw new Error('ref current is null');
      } else {
        var _current;
        if (!(ref !== null && ref !== void 0 && (_current = ref.current) !== null && _current !== void 0 && _current.contains(event.target))) {
          click(event);
        }
      }
    };
    window.addEventListener('click', handleClick);
    return function () {
      window.removeEventListener('click', handleClick);
    };
  }, [click, ref]);
}
export default useClickAntway;