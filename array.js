function generateArray(beginning, end) {
// Declare the function named 'generateArray' which accepts two parameters which represent the beginning and end of the range of values 
    let outcome= [];
    // It starts an empty array known as outcome which will hold our generated nubers 
    if (beginning <= end) {
      //It checks if the ending number is less than or equal to  the beginning number and then if it is true it arranges the value in ascending order and vice versa
      for (let i = beginning; i <= end; i++) {
        outcome.push(i);
        // It iterates from the beginning  number till the ending number , in each it adds the value of(i) to the outcome array using push()
      }
    } else {
      //It does the same but arranges the values in descending order 
      for (let i = beginning; i >= end; i--) {
        outcome.push(i);
      }
    }
    //It then returns the outcome which are the values of the array of numbers
    return outcome;
  }
  console.log(generateArray(4,7));