// https://www.codewars.com/kata/546f922b54af40e1e90001da
function alphabetPosition(text) {
  const positions = []
  for (let i=0; i < text.length; i++) {
    const c = text.charCodeAt(i)
    if (c >= 65 && c <= 90) {
      positions.push(c-65+1) 
    } else if (c >= 97 && c <= 122) {
      positions.push(c-97+1)
    }
  }
  return positions.join(' ');
}