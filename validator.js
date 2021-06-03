const  checker = cc => {
  let sum = 0;
  for (let i = 0; i <= cc.length - 1; i++) {
    let digit = cc[i];
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  console.log(sum);
  return sum % 10 === 0;
}
let cc = process.argv[2].split('').map(Number);
console.log(checker(cc));