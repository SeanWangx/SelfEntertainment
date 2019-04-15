const debounce = (fn, delay = 100) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (fn) fn(...args);
    }, delay);
  }
}
const throttle = (fn, delay = 100) => {
  let timer = null;
  return (...args) => {
    if (timer === null) {
      timer = setTimeout(() => {
        timer = null;
        if (fn) fn(...args);
      }, delay);
    }
  }
}
