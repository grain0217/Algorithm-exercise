两个非空链表，分别代表两个非负整数，链表的每个节点储存着整数的一位，并且是倒序储存的，
>返回表示这两个数字之和的链表

如：

>输入: (2 -> 4 -> 3) + (5 -> 6 -> 4)

>返回: 7 -> 0 -> 8

这道题需要考虑溢出问题。如果这两个数的存储是用list来实现的话，最简单的思路是倒序相加，如果满十下一次相加需要进位：
```
  var addTwoNumbers = function(l1, l2) {
    let length1 = l1.length
    length2 = l2.length
    max = length1 > length2 ? length1 : length2
    result = []
    carryOver = false

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
};
```

leetCode上这道题加数的存储需要用ListNode链表实现，并给出了JavaScript链表结构：
```
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  import LinkedList, {Node} from '****'
  const linkA = new LinkedList(2);
  linkA.append(4);
  linkA.append(3);

  const linkB = new LinkedList(5);
  linkB.append(6);
  linkB.append(4);

  const ret = addTwoNumbers(linkA, linkB);

  const addTwoNumbers = (l1, l2) => {
  const l1_len = l1.length;
  const l2_len = l2.length;
  let count = Math.max(l1_len, l2_len);
  let target = l1.head, plus = l2.head;
  if (l1len < l2len) {
    target = l2.head;
    plus = l1.head;
  }
  while(count--) {
    const sum = target.element + ( plus && plus.element || 0);
    const bits = sum % 10;
    const tens = ~~(sum / 10);
    target.element = bits;
    if (tens && !target.next) {
      target.next = new Node(tens);
    } else if (tens) {
      target.next.element = target.next.element + tens;
    }
    target = target.next;
    plus = plus && plus.next || null;
  }
  return l1_len < l2_len ? l2 : l1;
}

