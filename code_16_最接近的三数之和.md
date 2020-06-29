给定一个包括`n`个整数的数组`nums`和一个目标值`target`。找出`nums`中的三个整数，使得它们的和与`target`最接近。返回这三个数的和。假定每组输入只存在唯一答案。

**示例：**
```
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
```

**提示：**
- 3 <= nums.length <= 10^3
- -10^3 <= nums[i] <= 10^3
- -10^4 <= target <= 10^4

在理解了`code_15_三数之和`的解题后，这题就比较简单：

```js
function threeSumClosest (nums, target) {
  const len = nums.length
  const _nums = nums.sort((a, b) => a - b)
  let closest = Infinity
  for (let i = 0; i < len - 2; i++) {
    let L = i + 1, R = len - 1
    while (L < R) {
      const sum = _nums[i] + _nums[L] + _nums[R]
      if (sum === target) return target
      if (sum > target) {
        if (Math.abs(sum - target) < Math.abs(closest - target)) {
          closest = sum
        }
        R--
      } else {
        if (Math.abs(sum - target) < Math.abs(closest - target)) {
          closest = sum
        }
        L++
      }
    }
  }
  return closest
}
```
