class TreeNode{
    public left: TreeNode | null;
    public right: TreeNode | null;
    public value: number | null;

    constructor(value: number){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default TreeNode;
 
