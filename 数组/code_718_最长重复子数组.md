给两个整数数组`A`和`B`，返回两个数组中公共的、长度最长的子数组的长度。

**示例 1:**
```
输入:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
输出: 3
解释: 长度最长的公共子数组是 [3, 2, 1]。
```

**说明:**
- 1 <= len(A), len(B) <= 1000
- 0 <= A[i], B[i] < 100

#### 暴力求解：
```js
function findLength (A, B) {
  const len1 = A.length
  const len2 = B.length
  let max = 0
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      let k = 0
      if (A[i] === B[j]) {
        while (A[i + k] === B[j + k] && (i + k < len1) && (j + k < len2)) {
          k++
        }
        if (k > max) {
          max = k
        }
      } else {
        continue
      }
    }
  }
  return max
}
```

时间复杂度：$O(n^3)$，空间复杂度是$O(n^2)$。

#### 动态规划
首先，找到状态转移方程：
```js
d[i, j] = A[i] == B[j] ? d[i - 1, j - 1] + 1 : 0
```

其中`d[i, j]`表示以`A`、`B`中分别以`A[i]`、`B[j]`为尾元素的众多子数组的最长公共长度。

```js
function findLength (A, B) => {
  const len1 = A.length
  const len2 = B.length
  let max = 0
  const arr = new Array()
  for (let i = 0; i < len1; i++) {
    arr[i] = new Array()
    for (let j = 0; j < len2; j++) {
      if (A[i] === B[j]) {
        // A[i] === B[j] + i === 0 || j === 0  -> arr[i][j] = 1
        if (i * j === 0) {
          arr[i][j] = 1
        } else {
          arr[i][j] = arr[i - 1][j - 1] + 1
        }
        if (arr[i][j] > max) {
          max = arr[i][j]
        }
      } else {
        arr[i][j] = 0
      }
    }
  }
  return max
}
```

时间复杂度$O(mn)$，空间复杂度$O(mn)$，`m`，`n`为亮哥数组的长度。注意到每次比较只用到相邻两行，可以将空间复杂度优化到$O(Math.max(m, n))$。
