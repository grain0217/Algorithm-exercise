周四面试碰到一个经典的动态规划问题：
>现在有一个数组arr[0],arr[1],...,arr[n]，数组元素值代表硬币的面值

问：
>如何用最少数量的硬币（每个面值的硬币可以重复使用）凑出target元？


首先降低维度看一个特例问题：

>有面值为1元、3元和5元的硬币若干枚，如何用最少的硬币凑够11元？

        let dp_least = (coins, target) => {
            let result,
                arr = [];	//用来记录凑齐i元所需硬币数：arr[i]
                arr[0] = 0;
            for (let i = 1; i <= target; i++) {
                for (let j = 0; j < 3 && i >= coins[j]; j++) {
                    if (j == 0) {
                        arr[i] = arr[i - coins[0]] + 1;
                    } else if (arr[i] > arr[i - coins[j]] + 1){
                        arr[i] = arr[i - coins[j]] + 1;
                    }
                }
            }
            console.log("要凑的钱------------最少硬币数");
            for (let i = 0; i <= target; i++) {
                console.log(i, arr[i]);
            }
 
            result = arr[target];
            return result;
        }

        let coins = [1,3,5];
        dp_least(coins, 11);
