 import { Luhn} from '@amm834/luhn';
import {
  randRng,
  randDate
} from './randomRng';

export class Generator {
  constructor(
    public BIN: number, 
    public LIMIT: number = 10) {
    this.BIN = BIN;
    this.LIMIT = LIMIT;
  }

  generate() {
    let panAry = [];
    while (true) {
      const generatedPan = this.BIN + '' + randRng(0, 9999999999);

      if (Luhn.validate(parseInt(generatedPan))) {
        const panObject = {
          card_number: parseInt(generatedPan),
          month: randDate().month,
          year: randDate().year
        };

        panAry.push(panObject);
      }

      if (panAry.length === this.LIMIT) {
        return panAry;
      }

    }
  }

}
