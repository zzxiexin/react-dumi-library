---
nav:
  title: hooks
title: useCopy
group:
  title: 基础hook
demo:
  cols: 2
---

### 介绍

`useCopy` 是一个右键复制dom内容的hook。

### 默认用法

`useCopy` 的第一个参数是一个ref，用来指向需要右机复制的元素，简单使用如下：

```markdown
<div ref={ref} style={{ background: "gray", width: 100, height:100 }}>
  我是需要复制的内容
</div>
```

```js
const { text } = useCopy(ref);
```

<code src="./demo/default.tsx"></code>

### API

| 参数 | 说明     | 类型    | 默认值 |
| ---- | -------- | ------- | ------ |
| ref  | 自动请求 | boolean | true   |
