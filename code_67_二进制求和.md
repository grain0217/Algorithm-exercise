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
  let i = 1
  let overflow = 0
  const sum = []
  const len1 = a.length
  const len2 = b.length
  while (i < len1 + 1 || i < len2 + 1) {
    const _sum = +(a.charAt(len1 - i) || 0) + (+(b.charAt(len2 - i) || 0)) + overflow
    if (_sum === 3) {
      sum.unshift(1)
    } else if (_sum === 2) {
      sum.unshift(0)
      overflow = 1
    } else if (_sum === 1) {
      sum.unshift(1)
      overflow = 0
    } else {
      sum.unshift(0)
    }
    i++
  }
  if (overflow) sum.unshift(1)
  return sum.join('')
}
```