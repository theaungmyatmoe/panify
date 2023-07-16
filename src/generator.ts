import { Card } from "./contracts";
import { generateRandomData, generateRandomRange } from "./utils";
import { validate } from "@amm834/luhn";

interface Generator {
  generate: () => Promise<Card[]>;
}

/*
 * @param {number} bin - The first 6 digits of the card number
 * @param {number} limit - The total number of cards
 * @returns {Generator} - A generator object
 */
export function createGenerator(bin: number, limit = 10): Generator {
  const generate = async () => {
    const cards: Card[] = [];

    for (;;) {
      const generatedRandomNumber = `${bin}${generateRandomRange(0, 1000)}`;

      if (validate(generatedRandomNumber)) {
        const { month, year } = generateRandomData();

        const validateCard: Card = {
          cardNumber: +generatedRandomNumber,
          month,
          year,
        };

        cards.push(validateCard);
      }
      if (cards.length === limit) break;
    }
    return cards;
  };

  return {
    generate,
  };
}
