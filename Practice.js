//https://codeguppy.com/blog/javascript-coding-challenges-for-beginners/index.html

//Print the odd numbers less than 100

//for(let i=0; i<100; i++){
//if(i%2!==0){
// console.log(i)
//}
//}

//for (let i=1; i<100;i+=2){
// console.log(i)
//}

//Print the multiplication table with 7
//for(let i = 1; i <= 10; i++)
//{
//   let row = "7 * " + i + " = " + 7 * i;
////   console.log(row);
//}

//for (let i = 0; i<=10; i++){
// let row = "7 * "+i+" = "+ i*7
// console.log(row)
//}

//Print all the multiplication tables with numbers from 1 to 10 (MUST RETRY)

//for(let i=1;i<=10; i++){
//  multiply(i)
//console.log("")
//}

//function multiply(number){

//  for(let i=1; i<=10; i++)
//{
//  let value = number + " * "+ i+ " = " + i*number
//console.log(value)
//}
//}

//Calculate the sum of numbers from 1 to 10 (Almost got it)(Redo)
////let sum = 0;

//for(let i=1; i<=10; i++){
//   sum = i+sum
//}

//console.log(sum)

//Calculate 10! (Done by myself)

//let multiple = 1

//for (let i=1;i<=10;i++){
// multiple *= i

//}

//console.log(multiple)

//Calculate the sum of odd numbers greater than 10
//and less than 30 (Done by myself)

//let sum = 0

//for (let i=11; i<30;i+=2){
// sum = sum + i
//}

//console.log(sum)

//Create a function that will convert from Celsius to Fahrenheit
//(Done by myself)

//function ctf(celcius){
//  return celcius * 1.8 + 32;
//}

//console.log(ctf(2))

//Calculate the sum of numbers in an array of numbers
//(My attempted case was not generalised)
//let sum = 0
//let arr =[1,2,3]

// for (let i=0; i<=arr.length-1;i++){
//    sum += arr[i]
//}

//console.log(sum)

//solution (For general)
//function sumArray(arr){
//  let sum =0
//for (let i=0; i<arr.length; i++){

//   sum +=arr[i]
//}
//return sum
//}

//console.log(sumArray(arr))

//Calculate the average of the numbers in an array of numbers
//(Completed with a small error) *REMEMBER WHEN DOING FOR LOOPS, THE
//* i<arr.length NOT i<= arr.length
//function averageNum(arr){
//  let sum = 0;

//for (let i=0; i<arr.length;i++){
//  sum+=arr[i];
//}
//return sum/arr.length;
//}

//let arr = [1,2,3,4,5]
//console.log(averageNum(arr))

//Create a function that receives an array of numbers and
//returns an array containing only the positive numbers
//（Method1)(need to remember how to use filter syntax)
//let arr = [1,-2,-4,-1,8]
//let pos = []

//arr.filter(function posnum(value){
//    if(value>0){pos.push(value)}
//}
////)
//console.log(pos)

//(Method 2) (I'm the goat (Even though this took like 10 mins))
//function posArray(arr){
// for(let i=0; i<arr.length;i++)
//if (arr[i]>0){
//    pos.push(arr[i])
// }
//}
//posArray(arr)

//console.log(pos)

//Find the maximum number in an array of numbers (FIRST SORTING ALGORITHM)
//let arr=[2,4,1,2,5,7,2,4,19,2,3]

//function maxval(arr){
//  let max=arr[0]
//for (let i=1; i<arr.length;i++){
//  if(max<arr[i]){
// max=arr[i];
// }
//}
// console.log(max)
//}
//maxval(arr)

//Print the first 10 Fibonacci numbers without recursion
//(I could only do it using an array)
////let fibonacci =[]
//let i0= 1;
//let i1= 1;

//fibonacci.push(i0)
//fibonacci.push(i1)
//for(i=2;i<10;i++ ){

//  fibonacci[i]=fibonacci[i-1]+fibonacci[i-2]

//}
//console.log(fibonacci)
//(Solution without array)
//let f0 = 0;
//console.log(f0);

//let f1 = 1;
//console.log(f1);

//for(let i = 2; i < 11; i++)
//{
//  let fi = f1 + f0;
//console.log(fi);

//f0 = f1;
//f1 = fi;
//}

//Create a function that will find the nth Fibonacci
//number using recursion (REDO)(Couldn't do)

//function nfib(n){
//  if (n === 0)
//    return 0;
//if (n === 1)
//  return 1;

//return nfib(n-1) + nfib(n-2);

//}
//console.log(nfib(9))

//Create a function that will return a Boolean specifying
//if a number is prime (IF YOU EVER WANT TO SET INFINITE RANGE
// DO maxDiv = Math.sqrt(number))

//function primetest(number)
//{
//if(number<2)
//  return false;

//if(number == 2)
//  return true;

//let maxDiv = Math.sqrt(number);

//for (let i=2; i<= maxDiv; i++)
//{
//if (number % i == 0 )
//{
//    return false;
//  }

//    return true;
//  }

//}
//console.log(primetest(9))

//Calculate the sum of digits of a positive integer number

//let sum = 0

