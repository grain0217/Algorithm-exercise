	class Node{
		constructor(element, next){
			this.element = element;
			this.next = next;
		}
	}

	class LinkedList{
		length = 0;
		head = null;

		constructor(element){
			if(element){
				this.head = new Node(element);
				this.length++;
			}
		}

		//尾部增加元素
		append(element){
			const node = new Node(element);
			if(this.head == null){
				this.head = node;
			}else{
				let cursor = this.head;
				while(cursor.next){
					cursor = cursor.next;
				}
				cursor.next = node;
			}
			this.length++;
		}

		//插入元素
		insert(element, position){
			if(position >=0 && position <= this.length){
				const node = new Node(element);
				this.length++;
				if(position === 0){
					node.next = this.head;
					this.head = node;
					return true;
				}
				let cur = 0,
					target = this.head;
				while(position > cur++){
					target = target.next;
				}
				node.next = target.next;
				target.next = node;
				return true;
			}else{
				return false;
			}
		}

		//删除指定位置的元素
		removeAt(position){

		}
	}