import React, { useRef } from 'react';
import { useCopy } from 'yxhooks';

export default function App() {
  const ref = useRef(null);
  const { text } = useCopy(ref);
  console.log(text);
  return (
    <div className="App">
      <div ref={ref} style={{ background: 'gray', width: 100, height: 100 }}>
        我是需要复制的内容
      </div>
      {text}
    </div>
  );
}
