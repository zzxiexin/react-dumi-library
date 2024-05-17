---
nav:
  title: hooks
title: useMount
group:
  title: 基础hook
demo:
  cols: 2
---

### 介绍

`useMount` 是一个在组件首次挂载时执行的hook;

### 默认用法

`useMount` 的参数是一个fn，可以用来首次挂载时执行的函数，简单使用如下：

```js
const handleMessage = () => alert('message');
useMount(handleMessage);
```

<code src="./demo/default.tsx"></code>

### API

| 参数     | 说明                 | 类型       | 默认值 |
| -------- | -------------------- | ---------- | ------ |
| function | 挂载时需要执行的函数 | () => void | --     |
