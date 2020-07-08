class BinaryTreeNode {
  constructor (element, left, right) {
    this.element = element
    this.left = left
    this.right = right
  }
}

/*
* 排序二叉树--有顺序，且没有重复元素的二叉树。 对每个节点而言：
* 1）如果左子树不为空，则左子树上的所有节点都小于该节点；
* 2）如果右子树不为空，则右子树上的所有节点都大于该节点；
*/

class BinaryTree {
  constructor (element) {
    if (element) {
      this.root = new BinaryTreeNode(element)
    } else {
      this.root = null
    }
  }
  
  // 插入节点
  insert (element) {
    const node = new BinaryTreeNode(element)
    if (this.root == null) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }

  insertNode (parent, target) {
    if (parent.element > target.element) {
      if (parent.left == null) {
        // 边界条件
        parent.left = target
      } else {
        this.insertNode(parent.left, target)
      }
    } else {
      if (parent.right == null) {
        // 边界条件
        parent.right = target
      } else {
        this.insertNode(parent.right, target)
      }
    }
  }

  // 中序遍历
  inOrderTraverse (callback) {
    this._inOrderTraverse(this.root, callback)
  }

  _inOrderTraverse (node, callback) {
    if (node != null) {
      this._inOrderTraverse(node.left, callback)
      callback(node.element)
      this._inOrderTraverse(node.right, callback)
    }
  }

  // 前序遍历
  preOrderTraverse (callback) {
    this._preOrderTraverse(this.root, callback)
  }

  _preOrderTraverse (node, callback) {
    if (node != null) {
      callback(node.element)
      this._preOrderTraverse(node.left, callback)
      this._preOrderTraverse(node.right, callback)
    }
  }

  // 后序遍历
  postOrderTraverse (callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  _postOrderTraverse (node, callback) {
    if (node != null) {
      this._postOrderTraverse(node.left)
      this._postOrderTraverse(node.right)
      callback(node.element)
    }
  }

  // 查找最小节点
  minNode () {
    let cur = this.root
    while (cur.left) {
      cur = cur.next
    }
    return cur
  }

  // 查找最大节点
  maxNode () {
    let cur = this.root
    while(cur.right) {
      cur = cur.right
    }
    return cur
  }

  // 查找指定节点
  find (element) {
    let cur = this.root
    while (cur) {
      if (element > cur.element) {
        cur = cur.right
      } else if (element < cur.element) {
        cur = cur.left
      } else if (cur.element === element) {
        return cur
      }
    }
    return false
  }

  // 深度优先遍历 后序遍历
  DFSTraverse (callback) {
    this.DFSTraverseNode(this.root, callback)
  }

  DFSTraverseNode (node, callback) {
    if (node.element) {

    }
  }

  // 广度优先遍历
  BFSTraverse () {}

  BFSTraverseNode () {}
}
