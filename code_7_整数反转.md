给出一个`32`位的有符号整数，你需要将这个整数中每位上的数字进行反转。

**示例 1:**
```
输入: 123
输出: 321
```

**示例 2:**
```
输入: -123
输出: -321
```

**示例 3:**
```
输入: 120
输出: 21
```

注意: 假设我们的环境只能存储得下`32`位的有符号整数，则其数值范围为`[−2^31, 2^31 − 1]`。请根据这个假设，如果反转后整数溢出那么就返回`0`。

#### 转为字符串暴力求解
```js
function reverse (x) {
  let ret = []
  while (x % 10 === 0 && x!= 0) {
    x = x / 10
  }
  const str = x.toString()
  const len = str.length
  if (x <  0) {
    for (let j = len - 1; j > 0; j--) {
      ret.push(str[j])
    }
    ret.unshift('-')
  } else {
    for (let j = len - 1; j >= 0; j--) {
      ret.push(str[j])
    }
  }
  const result = Number(ret.join(''))
  // 边界条件
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0
  } else {
    return result
  }
}
```

时间复杂度`O(n)`，空间复杂度`O(n)`，`n`为数字十进制位数。

#### 位运算
```js
function reverse (x) {
  let isNegtive
  if (x < 0) {
    isNegtive
  }
  let reverseNum = 0
  while (x) {
    const reminder = x % 10
    reverseNum = reverseNum * 10 + reminder
    x = (x - reminder) / 10
  }
  const ret = isNegtive ? -reverseNum : reverseNum
  if (ret > Math.pow(2, 31) - 1 || ret < -Math.pow(2, 31)) return 0
  return ret
}
```

时间复杂度`O(n)`，空间复杂度`O(1)`。
