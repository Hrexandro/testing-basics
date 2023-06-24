//A capitalize function that takes a string and returns it with the first character capitalized.

const capitalize = require('./capitalize');


test('happy path', () => {
    expect(capitalize("dog")).toBe("Dog");
  });