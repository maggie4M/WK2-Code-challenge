function showPrime(array){
    //It uses.filter method which starts an empty array which will hold our generated outcome 
    return array.filter(primeNumber )
}
// The function  checks if the inputed number is a prime number or not
function primeNumber(num){
    if(num <2) return false;  // If the number is less than 2 it is not a prime number 
    for (let i = 2; i <=Math.sqrt(num); i++){// It loops from 2 and above
        if (num % i ===0) return false  //If the number is divisible by i without a remainder then i is a factor of num and therefore num is not a prime number
        
    }
    return num > 1;//When the loop is completed and no  factor is found  and the number is greater than 1 then it is a primeNumber

}
const input = [1,2,3,4,5,6,7,8,9,10]  // create variable that takes input of numbers as an array
const primeArrays = showPrime (input) //Brings the primeNumbers function with an argument 
console.log(primeArrays) 