反转一个单链表。

**示例:**
```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

**进阶:**
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 <!-- * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * } -->

#### 迭代
```js
function reverseList (head) {
  let pre, cur

  // 边界条件！
  if (!head) return head

  while (head) {
    cur = new ListNode(head.val)
    cur.next = pre

    // prev 记录上一个节点
    pre = cur
    head = head.next
  }
  return cur
}
```

时间复杂度`O(n)`，空间复杂度`O(n)`。

#### 递归
```js
function reverseList (head) {
  // if (!head) return head
  // reverseList(head.next)
}
```

思路与`code_21_合并两个有序链表`一致。