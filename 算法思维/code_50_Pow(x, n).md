实现`pow(x, n)`，即计算`x`的`n`次幂函数。

**示例 1:**
```
输入: 2.00000, 10
输出: 1024.00000
```

**示例 2:**
```
输入: 2.10000, 3
输出: 9.26100
```

**示例 3:**
```
输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
```

**说明:**
- -100.0 < x < 100.0
- n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。

### 递归
```js
function myPow (x, n) {
  if (n === 0) return 1
  if (n > 0) {
    return myPow(x, n - 1) * x
  } else {
    return 1 / myPow(x, -n)
  }
}
```

栈溢出，加上分治：
```js
function myPow (x, n) {
  if (n === 0) return 1
  if (n < 0) {
    return 1 / myPow(x, -n)
  } else {
    if (n % 2) return myPow(x, n - 1) * x
    return myPow(x * x, n / 2)
  }
}
```

### 二进制
```js
function myPow (x, n) {
  if (n === 0) return 1
  if (n < 0) return  1 / myPow(x, -n)
  let result = 1
  while (n > 0) {
    if (n & 1) {
      result = result * x
    }
    x = x * x
    n = n >> 1
  }
  return result
}
```

边界case：2147483648 >> 1 === -1073741824
```js
function myPow (x, n) {
  if (n === 0) return 1
  if (n < 0) return (1 / x) * myPow((1 / x), -(n + 1))
  let result = 1
  while (n > 0) {
    if (n & 1) {
      result = result * x
    }
    x = x * x
    n = n >> 1
  }
  return result
}
```
