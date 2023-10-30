import React, { useRef, useState } from 'react';
import { useClickAnyway } from 'react-ui-dumi-library';
export default function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useClickAnyway(() => setCount(count + 1), ref);
  return (
    <div>
      {count}
      <button ref={ref}>click</button>
    </div>
  );
}
