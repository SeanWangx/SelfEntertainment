function Event () {
  this._events = Object.create(null)
  this.on = function (event, fn, context) {
    this._events[event] = function () {
      fn.call(context)
    }
  }
  this.off = function (event) {
    this._events[event] = null
  }
  this.once = function (event, fn, context) {
    let _this = this
    this._events[event] = function () {
      fn.call(context)
      _this.off(event)
    }
  }
  this.emit = function (event) {
    let fn = this._events[event]
    if (fn) {
      fn()
    }
  }
}

let evt = new Event()
let obj = {
  name: 'obj',
  foo () {
    let context = this
    evt.once('show', function () {
      console.log(this.name)
    }, context)
  }
}
let obj2 = {
  bar () {
    evt.emit('show')
  }
}
obj.foo()
obj2.bar()
obj2.bar()