给定一个非空二叉树，返回其最大路径和。

本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。

**示例 1:**
```
输入: [1,2,3]

       1
      / \
     2   3

输出: 6
```

**示例 2:**
```
输入: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

输出: 42
```

```js
function maxPathSum (root) {
	const resultArr = []

	function helper (node) {
		if (node == null) return 0

		let leftPathVal = Math.max(helper(node.left), 0)
		let rightPathVal = Math.max(helper(node.right), 0)

		resultArr.push(leftPathVal + rightPathVal + node.val)
		return Math.max(leftPathVal, rightPathVal) + node.val
	}

	resultArr.push(helper(root))
	return Math.max.apply(null,resultArr)
}
```
