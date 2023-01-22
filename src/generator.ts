import {generateRandomData, generateRandomRange} from './utils/random';
import {validate} from "./utils/validate";


type Card = {
    cardNumber: number;
    month: number;
    year: number;
}


/*
* @param {number} bin - The first 6 digits of the card number
* @param {number} total - The total number of card numbers that you want to generate
* @returns {void}
* */
export function createGenerator(bin: number, total = 10) {
    const generate = async (): Promise<Card[]> => {
        const cards: Card[] = [];

        for (; ;) {
            const generatedRandomNumber = `${bin}${generateRandomRange(0, 1000)}`

            if (validate(generatedRandomNumber)) {
                const {month, year} = generateRandomData();

                const validateCard: Card = {
                    cardNumber: +generatedRandomNumber,
                    month,
                    year,
                };

                cards.push(validateCard);
            }
            if (cards.length === total) break;
        }
        return cards;
    };

    return {
        generate,
    }
}
