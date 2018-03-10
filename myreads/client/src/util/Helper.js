export function throttle(fn, timeout) {
  let timeoutId = null;
  return value => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(value), timeout);
  };
}

export function isType(target, type) {
  return type === "array"
    ? Array.isArray(target)
    : typeof target === type;
}

export function searchBy(field, array) {
  return (value, limit = 1) =>
    array.filter(item => item[field].match(value)).slice(0, limit);
}

export function bindMethod(fn, caller) {
  return evt => {
    const { name, value } = evt.target
    fn({ name, value, caller });
  }
}
