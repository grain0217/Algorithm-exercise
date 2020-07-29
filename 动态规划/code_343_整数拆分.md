给定一个正整数`n`，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

**示例 1:**
```
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。
```

**示例 2:**
```
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
```

**说明:** 你可以假设`n`不小于`2`且不大于`58`。

### 动态规划
定义`dp[n]`为正整数`n`拆分得到的最大乘积：
```js
function integerBreak (n) {
  const dp = [null, null, 1, 2]
  for (let i = 4; i <= n; i++) {
    const mid = n >> 1
    let max = 0
    for (let j = 1; j < mid; j++) {
      // i - j 可以继续拆分也可以选择不拆分
      if (max < j * Math.max(dp[i - j], i - j)) {
        max = j * Math.max(dp[i - j], i - j)
      }
    }
    dp[i] = max
  }
  return dp[n]
}
```
