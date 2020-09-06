给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

> 一个二叉树每个节点的左右两个子树的高度差的绝对值不超过1。

**示例 1:**
```
给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。
```

**示例 2:**
```
给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。
```

### 自顶向下
```js
function isBalanced (root) {
  if (!root) return true
  // 先序遍历
  return 
    && Math.abs(length(root.left) - length(root.right)) <= 1
    && isBalanced(root.right)
    && isBalanced(root.left)
}

function length (root) {
  if (!root) return 0
  return 1 + Math.max(length(root.left), length(root.right))
}
```

### 自底向上
```js
function isBalanced (root) {
  returrn recur(root) != -1
}

function recur(root) {
  if (!root) return 0
  // 后序遍历
  const left = recur(root.left)
  if (left === -1) return -1
  const right = recur(root.right)
  if (right === -1) return -1
  if (Math.abs(left- right) <= 1) {
    return Math.max(left, right)
  } else {
    return - 1
  }
}
```
