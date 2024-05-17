import { useState } from 'react';
type ValueType = [
  boolean,
  {
    enterFullscreen: () => void;
    exitFullscreen: () => void;
    toggleFullscreen: () => void;
  },
];
export default function useFullScreen(): ValueType {
  const [isFullscreen, setIsFullscreen] = useState(false);
  function toggleScreen(fullScreen: boolean): any {
    const element = document.documentElement;
    setIsFullscreen(fullScreen);
    if (fullScreen) {
      if (!document.fullscreenElement) {
        element.requestFullscreen().catch((err) => {
          console.error('进入全屏模式失败:', err);
        });
      }
    }
    if (!fullScreen) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
  }

  const enterFullscreen = () => toggleScreen(true);
  const exitFullscreen = () => toggleScreen(false);
  const toggleFullscreen = () => toggleScreen(!isFullscreen);
  return [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }];
}
