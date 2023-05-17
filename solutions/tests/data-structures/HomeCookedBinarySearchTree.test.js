const exampleBST = require("../helpers");
const mockBSTfunctions = require("../../data-structures/HomeCookedBinarySearchTree");

const { HomeCookedBinarySearchTree, traverse } = mockBSTfunctions;

describe("HomeCookedBinarySearchTree", () => {
  const testBST = new HomeCookedBinarySearchTree();

  test("builds a BST with insert()", () => {
    testBST.insert(9);
    testBST.insert(4);
    testBST.insert(6);
    testBST.insert(20);
    testBST.insert(170);
    testBST.insert(15);
    testBST.insert(1);

    expect(traverse(testBST.root)).toStrictEqual(exampleBST);
  });

  test("finds a node by value - null if not found", () => {
    expect(testBST.lookup(20).value).toBe(20);
    expect(testBST.lookup(201)).toBeNull();
  });

  test("removes a node", () => {
    expect(testBST.root.value).toBe(9);
    testBST.remove(9);

    expect(testBST.root.value).toBe(15);
  });
});
