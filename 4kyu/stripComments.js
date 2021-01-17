// https://www.codewars.com/kata/51c8e37cee245da6b40000bd
function solution(input, markers) {
  let m = markers.join('')
  let exp = new RegExp(`([^${m}]*)[${m}]?.*$`)
  return input.split('\n').map(x => x.replace(exp, "$1").trim()).join("\n")
  
};