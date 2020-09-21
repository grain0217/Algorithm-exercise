给定一个正整数`n`，生成一个包含`1`到`n^2`所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

**示例:**
```
输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```

### 找规律
```js
function generateMatrix (n) {
  const output = []
  for (let m = 0; m < n; m++) {
    output.push([])
  }
  let i = 0
  let number = 1
  while (number <= n * n) {
    if (number === n * n) {
      output[i][i] = number
      return output
    }
    for (let j = i; j < n - i - 1; j++) {
      output[i][j] = number++
    }
    for (let j = i; j < n - i - 1; j++) {
      output[j][n - i - 1] = number++
    }
    for (let j = n - i - 1; j > i; j--) {
      output[n - i - 1][j] = number++
    }
    for (let j = n - i - 1; j > i; j--) {
      output[j][i] = number++
    }
    i++
  }
  return output
};
```
