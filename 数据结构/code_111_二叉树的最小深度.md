给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

**说明**: 叶子节点是指没有子节点的节点。

**示例:**
```
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回它的最小深度  2.
```

### 递归
在本题中，二叉树最小深度递归有一个容易忽略的结束条件：当根节点左右孩子有一个为空时，返回不为空的孩子节点的深度
```js
function minDepth (root) {
  if (!root) return 0
  if (!root.right) return 1 + minDepth(root.left)
  if (!root.left) return 1 + minDepth(root.right)
  return 1 + Math.min(minDepth(root.left) + minDepth(root.right))
}
```

### 广度优先BFS
```js
function minDepth (root) {
  if (!root) return 0
  const queue = [root]
  let minDeep = 0

  while(queue.length) {
    let len = queue.length

    while (len--) {
      const first = queue.shift()

      // 左右孩子均为空，则该节点为叶子节点，最小深度找到
      if (!first.left && !first.right) return minDeep + 1

      // 左右孩子有一个不存在，该节点不是叶子节点
      if (!first.left || !first.right) {
        queue.push(first.left || first.right)
      } else {
        queue.push(first.left)
        queue.push(first.right)
      }
    }
    minDeep++
  }
}
```

### 深度优先DFS
```js
function minDepth (root) {
  if (!root) return 0
  const stack = [[root, 1]]
  let minDeep = Number.MAX_SAFE_INTEGER

  while (stack.length) {
    const [node, deep] = stack.pop()

    // 在每个叶子节点上比较最小深度
    if (!node.left && !node.right) minDeep = Math.min(minDeep, deep)
    if (node.left) stack.push([node.left, deep + 1])
    if (node.right) stack.push([node.right, deep + 1])
  }
  return minDeep
}
```
