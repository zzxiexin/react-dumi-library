import React, { useState } from 'react';
import { useMount } from 'yxhooks';

export default function App() {
  const [count, setCount] = useState(0);
  useMount(() => setTimeout(() => setCount(count + 1), 2000));
  return <div className="App">好戏开始了！count要变了 {count}</div>;
}
