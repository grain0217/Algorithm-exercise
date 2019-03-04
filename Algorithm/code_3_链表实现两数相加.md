两个非空链表，分别代表两个非负整数，链表的每个节点储存着整数的一位，并且是倒序储存的，
>返回表示这两个数字之和的链表

如：

>输入: (2 -> 4 -> 3) + (5 -> 6 -> 4)

>返回: 7 -> 0 -> 8

提示，这道题需要考虑溢出问题。

首先,[链表的JavaScript实现](https://github.com/sanjdw/Code-in-this-summer/blob/master/%E5%8D%95%E5%90%91%E9%93%BE%E8%A1%A8%E7%9A%84JavaScript%E5%AE%9E%E7%8E%B0.md)：

		import LinkedList, {Node} from '****'
		const linkA = new LinkedList(2);
		linkA.append(4);
		linkA.append(3);

		const linkB = new LinkedList(5);
		linkB.append(6);
		linkB.append(4);

		const ret = resolve(linkA, linkB);

		const resolve = (a,b) => {
			const alen = a.length;
			const blen = b.length;
			let count = Math.max(alen, blen);
			let target = a.head, plus = b.head;
			if (alen < blen) {
				target = b.head;
			    plus = a.head;
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
			return alen < blen ? b : a;
		}

