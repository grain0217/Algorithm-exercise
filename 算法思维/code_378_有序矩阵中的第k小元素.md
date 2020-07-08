给定一个`n x n`矩阵，其中每行和每列元素均按升序排序，找到矩阵中第`k`小的元素。
请注意，它是排序后的第`k`小元素，而不是第`k`个不同的元素。

**示例：**
```
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

返回 13。
```

#### 归并排序
```js
// todo
```

#### 二分查找
```js
function kthSmallest (matrix, k) {
  const n = matrix.length
  let left = matrix[0][0]
  let right = matrix[n-1][n-1]
  while (left < right) {
    const mid = (left + right) >> 1
    const numberSmallerThMid = check(matrix, mid)
    if (numberSmallerThMid >= k) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

// 计算 矩阵中「不大于mid的元素的个数」
function check (matrix, mid) {
  const n = matrix.length
  let i = n - 1, j = 0 // 从左下角开始查找
  let num = 0
  while (i >= 0 && j < n) {
    if (matrix[i][j] <= mid) {
      // num 的递增公式容易出错
      // matrix[i][j] <= mid， 由于有序矩阵的性质，当前元素上方的元素均不大于mid，这一列满足条件的元素个数为「i+1」
      // = 包含，不大于
      num = num + i + 1
      j++
    } else {
      i--
    }
  }
  return num
}
```

时间复杂度`O(n)`。
