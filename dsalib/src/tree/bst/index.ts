import TreeNode from './node';

class BinarySearchTree {
  public root: TreeNode | null;

  constructor(value: number) {
    this.root = new TreeNode(value);
  }

  public insert(node: TreeNode | null = this.root, value: number): TreeNode {
    // insert recursively
    if (node === null) {
      return new TreeNode(value);
    }
    if (value < node.value) {
      node.left = this.insert(node.left, value);
    }
    if (value > node.value) {
      node.right = this.insert(node.right, value);
    }
    return node;
  }
  // inorder traversal
  public inOrder(node: TreeNode | null = this.root): void {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }
  // preorder traversal
  public preOrder(node: TreeNode | null = this.root): void {
    if (node !== null) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  // postorder traversal
  public postOrder(node: TreeNode | null = this.root): void {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
  // breadth first traversal
  public breadthFirst(node: TreeNode | null = this.root): void {
    const queue: TreeNode[] = [];
    queue.push(node);
    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode !== null) {
        console.log(currentNode.value);
        queue.push(currentNode.left);
        queue.push(currentNode.right);
      }
    }
    

  }

  public find(node: TreeNode | null = this.root, value: number): TreeNode | null {
    if (node === null) {
      return null;
    }
    if (node.value === value) {
      return node;
    }
    if (value < node.value) {
      return this.find(node.left, value);
    }
    if (value > node.value) {
      return this.find(node.right, value);
    }
    return null;
  }
  
}

export default BinarySearchTree;
