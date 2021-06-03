export default class Validator {
  
  static validate(cc) {
    // change cc to Number array
    cc = Array.from(String(cc),Number);
    
    // Luhn Alogorithom
    let sum = 0;
    for (let i = 0; i <= cc.length - 1; i++) {
      let digit = cc[i];
      if (i % 2 === 0) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
    }
    return sum % 10 === 0;
  }
  
}