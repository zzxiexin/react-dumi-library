---
nav:
  title: hooks
title: useThrottle
group:
  title: 基础hook
demo:
  cols: 2
---

### 介绍

`useThrottle` 是一个处理函数截流的hook。

### 用法

`useDebounce` 的第一个参数是一个fn，第二个参数则是节流的时间，简单使用如下：

<code src="./demo/default.tsx"></code>

通过默认代码展示可以看到只有最后一次的b函数调用被执行了, 之前执行时间没有超过5s的都被取消了, 第一个5s执行后,在之后超过5s的时间内又执行了第二次

### API

| 参数 | 说明                   | 类型                     | 默认值 |
| ---- | ---------------------- | ------------------------ | ------ |
| fn   | 需要做节流处理的函数   | (...args: any[]) => void | --     |
| time | 防抖的时间             | number                   | 1s     |
| obj  | 防抖函数执行的this指向 | object                   | window |
