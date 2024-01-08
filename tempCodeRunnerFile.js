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