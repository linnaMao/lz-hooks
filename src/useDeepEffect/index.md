---
nav:
  title: Hooks
  path: /hooks
group:
  title: Hooks
  path: /hooks
---

# useDeepEffect

对于 useEffect 中的依赖只能进行浅比较，引用类型当做依赖会一直改变，该 hook 就是解决了深比较的 useEffect

## 代码演示

<code src='./demo' />

## API

```javascript
const fn = useDeepEffect(() => {}, deps);
```
