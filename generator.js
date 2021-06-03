import Validator from './Validator.js';
// Array list of validated output
let cardArray = [];
// First six number of valid credit card
let bin = 489504;
while (true) {
  let result = `${bin}`;
  for (let i = 0; i <= 9; i++) {
    let random = Math.floor(Math.random() * 9);
    result += `${random}`;
    // Change result of string-number to number
    result = Number(result);
  }
  if (Validator.validate(result)) {
    cardArray.push(result);
    if (cardArray.length === 100) {
      console.log(cardArray);
      break;
    }
  }
}