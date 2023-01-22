# Panify

![npm](https://img.shields.io/npm/v/panify) ![npm](https://img.shields.io/npm/dm/panify) ![npm](https://img.shields.io/npm/dy/panify)

Credit card number validator and generator.

# Installations

```bash
pnpm install panify #pnpm
```

# Usage

First, provide the intial 6 digits of the PAN number to the `createGenerator`
And then you can generate a random PAN number by calling the `generate` function.

```javascript
import {createGenerator} from "panify";

const generator = createGenerator(489504)
const cards = await generator.generate()

console.log(cards)
```

## CLI User Interface

Prompt based CLI interface for more beautiful experience.

```bash
➜  panify git:(main) ✗ panify
✔ Type first (6) number of credit card … 111111
✔ Total amount of cards … 10
[
  { cardNumber: 111111703, month: 9, year: 2027 },
  { cardNumber: 111111604, month: 6, year: 2025 },
  { cardNumber: 111111802, month: 12, year: 2024 },
  { cardNumber: 111111289, month: 5, year: 2027 },
  { cardNumber: 11111168, month: 4, year: 2023 },
  { cardNumber: 111111944, month: 11, year: 2023 },
  { cardNumber: 111111133, month: 3, year: 2027 },
  { cardNumber: 111111897, month: 1, year: 2026 },
  { cardNumber: 111111185, month: 6, year: 2025 },
  { cardNumber: 111111307, month: 3, year: 2025 }
]

```
