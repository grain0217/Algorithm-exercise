给定一个只包含数字的字符串，复原它并返回所有可能的IP地址格式。

有效的IP地址正好由四个整数（每个整数位于0到255之间组成），整数之间用`'.'`分隔。

**示例:**
```
输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]
```

### 回溯
```js
function restoreIpAddresses (s) {
  const output = []
  if (!s || s.length < 4) return output
  const len = s.length
  function backtrack (combination, left) {
    if (left === 0 && combination.length === 4) {
      output.push(combination.join('.'))
    } else if (combination.length < 4 && left > 0) {
      const start = len - left
      backtrack(combination.concat(s.substr(start, 1)), left - 1)
      if (+s.charAt(start) === 0) return
      if (left >= 2) {
        backtrack(combination.concat(s.substr(start, 2)), left - 2)
      }
      // 三个数字组合小于256
      if (left >= 3 && +s.substr(start, 3) < 256) {
        backtrack(combination.concat(s.substr(start, 3)), left - 3)
      }
    }
  }
  backtrack([], len)
  return output
}
```
