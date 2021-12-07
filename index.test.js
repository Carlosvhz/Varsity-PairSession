let {  testFunct }  = require('./index.js')

describe( 'testing testFunct', () => {
    it( " Should say hola", () => {
        const result = testFunct();
        expect(result).toBe('hola')
    })
    it( " Should say holo", () => {
        const result = testFunct(true);
        expect(result).toBe('holo')
    })
})