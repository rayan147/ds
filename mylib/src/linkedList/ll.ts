import LinkedNode from './node';

class LinkedList {
  head: LinkedNode | null;
  tail: LinkedNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // add to the end of the list
  // Time complexity: O(1)
  add(value: any) {
    let node = new LinkedNode(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  // remove from the end of the list
  // Time complexity: O(n)
  remove() {
    if (this.length === 0) {
      return null;
    }
    let current = this.head;
    let previous = this.head;
    while (current.next !== null) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    return current.value;
  }
}

export default LinkedList;
