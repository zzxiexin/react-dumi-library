---
nav:
  title: Hooks
title: useQuery
group:
  title: 基础hook
demo:
  cols: 2
---

### 介绍

`useQuery` 是一个异步请求管理的 Hooks，React 项目中的网络请求场景使用 `useQuery` 就够了。

接下来让我们先从两个最简单的例子认识 `useQuery`。

### 默认用法

`useQuery` 的第一个参数是一个异步函数，在组件初次加载时，会自动触发该函数执行。同时自动管理该异步函数的 `loading` , `data` , `query` 等状态。
getUsername为异步请求函数;

```js
const { data, query, loading } = useQuery(getUsername);
```

<code src="./demo/default.ts"></code>

### 手动触发

默认设置了 `options.isAuton = true`，则 useQuery 会默认执行，如果需要不自动触发的，可以在需要的地方手动调用query;

```js
const { data, query, loading } = useQuery(getUsername, {
  isAuto: false,
});
```

### 其他配置项

由于每个项目请求的返回的数据结构不一样，所以支持success、error相关字段配置；

```js
success: {
  flag: string[],
  msg: string[],
  dataKey: string[],
  callback: () => void
}
error: {
  msg: string[],
  callback: () => void
}
```

flag 用来定位标识请求成功的字段  
msg 用来定位标识请求成功或者失败的字段  
dataKey 用来定位标识请求成功后返回值的字段  
callback 用作请求成功或者失败后执行的方法

### 代码演示

<!-- prettier-ignore -->
<code src="./demo/default.tsx"></code>
<code src="./demo/options.tsx"></code>

上面两个例子，我们演示了 `useQuery` 最基础的用法，接下来的我们开始逐个详细介绍 `useQuery` 的特性。

### API

| 参数     | 说明                       | 类型                                                                                                                                   | 默认值 |
| -------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| isAuto   | 自动请求                   | boolean                                                                                                                                | true   |
| options? | 请求成功配置、请求失败配置 | success?: { msg: string[], flag?: string[], dataKey?: string[], callback?: () => void}, error: { msg: string[], callback: () => void } |
