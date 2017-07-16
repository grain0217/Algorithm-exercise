>给定一个整数数组 S，找到所有的三元元组 (a, b, c)，使得 a + b + c = 0

注意，(a, b, c) 中 a ≤ b ≤ c，不要输出重复的元组

比如：

>给定 S = [-1, 0, 1, 2, -1, -4]，输出 [[-1, 0, 1], [-1, -1, 2]]

首先想到思路是受第一题影响：遍历数组元素ai，每次在剩余数组中寻找和为-ai：


	const three_index = arr => {
	    let len = arr.length,
	        all = [],
	        temp_nums = [];
	    for(let i = 0; i<len; i++){
	        let two_nums = two_index(arr.slice(i+1), -arr[i], i+1);
	        if(two_nums){
	            temp_nums = two_nums.concat(i)
	            all.push(temp_nums.sort(compare));
	        }
	    }
	    return all;
	}

	const two_index = (arr, target, delta) => {
	    let len = arr.length,
	        obj = {};
	    for (let i = 0; i < len; i++) {
	        let temp = target - arr[i];
	        if(obj[temp] != undefined){
	            return [obj[temp]+delta, i+delta];
	        }
	        obj[arr[i]] = i;
	    }
	    return false;
	}

	const compare = (a, b) => {
	    return a-b;
	}