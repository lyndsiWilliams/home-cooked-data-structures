const mockHomeCookedLinkedListStack = require("../../data-structures/HomeCookedLinkedListStack");

describe("HomeCookedLinkedListStack", () => {
  const testLinkedListStack = new mockHomeCookedLinkedListStack();

  test("adds 3 nodes", () => {
    // Add top node
    expect(testLinkedListStack.length).toBe(0);
    testLinkedListStack.push(42);

    expect(testLinkedListStack.length).toBe(1);
    expect(testLinkedListStack.top.value).toBe(42);
    expect(testLinkedListStack.bottom.value).toBe(42);

    // Add second node
    testLinkedListStack.push(43);

    expect(testLinkedListStack.length).toBe(2);
    expect(testLinkedListStack.top.value).toBe(43);
    expect(testLinkedListStack.top.next.value).toBe(42);
    expect(testLinkedListStack.bottom.value).toBe(42);

    // Add third node
    testLinkedListStack.push(44);

    expect(testLinkedListStack.length).toBe(3);
    expect(testLinkedListStack.top.value).toBe(44);
    expect(testLinkedListStack.top.next.value).toBe(43);
    expect(testLinkedListStack.bottom.value).toBe(42);
  });

  test("peeks at the top node", () => {
    expect(testLinkedListStack.peek().value).toBe(44);
    expect(testLinkedListStack.peek().next.value).toBe(43);
  });

  test("removes two nodes", () => {
    expect(testLinkedListStack.top.value).toBe(44);
    expect(testLinkedListStack.length).toBe(3);

    // Remove top node
    testLinkedListStack.pop();

    expect(testLinkedListStack.top.value).toBe(43);
    expect(testLinkedListStack.length).toBe(2);

    // Remove another top node
    testLinkedListStack.pop();

    expect(testLinkedListStack.top.value).toBe(42);
    expect(testLinkedListStack.length).toBe(1);
  });

  test("checks if the LinkedListStack is empty", () => {
    expect(testLinkedListStack.isEmpty()).toBe(false);
    expect(testLinkedListStack.length).toBe(1);

    // Remove final node
    testLinkedListStack.pop();
    expect(testLinkedListStack.length).toBe(0);

    expect(testLinkedListStack.isEmpty()).toBe(true);
  });
});
