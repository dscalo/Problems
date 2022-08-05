

const lastWord = require('../src/last-word')


describe('lastWord', () => {
    it('should return the last word in a sentence', () => {
        const input = 'Hello there'

        const result = lastWord(input)

        expect(result).toEqual('there')
    })

    it('should return the whole string if it is a single word', () => {
        const input = 'Pneumonoultramicroscopicsilicovolcanoconiosis'
        
        const result = lastWord(input)

        expect(result).toEqual(input)
    })

    it('should return an empty string when passed an empty string', () => {
        const input = ''

        const result = lastWord(input)

        expect(result).toEqual('')
    })

    it('should return an empty string when passed a string of spaces', () => {
        const input = '             '

        const result = lastWord(input)

        expect(result).toEqual('')
    })


    it('should return not return any extra spaces ', () => {
        const input = 'Hello world        '

        const result = lastWord(input)

        expect(result).toEqual('world')
    })

    // Bonus uncomment these tests:
    /*
    it('should return not return any punctuation ', () => {
        const input = 'Hello world!'

        const result = lastWord(input)

        expect(result).toEqual('world')
    })

    it('should return not return numbers ', () => {
        const input = 'Hello world 44'

        const result = lastWord(input)

        expect(result).toEqual('world')
    })
    */
})