function Public () {
  this.subscribers = [];
  this.addSubscriber = function (subscriber) {
    let isExit = this.subscribers.some(fn => fn === subscriber);
    if (!isExit) this.subscribers.push(subscriber);
    return this;
  }
  this.deliver = function (data) {
    this.subscribers.forEach(fn => fn(data));
    return this;
  }
  this.removeSubscriber = function (subscriber) {
    this.subscribers = this.subscribers.filter(fn => fn !== subscriber);
    return this;
  }
}

//订阅者
let a = function (data) {
  console.log(`订阅者a收到订阅信息：${data}`);
}
let b = function (data) {
  console.log(`订阅者b收到订阅信息：${data}`);
}
let c = function (data) {
  console.log(`订阅者c收到订阅信息：${data}`);
}

let publicer = new Public();

publicer.addSubscriber(a).addSubscriber(b).addSubscriber(c);
// 发布
publicer.deliver('ssss');

// 退订
publicer.removeSubscriber(a);
publicer.deliver('gggg');
