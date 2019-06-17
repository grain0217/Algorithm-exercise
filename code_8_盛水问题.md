给定n个非负整数a1，a2...，an，每个数对应坐标上的一个点（i,ai），在坐标轴上将所有的（i,0）和（i,ai）使用直线连起来。
>这n条线段中任意两条线都可以与x轴形成一个容器（圆柱），找出容器容量最大时对应的线段。

不能倾斜容器，n >= 2。

暴力求解：

    const container_index = arr => {
      let len = arr.length,
          maxContainer = 0,
          temp = 0,
          maxIndex = []
      for(let i = 0; i < len; i++){
        for (let j = i+1; j < len; j++) {
          temp = Math.min(arr[i], arr[j]) * Math.pow((j - i), 2)
          if(temp > maxContainer) {
            maxContainer = temp
            maxIndex = [i,j]
          }
        }
      }
      return maxIndex;
    }