import {createGenerator} from "../dist/index.js";

const generator = createGenerator(489504)
const cards = await generator.generate()

console.log(cards)