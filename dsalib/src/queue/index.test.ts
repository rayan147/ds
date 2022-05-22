import Queue from '.';

describe('QueueArray', () => {
  it('should create a queue', () => {
    const queue = new Queue();
    expect(queue).toBeInstanceOf(Queue);
  });
  it('should enqueue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.length).toBe(3);
  });

  it('should dequeue from the begining ', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.length).toBe(2);
  });
});
