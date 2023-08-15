import { describe, it, expect } from 'vitest'
import { transformToNumber,cleanNumbers } from './numbers'

describe('tranformFormToNumber', () =>{
    it('should return a number, not a string',() => {
        const number = '5'
        const result = transformToNumber(number)
        expect(result).toBeTypeOf('number')
    })
    //that's possible to make multiple asertions
    
    it('should yield Nan for non-transformable values', () => {
        const  input = 'invalid'
        const input2 = {}
        const result = transformToNumber(input)
        const result2 = transformToNumber(input2)
        expect(result).toBeNaN()
        expect(result2).toBeNaN()
    })
})
//integrations tests
describe('cleanNumbers()', () => {
    it('should return an array of numbers if an array of string number values is provided', () => {
        const numberValues = ['1','2'] 
        
        const result = cleanNumbers(numberValues)

        expect(result[0]).toBeTypeOf('number')
    })

    it('should throw an error if  an array with at leadt on empty string is provided', () => {
        const numbersValues = ['',1]

        const cleanFn = () => cleanNumbers(numbersValues)

        expect(cleanFn).toThrow()
    })
})