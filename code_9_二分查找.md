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
    let mid = ~~((left + right) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  if(arr[left] === target){	//最终在left==right循环中止时要做判断
    return left
  } else {
    return -1
  }
}
```

顺便总结一下JavaScript中数字的模运算和取余：

```js
  7 / 2       // 3.5 商
  ~~(7 / 2)   // 3 模
  7 % 2       // 1 余
```