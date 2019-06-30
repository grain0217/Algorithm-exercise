两个非空链表，分别代表两个非负整数，链表的每个节点储存着整数的一位，并且是倒序储存的，
>返回表示这两个数字之和的链表

如：

>输入: (2 -> 4 -> 3) + (5 -> 6 -> 4)

>返回: 7 -> 0 -> 8

这道题需要考虑溢出问题。最简单的思路是倒序相加，如果满十下一次相加需要进位,如果这两个数的存储是用list来实现的话：
```
  const addTwoNumbers = function(l1, l2) {
    let length1 = l1.length
    let length2 = l2.length
    const max = length1 > length2 ? length1 : length2
    const result = []
    let carryOver = false

    for (let i = 0; i < max; i++) {
      let carry_over = carryOver ? 1 : 0
      let tmpRes = (l1[i] || 0) + (l2[i] || 0) + carry_over
      if (tmpRes >= 10) {
        result.push(tmpRes - 10)
        carryOver = true
      } else {
        result.push(tmpRes)
        carryOver = false
      }
    }
    if (carryOver) {
      if (tmpRes >= 10) {
        result.push(1)
      }
    }
    return result
}
```

leetCode上这道题加数的存储需要用ListNode链表实现，并给出了JavaScript链表结构：
```
  function ListNode(val) {
    this.val = val
    this.next = null
  }

  const addTwoNumbers = function(l1, l2) {
    const head = l1
    let overflow = false
    if (!l1) {
      if (l2) {
        return l2
      } else {
        return new ListNode(0)
      }
    }
    while (l1) {
      let tmp = l1.val + ((l2 || {}).val || 0) + (overflow ? 1 : 0)
      if (tmp >= 10) {
        l1.val = tmp -10
        overflow = true
      } else {
        l1.val = tmp
        overflow = false
      }
      if (l1.next) {
        l1 = l1.next
        l2 = (l2 || {}).next
      } else if (l2 && l2.next) {
        l1.next = l2.next
        l1 = l1.next
        l2 = null
      } else {
        l1.next = overflow ? new ListNode(1) : null
        l1 = null
      }
    }
    return head
  }
```

纠结了很长时间，用链表来做的话最初卡在如何构造一个结果（两数之和）链表并遍历它的节点来为之赋值，其实在直接用l1来做结果链表，在遍历l1，l2每一个节点时将加数落在l1上即可，节省了空间。注意循环截止的条件、边界判断。
