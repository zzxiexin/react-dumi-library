import React, { useRef } from 'react';
import { useClick } from 'yxhooks';

export default function App() {
  const ref = useRef(null);
  const { count } = useClick(ref);
  return (
    <div className="App">
      <div ref={ref} style={{ background: 'gray', width: 100, height: 100 }}>
        我被点击了多少次？
      </div>
      被点击了{count}次
    </div>
  );
}
