给定一个`N`叉树，返回其节点值的前序遍历。

例如，给定一个3叉树:

![3叉树](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/narytreeexample.png)

返回其前序遍历: [1,3,5,6,2,4]。

### 递归
```js
function preorder (root) {
  const output = []

  function preOrderNode (node) {
    if (!node) return
    output.push(node.val)
    for (let key in node.children) {
      preOrderNode(node.children[key])
    }
  }

  preOrderNode(root)
  return output
}
```
