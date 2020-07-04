给你一个包含`n`个整数的数组`nums`，判断`nums`中是否存在三个元素`a`，`b`，`c` ，使得`a + b + c = 0`？请你找出所有满足条件且不重复的三元组。

**注意：** 答案中不可以包含重复的三元组。

**示例：**
```
给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

联想到`code_1_寻找两个加数`，遍历数组中的元素，寻找数组中除当前元素`element`外和为`-element`的元素组合，时间复杂度为`O(n^2)`，另外还有`O(n)`的空间复杂度，且在这种算法中去除重复解非常麻烦。

利用排序+双指针的思路可以更加清晰简单地解决这个问题：

1. 判断，对于数组长度`n`，如果数组为`null`或者数组长度小于`3`，返回`[]`。
2. 对数组进行排序。
3. 遍历排序后数组：
  - 若`nums[i] > 0`：因为已经排序好，所以后面不可能有三个数加和等于`0`，直接返回结果
  - 对于重复元素：跳过，避免出现重复解
  - 令左指针`L = i + 1`，右指针`R = n - 1`，当`L < R`时，执行循环：
  - 当`nums[i] + nums[L] + nums[R] == 0`，执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将`L`,`R`移到下一位置，寻找新的解
  - 若和大于`0`，说明`nums[R]`太大，`R`左移
  - 若和小于`0`，说明`nums[L]`太小，`L`右移

```js
function threeSum (nums) {
  const _nums = nums.sort((a, b) => a - b)
  const ret = []
  if (!nums || nums.length < 3) return ret
  const len = _nums.length
  for (let i = 0; i < len - 2; i++) {
    if (_nums[i] > 0) break
    // 去除重复解 i向前比较，向后比较会丢失 _nums[i] === _nums[L] 解的情况
    if (_nums[i] === _nums[i - 1]) continue
    let L = i + 1, R = len - 1
    while (L < R) {
      if (_nums[i] + _nums[L] + _nums[R] === 0) {
        ret.push([_nums[i], _nums[L], _nums[R]])
        // 去重重复解
        while (_nums[R] === _nums[R - 1] && R > L) R--
        while (_nums[L] === _nums[L + 1] && R > L) L++
        // 容易陷入死循环
        R--
        L++
      } else if (_nums[i] + _nums[L] + _nums[R] > 0) {
        R--
      } else {
        L++
      }
    }
  }
  return ret
}
```

在想到排序和双指针之后，去重重复解是一个难点。