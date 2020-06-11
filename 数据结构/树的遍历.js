class TreeNode {
  constructor (element, children) {
    this.element = element
    this.children = children
  }
}

class Tree {
  root = null
  constructor (element) {
    if (element) {
      this.root = new TreeNode(element)
    }
  }

  insert (element) {
    if (this.root == null) {
      this.root = new TreeNode(element)
    } else {
      this.insertNode(this.root, element)
    }
  }

  insertNode (node, element) {
    // this.
  }

  BFS () {
    this.BFSTraverse(this.root, )
  }

  BFSTraverse (node, callback) {}
}
