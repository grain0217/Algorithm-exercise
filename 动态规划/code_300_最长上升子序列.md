给定一个无序的整数数组，找到其中最长上升子序列的长度。

**示例:**
```
输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
```

**说明:**
- 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
- 你算法的时间复杂度应该为 `O(n^2)`。

进阶: 你能将算法的时间复杂度降低到 `O(nlogn)` 吗?

### 动态规划
```js
function lengthOfLIS (nums) {
  if (!nums || !nums.length) return 0
  const len = nums.length
  let max = 0
  const dp = new Array()
  for (let i = 0; i < len; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    max = Math.max(dp[i], max)
  }
  return max
}
```

时间复杂度`O(n^2)`，空间复杂度`O(n)`。

难点还是在于寻找状态以及状态转移方程，与`code_718_最长公共子数组`一样，以后缀为出发点，在这里我们将以`nums[i]`为结尾的上升子序列的长度定义为状态，对于`0 <= j < i`，当`nums[i]> nums[j]`时，`dp[i]`等于`dp[1]`、`dp[2]`...`dp[j]`中的最大值加`1`；而当`nums[i]`比它之前的所有元素都小时，有`dp[i]===1`，因此需要在`i`的每次循环初始为`dp[i]`赋值为1。

### 贪心+二分
