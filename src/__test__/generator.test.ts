import {
  Generator
} from '../generator';
import {
  Luhn
} from '@amm834/luhn';

it('Test the card number should be success.', () => {
  const panify = new Generator(489504);
  const result = panify.generate();
  expect(result).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        cardNumber: expect.any(Number),
        month: expect.any(Number),
        year: expect.any(Number)
      })
    ])
  )});

it('Test the card number should be success.', () => {
  const result = Luhn.validate(4895048712071025);
  expect(result).toBe(true)
});

it('Test the card number should be fail', () => {
  const result = Luhn.validate(4895048712071026);
  expect(result).toBe(false)
});