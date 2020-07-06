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

先以第一个字符串`s`作为最大公共前缀，遍历数组中的字符串与`s`比较。
```js
function longestCommonPrefix (strs) {
  const len = strs.length
  // 边界条件
  if (len === 0) return '' 
  let max = strs[0].length
  let maxPre = strs[0]
  for (let i = 1; i < len; i++) {
    const str = strs[i]
    const length = Math.min(max, str.length)
    let j = 0
    for (; j < length; j++) {
      if (maxPre.charAt(j) != str.charAt(j)) break
    }
    if (j < max) {
      max = j
    }
  }
  return maxPre.substr(0, max)
}
```

时间复杂度`O(n^2)`。