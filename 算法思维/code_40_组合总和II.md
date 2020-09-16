给定一个数组`candidates`和一个目标数`target`，找出`candidates`中所有可以使数字和为`target`的组合。

`candidates`中的每个数字在每个组合中只能使用一次。

**说明：**
- 所有数字（包括目标数）都是正整数。
- 解集不能包含重复的组合。 

**示例 1:**
```
输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```

**示例 2:**
```
输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]
```

### 回溯
```js
function combinationSum2 (candidates, target) {
  const _candidates = candidates.sort((a, b) => a - b)
  const combination = []
  const len = _candidates.length

  function backtrack (_combination, start) {
    const sum = _combination.reduce((a, b) => {
      return a + b
    }, 0)
    if (sum === target) {
      combination.push(_combination)
    } else if (sum + _candidates[start] <= target) {
      for (let i = start; i < len; i++) {
        const __combination = [..._combination]
        if (sum + _candidates[i] <= target) {
          // 去重！！
          if (i > start && _candidates[i] === _candidates[i - 1]) continue
          __combination.push(_candidates[i])
          backtrack(__combination, i + 1)
        }
      }
    }
  }
  backtrack([], 0)
  return combination
}
```

注意去重的处理，在同一层中相同的元素pass掉。
