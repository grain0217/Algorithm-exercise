给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。

**示例 1:**
```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

**示例 2:**
```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

**示例 3:**
```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

#### 滑动窗口

![滑窗](https://pic.downk.cc/item/5ee87bb02cb53f50fe9b37ca.png)

```js
function find_longest_substr (str) {
  const len = str.length
  let max = 0

  // 哈希集合，记录每个字符是否出现过，相当于滑窗
  const set = new Set()

  // 右指针，初始值为 0，相当于在字符串的第一个字符，还没有开始移动
  let rk = 0

  for (let i = 0; i < len; ++i) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      set.delete(str.charAt(i - 1));
    }
    while (rk < len && !set.has(str.charAt(rk))) {
      // 无重复字符时移动右指针，出现重复则移动左指针——进入下一次循环
      set.add(str.charAt(rk));
      ++rk;
    }

    if (max < rk - i) max = rk - i
  }
  return max
}
```

时间复杂度`O(n)`，左指针和右指针分别遍历整个字符串一次。哈希结构用于方便删除左边界字符以及插入`rk`，`rk`就地右移，不用重置，避免了双循环。
