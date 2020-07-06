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

```js
function kthSmallest (matrix, k) {
  let row = 0
  const column = matrix.length
  while ((row + 1) * column < k) row++
  const index = k - row * column - 1
  return matrix[row][index]
}
```