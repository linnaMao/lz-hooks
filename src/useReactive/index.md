---
group:
  title: Hooks
  path: /hooks
---

# useReactive

定义数据不需要用 useState，可以对数据直接进行操作，实现数据响应式操作体验

## 代码演示

### 基本用法

<code src='./demo/demo2.tsx' />

## 注意事项

利用`useReactive`包裹的代理对象引用是不会变的，所以在使用 use hooks 的时候，依赖为该代理对象是不会重新执行的，依赖只能为变化的变量。

## API

```javascript
const state = useReactive({});
```
