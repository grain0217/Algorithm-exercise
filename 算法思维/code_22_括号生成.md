数字`n`代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且有效的括号组合。

**示例：**
```
输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]
```

### 回溯
```js
function generateParenthesis (n) {
  const output = []

  function backtrack (combination, left_num, right_num) {
    if (combination.length === 2 * n) {
      output.push(combination)
    } else {
      if (left_num > 0) {
        backtrack(combination + '(', left_num - 1, right_num)
      }
      if (right_num > left_num) {
        backtrack(combination + ')', left_num, right_num - 1)
      }
    }
  }

  backtrack('', n, n)
  return output
}
```
