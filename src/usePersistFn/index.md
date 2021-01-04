---
group:
  title: Hooks
  path: /hooks
---

# usePersistFn

用于持久化一个函数，使得它的引用永远不会变化, 但是依旧能获取到最新值

## 代码演示

<code src='./demo' />

## API

```javascript
const fn = usePersistFn(() => {});
```
