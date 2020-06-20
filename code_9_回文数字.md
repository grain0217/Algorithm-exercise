判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

**示例1：**
```
输入: 121
输出: true
```

**示例2：**
```
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

**示例3：**
```
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```

#### 字符串双端比较
```js
function isPalindrome (x) {
	const str = x.toString()
	const len = str.length
	let i = 0, j = len - 1
	while (i < j) {
		if (str[i++] !== str[j--]) return false
	}
	return true
}
```

#### 不使用字符串，反转一半数字

![反转](https://assets.leetcode-cn.com/solution-static/9/9_fig1.png)

```js
function isPalindrome (x) {
	// 边界条件
	if (x < 0) return false
	if (x % 10 === 0 && x !==0) return false

	let revertedNumber = 0
	let reminder // 存放依次提取出来的余数
	while (x > revertedNumber) {
		reminder = x % 10
		x = (x - reminder) / 10
		revertedNumber = revertedNumber * 10 + reminder
	}
	if (x === revertedNumber) return true
	if (revertedNumber - revertedNumber % 10 === x * 10) return true
	return false
}
```