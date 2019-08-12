### KMP算法
> 给定一个主串（以 S 代替）和模式串（以 P 代替），要求找出 P 在 S 中出现的位置，此即串的模式匹配问题。

[如何更好的理解和掌握 KMP 算法? - 逍遥行的回答 - 知乎](
https://www.zhihu.com/question/21923021/answer/37475572)

首先是构造出用于回退的数组：

```
const generateNext = pattern => {
  const arr = []
  let max_len = 0
  for (let i = 0; i < pattern.length; i++) {
    while (max_len > 0 && p[i] != p[max_len]) {
      max_len = arr[max_len - 1]
    }
    if (p[i] === p[max_len]) {
      max_len++
    }
    arr[i] = max_len
  }
  return arr
}
```

```
const findIndex = (s, p) => {
  const next = generateNext(p)
  const positions = []
  let count = 0
  while(let i = 0; i < s.length; i++) {
    while (count > 0 && s[i] != p[count]) {
      count = next[count - 1]
    }
    if (s[i] === p[count]) {
      count++
    }
    if (count === p.length) {
      positions.push(i - count + 1)
      count = next(count - 1)
    }
  }
  return positions
}
```