给定两个大小为`m`和`n`的正序（从小到大）数组`nums1`和`nums2`。

请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为`O(log(m+n))`。

你可以假设`nums1`和`nums2`不会同时为空。

### 划分数组
> 将一个集合划分为两个长度相等的子集，其中一个子集中的元素总是大于另一个子集中的元素。

从中位数的定义本质出发，我们分别用`i`，`j`将数组`A`，`B`划分成两个部分：
```
        left_A           |          right_A
A[0], A[1], ..., A[i-1]  |  A[i], A[i+1], ..., A[m-1]

        left_B           |          right_B
B[0], B[1], ..., B[j-1]  |  B[j], B[j+1], ..., B[n-1]
```

`A`中有`m`个元素，`B`中有`n`个元素，所以`A`、`B`各有`m+1`、`n+1`中划分方法。

将`left_A`和`left_B`放入一个集合，并将`right_A`和`right_B` 放入另一个集合。 再把这两个新的集合分别命名为`left_part`和`right_part`：
```
      left_part          |         right_part
A[0], A[1], ..., A[i-1]  |  A[i], A[i+1], ..., A[m-1]
B[0], B[1], ..., B[j-1]  |  B[j], B[j+1], ..., B[n-1]
```

当`m+n`为偶数时，如果`left_part`、`right_part`满足：
- length(left_part) = length(right_part)
- max(left_part) <= min(right_part)

那么可以找到中位数：
```js
median = [max(left_part) + min(right_part)] / 2
```

同理，当`m+n`为偶数时，如果满足：
- length(left_part) = length(right_part) + 1
- max(left_part) <= min(right_part)

那么可以找到中位数：
```js
median = max(left_part)
```

对于上述两种情况的寻找中位数的条件，对应的代码表示：
- `i + j = m - i + n - j `(m+n为偶数)或者`i + j = m - i + n - j + 1`，将`i`、`j`全部移到等号左侧，可以得到：`i + j = (m + n + 1) >> 1`。
- 对于上述的`i + j = (m + n + 1) >> 1`，可以得到`i`表示`j`：`j = (m + n + 1) >> 1 - i`，`0 <= i <= m`，`0 <= j <= n`，为了使得在`j = (m + n + 1) >> 1 - i`中，`j`的值总是有效的，需要让`m <= n`:
  - 如果`m > n`，`j`可能会取到负数
  - 如果`A`的长度较大，只需要交换`A`和`B`即可。
- `B[j - 1] <= A[i]`且`A[i - 1] <= B[j]`

这样这道题就可以变为在`[0, m]`上对`i`进行二分查找，找到**最大**的满足`A[i - 1] <= B[j]`的`i`值。
```js
function findMedianSortedArrays (nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
  const m = nums1.length
  const n = nums2.length
  let left = 0, right = m
  // 左半部分需要的元素的总个数
  const totalLeft = (m + n + 1) >> 1
  while (left < right) {
    const i = (left + right) >> 1
    const j = totalLeft - i

    // left、right的调整很容易出错
    if (i === 0) {
      // 左半部分最大值 > 右半部分最小值
      if (nums2[j - 1] > nums1[i]) {
        left = i + 1
      } else {
        right = i
      }
    } else {
      if (nums1[i - 1] > nums2[j]) {
        right = i
      } else {
        left = i + 1
      }
    }
  }

  const i = nums1[left - 1] > nums2[totalLeft - left] ? left - 1 : left
  const j = totalLeft - i
  const nums1LeftMax = i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1]
  const nums2LeftMax = j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1]
  const nums1RightMIN = i === m ? Number.MAX_SAFE_INTEGER : nums1[i]
  const nums2RightMIN = j === n ? Number.MAX_SAFE_INTEGER : nums2[j]

  return (m + n) % 2 === 0
    ? (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMIN, nums2RightMIN)) / 2
    : Math.max(nums1LeftMax, nums2LeftMax)
}
```

时间复杂度`O(log(min(m, n)))`，空间复杂度`O(1)`。
