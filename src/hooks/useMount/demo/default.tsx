import React from 'react';
import { useMount } from 'yxhooks';

export default function App() {
  const handleMessage = () => alert('message');
  useMount(handleMessage);
  return <div className="App">好戏开始了！</div>;
}
