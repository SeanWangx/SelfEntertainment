# vue和react等框架
1. vue工作原理
2. vue和react的区别（js, css方面）
3. vue数据响应
4. react实现原理
5. diff实现机制
6. redux实现以及数据流向
7. 复杂数据对象深度对比实现
8. vue设计核心原理（虚拟dom实现，渲染机制实现， 双向数据监听， 模板引擎具体实现）
9. vue怎样实现数据双向绑定
10. vue敏感字符过滤，如何设置
11. react生命周期及作用
12. 微信小程序生命周期
13. vue中的rem问题
14. vue中可优化部分
15. vue的computed实现
16. vue中getter和setter相关（配合Object.defineProperty）
17. vue router原理
18. vue异步更新$nextTick（Promise.then\MessageChannel\settimeout(fn, 0)）

# css
1. 移动适配实现真正的1px
2. 布局（各种类型）
3. 自适应
4. 盒子模型
5. overflow、position、css3
6. 单文本溢出，多文本溢出
```css
.ellipsis {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	/*设置不换行即为单行溢出，否则多行为最后一行溢出...*/ 
}
```
7. 间距塌陷
8. 点击锚点实现动画滑动
9. 九宫格布局
10. flex、grid
11. viewport各个属性作用
12. 控制用户不可缩放
13. 弹出层如何设计
14. 透明度问题
15. 点透问题
16. 4:3块元素布局
17. 水平垂直布局
18. 无限旋转动画
19. 三角形
20. 

# js
1. 深拷贝
2. 判断字符串类型
3. es6特性
4. 事件循环
5. promise，settimeout顺序（task，schedule）
```js
/**
 * task: script\setTimeout
 * microTask: Promise\mutate(setAttribute)
 */
```
6. js实现跨域（jsonp）
```javascript
function getJsonp (v) { return v; }
eval('getJsonp({val: 1})') // { val: 1 }
```
7. node通信机制
8. node内存优化
9. v8垃圾回收（new space和old space实现原理）
10. webpack、loader实现机制和原理
11. webpack如何快速打包
```js
/**
 * ParallelUglifyPlugin代替UglifyJsPlugin并行压缩js代码
 * babel-loader开启缓存
 * 不需要打包的插件库使用<script>标签引入
 * 模块引入，如`import debounce from 'lodash/debounce'`
 */
```
12. 如何做到tree shaking
13. 手写发布订者模式、观察者模式
14. 严格模式
15. 作用域链算法
16. bind、apply和call的区别以及实现
17. 事件轮训机制
18. array扁平化实现
```javascript
[1, [2, 3], [4, [5, 6]]] // --> [1, 2, 3, 4, 5, 6]
```
19. 多个url同时请求，顺序输出实现（Promise.all）
20. 闭包
21. this指向问题
22. 栈：1s1， 2s3，4s2
23. Object.defineProperty的缺点（无法hack）
24. 正则
25. ==和===区别
26. url解析函数，得到参数（正则）
27. 实现去抖函数，节流函数
28. 判断数组方法
```js
let obj = [];
obj instanceof Array;
obj.constructor === Array;
Array.isArray(obj);
Object.prototype.toString.call(obj) === '[object Array]';
```
29. for in和for of区别
```js
// 相同点：都是迭代一些东西
/**
 * 不同点：迭代方式不同
 * for...in语句以原始插入顺序第二代对象的可枚举属性（关键为属性）
 * for...of语句遍历可迭代对象定义要迭代的数据（关键为数据）
 */
```
30. fetch和ajax区别
31. localstorage和sessionstorage区别
```js
/**
 * 相同点：都属于webStorage，只存在浏览器中
 * 不同点：ls生命周期永久，ss生命周期仅当前会话有效
 */
```
32. 转化非类数组
```js
Array.prototype.slice.call(likeArray);
```
33. 数组与类数组区别
34. 事件代理的实现(冒泡)
35. 事件循环机制Event Loop
36. js渲染堵塞的处理方法（async、defer、尽量靠后放置）
37. 

# network
1. http和https区别
```js
/**
 * https需要ca申请证书，需要收费
 * http明文传输，https有ssl协议加密传输
 * 端口不同，http 80，https 443
 */
```
2. OSI模型
```js
/**
 * 应用层
 * 表示层
 * 会话层
 * 传输层
 * 网络层
 * 链路层
 * 物理层
 */
```
3. http协议
4. TCP协议
5. 跨域原理以及解决方案
6. http状态码
7. http缓存机制
8. tcp如何保证有效传输
9. https具体流程
10. http 1.0, 1.1, 2.0区别
11. url构成
12. 同源策略(同协议，同域名，同端口)
13. cors请求
```js
// Access-Control-Allow-Origin:允许访问的域
// Access-Control-Allow-Methods:允许访问的请求方法
```
14. csrf如何实现
15. CORS nginx的跨域处理
16. 

# os
1. 进程与线程
2. 并发与并行
3. 

# algorithm
1. 快排
2. 字符串最多字符挑选函数
```javascript
function count(s) {
	let len = s.length;
	let obj = {};
	for (let i = 0; i < len; i++) {
		if (obj[s[i]] === undefined) {
			obj[s[i]] = 1;
		} else {
			obj[s[i]]++;
		}
	}
	return Object.keys(obj).reduce((acc, cur) => {
		return obj[cur] > obj[acc] ? cur : acc;
	});
}
```
3. 选择排序
4. 

# other
1. 单文件应用与多文件应用
2. 网站优化
3. xss
4. 性能优化
5. 预编译
6. 浏览器渲染原理
7. cookie和session区别
8. amd和cmd的规范
9. cookie的安全设置
10. 
