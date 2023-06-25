//A capitalize function that takes a string and returns it with the first character capitalized.

const capitalize = require('./capitalize');


test('standard case', () => {
    expect(capitalize("dog")).toBe("Dog");
});

test('empty string', () => {
  expect(capitalize("")).toBe("");
});

test('wrong input', () => {
  expect(capitalize(1)).toBe(null);
});

test('already capitalized', () => {
  expect(capitalize("A")).toBe("A");
});