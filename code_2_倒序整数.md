将一个 32-bit 无符号整数的所有数字倒序，输出一个新的整数，如

>eg1. x = 123, return 321


提示：
>考虑末尾为零的情况，如 10, 100

>考虑溢出情况，如将 1000000003 倒序，溢出则输出 0。

首先，32位无符号整数的范围：0—2^32-1。
直观上最容易想到的方法，取出个十百千万...位上的数字，然后倒序，比较暴力的方法。

但是这样需要除法运算各个位置上的数字，考虑到可以借助数组和字符串的形式：

	const reverse = num => {
	    let reverse_num;
        const max = Math.pow(2,32) - 1;
        if( num > max || num <0 ){
            console.log('非法的32位整数！');
            return;
        }
        let str = Number(num).toString();
        //str.replace(/0*$/, '');		//转成字符串并处理掉末位的连0, 这一步是多余的-。-
        reverse_num = Number(str.split('').reverse().join(''));	//字符串转成数组后利用数组的reverse方法，然后数组->字符串->Numer
	    return reverse_num > max?0:reverse_num;
	}

上面的代码里有一个多余的步骤是：

    str.replace(/0*$/, '');
这样写是因为最初尝试使用`Number`转换数字时，发现：

    Number(12);     //12    10进制12
    Number(012);    //10    8进制12
    Number(0x12);   //18    16进制12
但是对于字符串：

    Number("12");   //12
    Number("012");  //12
    Number("0x12"); //18
字符串以0开头的还是当成正常10进制数字处理的。

两种方法难度不大，但是如果能想到数字转字符串的思路，感觉更简单一些。
