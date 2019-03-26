1. Promise基本方法，模拟实现
2. [x] call和apply模拟实现bind
```js
function myBind (fn, context) {
  return function (...args) {
    fn.apply(context, args);
  }
}
```
3. [x] redux原理，手写简易框架
```js
function createStore (reducer) {
  let state = undefined;
  let listeners = [];
  const getState = () => state;
  const subscribe = listen => {
    let isExit = listeners.includes(listen);
    if (!isExit) listeners.push(listen);
    return (() => {
      listeners = listeners.filter(l => l !== listen);
    });
  }
  const dispatch = action => {
    state = reducer(state, action);
    // 添加判断变化的逻辑，有变化调用以下代码
    listeners.forEach(listener => listener());
  }
  dispatch();
  return { getState, dispatch, subscribe };
}
function todoApp (state = { todos: [] }, action = {}) {
  switch(action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, action.todo ]
      };
    default:
      return state;
  }
}
let store = createStore(todoApp);
console.log(store.getState());
store.subscribe(() => {
  console.log('subscribe', store.getState());
});
store.dispatch({ type: 'ADD', todo: '面试'});
```
4. 科里化，缓存过程图
5. new一个对象的过程
6. [x] 父子组件通信方式（v-on:value, v-bind:change, v-model）
7. [x] 非父子组件通信方式
```js
// 方式一
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('show', v => console.log(`Show: ${v}`));
emitter.emit('show', 'Hello World!');

// 方式二
var Bus = new Vue();
Bus.$on('show', v => console.log(`Show: ${v}`));
Bus.$emit('show', 'Hello World!');

// 方式三（Vue2.4.0）
// inheritAttrs: false
// v-bind="$attrs"
```
8. [x] css水平垂直居中的方式
```css
/*行内元素*/
.box {
  text-align: center;
}

/*已知宽度的块级元素*/
/*1*/
.box {
  width: 200px;
  margin-left: auto;
  margin-right: auto;
}
/*2*/
.parent {
  display: block;
  position: relative;
}
.child {
  display: block;
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: 100px;
  margin-top: 100px;
}
/*未知宽度的块级元素*/
/*1*/
.parent {
  display: flex;
  justify-content: center;
  align-item: center;
}
/*2*/
.parent {
  display: block;
  position: relative;
}
.child {
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
```
9. 浏览器进程、线程
10. [x] 对象的深拷贝
```js
let obj = { a: 1, b: 2 };
let copy1 = JSON.parse(JSON.stringify(obj));
let copy2 = Object.keys(obj).reduce((prev, cur) => {
  prev[cur] = obj[cur];
  return prev;
}, {});
```
11. [x] 字符串去掉尾部空格
```js
function clearTail (str) {
  let list = str.split('');
  while(list.length >= 0 && list[list.length - 1] === ' ') {
    list.splice(list.length - 1);
  }
  return list.join('');
}
```
12. 定时器函数什么时候放到异步队列中的
```js
// 浏览器在其他线程中执行异步程序，当异步程序完成时将回调函数放入任务队列中
```
13. 快速排序算法
14. js数据类型，隐式类型转换，判断
15. [x] 闭包的理解
```js
// 可以访问另一个函数中变量的函数
```
16. 内存泄漏的原因
17. [x] react生命周期
```js
// 装载
{
  constructor (props) {
    // used for initial state and super(props)
  },
  getDerivedStateFromProps (props, state) {
    // return an object to update the state
    // or null to update nothing
    return null;
  },
  render () {},
  componentDidMount () {}
}

// 更新
{
  getDerivedStateFromProps (props, state) {
    // return an object to update the state
    // or null to update nothing
    return null;
  },
  shouldComponentUpdate (nextProps, nextState) {
    // compare this.state with nextState
    // and this.props with nextProps
    // to decide update or not
    // default
    return true;
  },
  render () {},
  getSnapshotBeforeUpdate (prevProps, prevState) {
    // before rendered output is committed to DOM
    // the return result will be the third argument for componentDidUpdate
    // the example: snapshot = this.ref.current.scrollHeight - this.ref.current.scrollTop
    return null;
  },
  componentDidUpdate (prevProps, prevState, snapshot) {
    // after component is updated
    // can call network fetch here
    // combine with snapshot
  }
}

// 卸载
{
  componentWillUnmount () {}
}

// 出错
{
  getDerivedStateFromError (error) {
    // catch js error anywhere
    // the return will be props in next render to show the fallback UI
    return { hasError: true };
  },
  componentDidCatch (error, info) {
    // info.componentStack
  }
}
```
18. vue生命周期
```js
{
  beforeCreate () {
    // 实例初始化，数据未obserer、事件未配置
  },
  created () {
    // 实例化，数据、事件配置完成，$el不可见，未挂载
  },
  beforeMount () {

  },
  mounted () {},
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  errorCaptured () {}
}
```
19. vue注册封装一个组件
20. http头属性设置，header
21. 虚拟dom如何操作
22. vue如何处理跨域
23. 如何避免重新渲染
24. cdn
25. [x] 网络协议（物链网输会示用，tcp传输层，ip网络层，http应用层）
26. [x] post和get区别
```js
/**
 * 传递参数的方式不同，参数长度、类型限制不同
 * 字面上理解get用于请求资源，post用于传输资源
 */
```
27. 