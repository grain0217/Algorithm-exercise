给定一个整数数组，其中有两项之和为一个特定的数字，假设每次 input 只有一个唯一解，
>返回这两个数的索引。

比如：
>给定 nums = [2, 7, 11, 15]，target = 9

>由于 nums[0] + nums[1] = 9，所以返回 [0, 1]

直观可以想到的暴力方法：
```js
function find_index (nums, target) {
  for(let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if(nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }
  return -1
}
```
还有一种更好的方法：
```js
function find_index_new (nums, target) {
  const result = []
  const map = {}
  let temp
  for (let i = 0, len = nums.length; i < len; i++) {
    temp = target - nums[i]
    if (map[temp] !== undefined) {
      result[0] = map[temp]
      result[1] = i
      return result
    }
    map[nums[i]] = i
  }
  return -1
}
```
时间复杂度O(n^2) ---> O(n)