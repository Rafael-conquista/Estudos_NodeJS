import { it, expect } from 'vitest'
import { add } from './math'


it('should summarize all number values in an array', () =>{
    //arrange 
    const numbers = [1,2,3]
    //act
    const result = add(numbers)
    //Assert
    const expectedResult = numbers.reduce(
        (prevValue,currentValue) => prevValue + currentValue, 
        0
    )
    expect(result).toBe(expectedResult)
})

it('should yield NaN if at least one invalid number is provided', () =>{
    const inputs = ['invalid value', 1]

    const result = add(inputs)

    expect(result).toBeNaN()
})

it('should yield a correct sum if an array of numeric strings values is provided', () => {
    const numbers = ['1', '2']

    const result = add(numbers)

    const expectedResult = numbers.reduce(
        (prevValue,currentValue) => +prevValue + +currentValue, 
        0
    )
    expect(result).toBe(expectedResult)
})
