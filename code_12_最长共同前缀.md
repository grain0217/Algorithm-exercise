>写一个函数，找出一个字符串数组的最长共同前缀

比如：
>给定 ['hi, barret', 'hi, skylar', 'hi, john']，输出 ‘hi,’

最开始理解错题，当成任意两个字符串的最长公共前缀。。嗯，是所有字符串的公共前缀。

思路：首先，找到最短的字符串作为比较的标准。然后遍历比较。

    const shortest_str = arr => {
        let len = arr.length,
            min = arr[0].length,
            index = 0
        for(let i = 0; i < len; i++){
            let temp = arr[i].length
            if(temp < min){
                max = temp
                index = i
            }
        }
        return index
    }

    const longest_common_prefix = arr => {
        let short_str = arr[shortest_str(arr)],
            max = short_str.length,
            leng = arr.length,
            temp = max
        for(let i = 0; i < leng; i++){
            for (let j = 0; j < max; j++) {
                if(short_str[j] != arr[i][j]){
                    temp = j;
                    break
                }
            }
            if(temp < max){
                max = temp
            }
        }
        return short_str.substr(0, max)
    }


