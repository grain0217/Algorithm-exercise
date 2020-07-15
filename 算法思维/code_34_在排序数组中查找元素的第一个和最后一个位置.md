给定一个按照升序排列的整数数组`nums`，和一个目标值`target`。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是`O(log n)`级别。

如果数组中不存在目标值，返回`[-1, -1]`。

**示例 1:**
```
输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
```

**示例 2:**
```
输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]
```

### 二分法
要求时间复杂度在`O(log n)`，首先想到二分查找，问题在于如何确保第一个和最后一个。
```js
function searchRange (nums, target) {
  if (!nums || !nums.length) return [-1, -1]
  const n = nums.length
  let left = 0, right = n - 1
  let first = -1, last = -1
  while (left < right) {
    const mid = (left + right) >> 1
    if (nums[mid] === target) {
      first = mid
      last = mid
      break
    } else if (nums[mid] > target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  // 循环终止 有两种情况：
  // 1.提前找到  2. left === right 
  if (left === right && nums[left] !== target) {
    return [-1, -1]
  } else if (left === right) {
    return [left, right]
  }
  // 提前找到
  while (nums[first] === target) first--
  while (nums[last] === target) last++
  return [first + 1, last - 1]
}
```

边界条件很多，容易出错。
