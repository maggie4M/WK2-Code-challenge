
function stringSwap(str) {
  //The let function splits the string into an array of characters
    let string = '';
    for (let i = 0; i < str.length; i++) {
      //It reads each character and using the if function it converts the lowercase characters into uppercase while it also converts the uppercase characters into uppercase using  toUpperCase() and toLOwerCase
      let char = str.charAt(i);
      if (char === char.toLowerCase()) {
        string += char.toUpperCase();
      } else {
        string += char.toLowerCase();
      }
    }
    //It then joins the split characters back into a sting and returns it 
    return string;
  }
  console.log(stringSwap ("The Quick Brown Fox"));