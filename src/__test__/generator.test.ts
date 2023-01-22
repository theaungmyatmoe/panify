import {it, expect} from 'vitest'
import {createGenerator} from "../generator";
import {validate} from "../utils/validate";

it('should generate cards with excepted card shape', async () => {
    const panify = createGenerator(489504);
    const result = await panify.generate();

    expect(result).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                cardNumber: expect.any(Number),
                month: expect.any(Number),
                year: expect.any(Number)
            })
        ])
    )
});

it('should be valid card number', () => {
    const result = validate(4895048712071025);

    expect(result).toBe(true)
});

it('should be invalid card number', () => {
    const result = validate(4895048712071026);

    expect(result).toBe(false)
});