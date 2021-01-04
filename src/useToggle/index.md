---
group:
  title: Hooks
  path: /hooks
---

# useToggle

用于两个状态之间来回切换的函数, boolean 也可以用来做

## 代码演示

<code src='./demo' />

## API

```javascript
const [state, { toggle, setLeft, setRight }] = useToggle(defaultValue);
```
