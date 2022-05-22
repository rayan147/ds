import StackNode from './node'

class Stack {
  public  head?: StackNode | null;
  length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }
    // add to the top of the stack
    // Time complexity: O(1)
  public  push(value: any): void {
        let node = new StackNode(value);
        if (this.head === null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }
    // remove from the top of the stack
    // Time complexity: O(1)
  public  pop() :StackNode["value"] | null {
        if (this.length === 0) {
            return null;
        }
        let current = this.head;
        this.head = this.head.next;
        this.length--;
        return current.value;
    }
}


export default Stack;