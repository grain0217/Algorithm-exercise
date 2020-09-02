给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

**示例 1:**
```
输入: 1->1->2
输出: 1->2
```

**示例 2:**
```
输入: 1->1->2->3->3
输出: 1->2->3
```

### 从后往前比较
```js
function deleteDuplicates (head) {
  if (!head) return head
  let pre = head
  let cur = head.next
  while (cur) {
    if (cur.val !== pre.val) {
      pre.next = cur
      pre = cur
    } else {
      pre.next = null
    }
    cur = cur.next
  }
  return head
}
```
