
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位，数组中每个元素只存储单个数字。

你可以假设除了整数`0`之外，这个整数不会以零开头。

**示例 1:**
```
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
```

**示例 2:**
```
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
```

### 转成整数计算
```js
function plusOne (digits) {
  const number = +digits.join('') + 1
  return String(number).split('').map(e => +e)
}
```

有溢出的问题。

### 位运算
```js
function plusOne (digits) {
  const len = digits.length
  let overflow = false
  for (let i = len - 1; i >= 0; i--) {
    if (overflow) {
      if (digits[i] === 9) {
        digits[i] = 0
        overflow = true
      } else {
        digits[i] = digits[i] + 1
        overflow = false
      }
    } else {
      return digits
    }
  }
  if (overflow) digits.unshift(1)
  return digits
}
```