给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为非空字符串且只包含数字1和0。

**示例 1:**
```
输入: a = "11", b = "1"
输出: "100"
```

**示例 2:**
```
输入: a = "1010", b = "1011"
输出: "10101"
```

**提示：**

- 每个字符串仅由字符 '0' 或 '1' 组成。
- 1 <= a.length, b.length <= 10^4
- 字符串如果不是 "0" ，就都不含前导零。

倒序遍历字符串，用数组依次存储每一位的和。

```js
function addBinary (a, b) {
  const len1 = a.length
  const len2 = b.length
  let i = len1 - 1, j = len2 - 1
  let flag = 0
  const ret = []
  while (i >= 0 || j >= 0) {
    const num1 = i >= 0 ? +a.charAt(i--) : 0
    const num2 = j >= 0 ? +b.charAt(j--) : 0
    const sum = num1 + num2 + flag
    if (sum === 3) {
      ret.unshift(1)
    } else if (sum === 2) {
      ret.unshift(0)
      flag = 1
    } else if (sum === 1) {
      ret.unshift(1)
      flag = 0
    } else {
      ret.unshift(0)
    }
  }
  if (flag) ret.unshift(1)
  return ret.join('')
}
```