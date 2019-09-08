>有一楼梯共m级，若每次只能跨上一级或二级，要走上第m级，共有多少种走法？

使用递归，比较简单：
```js
const ways = i => {
  if (i == 1) {
    return 1
  } else if (i == 2){
    return 2
  } else if (i >= 3) {
    return ways(i - 1) + ways(i - 2)
  } else {
    return 0
  }
}
```
>有一个`m*n`的网格，一个机器人只能走格点且只能向右或向下走，要从左上角走到右下角。给定两个正整数m,n，请返回机器人的走法数目。
```js
function ways (m, n) {
  if (m == 1 || n == 1) {
    return 1
  } else {
    return ways(m - 1, n) + ways(m, n - 1)
  }
}
```

>给定一个M行N列的矩阵(M*N个格子)，每个格子中放着一定数量的平安果。你从左上角的格子开始，只能向下或向右走，目的地是右下角的格子。每走过一个格子，就把格子上的平安果都收集起来。求你最多能收集到多少平安果。

注意：当经过一个格子时，需要要一次性把格子里的平安果都拿走。
```js
function scores (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  return ways(m - 1, n - 1)
}

function ways (m, n) {
  if (m == 0 && n == 0) {
    return matrix[0][0]
  } else if (m == 0 && n != 0) {
    return ways(m, n - 1) + matrix[m][n]
  } else if (n == 0 && m != 0) {
    return ways(m - 1, n) + matrix[m][n]
  } else {
    return ways(m - 1, n) > ways(m, n - 1) ? ways(m - 1, n) + matrix[m][n] : ways(m, n - 1) + matrix[m][n]
  }
}
```
