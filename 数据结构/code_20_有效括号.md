给定一个只包括`(`，`)`，`{`，`}`，`[`，`]`的字符串，判断字符串是否有效。

有效字符串需满足：
1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

**示例 1:**
```
输入: "()"
输出: true
```

**示例 2:**
```
输入: "()[]{}"
输出: true
```

**示例 3:**
```
输入: "(]"
输出: false
```

**示例 4:**
```
输入: "([)]"
输出: false
```

**示例 5:**
```
输入: "{[]}"
输出: true
```

利用栈，遍历字符串，左括号入栈，右括号出栈，结束时栈为空则有效：
```js
function isValid (s) {
  const leftMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  const len = s.length
  const arr = []
  let i = 0
  while (i < len) {
    const char = s.charAt(i++)
    if (leftMap[char]) {
      arr.push(char)
    } else {
      const top = arr.pop()
      if (leftMap[top] === char) {
        continue
      }
      return false
    }
  }
  return arr.length === 0
}
```