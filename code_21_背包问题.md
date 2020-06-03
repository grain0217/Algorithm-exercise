### 背包问题

背包问题是算法研究中的一个经典问题。试想你是一个保险箱大盗，打开了一个装满奇珍异宝的保险箱，但是你必须将这些宝贝放入你的一个小背包中。保险箱中的物品规格和价值不同。你希望自己的背包装进的宝贝总价值最大。

#### 递归的解法
```
function knapsack (capacity, objectArr, order) {
  if (capacity <= 0 || order <= 0) {
    return 0
  }
  if (arr[order].size > capacity) {
    return knapsack(capacity, objectArr, order - 1)
  }
  return Math.max(knapsack(capacity - objectArr[order].size, objectArr, order - 1) + objectArr[order].value, knapsack(capacity, objectArr, order - 1))
}

```

#### 动态规划的解法
```
function knapsack (capacity, objectArr) {
  const len = objectArr.length
  let f = []
  for (let i = 0; i < len; i++) {
    f[i] = []
    for (let w = 0; w <= capacity; w++) {
      if (w === 0 || i === 0) {
        f[i][w] = 0
      } else if (objectArr[i].size <= w) {
        f[i][w] = Math.max(f[i - 1][w], f[i - 1][w - objectArr[i].size] + obectArr[i].value)
      } else {
        f[i][w] = f[i - 1][w]
      }
    }
  }
  return f[len][capacity]
}
```

贪心算法不能解决0-1背包问题，如果放入背包的物品从本质上说是连续的，则问题变为了特殊的背包问题，可以使用贪心算法解决：
```
function knapsack (capacity, objectArr) {
  // 首先按性价比排序, 高 -> 低
  objectArr.sort(function (a, b) {
    return parseFloat(b.value / b.size) - parseFloat(a.value / a.size)
  })
  // 记录物品个数
  const n = objectArr.length
  // 记录已经选中尺寸，已选最大的最大价值
  let selected = 0
  let maxValue = 0
  for (var i = 0; i < n && selected < capacity; i++) {
    const size = objectArr[i].size
    const value = objectArr[i].value
    if (size <= capacity - selected) {
      maxValue += value
      selected += size
    } else {
      // 计算比例
      maxValue += value * ((capacity - selected) / size)
      selected = capacity
    }
  }
  return maxValue
}
```