合并`k`个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

**示例:**
```
输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
```

### 归并
```js
function mergeKLists (lists) {
  if (!lists || !lists.length) return null
  if (lists.length === 1) return lists[0]
  const mid = lists.length >> 1
  const left = lists.slice(0, mid)
  const right = lists.slice(mid)
  return mergeTwoLists(mergeKLists(left), mergeKLists(right))
}

function mergeTwoLists (l1, l2) {
  // l1, l2均为排序链表
  const head = new ListNode()
  let cur = head
  while (l1 || l2) {
    if (!l1) {
      cur.next = l2
      break
    }
    else if (!l2) {
      cur.next = l1
      break
    } else {
      if (l1.val > l2.val) {
        cur.next = l2
        l2 = l2.next
      } else {
        cur.next = l1
        l1 = l1.next
      }
      cur = cur.next
    }
  }
  return head.next
}
```

归并排序+合并两个有序链表的思路。
