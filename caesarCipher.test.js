const caesarCipher = require('./caesarCipher.js')

test('standard case', ()=>{
    expect(caesarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})

test('standard case + punctuation', ()=>{
    expect(caesarCipher('defend, the east wall. of the castle!', 1)).toBe('efgfoe, uif fbtu xbmm. pg uif dbtumf!')
})

test('standard case + capitals', ()=>{
    expect(caesarCipher('Defend the east wall of the Castle', 1)).toBe('Efgfoe uif fbtu xbmm pg uif Dbtumf')
})

test('negative shift', ()=>{
    expect(caesarCipher('bcdefghijklmnopqrstuvwxyza', -1)).toBe('abcdefghijklmnopqrstuvwxyz')
})

test('positive wrapping', ()=>{
    expect(caesarCipher('defend the east wall of the castle', 27)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})

test('negative wrapping', ()=>{
    expect(caesarCipher('Hello, World!', -29)).toBe('Ebiil, Tloia!')
})
