class Graph {
    constructor() {
      this.adjList = new Map();
    }

    addVertex(vertex) {
      this.adjList.set(vertex, []);
    }

    addEdge(vertex, neighbor) {
      this.adjList.get(vertex).push(neighbor);
      this.adjList.get(neighbor).push(vertex); // for an undirected graph
    }

    dfs(startingNode, visited = new Set(), callback) {
      visited.add(startingNode);
      callback(startingNode);

      for (const neighbor of this.adjList.get(startingNode)) {
        if (!visited.has(neighbor)) {
          this.dfs(neighbor, visited, callback);
        }
      }
    }
  }

  // Example usage:

  const graph = new Graph();

  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');

  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  /*
        A -- B
        |    |
        C    D
             |
             E
  */

  console.log('DFS traversal starting from node A:');
  graph.dfs('A', new Set(), (node) => console.log(node));
