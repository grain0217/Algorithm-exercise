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

		//指定位置插入元素
		insert(element, position){
		    if(position < 0 || position > this.length){
		        return false;
		    }else{
		        const node = new Node(element);
		        if(position === 0){
		        	node.next = this.head;
		        	this.head = node;
		        }else{
		        	let cur = 0,
		        	target = this.head;
		        	while(cur++ < position){
		        	    target = target.next;
		        	}
		        	node.next = target.next;
		        	target.next = node;
		        }
		        this.length++;
		        return true;
		    }
		}

		//删除指定位置的元素
		removeAt(position){
		    if(!this.length){
		        return false;
		    }
		    if(position < 0 || position > this.length){
		        return false;
		    }else{
		        if(position == 0){
		        	this.head = this.head.next;
		        }else{
		            let cur = 0, target = this.head;
		            while(cur++ < position){
		                target = target.next;
		            }
		            target.next = target.next.next;
		        }
		        this.length--;
		        return true;
		    }
		}

		//查找一个元素的位置
		indexOf(element){
		    let cur = 0,target = this.head;
		    while(target.element != element){
		        target = target.next;
		        cur++;
		    }
		    if(cur<this.length){
		        return cur;
		    }else{
		        return -1;
		    }
		}

		//删除元素
		remove(element){
		    const position = this.indexOf(element);
		    if(position < 0){
		        return false;
		    }else{
		        removeAt(position);
		    }
		}

		//清空链表
		clear(){
		    this.lenght = 0;
		    this.head = null;
		}
	}