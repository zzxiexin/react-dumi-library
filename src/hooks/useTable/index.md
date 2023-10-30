---
nav:
  title: Hooks
title: useTable
group:
  title: 基础hook
demo:
  cols: 2
---

### 介绍

`useTable` 是用来处理Antd表单请求的hook，包含了请求表单时loading、分页设置、表单数据返回等一些处理。

接下来让我们先从两个最简单的例子认识 `useTable`。

### 默认用法

`useTable` 的第一个参数是一个异步函数，即用来请求表单数据的接口，在组件初次加载时，会自动触发该函数执行。同时自动管理表单的 `loading` , `pagination` , `data` 等状态。
getTable为异步请求函数;

```js
const { tableProps, queryTable } = useTable(getTable);
```

<code src="./demo/default.tsx"></code>
