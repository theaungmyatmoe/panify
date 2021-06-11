#!/usr/bin/env node

import {
  Luhn
} from '@amm834/luhn';
import {
  Generator
} from './generator';

let info: string | boolean | unknown;
const option: string = process.argv[2];
const pan: string = process.argv[3]// pan can be bin

const __VERSION_NUMBER: string = '1.2.0';

switch (option) {
  case '-h' || '--help':
    info = showHelp()
    break;
  case '-v' || '--version':
    info = `
    Panify CLI Version - v${__VERSION_NUMBER} 🐈✨
    `;
    break;
  case '--validate':
    info = validate(parseInt(pan));
    break;
  case '-g' || '--generate':
    info = generatePans(parseInt(pan))
    break;
  default:
    info = showHelp();
  }

  console.log(info);

  function showHelp() {
    return     `
    Panify Validator CLI 🐈✨
    Verified credit card generator and validator.

    Usage : panify <options> <card_numbers|bin_numbers>

    Options

    -g|--generate Generate Card Numbers
    --validate    Validate the card numbers
    -h|--help     Show this usage
    -v|--version  Show version number
    `;
  }

  function validate(pan: number): string {
    let isValid: boolean = Luhn.validate(pan);
    if (isValid) {
      return `
      ✅ Your credit card numbers ${pan} is valid 🎉
      `;
    } else {
      return `
      ❌ Your credit card numbers ${pan} is invalid 🥺
      `;
    }
  }

  function generatePans(bin: number) {
    const validate = Array.from(String(bin), Number);
    if (validate.length < 6) {
      return `
      BIN numbers must have at least 6 digits.
      `;
    }
    const generator = new Generator(bin);
    return generator.generate();
  }