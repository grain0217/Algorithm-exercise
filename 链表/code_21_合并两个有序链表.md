将两个升序链表合并为一个新的**升序**链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

**示例：**
```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

#### 迭代
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *    this.val = (val===undefined ? 0 : val)
 *    this.next = (next===undefined ? null : next)
 * }
 */
function mergeTwoLists (l1, l2) {
  const head = new ListNode()
  let cur = head
  while (l1 || l2) {
    if (!l1) {
      cur.next = l2
      return head.next
    } else if (!l2) {
      cur.next = l1
      return head.next
    }
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  return head.next
}
```

时间复杂度$O(n+m)$，`n`、`m`分别为两个链表的长度，空间复杂度$O(1)$。

#### 递归
```js
function mergeTwoLists (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
```

时间复杂度$O(m+n)$，空间复杂度$O(m+n)$。