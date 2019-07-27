找出一个字符串中最长的连续子串，输出这个子串的长度，
>要求：这个子串中没有重复的字符

比如：
>给定 abcabcbb，最长的子串为 abc，那么输出3

>给定bbbbb，最长的子串是 b，输出1

>给定pwwkew，最长的子串为wke，输出3

```
const find_longest_substr = str => {
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
  return max_len>temp_len ? max_len: temp_len // 最后一次的temp_len未比较赋值给max_len
}
```
这题直接的想法仍然是暴力求解，用map维护一个已存在的字符串。思路和第一题有点像。