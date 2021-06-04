# Luhn Algorithm

Luhn algorithm that can validate the cc - Credit Card numbers.

# Usage

```js
import Luhn from '@amm834/luhn';
const card_number = 4895048712071025;
let result = Luhn.validate(card_number); // return true (or) false
console.log(result);
```

# API

## Validator

Return Boolean - true (or) false
If cc is validated by **Luhn**,it will return `true`,if not it will be `false`;

```js
Luhn.validate(cc);
```
