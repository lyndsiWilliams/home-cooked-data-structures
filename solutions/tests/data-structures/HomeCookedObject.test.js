const testObjectConstants = require("../helpers");

const {
  mockHomeCookedObject,
  testObject,
  testArray,
  testEnumeratedObjectData,
  testObjectEntries,
  testObjectFromEntries,
} = testObjectConstants;

describe("HomeCookedObject", () => {
  test("creates a new HomeCookedObject - create()", () => {
    expect(testObject).toEqual({ test1: 1, test2: 2 });
  });

  test("copies one or more enumerable sources into a target object - assign()", () => {
    const enumeratedObject = mockHomeCookedObject.assign(
      testObject,
      testArray.data
    );

    expect(enumeratedObject).toEqual(testEnumeratedObjectData);
  });

  test("transforms the object's key/value pairs into an array - entries()", () => {
    expect(testObjectEntries).toEqual([
      ["test1", 1],
      ["test2", 2],
    ]);
  });

  test("transforms a list of key-value pairs into an object - fromEntries()", () => {
    expect(testObjectFromEntries).toEqual({ test1: 1, test2: 2 });
  });

  test("checks if a property is in an object - hasOwn()", () => {
    const objectHasOwnTruthy = mockHomeCookedObject.hasOwn(
      testObjectFromEntries,
      "test1"
    );

    const objectHasOwnFalsy = mockHomeCookedObject.hasOwn(
      testObjectFromEntries,
      "Ceci n'est pas une pipe"
    );

    expect(objectHasOwnTruthy).toBeTruthy();
    expect(objectHasOwnFalsy).toBeFalsy();
  });

  test("returns an array of a given object's property names - keys()", () => {
    expect(mockHomeCookedObject.keys(testObject)).toEqual(["test1", "test2"]);
  });

  test("returns an array of a given object's values - values()", () => {
    expect(mockHomeCookedObject.values(testObject)).toEqual([1, 2]);
  });
});
