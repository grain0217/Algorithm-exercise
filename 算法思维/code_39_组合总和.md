给定一个无重复元素的数组`candidates`和一个目标数`target`，找出`candidates`中所有可以使数字和为`target`的组合。

`candidates`中的数字可以无限制重复被选取。

**说明：**
- 所有数字（包括 target）都是正整数。
- 解集不能包含重复的组合。 

**示例 1：**
```
输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
```

**示例 2：**
```
输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

**提示：**
- 1 <= candidates.length <= 30
- 1 <= candidates[i] <= 200
- candidate 中的每个元素都是独一无二的。
- 1 <= target <= 500

### 回溯
```js
function combinationSum (candidates, target) {
  const _candidates = candidates.sort((a, b) => a - b)

  const combination = []
  const len = _candidates.length

  function backtrack (_combination, start) {
    const sum = _combination.reduce((a, b) => {
      return a + b
    }, 0)
    if (sum === target) {
      combination.push(_combination)
    } else if (_candidates[start] + sum <= target) {
      for (let i = start; i < len; i ++) {
        const __combination = [..._combination]
        if (_candidates[i] + sum <= target) {
          __combination.push(_candidates[i])
          backtrack(__combination, i)
        }
      }
    }
  }

  backtrack([], 0)

  return combination
}
```
