---
nav:
  title: Hooks
  path: /
group:
  title: Hooks
  path: /
---

# useClickAway

点击目标元素意外的区域

## 代码演示

<code src='./demo' title='基础用法' />
<code src='./demo/index1' title='支持多个DOM对象' />

## API

```javascript
useClickAway(onClickAway: (e) => void, ref | [ref, ref1....]);
```

## Params

| 参数        | 说明          | 类型        | 是否必传 | 默认值 |
| ----------- | ------------- | ----------- | -------- | ------ |
| onClickAway | 触发事件方法  | (e) => void | 是       |        |
| refs        | ref，支持多个 | Array       | 是       |        |
