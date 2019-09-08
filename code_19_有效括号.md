### 有效的括号
```js
function isValid (s) {
  const stack = []
  const len = s.length
  let index = 0
  const leftBracket = ['(', '{', '[']
  const rightbracket = [')', '}', ']']
  while (index < len) {
    if (s[index] in leftBracket) {
      stack.push(s[index])
    } else if (s[index] in rightbracket) {
      stack.pop()
    }
    index++
  }
}
```