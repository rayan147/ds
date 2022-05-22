import Graph from './graph';

describe('Graph', () => {
    let graph: Graph;
    beforeEach(() => {
        graph = new Graph();
    });

    it('should be able to add a vertex', () => {
        graph.addVertex('A');
        expect(graph.adjacencyList.has('A')).toBe(true);
    });

    it('should be able to add an edge', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        expect(graph.adjacencyList.get('A').has('B')).toBe(true);
        expect(graph.adjacencyList.get('B').has('A')).toBe(true);
    });

    it('should be able to remove an edge', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        graph.removeEdge('A', 'B');
        expect(graph.adjacencyList.get('A').has('B')).toBe(false);
        expect(graph.adjacencyList.get('B').has('A')).toBe(false);
    });

    it('should be able to remove a vertex', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        graph.removeVertex('A');
        expect(graph.adjacencyList.has('A')).toBe(false);
        expect(graph.adjacencyList.has('B')).toBe(true);
    });

    it('should be able to traverse a graph using DFS', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'D');
        graph.addEdge('C', 'E');
        graph.dfsRecursive('A');
        
    });
});