---
nav:
  title: Hooks
  path: /
group:
  title: Hooks
  path: /
---

# useEffectUpdate

用于只有在依赖更新的时候才会执行的函数，与 useEffect 相比少了首次渲染

## 代码演示

<code src='./demo' />

## API

```javascript
const fn = useEffectUpdate(() => {}, []);
```
