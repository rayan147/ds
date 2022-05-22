import BinarySearchTree from './index';

describe('BinarySearchTree', () => {
  it('creates a BinarySeachTree', () => {
    const bst = new BinarySearchTree(10);
    expect(bst.root.value).toBe(10);
    expect(bst).toBeInstanceOf(BinarySearchTree);
  });
  it('should insert a value',()=>{
    const bst = new BinarySearchTree(10);
    bst.insert(bst.root,5);
    bst.insert(bst.root,15);
    bst.insert(bst.root,3);
    bst.insert(bst.root,7);
    bst.insert(bst.root,13);
    bst.insert(bst.root,17);
    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
    expect(bst.root.left.left.value).toBe(3);
    expect(bst.root.left.right.value).toBe(7);
    expect(bst.root.right.left.value).toBe(13);
    expect(bst.root.right.right.value).toBe(17);
  })
});
