import LinkedList from './ll';

describe('LinkedList', () => {
  it('should create a LinkedList', () => {
    const linkedList = new LinkedList();
    expect(linkedList).toBeInstanceOf(LinkedList);
  });
  it('should add to the end of the list', () => {
    let list = new LinkedList();
    expect(list.length).toBe(0);
    list.add(1);
    expect(list.length).toBe(1);
    list.add(2);
    expect(list.length).toBe(2);
    list.add(3);
    expect(list.length).toBe(3);
  });
  it('should remove from the end of the list', () => {
    let list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.remove()).toBe(3);
    expect(list.length).toBe(2);
    expect(list.remove()).toBe(2);
    expect(list.length).toBe(1);
    expect(list.remove()).toBe(1);
    expect(list.length).toBe(0);
    expect(list.remove()).toBe(null);
    expect(list.length).toBe(0);
  });
});
