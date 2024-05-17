---
nav:
  title: hooks
title: useUnmount
group:
  title: 基础hook
demo:
  cols: 2
---

### 介绍

`useUnmount` 是组件被卸载是触发操作的hook。

### 默认用法

`useUnmount`简单使用如下：

```js
useUnmount(() => {});
```

<code src="./demo/default.tsx"></code>

### API

| 参数 | 说明       | 类型       | 默认值 |
| ---- | ---------- | ---------- | ------ |
| fn   | 执行的函数 | () => void | --     |
