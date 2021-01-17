// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
function duplicateEncode(word) {
  const lookup = {}
  return word
    .toLowerCase()
    .match(/./g)
    .map(x => { lookup[x] = (lookup[x] || 0) + 1; return x })
    .map(x => lookup[x] > 1 ? ")" : "(")
    .join("")
}