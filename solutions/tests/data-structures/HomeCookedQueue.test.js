const testHomeCookedQueue = require("../../data-structures/HomeCookedQueue");

describe("HomeCookedQueue", () => {
  const testQueue = new testHomeCookedQueue();

  test("adds 3 nodes", () => {
    // Add first node
    testQueue.enqueue(42);

    expect(testQueue.length).toBe(1);
    expect(testQueue.first.value).toBe(42);
    expect(testQueue.last.value).toBe(42);

    // Add second node
    testQueue.enqueue(43);

    expect(testQueue.length).toBe(2);
    expect(testQueue.first.value).toBe(42);
    expect(testQueue.first.next.value).toBe(43);
    expect(testQueue.last.value).toBe(43);

    // Add third node
    testQueue.enqueue(44);

    expect(testQueue.length).toBe(3);
    expect(testQueue.first.value).toBe(42);
    expect(testQueue.first.next.value).toBe(43);
    expect(testQueue.last.value).toBe(44);
  });

  test("peeks at the top node", () => {
    expect(testQueue.peek().value).toBe(42);
    expect(testQueue.peek().next.value).toBe(43);
  });

  test("removes two nodes", () => {
    expect(testQueue.first.value).toBe(42);

    // Remove top node
    testQueue.dequeue();

    expect(testQueue.first.value).toBe(43);

    // Remove top node
    testQueue.dequeue();

    expect(testQueue.first.value).toBe(44);
  });

  test("checks if the queue is empty", () => {
    expect(testQueue.isEmpty()).toBe(false);

    // Remove final node
    testQueue.dequeue();

    expect(testQueue.isEmpty()).toBe(true);
  });
});
