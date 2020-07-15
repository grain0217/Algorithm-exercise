给定一个只包含`'('`和`')'`的字符串，找出最长的包含有效括号的子串的长度。

**示例 1:**
```
输入: "(()"
输出: 2
解释: 最长有效括号子串为 "()"
```

**示例 2:**
```
输入: ")()())"
输出: 4
解释: 最长有效括号子串为 "()()"
```

### 暴力求解
从长的子串开始遍历，检测到的第一个有效括号子串输出其长度：
```js
function longestValidParentheses (s) {
  let max = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i; j--) {
      if ((j - i) % 2 !== 0) continue
      const str = s.substring(i, j)
      if (isValidParentheses(str)) {
        if (j - i > max) max = j - i
      }
    }
  }
  return max
}

function isValidParentheses (s) {
  if (s[0] === ')') return false
  const stack = []
  for (let i in s) {
    if (s.charAt(i) === '(') {
      stack.push('(')
    } else {
      const top = stack.pop()
      if (top === '(') {
        continue
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
```

时间复杂度`O(n^3)`，空间复杂度`O(n^2)`。

### 动态规划
寻找状态：我们以`dp[i]`表示字符串中以第`i`位为结尾的子串的最长有效括号的长度，那么状态转移方程为：
```js
dp[i] = s.charAt(i) === '('
  ? 0
  : s.charAt(i - dp[i - 1] - 1) === '('
    ? dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]
    : 0
```

代码：
```js
function longestValidParentheses (s) {
  let max = 0
  const len = s.length
  const dp = []
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      dp[i] = 0
    } else {
      dp[i] = s.charAt(i) === '('
        ? 0
        : s.charAt(i - dp[i - 1] - 1) === '('
          ? dp[i - 1] + 2 + (dp[i - dp[i - 1] - 2] || 0)
          : 0
      if (dp[i] > max) max = dp[i]
    }
  }
  return max
}
```