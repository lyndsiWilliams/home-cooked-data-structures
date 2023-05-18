const mockHomeCookedArray = require("../data-structures/HomeCookedArray");
const mockHomeCookedArrayStack = require("../data-structures/HomeCookedArrayStack");
const mockHomeCookedGraph = require("../data-structures/HomeCookedGraph");
const mockBSTfunctions = require("../data-structures/HomeCookedBinarySearchTree");
const { HomeCookedBinarySearchTree, traverse } = mockBSTfunctions;
const mockHomeCookedDoublyLinkedList = require("../data-structures/HomeCookedDoublyLinkedList");
const mockHomeCookedLinkedList = require("../data-structures/HomeCookedLinkedList");
const mockHomeCookedLinkedListStack = require("../data-structures/HomeCookedLinkedListStack");
const mockHomeCookedQueue = require("../data-structures/HomeCookedQueue");
const mockHomeCookedObject = require("../data-structures/HomeCookedObject");

const testArray = new mockHomeCookedArray(["test", "this"], 4);
const testNumbersArray = new mockHomeCookedArray([1, 30, 39, 29, 10, 13]);
const testHomeCookedArrayStack = new mockHomeCookedArrayStack();
const testGraph = new mockHomeCookedGraph();
const testBST = new HomeCookedBinarySearchTree();
const testDLL = new mockHomeCookedDoublyLinkedList(42);
const testLL = new mockHomeCookedLinkedList(42);
const testLinkedListStack = new mockHomeCookedLinkedListStack();
const testQueue = new mockHomeCookedQueue();
const testObject = mockHomeCookedObject.create({ test1: 1, test2: 2 });

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
const testObjectEntries = mockHomeCookedObject.entries(testObject);
const testObjectFromEntries =
  mockHomeCookedObject.fromEntries(testObjectEntries);

module.exports = {
  testHomeCookedArrayStack,
  exampleBST,
  testBST,
  HomeCookedBinarySearchTree,
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
  mockHomeCookedObject,
  testObject,
  testEnumeratedObjectData,
  testObjectEntries,
  testObjectFromEntries,
};
