给定一个字符串`s`，找到`s`中最长的回文子串。你可以假设`s`的最大长度为1000。

**示例 1：**
```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

**示例 2：**
```
输入: "cbbd"
输出: "bb"
```

#### 中心扩散
思路：遍历字符串，在每次遍历中由i开始往两侧比较寻找回文串：

```js
function find_longest_palindrome (s) {
  let max = 1

  // 记录回文串的开始索引
  let start = 0
  const len = s.length
  for (let i = 0; i < len; i++) {
    // 剩余长度小于max的一半，则不可能找到比max更长的回文串
    // 优化点1
    if (len - i < max / 2) {
      break
    }
    let left = i
    let right = i

    // 连续相同字母必定是回文串的一部分，直接跳过，优化点2
    while (right < len - 1 && s[right] === s[right + 1]) {
      // 而不必向前考虑，因为之前的字符已经计算过
      right++	            
    }

    // 优化点3
    i = right

    // 从i中间往两侧比较
    while (left > 0 && right < len - 1 && s[left - 1] === s[right + 1]) {
      left--
      right++
    }
    if (right - left + 1 > max) {
      max = right - left + 1
      start = left
    }
  }
  return s.substr(start, max);
}
```

时间复杂度$O(n^2)$，双循环。

#### 动态规划
- 如果一个字符串的头尾两个字符都不相等，那么这个字符串一定不是回文串
- 如果一个字符串的头尾两个字符相等，才有必要继续判断下去
  - 如果里面的子串是回文，整体就是回文串
  - 如果里面的子串不是回文串，整体就不是回文串

用`dp[i][j]`表示子串`s[i..j]`是否为回文子串，根据上述逻辑可以得到状态转移方程：

```js
dp[i][j] = dp[i+1][j-1] && s[i] === s[j]
```

代码：

```js
function find_longest_palindrome (s) {
  const len = s.length
  const dp = new Array(len)
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len)
    dp[i][i] = true
  }
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      // dp[i, j] = 
    }
  }

}
```
