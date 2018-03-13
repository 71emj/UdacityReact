export function capitalize (str = "") {
  const toUpper = char => char.toUpperCase();
  return str == str + "" ? str.replace(/\b\w/gi, toUpper) : "";
}
