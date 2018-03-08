export function match(item, pattern) {
  return !!item.match(pattern);
}

export function escapeRegExp(string) {
  return string.replace(/[|\\{}()[\]^$+*?.]/, "\\$&");
}

export function not(fn) {
  return !(fn);
}

export function search(array) {
  console.log(array);
  return (prop, value) => array.filter(elem => match(elem[prop], value));
}

export function searchOthers(array) {
  return (prop, value) => array.filter(elem => not(match(elem[prop], value)));
}
