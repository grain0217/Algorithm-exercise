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

联想到`code_1_寻找两个加数`，遍历数组中的元素，寻找除当前元素`element`外和为`-element`的组合：

```js
var threeSum = function(nums) {
	const len = nums.length
	const ret = []
	const map = {}
	for (let i = 0; i < len; i++) {
		if (map[nums[i]] === undefined) {
			const t = twoSum(nums, i)
			if (t) {
				if (map[nums[i]] === undefined) {
					const arr = t.map((v, k) => {
						return [nums[i], ...v]
					})
					ret.push(arr)
				} else {
					map[nums[i]] = true
				}
			}
		}
	}
	return ret
}

function twoSum (nums, index) {
	const len = nums.length
	const target = -nums[index]
	const arr = []
	const map = {}
	for (let i = 0; i < len; i++) {
		if (i === index) continue
		if (map[nums[i]] !== undefined) {
			arr.push([target - nums[i], nums[i]])
		} else {
			map[target - nums[i]] = i
		}
	}
	if (arr.length) {
		return arr
	}
	return false
}
```
