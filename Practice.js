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
let arr=[2,4,1,2,5,7,2,4,19,2,3]

function maxval(arr){
    let max=arr[0]
    for (let i=1; i<arr.length;i++){
        if(max<arr[i]){
         max=arr[i];
        }
    }
    console.log(max)
}
maxval(arr)
