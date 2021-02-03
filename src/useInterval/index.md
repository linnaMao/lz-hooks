---
nav:
  title: Hooks
  path: /
group:
  title: Hooks
  path: /
---

# useInterval

用于在函数组件使用和销毁定时器的函数

## 代码演示

<code src='./demo' />

## API

```javascript
const [run, start, cancel] = useInterval(fn, delay, options: { immediate });
```
