给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

**说明**: 叶子节点是指没有子节点的节点。

**示例：**
```
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
```

### 递归
```js
function maxDepth = (root) {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
```

### 广度优先BFS
```js
function maxDepth = (root) {
  if (!root) return 0
  const queue = [root]
  let deep = 0

  while(queue.length) {
    let len = queue.length

    while (len--) {
      const first = queue.shift()
      if (first.left) queue.push(first.left)
      if (first.right) queue.push(first.right)
    }
    deep++
  }
  return deep
}
```