class treeNode {
  constructor (element, left, right) {
    this.element = element
    this.left = left
    this.right = right
  }
}
// 排序二叉树
class binaryTree {
  root = null
  constructor (element) {
    if (element) {
      this.root = new treeNode(element)
    }
  }
  
  // 插入节点
  insert (element) {
    const node = new treeNode(element)
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
}