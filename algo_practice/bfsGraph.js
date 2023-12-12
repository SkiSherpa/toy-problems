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

    bfs(startingNode, targetNode, callback = () => {}) {
        const visited = new Set();
        const queue = [];

        visited.add(startingNode);
        queue.push(startingNode);

        while (queue.length > 0) {
          const current = queue.shift();
          if (current === targetNode) {
            console.log(`Node ${targetNode} found!`);
            return;
          }
          callback(current);

          for (const neighbor of this.adjList.get(current)) {
            if (!visited.has(neighbor)) {
              visited.add(neighbor);
              queue.push(neighbor);
            }
          }
        }
        console.log(`Node ${targetNode} not found in the graph.`);
      }
  }

  // Example usage:

   /*
        A -- B
        |    |
        C    D
             |
             E
  */
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

  console.log('BFS traversal starting from node A:');
  graph.bfs('A','C', (node) => console.log(node));
