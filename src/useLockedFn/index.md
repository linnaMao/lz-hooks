---
group:
  title: Hooks
  path: /hooks
---

# useLockedFn

用于给异步函数增加竞态锁，防止并发执行

## 代码演示

### 基本用法

<code src='./demo' desc='避免重复提交，在响应后才能进行下一次的请求。' />

## API

```javascript
const useLockedFn(fn);
```
