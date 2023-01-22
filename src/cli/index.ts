#!/bin/env node

import prompts from "prompts";
import {createGenerator} from "../generator";
import number = prompts.prompts.number;

try {
    const questions = [
        {
            type: 'text',
            name: 'cardNumber',
            message: 'Type first (6) number of credit card',
            validate: cardNumber => cardNumber.length < 6 ? `Card bin number must have minimum 6 digits. ` : true
        },
        {
            type: 'number',
            name: 'toalAmount',
            message: 'Total amount of cards',
            validate: toalAmount => toalAmount > 1 && !(typeof toalAmount === 'number') ? `Total card number must be number ` : true
        }
    ]

    // @ts-ignore
    const response = await prompts(questions);
    const {cardNumber, toalAmount} = response;

    const generator = createGenerator(cardNumber, toalAmount)
    const result = await generator.generate();
    console.log(result);

} catch (error) {
    console.log(error)
}