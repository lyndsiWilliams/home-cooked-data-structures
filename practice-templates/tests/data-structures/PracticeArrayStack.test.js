const testArrayStackConstants = require("../helpers");

const { testPracticeArrayStack } = testArrayStackConstants;
const { array } = testPracticeArrayStack;

describe.skip("PracticeArrayStack", () => {
  test("adds 3 nodes", () => {
    // Add top node
    expect(array.length).toBe(0);

    testPracticeArrayStack.push(42);

    expect(array.length).toBe(1);
    expect(array[0]).toBe(42);

    // Add second node
    testPracticeArrayStack.push(43);

    expect(array.length).toBe(2);
    expect(array[0]).toBe(42);
    expect(array[1]).toBe(43);

    // Add third node
    testPracticeArrayStack.push(44);

    expect(array.length).toBe(3);
    expect(array[0]).toBe(42);
    expect(array[1]).toBe(43);
    expect(array[2]).toBe(44);
  });

  test("peeks at the top node", () => {
    expect(testPracticeArrayStack.peek()).toBe(44);
  });

  test("removes two nodes", () => {
    // Remove top node
    expect(array[2]).toBe(44);
    expect(array.length).toBe(3);

    testPracticeArrayStack.pop();

    expect(array[2]).toBe(undefined);
    expect(array.length).toBe(2);

    // Remove another top node
    expect(array[1]).toBe(43);
    testPracticeArrayStack.pop();

    expect(array[1]).toBe(undefined);
    expect(array.length).toBe(1);
  });

  test("checks if the LinkedListStack is empty", () => {
    expect(testPracticeArrayStack.isEmpty()).toBe(false);
    expect(array.length).toBe(1);

    // Remove final node
    testPracticeArrayStack.pop();
    expect(array.length).toBe(0);

    expect(testPracticeArrayStack.isEmpty()).toBe(true);
  });
});
