//A reverseString function that takes a string and returns it reversed.
const reverseString = require('./reverseString.js')

test('standard case', ()=>{
    expect(reverseString('String')).toBe('gnirtS')
})

test('standard case two', ()=>{
    expect(reverseString('foo')).toBe('oof')
})