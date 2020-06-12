>给定一个未排序的整数数组，找到其中位数。

中位数是排序后数组的中间值，如果数组的个数是偶数，则返回排序后数组的第N/2个数。

样例:

>给出数组[4, 5, 1, 2, 3]， 返回 3
>给出数组[7, 9, 4, 5]，返回 5

最直接的想法是对数组进行排序然后取中间值，虽然这不是面试官想要的方法，但还是写一下复习下快排：

```js
function partition (arr, left, right) {
  let pivot = arr[left]
  while (left < right) {
    while (pivot < arr[right] && left < right) {
      right--
    }
    arr[left] = arr[right]
    while (arr[left] <= pivot && left < right) {
      left++
    }
    arr[right] = arr[left]
  }
  arr[left] = pivot
  return left
}
    
function quick_sort (arr, left, right) {
  if (left >= right) {
    return
  } else {
    const	pivotIndex = partition(arr, left, right)
    quick_sort(arr, left, pivotIndex - 1)
    quick_sort(arr, pivotIndex + 1, right)
  }
}

let arr = [1,234,5,76,43,765,765,8,32,6,43,2,5,1,39]
quick_sort(arr, 0, arr.length - 1)
```

寻找中位数的思路可以借鉴快排，在每次递归返回“标兵”的时候与中间下标做比较，省去了不必要的排序。递归结束的时候中位数就被放在了中间。

```js
const partition = (arr, left, right) => {
  const pivot = arr[left]
  const median_index = ~~(arr.length / 2)
  while (left < right) {
    while (pivot < arr[right] && left < right) {
      right--
    }
    arr[left] = arr[right]
    while (arr[left] <= pivot && left < right) {
      left++
    }
    arr[right] = arr[left]
  }
  arr[left] = pivot
  return left
}

const median = (arr, left, right) => {
  if (left >= right) {
    return
  } else {
    const	pivotIndex = partition(arr, left, right)
    const median_index = ~~(arr.length / 2)
    if(pivotIndex > median_index) {
      median(arr, left, pivotIndex - 1)
    } else {
      median(arr, pivotIndex + 1, right)
    }
  }
}

let arr = [1,234,5,76,43,765,765,8,32,6,43,2,5,1,39]
median(arr, 0, arr.length - 1)
```