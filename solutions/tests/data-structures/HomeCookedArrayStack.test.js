const mockHomeCookedArrayStack = require("../../data-structures/HomeCookedArrayStack");

describe("HomeCookedArrayStack", () => {
  const testHomeCookedArrayStack = new mockHomeCookedArrayStack();

  const { array } = testHomeCookedArrayStack;

  test("adds 3 nodes", () => {
    // Add top node
    expect(array.length).toBe(0);

    testHomeCookedArrayStack.push(42);

    expect(array.length).toBe(1);
    expect(array[0]).toBe(42);

    // Add second node
    testHomeCookedArrayStack.push(43);

    expect(array.length).toBe(2);
    expect(array[0]).toBe(42);
    expect(array[1]).toBe(43);

    // Add third node
    testHomeCookedArrayStack.push(44);

    expect(array.length).toBe(3);
    expect(array[0]).toBe(42);
    expect(array[1]).toBe(43);
    expect(array[2]).toBe(44);
  });

  test("peeks at the top node", () => {
    expect(testHomeCookedArrayStack.peek()).toBe(44);
  });

  test("removes two nodes", () => {
    // Remove top node
    expect(array[2]).toBe(44);
    expect(array.length).toBe(3);

    testHomeCookedArrayStack.pop();

    expect(array[2]).toBe(undefined);
    expect(array.length).toBe(2);

    // Remove another top node
    expect(array[1]).toBe(43);
    testHomeCookedArrayStack.pop();

    expect(array[1]).toBe(undefined);
    expect(array.length).toBe(1);
  });

  test("checks if the LinkedListStack is empty", () => {
    expect(testHomeCookedArrayStack.isEmpty()).toBe(false);
    expect(array.length).toBe(1);

    // Remove final node
    testHomeCookedArrayStack.pop();
    expect(array.length).toBe(0);

    expect(testHomeCookedArrayStack.isEmpty()).toBe(true);
  });
});
