计算给定二叉树的所有左叶子之和。

**示例：**
```
    3
   / \
  9  20
    /  \
   15   7
```

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

### 递归
```js
function sumOfLeftLeaves (root) {
  if (!root) return 0
  function Traverse(root, isLeft) {
    if (!root) return 0
    if (isLeft) {
      if (!root.left && !root.right) return root.val
      return Traverse(root.right, false) + Traverse(root.left, true)
    } else {
      if (!root.left && !root.right) return 0
      return Traverse(root.right, false) + Traverse(root.left, true)
    }
  }
  return Traverse(root.left, true) + Traverse(root.right, false)
}
```
