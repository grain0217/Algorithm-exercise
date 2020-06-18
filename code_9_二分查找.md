给定一个`n`个元素有序的（升序）整型数组`nums`和一个目标值`target`，写一个函数搜索`nums`中的`target`，如果目标值存在返回下标，否则返回 -1。

![二分查找](https://pic.downk.cc/item/5eead1f814195aa594ec072f.jpg)

#### 递归二分查找
```js
function binary_search (arr, left, right, target) {
  const mid = ~~((left + right) / 2)
  if (left === right && arr[mid] !== target) {
    return -1
  }
  if (arr[mid] === target) {
    return mid
  } else {
    if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
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
    const mid = ~~((left + right) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      // mid + 1, 否则边界条件: 查找不到时 陷入死循环
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  //最终在left == right循环中止
  return arr[left] === target ? left : -1
}
```