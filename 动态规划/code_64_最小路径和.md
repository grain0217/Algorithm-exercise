给定一个包含非负整数的`m x n`网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

**说明**：每次只能向下或者向右移动一步。

**示例:**
```
输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。
```

### 动态规划
```js
function minPathSum = (grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = []
  for (let i = 0; i < m; i++) {
    dp[i] = []
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        if (j === 0) {
          dp[0][0] = grid[0][0]
        } else {
          dp[0][j] = dp[0][j - 1] + grid[0][j]
        }
      } else {
        if (j === 0) {
          dp[i][0] = dp[i - 1][0] + grid[i][0]
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
      }
    }
  }
  return dp[m - 1][n - 1]
}
```

时间复杂度`O(mn)`，空间复杂度`O(mn)`。

### 一维动态规划