import React, { useState } from 'react';
import { useUnMount } from 'yxhooks';

const Child = () => {
  useUnMount(() => {
    console.log('被卸载了');
  });
  return <div>在这呢!</div>;
};

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>切换</button>
      {show && <Child />}
    </div>
  );
}
