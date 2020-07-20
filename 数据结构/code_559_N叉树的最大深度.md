给定一个`N`叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

例如，给定一个`3叉树`:

![3叉树](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/narytreeexample.png)

我们应返回其最大深度，`3`。

**说明:**
- 树的深度不会超过 1000。
- 树的节点总不会超过 5000。

### 递归
```js
function maxDepth (root) {
  if (!root) return 0
  let max = 0
  for (let i = 0; i < (root.children || []).length; i++) {
    // 深度优先
    max = Math.max(maxDepth(root.children[i]), max)
  }
  return 1 + max
}
```
