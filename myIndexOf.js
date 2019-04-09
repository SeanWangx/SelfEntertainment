// 实现indexOf
Array.prototype.myIndexOf = function (searchValue, fromIndex = 0) {
  return this.reduce((prev, cur, index) => {
    if (prev === -1 && index >= fromIndex && cur === searchValue) {
      return index;
    } else {
      return prev;
    }
  }, -1);
}

let arr = [1, 2, 3, 1];
console.log(arr.indexOf(1, 1));
console.log(arr.myIndexOf(1, 1));