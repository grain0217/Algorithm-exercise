#### 递归二分查找
```
const binary_search = (arr, left, right, number) => {
  const mid = ~~((left + right) / 2)
  if (left == right && arr[mid] != number) {
    return -1
  }
  if (arr[mid] == number) {
    return mid
  } else {
    if (arr[mid] < number) {
      left = mid + 1
    } else {
      right = mid - 1
    }
    return binary_search(arr, left, right, number)
  }
}
```
上面这是一种递归的二分查找~~，在浏览器里跑数组size超过3就会报堆栈溢出的错误~~。

在JavaScript中，函数的参数是通过栈空间来传递的，在调用过程中会占用线程的栈资源。而递归调用，**只有走到最后的结束点后函数才能依次退出**，而未到达最后的结束点之前，占用的栈空间一直没有释放，如果递归调用次数过多，就可能**导致占用的栈资源超过线程的最大值**，从而导致栈溢出，导致程序的异常退出。

#### 非递归的二分查找
```
const binary_search = (arr, target) => {
  let left = 0,
    right = arr.length - 1
  while (left < right) {
    mid = ~~((left + right) / 2)
    if (arr[mid] == target) {
      return mid
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  if(arr[left] == target){	//最终在left==right循环中止时要做判断
    return left
  } else {
    return -1
  }
}
  ```
