// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc
function isAValidMessage(message) {
  if (message == "") { return true } else if (!message) { return false }
  return message.match(/(\d+)([a-zA-Z]*)/g)
    .map(x => x.match(/(\d+)([a-zA-Z]*)/))
    .map(x => !x[0] || x[2].length == parseInt(x[1]))
    .indexOf(false) == -1
}