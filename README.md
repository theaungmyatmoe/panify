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

