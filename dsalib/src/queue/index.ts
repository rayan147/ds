import QueueNode from './node';
// FIRST IN FIRST OUT (FIFO)
class Queue {
 public head?: QueueNode | null;
 public tail: QueueNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // add to the end of the list
  // Time complexity: O(1)
 public enqueue(value: any): void {
    let node = new QueueNode(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  // remove from the the beginning of the list
  // Time complexity: O(1)
 public dequeue() :QueueNode["value"] | null {
    if (this.length === 0) {
      return null;
    }
    this.head = this.head.next;
    this.length--;
    return this.head;
    
  }
}
export default Queue;
