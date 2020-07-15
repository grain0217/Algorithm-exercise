给定一个链表，删除链表的倒数第`n`个节点，并且返回链表的头结点。

**示例：**
```
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

### 数组存储
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function removeNthFromEnd (head, n) {
  // 将链表节点依次存储进 arr 
  const arr = []
  let cur = head
  while (cur) {
      arr.push(cur)
      cur = cur.next
  }
  const len = arr.length
  // 边界条件
  if (len === n) {
    head = head.next
  } else {
    arr[len - n - 1].next = arr[len - n + 1]
  }
  return head
};
```

时间复杂度`O(n)`，空间复杂度`O(n)`。

也可以通过两次遍历，先遍历计算链表的长度`len`，然后遍历找到第`len - (n + 1)`个节点。 这样时间复杂度仍为`O(n)`，但空间复杂度降为`O(1)`。

### 双指针
![双指针删除倒数节点](https://pic.leetcode-cn.com/cc43daa8cbb755373ce4c5cd10c44066dc770a34a6d2913a52f8047cbf5e6e56-file_1559548337458)

```js
function removeNthFromEnd (head, n) {
  let p = head
  let q = head
  for (let i = 0; i <= n; i++) {
    q = q.next
  }
  while (q) {
    q = q.next
    p = p.next
  }
  p.next = p.next.next
  return head
}
```