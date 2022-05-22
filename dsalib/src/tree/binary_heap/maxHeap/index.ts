class MaxHeap{
    heap: number[];
    constructor(heap: number[]){
        this.heap = heap;
    }
   private getParent(i: number): number{
        return Math.floor((i-1)/2);
    }
   private getLeftChild(i: number): number{
        return 2*i+1;
    }
   private getRightChild(i: number): number{
        return 2*i+2;
    }
    private swap(i: number, j: number): void{
     [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    // heapify is used to maintain the max heap property
    private heapify(i: number): void{
        let left = this.getLeftChild(i);
        let right = this.getRightChild(i);
        let largest = i;
        if(left < this.heap.length && this.heap[left] > this.heap[largest]){
            largest = left;
        }
        if(right < this.heap.length && this.heap[right] > this.heap[largest]){
            largest = right;
        }
        if(largest != i){
            this.swap(i, largest);
            this.heapify(largest);
        }
    }
    public buildMaxHeap(): void{
        for(let i = Math.floor(this.heap.length/2); i >= 0; i--){
            this.heapify(i);
        }
    }
    public insert(value: number): void{
        this.heap.push(value);
        let i = this.heap.length - 1;
        while(i > 0 && this.heap[this.getParent(i)] < this.heap[i]){
            this.swap(this.getParent(i), i);
            i = this.getParent(i);
        }
    }
    public extractMax(): number{
        let max = this.heap[0];
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.heapify(0);
        return max;
    }

}