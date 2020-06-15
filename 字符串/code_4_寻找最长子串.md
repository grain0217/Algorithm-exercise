给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。

![最长无重复字符子串](https://pic.downk.cc/item/5ee6fc24c2a9a83be5c94052.jpg)

```js
function find_longest_substr (str) {
  let map = {}
  let temp_len = 0
  let max_len = 0
  for (let i = 0; i < str.length; i++) {
    let temp = str[i]
    if (map[temp] != undefined) {
      if (max_len < temp_len) {
        max_len = temp_len
      }
      map = {}
      temp_len = 0
    }
    map[temp] = 1
    temp_len++
  }
  return max_len > temp_len ? max_len: temp_len // 最后一次的temp_len未比较赋值给max_len
}
```

这题直接的想法仍然是暴力求解，用map维护一个已存在的字符串。思路和第一题有点像。