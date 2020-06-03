/*
  由先序遍历preOrder和中序遍历inOrder重建二叉树
*/
class BinaryTreeNode {
  constructor (element, left, right) {
    this.element = element
    this.left = left
    this.right = right
  }
}

const reConstruct = (preOrder, inOrder) => {
  const rootElement = preOrder[0]
  if (preOrder.length > 1) {
    const rootIndex = inOrder.indexOf(rootElement)

    const preOrderLeft = preOrder.slice(1, rootIndex + 1)
    const preOrderRight = preOrder.slice(rootIndex + 1)

    const inOrderLeft = inOrder.slice(0, rootIndex)
    const inOrderRight = inOrder.slice(rootIndex + 1)

    return new BinaryTreeNode(
      rootElement,
      reConstruct(preOrderLeft, inOrderLeft),
      reConstruct(preOrderRight, inOrderRight),
    )
  } else {
    return new BinaryTreeNode(rootElement)
  }
}