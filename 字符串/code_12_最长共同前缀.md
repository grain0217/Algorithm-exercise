编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

**示例 1:**
```
输入: ["flower","flow","flight"]
输出: "fl"
```

**示例 2:**
```
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

**说明:**
```
所有输入只包含小写字母 a-z 。
```

先找到数组中长度最短的字符串`s`，遍历数组中的字符串与`s`比较。

```js
function longestCommonPrefix (strs) {
  const shortestStr = shortest_str(strs)
  let max = shortestStr.length
  const len = strs.length
  let temp = max
  for (let i = 0; i < len; i++) {
    const str = strs[i]
    for (let j = 0; j < max; j++) {
      if (shortestStr.charAt(j) != str.charAt(j)) {
        temp = j
        break
      }
    }
    if (temp < max) {
      max = temp
    }
  }
  return shortestStr.substr(0, max)
}

function shortest_str (strs) {
  const len = strs.length
  if (!len) return ''
  let min = strs[0].length
  let shortestStr = strs[0]
  for (let i = 0; i < len; i++) {
    const temp = strs[i].length
    if (temp < min) {
      min = temp
      shortestStr = strs[i]
    }
  }
  return shortestStr
}
```

时间复杂度`O(n^2)`。