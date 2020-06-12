>实现一个正则表达式引擎，让其支持匹配 . 和 *

需要匹配全部输入而非部分输入，函数格式如下：

>bool isMatch(const char *s, const char *p)

如：

>isMatch('aa', 'a') // false

>isMatch('aa', 'aa') // true

>isMatch('aa', 'a*') // true

>isMatch('aa', '.*') // true

>isMatch('aab', 'c*a*b') // true