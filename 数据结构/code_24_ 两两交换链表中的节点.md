给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

**示例:**
```
给定 1->2->3->4, 你应该返回 2->1->4->3.
```

### 递归
```js
function swapPairs (head) {
  if (!head) return null
  if (!head.next) return head

  let next = head.next
  
  head.next = swapPairs(next.next)

  next.next = head

  return next
}
```

### 迭代
```js
function swapPairs (head) {
  let dummy = new ListNode()
  dummy.next = head

  let pre = dummy
  while (head && head.next) {
    let first = head
    let second = head.next

    pre.next = second
    first.next = second.next
    second.next = first

    pre = first

    head = first.next
  }
  return dummy.next
}
```
