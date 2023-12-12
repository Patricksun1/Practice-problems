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

//Print all the multiplication tables with numbers from 1 to 10

for(let i=1;i<=10; i++){
    multiply(i)
    console.log("")
}

function multiply(number){

    for(let i=1; i<=10; i++)
    {
        let value = number + " * "+ i+ " = " + i*number
        console.log(value)
    }
}