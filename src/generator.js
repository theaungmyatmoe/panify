import { Luhn } from '@amm834/luhn';
import { 
  randRng,
  randDate
  } from './randomRng.js';

class Generator {
  constructor(BIN, LIMIT = 10) {
    this.BIN = BIN;
    this.LIMIT = LIMIT;
    this.panAry = [];
  }

  generate() {
    while (true) {
      const generatedPan = this.BIN + '' + randRng(0, 9999999999);
      
      if (Luhn.validate(parseInt(generatedPan))) {
        this.panAry.push({
          card_number: generatedPan,
          month: randDate().month,
          year: randDate().year

        });
      }
      
      if (this.panAry.length === this.LIMIT) {
        return this.panAry;
      }
      
    }
  }

}

const obj = new Generator(489504);
console.log(obj.generate());