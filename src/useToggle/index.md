---
nav:
  title: Hooks
  path: /
group:
  title: Hooks
  path: /
---

# useToggle

用于两个状态之间来回切换的函数, boolean 也可以用来做

## 代码演示

<code src='./demo' />

## API

```javascript
const [state, { toggle, setLeft, setRight }] = useToggle(defaultValue);
```

### Params

| 参数         | 说明                     | 类型      | 默认值  |
| ------------ | ------------------------ | --------- | ------- |
| defaultValue | 可选项，传入默认的状态值 | `boolean` | `false` |

### Result

| 参数    | 说明     | 类型      |
| ------- | -------- | --------- |
| state   | 状态值   | `boolean` |
| actions | 操作集合 | `Actions` |

### Actions

| 参数     | 说明                                              | 类型                        |
| -------- | ------------------------------------------------- | --------------------------- |
| toggle   | 触发状态更改的函数,可以接受一个可选参数修改状态值 | `(value?: boolean) => void` |
| setTrue  | 设置状态值为 true                                 | `() => void`                |
| setFalse | 设置状态值为 false                                | `() => void`                |
