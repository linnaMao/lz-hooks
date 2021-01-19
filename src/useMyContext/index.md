---
nav:
  title: Hooks
  path: /hooks
group:
  title: Hooks
  path: /hooks
---

# useMyContext

数据流，基于`React.createContext`和`useContext`进行了一层的封装，与 unstated-next 和 constate 不同的是，`Provider`利用高阶函数进行包裹，在使用的过程中不需要再重复写`Provider`

数据流我形象的必须为找地(`React.createContext`) -> 播种(`Provider`) -> 收割(`useContext`)

## 代码演示

### 使用 createContext

<code src='./demo/demo1' />

### 使用 unstated-next

<code src='./demo/demo2' />

### 使用 constate

<code src='./demo/demo3' />

## API

```javascript
const [useContext, withProvider] = createContext(() => {});
```
