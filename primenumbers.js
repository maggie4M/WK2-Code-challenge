function showPrime(array){
    //It uses.filter method which starts an empty array which will hold our generated outcome 
    return array.filter(primeNumber )
}
// The function  checks if the inputed number is a prime number or not
function primeNumber(number){
    if(number <2) return false;  // If the number is less than 2 it is not a prime number 
    for (let i = 2; i <=Math.sqrt(number); i++){// It loops from 2 and above
        if (number % i ===0) return false  //If the number is divisible by i without a remainder then i is a factor of the number and therefore the number is not a prime number
        
    }
    return number > 1;//When the loop is completed and no  factor is found  and the number is greater than 1 then it is declared a primeNumber

}