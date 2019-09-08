>不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。
```js
function getSum (a, b) {
	if (a === 0) {
		return b
	} else if (b === 0) {
		return a
	} else {
		const s = a ^ b
		const c = (a & b) << 1
		return getSum(s, c)
	}
}
```