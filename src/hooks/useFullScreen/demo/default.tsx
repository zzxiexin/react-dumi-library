import React from 'react';
import { useFullScreen } from 'yxhooks';

export default function App() {
  const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] =
    useFullScreen();
  return (
    <div className="App">
      当前是否全屏幕{isFullscreen ? '是' : '否'}
      <button onClick={enterFullscreen}>开启全屏</button>
      <button onClick={exitFullscreen}>退出全屏</button>
      <button onClick={toggleFullscreen}>切换全屏</button>
    </div>
  );
}
