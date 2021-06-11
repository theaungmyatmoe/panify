# Painfy

Validated credit card generator and validator.

# Installations

```bash
npm install panify

#or

yarn add panify
```

# Usage

```js
import {Generator} from 'panify';

const BIN = 123456; // First six digits of crefit card (ex:visa)
const panify = new Generator(BIN);
const cardArray = panify.generate();
console.log(cardArray); 
/** It will return like this.
   [
      { card_number: 1234568048668257,
      month: 8, 
      year: 2024
      },
      ...
    ]
*/
```

# Get More Cards

You can also generate many cards whatever you like.

```js
const BIN = 123456; // First six digits of crefit card (ex:visa)
const panify = new Generator(BIN,100);
console.log(panify.generate()); // => 100 array of objects will return
```

# CLI Usage

```bash
# -g means generate depends on bin that you support
npx panify -g 123456
```