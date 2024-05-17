---
nav:
  title: hooks
title: useDebounce
group:
  title: 基础hook
demo:
  cols: 2
---

### 介绍

`useDebounce` 是一个处理函数防抖的hook。

### 用法

`useDebounce` 的第一个参数是一个fn，第二个参数则是防抖的时间, 第三个参数则是需要函数执行绑定的对象, 防止函数内部需要调用this,简单使用如下：

<code src="./demo/default.tsx"></code>

通过默认代码展示可以看到只有最后一次的b函数调用被执行了, 之前的两次调用都被取消了.

### 指定this

<code src="./demo/this.tsx"></code>

### API

| 参数  | 说明                 | 类型                     | 默认值 |
| ----- | -------------------- | ------------------------ | ------ |
| fn    | 需要做防抖处理的函数 | (...args: any[]) => void | --     |
| delay | 防抖的时间           | number                   | 1s     |
| obj   | this对象             | object                   | window |
