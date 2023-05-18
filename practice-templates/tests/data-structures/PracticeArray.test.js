const testArrayConstants = require("../helpers");

const {
  testArray,
  testArrayData,
  testConcatArrayData,
  testNumbersArray,
  testFilledNumbersArray,
  elementGreaterThanTen,
} = testArrayConstants;

describe.skip("PracticeArray", () => {
  test("creates a sparse array", () => {
    expect(testArray.data).toEqual(testArrayData);
    expect(testArray.length).toBe(4);
  });

  test("add an element to the end of the array - push()", () => {
    testArray.push("another");

    expect(testArray.length).toBe(5);
    expect(testArray.data).toEqual([
      "test",
      "this",
      undefined,
      undefined,
      "another",
    ]);
  });

  test("remove an element from the end of the array - pop()", () => {
    testArray.pop();

    expect(testArray.length).toBe(4);
    expect(testArray.data).toEqual(testArrayData);
  });

  test("gets an element at a specified index - at()", () => {
    expect(testArray.at(1)).toBe("this");
    expect(testArray.at(2)).toBe(undefined);
  });

  test("merges two or more arrays into one array - concat()", () => {
    const anotherTestArray = testArray.concat(
      ["testArray1"],
      ["testArray2.1", "testArray2.2"],
      ["testArray3"]
    );

    expect(anotherTestArray).toEqual(testConcatArrayData);
  });

  test("checks whether all elements in the array pass the test passed into the function - every()", () => {
    expect(testNumbersArray.every((value) => value < 40)).toBeTruthy();
    expect(testNumbersArray.every((value) => value > 40)).toBeFalsy();
  });

  test("changes all elements in an array to a static value - fill()", () => {
    testNumbersArray.fill(6, 2, 4);

    expect(testNumbersArray.data).toEqual(testFilledNumbersArray);
  });

  test("returns the first element in the provided array that satisfies the provided function - find()", () => {
    expect(testNumbersArray.find(elementGreaterThanTen)).toEqual(30);
  });

  test("returns the index of the first element in the provided array that satisfies the provided function - findIndex()", () => {
    expect(testNumbersArray.findIndex(elementGreaterThanTen)).toEqual(1);
  });

  test("returns the last element in the provided array that satisfies the provided function - findLast()", () => {
    expect(testNumbersArray.findLast(elementGreaterThanTen)).toEqual(13);
  });

  test("returns the index of the last element in the provided array that satisfies the provided function - findLastIndex()", () => {
    expect(testNumbersArray.findLastIndex(elementGreaterThanTen)).toEqual(5);
  });

  test("run a callback function on each element of the array - forEach()", () => {
    const testForEachArray = [];
    testNumbersArray.forEach((element) => testForEachArray.push(element));

    expect(testForEachArray).toEqual(testNumbersArray.data);
  });

  test("check if the passed in element is in this.data - includes()", () => {
    expect(testArray.includes("this")).toBeTruthy();
    expect(testArray.includes("that")).toBeFalsy();
  });

  test("run a callback function on each element of the array - map()", () => {
    const testForEachArray = [];
    testNumbersArray.map((element) => testForEachArray.push(element));

    expect(testForEachArray).toEqual(testNumbersArray.data);
  });
});
