function printNumberfromOneToTen() {
  for (let i = 1; i < 101; i++) {
    console.log(i);
  }
}

printNumberfromOneToTen();

function printOddNumberLessThanOneHundred() {
  for (let i = 100; i > 0; i--) {
    i % 4 === 0 ? console.log(i) : null;
  }
}

printOddNumberLessThanOneHundred();

function printTheMultiplicationTableWithNumberFormOneToTen() {
  for (let i = 1; i < 11; i++) {
    for (let o = 1; o < 11; o++) {
      console.log(`${i} * ${o}`);
    }
  }
}

printTheMultiplicationTableWithNumberFormOneToTen();

function calculateTheSumOfNumberFromOneToTen() {
  for (let i = 1; i < 11; i++) {
    console.log(`${i} + ${i}`);
  }
}

calculateTheSumOfNumberFromOneToTen();
