import React from 'react';
import { useCount } from 'yxhooks';
export default function App() {
  const { start, count } = useCount({ count: 9 });
  return (
    <>
      <button onClick={start}>{count}</button>
    </>
  );
}
