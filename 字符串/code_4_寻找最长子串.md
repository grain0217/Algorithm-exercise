给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。

![最长无重复字符子串](https://pic.downk.cc/item/5ee6fc24c2a9a83be5c94052.jpg)

滑动窗口：

![滑窗](https://pic.downk.cc/item/5ee87bb02cb53f50fe9b37ca.png)

```js
function find_longest_substr (str) {
  const length = str.length
  let max = 0

  // 哈希集合，记录每个字符是否出现过，相当于滑窗
  const set = new Set()

  // 右指针，初始值为 0，相当于在字符串的第一个字符，还没有开始移动
  let rk = 0

  for (let i = 0; i < length; ++i) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      set.delete(str.charAt(i - 1));
    }
    while (rk < length && !set.has(str.charAt(rk))) {
      // 无重复字符时移动右指针，出现重复则移动左指针——进入下一次循环
      set.add(str.charAt(rk));
      ++rk;
    }

    if (max < rk - i) max = rk - i
  }
  return max
}
```
