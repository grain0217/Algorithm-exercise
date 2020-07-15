给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

但是下面这个`[1,2,2,null,3,null,3]`则不是镜像对称的:
```
    1
   / \
  2   2
   \   \
   3    3
```

**进阶：**
你可以运用递归和迭代两种方法解决这个问题吗？

### 递归
```js
function isSymmetric (root) {
  if (!root) return true
  return isSame(root.left, root.right)
}

function isSame (node1, node2) {
  if (!node1 && !node2) return true
  if (!node1 || !node2) return false
  if (node1.val !== node2.val) return false
  return isSame(node1.left, node2.right) && isSame(node1.right, node2.left)
}
```

### 迭代