---
nav:
  title: Hooks
  path: /
group:
  title: Hooks
  path: /
---

# useStorage

用于 sessionStorage 或者 localStorage 存储数据时使用的函数

## 代码演示

<code src='./demo' title='localStorage' />
<code src='./demo/index1' title='sessionStorage' />

## API

```javascript
const [state, newSetState, removeState] = useStorage(
  name,
  'localStorage' | 'sessionStorage',
);
```
