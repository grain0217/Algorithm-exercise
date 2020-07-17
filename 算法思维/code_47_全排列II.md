给定一个可包含重复数字的序列，返回所有不重复的全排列。

**示例:**
```
输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```

### 回溯
与`code_46_全排列`相似，只需要在遍历选择列表时做去重：
```js
function permuteUnique (nums) {
  const output = []

  function backtrack (combination, next_nums) {
    if (combination.length === nums.length) {
      output.push(combination)
    } else {
      const map = {}
      for (let i = 0; i < next_nums.length; i++) {
        if (!map[next_nums[i]]) {
          const _nums = [...next_nums]
          const cur = _nums[i]
          _nums.splice(i, 1)
          backtrack(combination.concat(cur), _nums)
          map[next_nums[i]] = true
        }
      }
    }
  }

  if (nums.length !== 0) {
    backtrack([], nums)
  }
  return output
}
```
