周四面试碰到一个经典的动态规划问题：
>现在有一个数组arr[0],arr[1],...,arr[n]，数组元素值代表硬币的面值

问：
>如何用最少数量的硬币（每个面值的硬币可以重复使用）凑出target元？


首先降低维度看一个特例问题：

>有面值为1元、3元和5元的硬币若干枚，如何用最少的硬币凑够11元？

        const dp_least = (coins, target) => {
            let result,
                min = 0,
                arr = [],	//用来记录凑齐i元所需硬币数：arr[i]
                arr[0] = 0;
            for (let i = 1; i <= target; i++) {
                for (let j = 0; j < 3 && i >= coins[j]; j++) {
                    if (j == 0) {
                        min = arr[i-coins[0]] + 1;
                    } else if (min > arr[i-coins[j]] + 1){
                        min = arr[i-coins[j]] + 1;
                    }
                }
                arr[i] = min;
            }
            console.log("要凑的钱-最少硬币数");
            for (let i = 0; i <= target; i++) {
                console.log(`${i}--------${arr[i]}`);
            }
 
            result = arr[target];
            return result;
        }

        let coins = [1,3,5];
        dp_least(coins, 11);
        
 换为：
 >有面值为2元、3元和5元的硬币若干枚，如何用最少的硬币凑够12元？
 
 事实上，在第一种情境下，任何target的总额总是能凑到的，因为有面额为1元的硬币；当给出的硬币中不再含1元，或者说这种情况--给出的目标target不是总能够凑到的，这是需要考虑的：
 
         const dp_least = (coins, target) => {
             let result,
                 min,
                 unreachable = "不可到达",
                 arr = [],
                 arr[0] = 0,
                 arr[1] = unreachable;
             for (let i = 2; i <= target; i++) {
                 for (let j = 0; j < 3 && i >= coins[j]; j++) {
                     if (j == 0) {
                         min = arr[i - coins[0]] + 1;
                         if(!Number.isInteger(arr[i-coins[0]])){
						    min = unreachable;
						 }
                     } else if (min > arr[i - coins[j]] + 1 || min == unreachable){
                         min = arr[i - coins[j]] + 1;
                         if(!Number.isInteger(i-coins[j])){
                            min = unreachable;
                         }
                     }
                 }
                 arr[i] = min;
             }
             console.log("要凑的钱------------最少硬币数");
             for (let i = 0; i <= target; i++) {
                 console.log(i, arr[i]);
             }
  
             result = arr[target];
             return result;
         }
 
         let coins = [2,3,5];
         dp_least(coins, 11);

现在再将情况考虑到更一般一些，硬币面额随机，且不只三种，即开头的这道题，我们可以假定arr这个数组代表的硬币面额已经是由小到大排列了：

         const dp_least = (coins, target) => {
             let result,
                 min,
                 unreachable = "不可到达",
                 len = coins.length;
                 arr = [],
                 arr[0] = 0,
             for (let i = 1; i < coins[0]; i++) {
                arr[i] = unreachable;
             }
             for (let i = coins[0]; i <= target; i++) {
                 for (let j = 0; j < len && i >= coins[j]; j++) {
                    if (j == 0) {
                         min = arr[i - coins[0]] + 1;
                         if(!Number.isInteger(arr[i-coins[0]])){
                            min = unreachable;
                         }
                    } else if (min > arr[i - coins[j]] + 1 || min == unreachable){
                         min = arr[i - coins[j]] + 1;
                         if(!Number.isInteger(i-coins[j])){
                            min = unreachable;
                         }
                     }
                 }
                 arr[i] = min;
             }
             console.log("要凑的钱------------最少硬币数");
             for (let i = 0; i <= target; i++) {
                 console.log(i, arr[i]);
             }
  
             result = arr[target];
             return result;
         }
