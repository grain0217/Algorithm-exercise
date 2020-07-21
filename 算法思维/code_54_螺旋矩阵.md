给定一个包含`m x n`个元素的矩阵（`m`行, `n`列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

**示例 1:**
```
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
```

**示例 2:**
```
输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
```

### 找规律
```js
function spiralOrder (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const midRow = m >> 1
  const midCol = n >> 1
  const output = []
  let i = 0, j = 0
  if (n > m) {
    while (j < midCol) {
      for (let p = j; p < n - j - 1; p++) {
        output.push(matrix[j][p])
      }
      for (let p = j; p < m - j - 1; p++) {
        output.push(matrix[p][n - j - 1])
      }
      for (let p = n - j - 1; p > 0; p--) {
        output.push(matrix[m - j - 1][p])
      }
      for (let p = m - j - 1; p > 0; p--) {
        output.push(matrix[p][j])
      }
    }
    j++
  } else {}
  return output
}
```
