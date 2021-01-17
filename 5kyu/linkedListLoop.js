// https://www.codewars.com/users/xavbergeron/completed_solutions
function loop_size(node) {
  let size = 0

  let curNode = node

  const map = new WeakMap()

  while (true) {
    if (map.get(curNode)) return size - map.get(curNode) + 1

    map.set(curNode, ++size)
    curNode = curNode.getNext()
  }
}
