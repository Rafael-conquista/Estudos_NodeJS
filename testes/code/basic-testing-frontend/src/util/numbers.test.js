import { it, expect } from 'vitest'
import { transformToNumber } from './numbers'

it('should return a number, not a string',() => {
    const number = '5'
    const result = transformToNumber(number)
    expect(result).toBeTypeOf('number')
})

it('should yield Nan for non-transformable values', () => {
    const  input = 'invalid'
    const result = transformToNumber(input)
    expect(result).toBeNaN()
})