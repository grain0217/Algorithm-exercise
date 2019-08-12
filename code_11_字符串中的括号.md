>给定一个字符串，里边可能包含“()”，“{}”，“[]”三种括号，请编写程序检查该字符串中的括号是否成对出现，且嵌套关系正确。

如

>输入 （1+2）/(0.5+1)

>输出  true

思路：利用栈，从左到右遍历字符串，遇到左括号（“(”，“[”，“{”）则入栈，右括号则出栈，最后检查栈是否为空。这道题还是比较简单的，当时没做出来也是没想到使用栈。

    const match_brackets = str => {
        let stack = new Array();
        for(let i in str){
            let temp = str[i];
            if ("({[".includes(temp)) {	//str[i] == (、{或[
                stack.push(temp)
            } else if(")" == temp) {
                if(stack.pop() != "("){
                    return false
                }
            } else if("}" == temp) {
                if(stack.pop() != "{"){
                    return false
                }
            } else if("]" == temp) {
                if(stack.pop() != "["){
                    return false
                }
            }
        }
        if(stack.length == 0){
            return true
        }
        return false
    }