import Queue from '.';

describe('QueueArray', () => {
  it('should enqueue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.length).toBe(3);
  });

  it('should dequeue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.length).toBe(2);
  });
});
