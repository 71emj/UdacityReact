export function throttle(fn, timeout) {
  let timeoutId = null;
  return value => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(value), timeout);
  };
}

export function searchBy(field, array) {
  return (value, limit = 1) =>
    array.filter(item => item[field].match(value)).slice(0, limit);
}

export function bindEvent(fn, emitter) {
  return evt => {
    const { name, value } = evt.target
    fn({ name, value, emitter });
  }
}

export function eq(item1, item2) {
  return item1 === item2;
}
