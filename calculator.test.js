const calculator = require('./calculator.js')

test('addition one', ()=>{
    expect(calculator('addition', 1, 2)).toBe(3)
})

test('addition two', ()=>{
    expect(calculator('addition', 0.1, 0.2)).toBe(0.3)
})

test('addition three', ()=>{
    expect(calculator('addition', -123, 23)).toBe(-100)
})

test('subtraction one', ()=>{
    expect(calculator('subtraction', 1, 2)).toBe(-1)
})

test('subtraction one', ()=>{
    expect(calculator('subtraction', 13, 2)).toBe(11)
})

test('subtraction one', ()=>{
    expect(calculator('subtraction', 0.1, 0.2)).toBe(-0.1)
})

test('division one', ()=>{
    expect(calculator('division', 1, 2)).toBe(0.5)
})

test('division one', ()=>{
    expect(calculator('division', -1, 2)).toBe(-0.5)
})

test('division one', ()=>{
    expect(calculator('division', -100, -2)).toBe(50)
})

test('multiplication one', ()=>{
    expect(calculator('multiplication', 4, 2)).toBe(8)
})

test('multiplication two', ()=>{
    expect(calculator('multiplication', 12, -4)).toBe(-48)
})

test('multiplication three', ()=>{
    expect(calculator('multiplication', 0.2, 3)).toBe(0.6)
})
