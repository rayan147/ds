import Stack from ".";

describe('stack should', () => {
    it('create a stack', () => {
        const stack = new Stack();
        expect(stack).toBeInstanceOf(Stack);
    }
    );
    it('push a value to the stack', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.length).toBe(1);
    }
    );
    it('pop a value from the stack', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.pop()).toBe(1);
    }
    );
});