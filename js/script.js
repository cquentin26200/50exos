//1. Print numbers from 1 to 10

function printNumberfromOneToTen() {
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
}

printNumberfromOneToTen();

//2. Print the odd numbers less than 100

function printOddNumberLessThanOneHundred() {
  for (let i = 100; i > 0; i--) {
    i % 4 === 0 ? console.log(i) : null;
  }
}

printOddNumberLessThanOneHundred();

//3. Print the multiplication table with 7

function printTheMultiplicationTablWithSeven() {
  for (let i = 1; i < 11; i++) {
    console.log(`${i} * 7 = ${i * 7}`);
  }
}

printTheMultiplicationTablWithSeven();

//4. Print all the multiplication tables with numbers from 1 to 10

function printTheMultiplicationTableWithNumberFormOneToTen() {
  for (let i = 1; i < 11; i++) {
    for (let o = 1; o < 11; o++) {
      console.log(`${i} * ${o}`);
    }
  }
}

printTheMultiplicationTableWithNumberFormOneToTen();

//5. Calculate the sum of numbers from 1 to 10

function calculateTheSumOfNumberFromOneToTen() {
  for (let i = 1; i < 11; i++) {
    console.log(`${i} + ${i}`);
  }
}

calculateTheSumOfNumberFromOneToTen();

//6. Calculate 10!

function calculateTen() {
  let num = 1;
  for (let i = 1; i < 10; i++) {
    console.log((num *= i));
  }
}

calculateTen();

//7. Calculate the sum of even numbers greater than 10 and less than 30

function CalculateTheSumEvenNumbersGreaterThanTenAndLessThanThirty() {
  for (let i = 30; i > 9; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

CalculateTheSumEvenNumbersGreaterThanTenAndLessThanThirty();

//8. Create a function that will convert from Celsius to Fahrenheit

function convertCelsiusToFahrenheit(number) {
  return Math.floor(number * (9 / 5) + 32);
}

convertCelsiusToFahrenheit(34);

//9. Create a function that will convert from Fahrenheit to Celsius

function convertFahrenheitToCelsius(number) {
  return Math.floor(((number - 32) * 5) / 9);
}

convertFahrenheitToCelsius(34);

//10. Calculate the sum of numbers in an array of numbers

function calculateSumNumberInArray(array) {
  let tmp = 0;
  for (let i = 0; i < array.length; i++) {
    tmp += array[i];
  }
}

calculateSumNumberInArray([1, 7, 3, 8, 2, 5]);

//11. Calculate the average of the numbers in an array of numbers

function calcuateAverageOfNumber(array) {
  return array.reduce((e, a) => e + a) / array.length;
}

calcuateAverageOfNumber([1, 7, 3, 8, 4]);

//.12 Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

function returnPositiveNumber(array) {
  return array.filter((e) => e > 0);
}

returnPositiveNumber([2, -4, 8, 3, -6]);

//13. Find the maximum number in an array of numbers

function findTheMaxNumber(array) {
  return array.reduce((e, a) => Math.min(e, a));
}

findTheMaxNumber([4, 2, 9, 6, 1]);
