>不使用额外储存空间，判断一个整数是否为回文数字

例如：

>-22 -> false

>1221 -> true

>1234321 -> true

>234 -> false

需要注意的是：

- 考虑负数
- 不允许使用额外储存空间，比如将数字转换成字符串
- 反转数字需要考虑溢出问题

一开始就想到使用字符串处理，跟之前的第二题将一个数字倒序思路类似。。然鹅出题人好像意识到这样太easy了。。

	const judge = num => {
	    if(num<0)    return false;
	    let len = 0;
	    while(num >= Math.pow(10, len))	len++;    //num的位数
	    while(len > 1){
	        if(~~(num/Math.pow(10,len-1)) !== num%10) return false;
	        num = ~~(num % Math.pow(10, len-1)/10);
	        len -= 2;
	    }
	    return true;
	}

也是比较简单的，需要知道JavaScript里面取商，取余的方法：

        15/10 == 1.5 ----- 商1余5
	    商：    ~~(15/10) == 1
	    余：    15%10 == 5