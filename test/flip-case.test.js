const flipCase = require('../src/flip-case')


describe('flipCase', () => {
    it('should change upper case letters to lower case', () => {
        const result = flipCase('BANANA')
        expect(result).toEqual('banana')
    })

    it('should change lower case letters to upper case', () => {
        const result = flipCase('banana')
        expect(result).toEqual('BANANA')
    })

    it('should change  letters from lower to upper and upper to lower', () => {
        const result = flipCase('HeY TheRe')

        expect(result).toEqual('hEy tHErE')
    })

    it('should ignore non letters', () => {
        const result = flipCase('HEY there 1234567.!!#$@#')
        expect(result).toEqual('hey THERE 1234567.!!#$@#')

    })
})