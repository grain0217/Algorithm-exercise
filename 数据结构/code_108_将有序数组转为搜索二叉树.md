将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树**每个节点**的左右两个子树的高度差的绝对值不超过`1`。

**示例:**

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
```
      0
     / \
   -3   9
   /   /
 -10  5
```

中序遍历，总是选择中间位置数字作为根节点：
```js
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function sortedArrayToBST (nums) {
  return helper(nums, 0, nums.length - 1)
}

function helper (nums, left, right) {
  if (left > right) return null
  const mid = left + right >> 1

  const node = new TreeNode(nums[mid])
  node.left = helper(nums, left, mid - 1)
  node.right = helper(nums, mid + 1, right)
  return node
}
```