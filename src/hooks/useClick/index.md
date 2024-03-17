---
nav:
  title: hooks
title: useClick
group:
  title: 基础hook
demo:
  cols: 2
---

### 介绍

`useClick` 是一个记录指定dom被点击的hook。

### 默认用法

`useClick` 的第一个参数是一个ref，用来指向需要被点击的dom元素，简单使用如下：

```markdown
<div ref={ref} style={{ background: "gray", width: 100, height:100 }}>
  我被点击了多少次？
</div>
```

```js
const { count } = useClick(ref);
```

<code src="./demo/default.tsx"></code>

### API

| 参数 | 说明                           | 类型                  | 默认值 |
| ---- | ------------------------------ | --------------------- | ------ |
| ref  | 需要被复制的内容的dom绑定的ref | MutableRefObject<any> | --     |
