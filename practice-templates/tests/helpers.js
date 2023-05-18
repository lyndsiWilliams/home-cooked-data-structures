const mockPracticeArray = require("../data-structures/PracticeArray");
const mockPracticeArrayStack = require("../data-structures/PracticeArrayStack");
const mockPracticeGraph = require("../data-structures/PracticeGraph");
const mockBSTfunctions = require("../data-structures/PracticeBinarySearchTree");
const { PracticeBinarySearchTree, traverse } = mockBSTfunctions;
const mockPracticeDoublyLinkedList = require("../data-structures/PracticeDoublyLinkedList");
const mockPracticeLinkedList = require("../data-structures/PracticeLinkedList");
const mockPracticeLinkedListStack = require("../data-structures/PracticeLinkedListStack");
const mockPracticeQueue = require("../data-structures/PracticeQueue");
const mockPracticeObject = require("../data-structures/PracticeObject");

const testArray = new mockPracticeArray(["test", "this"], 4);
const testNumbersArray = new mockPracticeArray([1, 30, 39, 29, 10, 13]);
const testPracticeArrayStack = new mockPracticeArrayStack();
const testGraph = new mockPracticeGraph();
const testBST = new PracticeBinarySearchTree();
const testDLL = new mockPracticeDoublyLinkedList(42);
const testLL = new mockPracticeLinkedList(42);
const testLinkedListStack = new mockPracticeLinkedListStack();
const testQueue = new mockPracticeQueue();
const testObject = mockPracticeObject.create({ test1: 1, test2: 2 });

const exampleBST = {
  left: {
    left: { left: null, right: null, value: 1 },
    right: { left: null, right: null, value: 6 },
    value: 4,
  },
  right: {
    left: { left: null, right: null, value: 15 },
    right: { left: null, right: null, value: 170 },
    value: 20,
  },
  value: 9,
};

const testGraphOnlyVertexes = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
};

const testGraphComplete = {
  0: ["1", "2"],
  1: ["3", "2", "0"],
  2: ["4", "1", "0"],
  3: ["1", "4"],
  4: ["3", "2", "5"],
  5: ["4", "6"],
  6: ["5"],
};

const testArrayData = ["test", "this"];
const testConcatArrayData = [
  "test",
  "this",
  undefined,
  undefined,
  "testArray1",
  "testArray2.1",
  "testArray2.2",
  "testArray3",
];
const testFilledNumbersArray = [1, 30, 6, 6, 10, 13];
const elementGreaterThanTen = (element) => element > 10;

const testEnumeratedObjectData = { 0: "test", 1: "this", test1: 1, test2: 2 };
const testObjectEntries = mockPracticeObject.entries(testObject);
const testObjectFromEntries = mockPracticeObject.fromEntries(testObjectEntries);

module.exports = {
  testPracticeArrayStack,
  exampleBST,
  testBST,
  PracticeBinarySearchTree,
  traverse,
  testGraph,
  testGraphOnlyVertexes,
  testGraphComplete,
  testArray,
  testArrayData,
  testConcatArrayData,
  testNumbersArray,
  testFilledNumbersArray,
  elementGreaterThanTen,
  testDLL,
  testLL,
  testLinkedListStack,
  testQueue,
  mockPracticeObject,
  testObject,
  testEnumeratedObjectData,
  testObjectEntries,
  testObjectFromEntries,
};
