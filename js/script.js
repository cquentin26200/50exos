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

function calculateTen () {
    let num = 1;
    for (let i = 1; i < 10; i++) {
        console.log(num *= i);
    }
}

calculateTen();

function CalculateTheSumEvenNumbersGreaterThanTenAndLessThanThirty () {
    for (let i = 30; i > 9; i--) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

CalculateTheSumEvenNumbersGreaterThanTenAndLessThanThirty();

function convertCelsiusToFahrenheit (number) {
  console.log(Math.floor(number * (9 / 5) + 32));
}

convertCelsiusToFahrenheit(34);