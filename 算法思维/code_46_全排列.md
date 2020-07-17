给定一个**没有重复**数字的序列，返回其所有可能的全排列。

**示例:**
```
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

### 回溯
```js
function permute (nums) {
  const output = []

  function backtrack (combination, next_nums) {
    if (combination.length === nums.length) {
      output.push(combination)
    } else {
      for (let i = 0; i < next_nums.length; i++) {
        const _nums = [...next_nums]
        const cur = _nums.splice(i, 1)
        backtrack(combination.concat(cur), _nums)
      }
    }
  }
  if (nums.length !== 0) {
    backtrack([], nums)
  }

  return output
}
```

