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

暴力求解：
```js
function longest_substring (str1, str2) {
  const len1 = str1.length
  const len2 = str2.length
  let len_substr = 0
  let pos = 0
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      let x = i
      let y = j
      while (str1[x] == str2[y] && x < len1 && y < len2) {
        x++
        y++
      }
      if (x - i > len_substr) {
        len_substr = x - i
        pos = i
      }
    }
  }
  return str1.substr(pos, len_substr);
}
```
s
时间复杂度：$O(n^3)$，空间复杂度是$O(1)$。

---

动态规划求解，找到状态转移方程：
```js
d[i, j] = str[i] == str[j] ? d[i - 1, j - 1] + 1 : 0
```

其中`d[i, j]`表示以`str1[i]`、`str2[j]`结尾的字符串的最长公共子字符串的长度。

```js
const dp_longest_substring = (str1, str2) => {
  const len1 = str1.length
  const len2 = str2.length
  let arr = new Array(len1)
  let len_substr = 0
  let pos = 0
  for (let i = 0; i < len1; i++) {
    arr[i] = new Array(len2)
    for (let j = 0; j < len2; j++) {
      if (str1[i] == str2[j]) {
        if (i == 0 || j == 0) {
          arr[i][j] = 1
        } else {
          arr[i][j] = arr[i-1][j-1] + 1
        }
        if (arr[i][j] > len_substr) {
          len_substr = arr[i][j]
          pos = i - len_substr + 1
        }
      } else {
        arr[i][j] = 0
      }
    }
  }
  return str1.substr(pos, len_substr)
}
```

时间复杂度$O(n^2)$，空间复杂度$O(n^2)$。注意到每次比较只用到相邻两行，可以将空间复杂度优化到$O(n)$。
