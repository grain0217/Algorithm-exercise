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

### 找规律，按层模拟
```js
function spiralOrder (matrix) {
  // 边界情况
  if (!matrix || !matrix.length || !matrix[0] || !matrix[0].lengtg) return matrix

  const rows = matrix.length
  const columns = matrix[0].length
  const output = []
  let left = 0,
    right = columns - 1,
    top = 0,
    bottom = rows - 1

  while (left <= right && top <= bottom) {
    if (left === right) {
      for (let i = top; i <= bottom; i++) {
        output.push(matrix[i][right])
      }
      break
    } else if (top === bottom) {
      for (let i = left; i <= right; i++) {
        output.push(matrix[top][i])
      }
      break
    } else {
      // 从左向右
      for (let i = left; i <= right; i++) {
        output.push(matrix[top][i])
      }
      // 从上向下
      for (let i = top + 1; i <= bottom; i++) {
        output.push(matrix[i][right])
      }
      // 从右向左
      for (let i = right - 1; i >= left + 1; i--) {
        output.push(matrix[bottom][i])
      }
      // 从下向上
      for (let i = bottom; i > top; i--) {
        output.push(matrix[i][left])
      }
    }
    left++
    right--
    top++
    bottom--
  }
  return output
}
```
