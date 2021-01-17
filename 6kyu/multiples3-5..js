// https://www.codewars.com/kata/514b92a657cdc65150000006
function solution(number){
  let sum = 0;
  for (let i=1, x=3, y=5; x < number; i++ && (x=3*i) && (y=5*i)) sum += x + (y < number ? (y%3 > 0 ? y : 0) : 0)
  return sum
}