>找到字符串 s 中最长的连续回文串

假定 s 的最大长度为 1000，如

>输入 "babad"，输出 "bab"，"aba" 也是正确答案

>输入 "cbbd"，输出 "bb"

遍历字符串，在每次遍历中由i开始往两侧比较寻找回文串。

	const find_longest_palindrome = str => {
	    let max = 1,
	        start = 0,
	        len = str.length,
	        temp;
	        for(let i = 0; i < len; i++){
                if(len-i < max/2){ //剩余长度小于max的一半，则不可能找到比max更长的回文串
                break;
            }
            let left = i,
                right = i;
                while(right < len-1 && str[right] == str[right+1]){ //连续相同字母必定是回文串的一部分，直接跳过
                right++;			            //从这串相同字母的前一位和后一位开始比较
            }
            i = right;
            while(left > 0 && right < len-1 && str[left-1] == str[right+1]){  //从i中间往两侧比较
            	left--;
            	right++;
            }
            temp = right - left + 1;
            if(temp > max){
            	max = temp;
            	start = left;
            }
        }
        return str.substr(start, max);
	}
做完这题感觉和昨晚做的一道笔试题比较像：

>给定一个字符串，里边可能包含“()”，“{}”，“[]”三种括号，请编写程序检查该字符串中的括号是否成对出现，且嵌套关系正确。