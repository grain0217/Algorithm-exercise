比较经典的面试题

	const binary_search = (arr, num) => {
	    let left = 0,
	        right = arr.length,
	        mid = ~~((left+right)/2);
	    while(left <= right){
	        if(num === arr[mid]) return mid;
	        if(num < arr[mid]){
	        	right = mid;
	        }else{
	        	left = mid;
	        }
	        mid = ~~((left+right)/2);
	    }
	    return false;
	}