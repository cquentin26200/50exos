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
  /*let tmp = 0;
  for (let i = 0; i < array.length; i++) {
    tmp += array[i];
  } 
  return tmp;*/

  return array.reduce((e, a) => e + a);
}

calculateSumNumberInArray([1, 7, 3, 8, 2, 5]);

//11. Calculate the average of the numbers in an array of numbers

function calcuateAverageOfNumber(array) {
  return array.reduce((e, a) => e + a) / array.length;
}

calcuateAverageOfNumber([1, 7, 3, 8, 4]);

function calcuateAverageOfNumberV2(array) {
  let tmp = 0;
  for (let i = 0; i < array.length; i++) {
    tmp += array[i] / i;
  }
  return tmp;
}
calcuateAverageOfNumberV2([10, 20, 10, 5, 15]);

//.12 Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

function returnPositiveNumber(array) {
  return array.filter((e) => e > 0);
}

returnPositiveNumber([2, -4, 8, 3, -6]);

function returnPositiveNumberV2(array) {
  let tmp = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      tmp.push(array[i]);
    }
  }
  return tmp;
}

returnPositiveNumberV2([2, -4, 8, 3, -6]);

//13. Find the maximum number in an array of numbers

function findTheMaxNumber(array) {
  return array.reduce((e, a) => Math.max(e, a));
}

findTheMaxNumber([4, 2, 9, 6, 1]);

function findTheMaxNumberV2(array) {
  let tmp = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > tmp) {
      tmp = array[i]
    } 
  }
  return tmp;
}
findTheMaxNumberV2([1, 14, 78, 5, 0]);


//16. Create a function that will return a Boolean specifying if a number is prime

function returnThePrimeNumber(array) {
  return array.filter((e) => Number.isInteger(e));
}

returnThePrimeNumber([3, 8, 4.7, 1, 3.9]);

//18. Print the first 100 prime numbers

function printFirst100Number() {
  for (let i = 0; i <= 100; i++) {
    console.log(i);
  }
}

printFirst100Number();

//.22 Reverse an array

function reverseArray (array) {
  return array.reverse()
}

//24. Create a function that will merge two arrays and return the result as a new array

function mergeTwoArray(arrayOne, arrayTwo) {
  let tmp = [];
  tmp.push(arrayOne.concat(arrayTwo));
  return tmp;
}

mergeTwoArray([3, 7, 4, 1, 9], [8, 3, 6, 1, 0]);


