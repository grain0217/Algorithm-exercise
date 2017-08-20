>给定两个字符串，求出它们之间最长的相同子字符串的长度。

暴力求解：

    let longest_substring = (str1, str2) => {
        let len1 = str1.length,
            len2 = str2.length,
            len_substr = 0,
            pos = 0;
        for (let i = 0; i < len1; i++) {
            for (let j = 0; j < len2; j++) {
                let x = i,
                    y = j;
                while (str1[x] == str2[y] && x < len1 && y < len2) {
                    x++;
                    y++;
                }
                if (x - i > len_substr) {
                    len_substr = x - i;
                    pos = i;
                }
            }
        }
        return str1.substr(pos, len_substr);
    }
    
时间复杂度：O(n^3)，空间复杂度是O(1)。

---

动态规划求解，找到状态转移方程：

>d[i,j] = str[i] == str[j] ? d[i-1,j-1] + 1: 0;

其中d[i,j]表示以str1[i]、str2[j]结尾的字符串的最长公共子字符串的长度。

    let dp_longest_substring = (str1, str2) => {
        let len1 = str1.length,
            len2 = str2.length,
            arr = new Array(len1),
            len_substr = 0,
            pos = 0;
        for (let i = 0; i<len1; i++) {
            arr[i] = new Array(len2);
            for (let j = 0; j < len2; j++) {
                if (str1[i] == str2[j]) {
                    if(i == 0 || j == 0){
                        arr[i][j] = 1;
                    }else{
                        arr[i][j] = arr[i-1][j-1] + 1;
                    }
                    if (arr[i][j] > len_substr) {
                        len_substr = arr[i][j];
                        pos = i - len_substr + 1;
                    }
                }else{
                    arr[i][j] = 0;
                }
            }
        }
        return str1.substr(pos, len_substr); 
    }
    
时间复杂度O(n^2)，空间复杂度O(n^2)。注意到每次比较只用到相邻两行，可以将空间复杂度优化到O(n)。