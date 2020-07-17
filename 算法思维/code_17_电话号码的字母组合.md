给定一个仅包含数字`2-9`的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意`1`不对应任何字母。

![电话号码的字母组合](https://pic.downk.cc/item/5efd435914195aa594624c9b.png)

**示例:**
```
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

**说明:**
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

### 递归
```js
function letterCombinations (digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  // 每次递归取digits中最后一个数字
  const len = digits.length
  const digit = digits.charAt(len - 1)
  const chars = map[digit]
  const output = []

  // 边界情况
  if (!len) return output
  // 递归出口
  if (len === 1) return chars.split('')

  const _digits = digits.slice(0, -1)
  const _nextCombination = letterCombinations(_digits)
  _nextCombination.forEach(set => {
    for (let char of chars) {
      output.push(set + char)
    }
  })
  return output
}
```

### 回溯
```js
function letterCombinations (digits) {
  const output = []
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  function backtrack(combination, next_digits) {
    if (next_digits.length === 0) {
      output.push(combination)
    } else {
      const digit = next_digits.substring(0, 1)
      const chars = map[char]

      for (let i = 0; i < chars.length; i++) {
        const char = chars.charAt(i)
        backtrack(combination + char, next_digits.substr(1))
      }
    }
  }

  if (digits.length !== 0) {
    backtrack('', digits)
  }
  return output
}
```
