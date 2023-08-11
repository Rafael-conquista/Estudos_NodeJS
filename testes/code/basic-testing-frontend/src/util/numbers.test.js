import { it, expect } from 'vitest'
import { transformToNumber } from './numbers'

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
// here we have the same expetation being tested twice,
// but each one is obout a different scenarios