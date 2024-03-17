---
nav:
  title: hooks
title: useTable
group:
  title: 基础hook
demo:
  cols: 2
---

### 介绍

`useTable` 是一个处理table的请求且返回table所需数据的hook。

### 默认用法

`useTable` 的第一个参数是一个异步函数，用来请求table的接口且返回指定结构{data: TData[], total: number}的异步方法;  
第二个参数则是基础的一些配置项, 支持tableProps的所有参数, 如需要设置默认分页参数pagination: { current: 1, pageSize: 20 }, 其他参数依次配置即可：

<code src="./demo/default.tsx"></code>

### 配置项设置

配置项支持tableProps的所有属性, 常用的pagination、bordered、footer、title等, 同时又新增了isRowSelect、 remeberRow属性,这两个属性主要用于设置table的选中项,以及对于分页是否需要记住选择项

<code src="./demo/options.tsx"></code>

### API

| 参数    | 说明                    | 类型                                                                           | 默认值         |
| ------- | ----------------------- | ------------------------------------------------------------------------------ | -------------- |
| fetch   | 异步请求table数据的方法 | (current: number, pageSize: number) => Promise<{data: TData[], total: number}> | TData = any    |
| options | 请求的配置项            | TableProps & { manual: boolean,isRowSelect: boolean, remeberRow:boolean }      | 默认值参考下方 |

    {
      "manual": false,
      "isRowSelect": false,
      "remeberRow": false,
      "pagination": {
        "current": 1,
        "pageSize": 10,
        "showSizeChanger": true,
        "showQuickJumper": true,
        "pageSizeOptions": ["10", "25", "50", "100"]
      }
    }
