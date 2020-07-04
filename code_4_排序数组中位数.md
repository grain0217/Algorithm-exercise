给定两个大小为`m`和`n`的正序（从小到大）数组`nums1`和`nums2`。

请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为`O(log(m+n))`。

你可以假设`nums1`和`nums2`不会同时为空。

```js
function findMedianSortedArrays (nums1, nums2) {
  let k1 = 1, k2 = 1
  // 中位数索引
  const length = nums1.length + nums2.length
  while (2 * (k1 + k2) < length) {
    if (nums1[k1 - 1] < nums2[k2 - 1]) {
      k1++
    } else {
      k2++
    }
  }
  if (2 * (k1 + k2) === length) {
    return (nums1[k1 - 1] + nums2[k2 - 1]) /2
  } else {
    return nums1[k1 - 1] > nums2[k2 - 2] ? nums1[k1 - 1] : nums2[k2 - 2]
  }
}
```
