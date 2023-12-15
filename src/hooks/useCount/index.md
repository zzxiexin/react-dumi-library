---
nav:
  title: hooks
title: useCount
group:
  title: 基础hook
demo:
  cols: 2
---

### 介绍

`useCount` 是一个异步请求管理的Hook，React 项目中的网络请求场景使用 `useCount` 就够了。

onError 默认是alert，当请求出现错误时，会alert出错误，如想要自定义错误的处理，传入onError，该方法会接受请求时catch到的error；onSuccess则会接受请求成功后的数据和success；

<code src="./demo/default.tsx"></code>
上面两个例子，我们演示了 `useRequest` 最基础的用法，接下来的我们开始逐个详细介绍 `useRequest` 的特性。

### API

| 参数      | 说明     | 类型      | 默认值                              |
| --------- | -------- | --------- | ----------------------------------- |
| isAuto    | 自动请求 | boolean   | true                                |
| initParam | 初始参数 | any       | {}                                  |
| onSuccess | 成功回调 | undefined | (arg: ResponseData['data']) => void |
| onError   | 失败回调 | undefined | (error) => void                     |
