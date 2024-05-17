---
nav:
  title: hooks
title: useClickAny
group:
  title: 基础hook
demo:
  cols: 2
---

### 介绍

`useClickAny` 是一个指定dom被点击需要触发指定操作的hook。

### 默认用法

`useClickAny` 的第一个参数是指定dom被点击后触发的函数，第二个参数用来指向需要指定的dom元素，简单使用如下：

```markdown
<div ref={ref} style={{ background: "gray", width: 100, height:100 }}>
  我被点击了多少次？
</div>
```

```js
const [count, setCount] = useState(0);
useClickAny(
  setCount((preCount) => preCount + 1),
  ref,
);
```

<code src="./demo/default.tsx"></code>

### API

| 参数 | 说明          | 类型                  | 默认值 |
| ---- | ------------- | --------------------- | ------ |
| fn   | 执行的函数    | () => void            | --     |
| ref  | 指定的dom元素 | MutableRefObject<any> | --     |
