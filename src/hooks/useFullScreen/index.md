---
nav:
  title: hooks
title: useFullScreen
group:
  title: 基础hook
demo:
  cols: 2
---

### 介绍

`useFullScreen` 是一个让浏览器全屏的hook。

### 默认用法

`useFullScreen` 返回的第一个参数是isFullscreen, 告诉当前的状态是否是全屏, 第二个参数则是 { enterFullscreen, exitFullscreen, toggleFullscreen }, 三个函数分别代表着全屏、退出全屏、全屏和非全屏切换

### 举例

<code src="./demo/default.tsx"></code>

### API
