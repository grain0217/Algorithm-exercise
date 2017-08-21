>有一楼梯共m级，若每次只能跨上一级或二级，要走上第m级，共有多少种走法？

使用递归，比较简单：

    const ways = i => {
        if (i == 2) {
            return 1;
        } else if (i == 3){
            return 2;
        } else if (i >= 4) {
            return ways(i-1) + ways(i-2);
        } else {
            return null;
        }
    }
    
>有一个m*n的网格，一个机器人只能走格点且只能向右或向下走，要从左上角走到右下角。给定两个正整数m,n，请返回机器人的走法数目。

    const ways = (m, n) => {
        if (m == 1 || n == 1) {
            return 1;
        } else {
            return ways(m-1, n) + ways(m, n-1);
        }
    }