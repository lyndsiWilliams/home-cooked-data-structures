const HomeCookedObject = {
  // Assign
  assign(target, ...sources) {
    if (sources.length > 1) {
      let targetObject = { ...target };
      for (let i = 0; i < sources.length; i++) {
        targetObject = { ...targetObject, ...sources[i] };
      }
      return targetObject;
    }
    return { ...target, ...sources[0] };
  },

  // Create a new HomeCookedObject
  create(prototype) {
    return { ...prototype };
  },

  // Returns an array of the passed in object's key/value pairs
  entries(object) {
    let objectEntries = [];
    for (let key in object) {
      objectEntries.push([key, object[key]]);
    }
    return objectEntries;
  },
};

const testObject = HomeCookedObject.create({ test1: 1, test2: 2 });
const anotherTestObject = HomeCookedObject.create({ test3: 3, test4: 4 });
const yetAnotherTestObject = HomeCookedObject.create({ test5: 5, test6: 6 });
// console.log(testObject);
// console.log(HomeCookedObject.entries(testObject));
console.log(
  HomeCookedObject.assign(testObject, anotherTestObject, yetAnotherTestObject)
);
console.log(Object.assign(testObject, anotherTestObject, yetAnotherTestObject));
