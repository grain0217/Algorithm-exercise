在未排序的数组中找到第`k`个最大的元素。请注意，你需要找的是数组排序后的第`k`个最大的元素，而不是第`k`个不同的元素。

**示例 1:**
```
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
```

**示例 2:**
```
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
```

**说明:**
你可以假设`k`总是有效的，且`1 ≤ k ≤`数组的长度。

### 修改快排
对快排的思路进行调整以适用寻找第k大元素：
```js
function findKthLargest (nums, k) {
  const len = nums.length
  const targetIndex = nums.length - k
  let low = 0, high = len - 1
  while(true) {
    const piviotIndex = partition(nums, low, high)
    if (piviotIndex === targetIndex) {
      return nums[targetIndex]
    } else if (piviotIndex > targetIndex) {
      high = piviotIndex - 1
    } else {
      low = piviotIndex + 1
    }
  }
}

function partition (nums, low, high) {
  const piviot = nums[low]
  while (low < high) {
    while (nums[high] > piviot && high > low) high--
    nums[low] = nums[high]
    while (nums[low] <= piviot && high > low) low++
    nums[high] = nums[low]
  }
  nums[low] = piviot
  return low
}
```

时间复杂度 `O(n)`。
