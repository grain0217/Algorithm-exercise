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
                if (x - i > len_substr && x != i) {
                    len_substr = x - i;
                    pos = i;
                }
            }
        }
        return str1.substr(pos, len_substr);
    }
    
时间复杂度：O(n^3)。