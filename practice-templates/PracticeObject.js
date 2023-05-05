const PracticeObject = {
  // Copies one or more enumerable sources into a target object
  assign(target, ...sources) {},

  // Create a new PracticeObject
  create(prototype) {},

  // Transforms an object's key/value pairs into an array
  entries(object) {},

  // Transforms a list of key-value pairs into an object
  fromEntries(iterable) {},

  // Checks if a property is in an object, returns boolean answer
  hasOwn(object, property) {},

  // Returns an array of a given object's property names
  keys(object) {},

  // Returns an array of a given object's values
  values(object) {},
};

const testObject = PracticeObject.create({ test1: 1, test2: 2 });
const anotherTestObject = PracticeObject.create({ test3: 3, test4: 4 });
const yetAnotherTestObject = PracticeObject.create({ test5: 5, test6: 6 });
console.log("---", testObject);
const practiceEntries = PracticeObject.entries(testObject);
console.log("---", practiceEntries);
const practicefromEntries = PracticeObject.fromEntries(practiceEntries);
console.log("---", practicefromEntries);
console.log("---", PracticeObject.hasOwn(practicefromEntries, "test1"));
console.log(PracticeObject.keys(testObject));
console.log(PracticeObject.values(testObject));
