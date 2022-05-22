class Graph {
    adjacencyList: Map<string, Set<string>>;
    constructor() {
        this.adjacencyList = new Map();
    }
    // time complexity: O(V + E)
    addVertex(vertex: string): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, new Set());
        }
    }
    // time complexity: O(V + E)
    addEdge(vertex1: string, vertex2: string): void {
        this.adjacencyList.get(vertex1).add(vertex2);
        this.adjacencyList.get(vertex2).add(vertex1);
    }
    // time complexity: O(V + E)
    removeEdge(vertex1: string, vertex2: string): void {
        this.adjacencyList.get(vertex1).delete(vertex2);
        this.adjacencyList.get(vertex2).delete(vertex1);
    }
    // time complexity: O(V + E)
    removeVertex(vertex: string): void {
        const neighbors = this.adjacencyList.get(vertex);
        neighbors.forEach((neighbor) => {
            this.removeEdge(vertex, neighbor);
        });
        this.adjacencyList.delete(vertex);
    }
    dfsRecursive(start: string, visited: Set<string> = new Set()): void {
        visited.add(start);
        console.log(start);
        this.adjacencyList.get(start).forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                this.dfsRecursive(neighbor, visited);
            }
        });
    }
    bfs(start: string): void {
        const queue: string[] = [];
        const visited: Set<string> = new Set();
        queue.push(start);
        visited.add(start);
        while (queue.length > 0) {
            const current = queue.shift();
            console.log(current);
            this.adjacencyList.get(current).forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            });
        }
    }

} 
export default Graph;