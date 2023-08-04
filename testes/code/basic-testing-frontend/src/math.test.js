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

it('should yield 0 if an empty array is provided',() => {
    const numbers = []

    const result = add(numbers)

    expect(result).toBe(0)
})

it('should should throw an error if no value is passed into the function', () => {
    const resultFn = () => {
        add()
    }
    expect(resultFn).toThrow()
    //in this case were changed the structure of the test
})

it('should throw an error if provided with multiple arguments instead of an array', () =>{
    const resultFn = () => {add(1,5,2)} 

    expect(resultFn).toThrow
})
