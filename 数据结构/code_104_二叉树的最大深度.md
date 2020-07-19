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
  // 深度优先DFS
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
```

### 广度优先BFS
```js
function maxDepth = (root) {
  if (!root) return 0
  const queue = [root]
  let maxDeep = 0

  while(queue.length) {
    let len = queue.length
    // 用len将本层节点遍历全
    while (len--) {
      const node = queue.shift()
      if (first.left) node.push(first.left)
      if (first.right) node.push(first.right)
    }
    maxDeep++
  }
  return maxDeep
}
```

### 深度优先DFS的非递归实现
```js
function maxDepth = (root) {
  if (!root) return 0
  let maxDeep = 0
  const stack = [[root, 1]]

  while (stack.length) {
    const [node, deep] = stack.pop()
    if (node.left) {
      stack.push([node.left, deep + 1])
    }
    if (node.right) {
      stack.push([node.right, deep + 1])
    }
    // 在每个叶子节点上比较最大深度
    if (!node.left && !node.right) maxDeep = Math.max(maxDeep, deep)
  }

  return maxDeep
}
```

一般广度优先借助队列实现，而非递归的深度优先借助栈实现。