//function sumnum(n){
//    for (let i=0;i<n.length; i++)
//    sum += n[i]
//}

//console.log(sumnum(123))

//1. deposit money

/*const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};
const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

function deposit() {
  while (true) {
    const depositAmount = prompt("What is your deposit amount? ");
    const depositAmountFloat = parseFloat(depositAmount);

    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.log("Please try again");
    } else {
      return depositAmountFloat;
    }
  }
}

//2. get number of lines
function getNumberOfLines() {
  while (true) {
    let numberOfLines = prompt("Number Of Lines to bet on? ");
    let intnumberOfLines = parseFloat(numberOfLines);

    if (
      isNaN(intnumberOfLines) ||
      intnumberOfLines <= 0 ||
      intnumberOfLines > 3
    ) {
      console.log("invalid number");
    } else {
      return intnumberOfLines;
    }
  }
}

function getBet(balance, numberOfLines) {
  let betAmount = prompt("Enter the bet per line: ");
  let betFloat = parseFloat(betAmount);

  if (
    isNaN(betAmount) ||
    betAmount <= 0 ||
    betAmount > balance / numberOfLines
  ) {
    console.log("Invalid bet, please bet again");
  } else {
    return betFloat;
  }
}

function spin() {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelsSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelsSymbols.length);
      const selectedSymbol = reelsSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelsSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
}

function transpose(reels) {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
}

function printRows(rows) {
  for (let row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
}

function getWinnings(rows, bet, lines) {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }
    if (allSame) {
      winnings += bet * SYMBOLS_VALUES[symbols[0]];
    }
  }
  return winnings;
}

function game() {
  let balance = deposit();

  while(true){
  console.log("You have a balance of $"+balance)
  const numberOfLines = getNumberOfLines();
  const bet = getBet(balance, numberOfLines);
  balance -= bet*numberOfLines;
  const reels = spin();
  const rows = transpose(reels);
  printRows(rows);
  const winnings = getWinnings(rows, bet, numberOfLines);
  balance = balance + winnings;
  console.log("You won,$" + winnings.toString());
  console.log("You now have, $"+balance + " continue?");

  if (balance <=0){
    console.log("You ran out of money")
    break;
    } 

    const playAgain = prompt("Do you want to play again? (y/n)")

    if (playAgain!== "y") break
    }
  }
  

game();*/

/*let sum = 0

function sumArray(arr){
for (let i=0;i<arr.length;i++){
  sum += arr[i]
  }
}
let arr = [1,2,3,213,1,231,1]
sumArray(arr)
console.log(sum)*/

/*function findMax(array){
let index = array[0]
for (let i=0;i<array.length;i++){
if (index<array[i])
{
  index = array[i]}

}
console.log(index)
  }
let array = [-5, 10, -3, 12, -9, 5, 90, 0, 1]

findMax(array)
*/

/*let fibonacci = [1,1];
for(let i=0;i<8;i++){
  fibonacci.push(fibonacci[i]+fibonacci[i+1])
}
console.log(fibonacci)*/

/*function nfib(num){
  let fibonacci = [1,1]
  
  if (num === 0){
    console.log(0);
  }

  else if (num ===1){
    console.log(1);
  }
  

  else{
    for (let i=0; i<num-2 ; i++){
      fibonacci.push(fibonacci[i]+fibonacci[i+1])

    }
    console.log(fibonacci[num-1])}
  }


nfib(19) */

/* MUST RETRY LATER
function isPrime(n) {
  if (n < 2) {
    return false;
  } else if (n == 2) {
    return true;
  } else if (n > 2) {
    let maxDiv = Math.sqrt(n);
    for (let i = 2; i < maxDiv; i++) {
      if (n % i == 0) {
        return false;
      } 
    }
    return true;
  }
}

console.log(isPrime(7))*/


/* 
Explanation/Logic


function sumDigits(n){
let numString = n.toString()  (Firstly, I turned each character in the number into a string, 
thus breaking it apart => into "102")
let arr =[] (Empty array so that I can then store each individual string value into 
  an index)
for (let char of numString){  (for each character in the string I push it into the array)
arr.push(char)
}
(
  AT THIS STAGE, I have produced arr = ["1","0","2"]
)
let sum = 0;  (The number that is being summed to)
for (let i =0;i<arr.length;i++){ 
  sum += parseInt(arr[i]) (Since I cannot directly add each element of the array,
    I need to parseInt it to allow for addition of each indiivdiual element)
}
console.log(sum) (Sum!)
}

sumDigits(102) (Call the function)*/

//Check for Prime first

function isPrime(n){
  if (n<2){
    return false;
  }
  else if (n==2){
    return true;
  }
  else if(n>2){
    let maxDiv = Math.sqrt(n)
    for(let i = 2; i<maxDiv;i++){
      if(n%i ==0){
        return false;
      }
      else{
        return true;
      }
    }
  }
}

function printPrimes(nPrimes)
{
    let n = 0;
    let i = 2;
    
    while(n < nPrimes)
    {
        if (isPrime(i))
        {
            console.log(n, " --> ", i);
            n++;
        }
        
        i++;
    }
}

printPrimes(100);
