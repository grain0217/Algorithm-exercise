给定一个整数数组`nums`，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

**示例:**
```
输入: [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

**进阶:**
如果你已经实现复杂度为`O(n)`的解法，尝试使用更为精妙的分治法求解。

### 动态规划
```js
function maxSubArray (nums) {
  let max = nums[0]
  const n = nums.length
  const _nums = [nums[0]] // 以nums[i]为结束的连续子数组的最大和
  for (let i = 1; i < n; i++) {
    _nums[i] = Math.max(_nums[i - 1] + nums[i], nums[i])
    max = Math.max(_nums[i], max)
  }
  return max
}
```
