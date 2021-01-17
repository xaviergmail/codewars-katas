function dblLinear(n) {
  const u = []//[1, 3, 4, 7, 9, 10, 13, 15, 22]

  // BST-like
  const insertLocation = (x) => {
    if (u.length < 1) {
      u.push(x)
      return -1
    }

    if (u.length < 2) {
      return x < u[0] ? 0 : 1
    }

    let i = Math.floor(u.length / 2)
    let low = 0
    let high = u.length

    // while (true) {
    for (let _ = 0; _ < 10000; _++) {
      if (u[i] == x) return -1
      if (high - low == 1) {
        if (x > u[low]) {
          i++
        }
        return i
      }

      if (x > u[i]) {
        low = Math.max(low, i) /*=*/
      } else {
        high = Math.min(high, i) /*=*/
      }
      i = low + Math.floor((high - low) / 2) /*=*/
    }
  }

  const add = (x) => {
    const idx = insertLocation(x)
    if (idx != -1) u.splice(idx, 0, x)
  }

  add(1)

  let i = 0
  while (u.length <= n * 4) {
    const x = u[i++] || 0
    add(x * 2 + 1)
    add(x * 3 + 1)
  }

  return u[n]
}

console.log(dblLinear(10))