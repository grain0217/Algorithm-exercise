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