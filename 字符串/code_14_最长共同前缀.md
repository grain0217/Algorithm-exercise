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

先以第一个字符串`s`作为最大公共前缀，遍历`s`，比较数组中的每一位是否与`s`的当前位相同，不同则返回：
```js
function longestCommonPrefix (strs) {
  if (!strs || !strs.length) return ''
  const len = strs.length
  for (let i = 0; i <  strs[0].length; i++) {
    for (let j = 1; j < len; j++) {
      if (strs[j].charAt(i) === strs[0].charAt(i)) {
        continue
      } else {
        return strs[0].substring(0, i)
      }
    }
  }
  return strs[0]
}
```
