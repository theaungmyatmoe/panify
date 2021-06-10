#!/usr/bin/env node

import {
  Luhn
} from '@amm834/luhn';

let info: string | boolean;
const option: string = process.argv[2];
const pan: string = process.argv[3];
const __VERSION_NUMBER: string = '2.3.0';

switch (option) {
  case '-h' || '--help':
    info = showHelp()
    break;
  case '-v' || '--version':
    info = `
    Luhn CLI Version - v${__VERSION_NUMBER} 🐈✨
    `;
    break;
  case '--validate':
    info = validate(parseInt(pan));
    break;
  default:
    info = showHelp();
  }

  console.log(info);

  function showHelp() {
    return     `
    Luhn Validator CLI 🐈✨
    This CLI application was developed by Aung Myat Moe.

    Usage : luhn <options> <card_numbers>

    Options

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