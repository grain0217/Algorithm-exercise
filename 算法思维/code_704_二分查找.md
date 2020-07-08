给定一个`n`个元素有序的（升序）整型数组`nums`和一个目标值`target`，写一个函数搜索`nums`中的`target`，如果目标值存在返回下标，否则返回`-1`。

**示例 1:**
```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

**示例 2:**
```
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```

**提示：**
- 你可以假设`nums`中的所有元素是不重复的。
- `n`将在`[1, 10000]`之间。
- `nums`的每个元素都将在`[-9999, 9999]`之间。

#### 递归二分查找
```js
function binary_search (arr, left, right, target) {
  // const mid = ~~((left + right) / 2)
  const mind = (left + right) >> 1
  if (left === right && arr[mid] !== target) {
    return -1
  }
  if (arr[mid] === target) {
    return mid
  } else {
    if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
    return binary_search(arr, left, right, target)
  }
}
```

#### 非递归的二分查找
```js
function binary_search (arr, target) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    // const mid = ~~((left + right) / 2)
    const mid = (left + right) >> 1
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      // mid + 1, 否则边界条件: 查找不到时 陷入死循环
      left = mid + 1
    } else {
      right = mid
    }
  }
  //最终在left == right循环中止
  return arr[left] === target ? left : -1
}
```