class BinaryTreeNode {
  constructor (element, left, right) {
    this.element = element
    this.left = left
    this.right = right
  }
}
// 排序二叉树
class BinaryTree {
  root = null
  constructor (element) {
    if (element) {
      this.root = new BinaryTreeNode(element)
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

  insertNode (parentNode, childNode) {
    if (parentNode.element > childNode.element) {
      if (parentNode.left == null) {
        parentNode.left = childNode
      } else {
        this.insertNode(parentNode.left, childNode)
      }
    } else {
      if (parentNode.right == null) {
        parentNode.right = childNode
      } else {
        this.insertNode(parentNode.right, childNode)
      }
    }
  }

  // 中序遍历
  inOrderTraverse (callback) {
    // callback 是如何输出节点的handle
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode (node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.element)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  // 前序遍历
  preOrderTraverse (callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode (node, callback) {
    if (node != null) {
      callback(node.element)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  // 后序遍历
  postOrderTraverse (callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode (node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left)
      this.postOrderTraverseNode(node.right)
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

  // 深度优先遍历
  DFSTraverse (callback) {
    this.DFSTraverseNode(this.root, callback)
  }

  DFSTraverseNode (node, callback) {
    if (node.element) {

    }
  }

  // 广度优先遍历
}
