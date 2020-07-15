给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

**相邻的结点**在这里指的是`下标`与`上一层结点下标`相同或者等于`上一层结点下标 + 1`的两个结点。

例如，给定三角形：
```
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
```

自顶向下的最小路径和为`11`（即，2 + 3 + 5 + 1 = 11）。

**说明：**
如果你可以只使用`O(n)`的额外空间（`n`为三角形的总行数）来解决这个问题，那么你的算法会很加分。

### 动态规划
寻找状态，我们定义`dp[i][j]`为从三角形顶部到点`triangle[i][j]`的最小路径和，题目所要求的正是`dp[n - 1][j]`的最小值，`n`为三角形的层数。

由于到达每个点`triangle[i][j]`的路径只能由正上方的点`triangle[i - 1][j]`或`triangle[i - 1][j - 1]`而来，因此：
```js
dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j]
```

代码：
```js
function minimumTotal (triangle) {
  const dp = [[triangle[0][0]]]
  const len = triangle.length
  let min = Number.MAX_SAFE_INTEGER
  for (let i = 1; i < len; i++) {
    // j = 0
    dp[i] = [dp[i - 1][0] + triangle[i][0]]
    for (let j = 1; j <= i; j++) {
      // j = i 时 dp[i - 1][j] 不存在
      dp[i][j] = Math.min(dp[i - 1][j] === undefined ? min : dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j]
    }
  }
  for (let m = 0; m < triangle[len - 1].length; m++) {
    min = Math.min(min, dp[len - 1][m])
  }
  return min
}
```

时间复杂度`O(n^2)`，空间复杂度`O(n^2)`，`n`是三角形的层数。

### 动态规划 + 空间优化
在上述代码中，我们定义了一个`n`行`n`列的`dp`数组。

但是在实际递推中我们发现，计算`dp[i][j]`时，只用到了上一行的`dp[i - 1][j]`和`dp[i - 1][j - 1]`，对此我们可以仅使用两个一维数组进行优化——根据`i`的奇偶性交替使用`dp[i]`:
```js
function minimumTotal (triangle) {
  const dp = [[triangle[0][0]], []]
  const len = triangle.length
  let min = Number.MAX_SAFE_INTEGER
  for (let i = 1; i < len; i++) {
    const cur =  i % 2
    // j = 0
    dp[cur] = [dp[1 - cur][0] + triangle[i][0]]
    for (let j = 1; j < i; j++) {
      dp[cur][j] = Math.min(dp[1 - cur][j], dp[1 - cur][j - 1]) + triangle[i][j]
    }
    // j = i
    dp[cur][i] = dp[1 - cur][i - 1] + triangle[i][i]
  }
  for (let m = 0; m < triangle[len - 1].length; m++) {
    min = Math.min(min, dp[(len - 1) % 2][m])
  }
  return min
}
```

空间复杂度降为`O(n)`。
