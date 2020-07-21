`n`皇后问题研究的是如何将`n`个皇后放置在`n×n`的棋盘上，并且使皇后彼此之间不能相互攻击。

上图为`8`皇后问题的一种解法。

给定一个整数`n`，返回所有不同的`n`皇后问题的解决方案。

每一种解法包含一个明确的`n`皇后问题的棋子放置方案，该方案中`'Q'`和`'.'`分别代表了皇后和空位。

**示例:**
```
输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。
```

**提示：**
- 皇后，是国际象棋中的棋子，意味着国王的妻子。皇后只做一件事，那就是“吃子”。当她遇见可以吃的棋子时，就迅速冲上去吃掉棋子。当然，她横、竖、斜都可走一到七步，可进可退。

### 回溯
```js
function solveNQueens (n) {
  const output = []

  function backtrack (combination, recorder, index) {
    if (combination.length === n) {
      output.push(combination)
    } else {
      // 可供选择的i
      const validList = validPosition(recorder, index, n)
      for (let i = 0; i < validList.length; i++) {
        const _recorder = {...recorder}
        const _combination = [...combination]
        _recorder[validList[i]] = index
        const arr = new Array(n).fill('.')
        arr[validList[i]] = 'Q'
        const current = arr.join('')
        _combination.push(current)
        backtrack(_combination, _recorder, index + 1)
      }
    }
  }

  backtrack([], {}, 0)
  return output
}

// 计算row行可使用的位置下标
function validPosition (used, row, n) {
  const arr = []
  for (let i = 0; i < n; i++) {
    let valid = true
    for (let index in used) {
      if (index == i || index - i == used[index] - row || index - i == row - used[index]) {
        valid = false
      }
    }
    valid && arr.push(i)
  }
  return arr
}
```
