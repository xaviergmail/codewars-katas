// https://www.codewars.com/kata/525c65e51bf619685c000059
function cakes(recipe, available) {
  let max = Infinity;
  for (ingredient in recipe) {
    max = Math.min(max, Math.floor((available[ingredient] || 0) / recipe[ingredient]))
  }
  
  return max
}