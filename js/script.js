function printNumberfromOneToTen() {
  for (let i = 1; i < 101; i++) {
    console.log(i);
  }
}

printNumberfromOneToTen();

function printOddNumberLessThanOneHundred() {
  for (let i = 100; i > 0; i--) {
    i % 4 === 0 ? console.log(i) : null
  }
}

printOddNumberLessThanOneHundred();