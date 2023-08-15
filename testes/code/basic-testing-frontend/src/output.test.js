import { describe, it, expect} from 'vitest'
import { generateResultText } from './output'


describe('generateResultText()', () => {
    it('should retur a string, no matter which value is passed in', () => {
        const val1 = 1;
        const val2 = 'invalid'
        const val3 = false

        const res1 = generateResultText(val1)
        const res2 = generateResultText(val2)
        const res3 = generateResultText(val3)

        expect(res1).toBeTypeOf('string')
        expect(res2).toBeTypeOf('string')
        expect(res3).toBeTypeOf('string')
    })
})