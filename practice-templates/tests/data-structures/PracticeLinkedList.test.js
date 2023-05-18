const LLconstants = require("../helpers");

const { testLL } = LLconstants;

describe.skip("PracticeLinkedList", () => {
  test("appends a node to the end of the list", () => {
    expect(testLL.tail.value).toBe(42);

    testLL.append(43);

    expect(testLL.tail.value).toBe(43);
  });

  test("prepends a node to the beginning of the list", () => {
    expect(testLL.head.value).toBe(42);

    testLL.prepend(41);

    expect(testLL.head.value).toBe(41);
  });

  test("inserts a node at the specified index", () => {
    expect(testLL.traverseToIndex(2).value).toBe(43);

    testLL.insert(2, 42.5);

    expect(testLL.traverseToIndex(2).value).toBe(42.5);
  });

  test("removes a node at the specified index", () => {
    expect(testLL.traverseToIndex(2).value).toBe(42.5);

    testLL.remove(2);

    expect(testLL.traverseToIndex(2).value).toBe(43);
  });
});
