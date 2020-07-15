翻转一棵二叉树。

**示例：**

输入：
```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

输出：
```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

树结构：
```js
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
```

### 递归
```js
function invertTree (root) {
  if (!root) return root
  const left = invertTree(root.left)
  root.left = invertTree(root.right)
  root.right = left
  return root
}
```

### 迭代
```js
function invertTree (root) {
}
```
