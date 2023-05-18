const testGraphConstants = require("../../tests/helpers");

const { testGraph, testGraphOnlyVertexes, testGraphComplete } =
  testGraphConstants;

describe("HomeCookedGraph", () => {
  test("adds vertexes to the graph", () => {
    testGraph.addVertex("0");
    testGraph.addVertex("1");
    testGraph.addVertex("2");
    testGraph.addVertex("3");
    testGraph.addVertex("4");
    testGraph.addVertex("5");
    testGraph.addVertex("6");

    expect(testGraph.adjacentList).toEqual(testGraphOnlyVertexes);
  });

  test("adds edges to connect the vertexes in the graph", () => {
    testGraph.addEdge("3", "1");
    testGraph.addEdge("3", "4");
    testGraph.addEdge("4", "2");
    testGraph.addEdge("4", "5");
    testGraph.addEdge("1", "2");
    testGraph.addEdge("1", "0");
    testGraph.addEdge("0", "2");
    testGraph.addEdge("6", "5");

    expect(testGraph.adjacentList).toEqual(testGraphComplete);
  });
});
