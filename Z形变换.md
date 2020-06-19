将一个给定的字符串根据给定的行数，以从上往下、从左到右进行`Z`字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为3时，排列如下：

```
L   C   I   R
E T O E S I I G
E   D   H   N
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串——"LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数。

![Z字形变换](https://pic.downk.cc/item/5eec1ac214195aa5948b9722.jpg)

分析：
- 字符串`s`是以`Z`字形为顺序存储的字符串，目标是按行打印。
- 设`numRows`行字符串分别为`s1`, `s2`, ..., `sn`，则容易发现：按顺序遍历字符串`s`时，每个字符`c`在`Z`字形中对应的行索引先从`s1`增大至`sn` ，再从`sn`减小至 `s1`…… 如此反复。
- 因此，解决方案为：模拟这个行索引的变化，在遍历`s`中把每个字符填到正确的行`res[i]`。

```js
function convert (s, numRows) {
  const len = s.length
  const ret = new Array(numRows)
  // 边界条件
  if (numRows === 1) return s
  for (let i = 0; i < numRows; i++) {
    ret[i] = ''
  }
  let downFlag = true
  let index = 0 // s0、s1、s2...sn-1 的下标
  for (let j = 0; j < len; j++) {
    if (downFlag) {
      // 向下 index 递增
      ret[index] += s.charAt(j)
      index++
    } else {
      // 向上 index 递减
      ret[index] += s.charAt(j)
      index--
    }
    
    if (index === 0) {
      // 递减为0 开始递增
      downFlag = true
    } else if (index === numRows - 1) {
      // 递增为 numRows - 1 开始递减
      downFlag = false
    }
  }

  return ret.join('')
};
```

时间复杂度`O(n)`。

