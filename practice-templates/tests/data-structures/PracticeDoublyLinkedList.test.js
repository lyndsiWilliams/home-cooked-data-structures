const DLLconstants = require("../helpers");

const { testDLL } = DLLconstants;

describe.skip("PracticeDoublyLinkedList", () => {
  test("appends a new node to the end of the list", () => {
    expect(testDLL.tail.value).toBe(42);

    testDLL.append(43);

    expect(testDLL.tail.value).toBe(43);
  });

  test("prepends a new node to the beginning of the list", () => {
    expect(testDLL.head.value).toBe(42);

    testDLL.prepend(41);

    expect(testDLL.head.value).toBe(41);
  });

  test("inserts a new node at a specified index", () => {
    expect(testDLL.traverseToIndex(2).value).toBe(43);

    testDLL.insert(2, 42.5);

    expect(testDLL.traverseToIndex(2).value).toBe(42.5);
  });

  test("removes a node at a specified index", () => {
    expect(testDLL.traverseToIndex(2).value).toBe(42.5);

    testDLL.remove(2);

    expect(testDLL.traverseToIndex(2).value).toBe(43);
  });

  test("reverses the nodes in the list", () => {
    expect(testDLL.head.value).toBe(41);
    expect(testDLL.tail.value).toBe(43);

    testDLL.reverse();

    expect(testDLL.head.value).toBe(43);
    expect(testDLL.tail.value).toBe(41);
  });
});
