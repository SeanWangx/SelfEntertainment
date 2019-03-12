let obj = {
  a: 1
}

function transfer (o) {
  let res = {};
  Object.keys(o).map(item => {
    o[item] = o[item];
    Object.defineProperty(res, item, {
      get () {
        console.log(`getter ${o[item]}`);
        return o[item];
      },
      set (v) {
        console.log(`setter ${v}`);
        o[item] = v;
      }
    })
    return null;
  });
  return res;
}

let obj2 = transfer(obj);

obj2.a;
obj2.a = 2;
obj2.a;
