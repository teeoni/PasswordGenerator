// Assignment code here

//global variables for true false values if needed | UPDATE: Not really needed but leaving for future reference.
var checkLower;
var checkUpper;
var checkNumber;
var checkSymbol;
var length;
var password;

//Set Arrays

var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolArray = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordArray = [];

//Create a prompt list to ask about criteria. This includes lowercase, uppercase, numeric, and/or special characters. 

function promptLauncher(){
let passwordLength = +prompt("Please enter number range from 8-128 for your Password Length");
console.log(passwordLength);
console.log(typeof passwordLength);

let confirmLower = prompt("Would you like lower case numbers? Type 'Yes' or 'No'");
console.log(confirmLower);

let confirmUpper = prompt("Would you like upper case numbers? Type 'Yes' or 'No'");
console.log(confirmUpper);

let confirmNumber = prompt("Would you like numbers? Type 'Yes' or 'No'");
console.log(confirmNumber);

let confirmSymbols = prompt("Would you like special characters? Type 'Yes' or 'No'");
console.log(confirmSymbols);

let confirmSelections = prompt("Is the following selection correct: " + "Password Length:" + passwordLength + ", Lowercase: "
+ confirmLower + ", Uppercase: " + confirmUpper + ", Numeric: " + confirmNumber + ", Special Characters: " + confirmSymbols + " | Type 'Yes' or 'No'" );

 //Check for proper Password Length
 if (passwordLength < 8 || passwordLength > 128){
  alert("You have made an invalid entry on Password Length prompt, please try again");    
  return "";
}
else if (passwordLength >= 8 && passwordLength <= 128 ){
  length = passwordLength;
}


//Check for proper lowercase options
if (confirmLower == "Yes"){
  checkLower = true;
  passwordArray = passwordArray.concat(lowerArray);
  console.log("lower equals: ", checkLower + "Array includes: " , passwordArray);

}
else if (confirmLower == "No"){
  checkLower = false;
  console.log("lower equals: ", checkLower);
}
else{
  alert("You have made an invalid entry on Lowercase prompt, please try again");
  return "";
}

//Check for proper Uppercase options
if (confirmUpper == "Yes"){
  checkUpper = true;
  passwordArray = passwordArray.concat(upperArray);
  console.log("lower equals: ", checkUpper + " and Array includes: " , passwordArray);

}
else if (confirmUpper == "No"){
  checkUpper = false;
  console.log("upper equals: ", checkUpper);

}
else{
  alert("You have made an invalid entry on Uppercase prompt, please try again");
  return "";
}

//Check for proper numeric options
if (confirmNumber == "Yes"){
  checkNumber = true;
  passwordArray = passwordArray.concat(numberArray);
  console.log("number equals: ", checkNumber + " and Array includes: " , passwordArray);

}
else if (confirmNumber == "No"){
  checkNumber = false;
  console.log("number equals: ", checkNumber);
}
else{
  alert("You have made an invalid entry on Numeric prompt, please try again");
  return "";
}

//Check for proper Symbol options
if (confirmSymbols == "Yes"){
  checkSymbol = true;
  passwordArray = passwordArray.concat(symbolArray);
  console.log("symbol equals: ", checkSymbol + " and Array includes: " , passwordArray);
}
else if (confirmSymbols == "No"){
  checkSymbol = false;
  console.log("symbol equals: ", checkSymbol);

}
else{
  alert("You have made an invalid entry on Special Character prompt, please try again");
  return "";
}

console.log('The criteria in order from lower to length: ' , checkLower, checkUpper, checkNumber, checkSymbol, length);




}


// This will generate the password based on the array
function generatePassword(){

  var randomPassword = '';

  for (i = 0; i<length; i++) {
    randomPassword = randomPassword + passwordArray[Math.floor(Math.random() * passwordArray.length)];
    console.log(randomPassword);
  };

  return randomPassword;


}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  promptLauncher();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  //This is firing before the password is displayed for some reason
  //alert("Your New Password is down below!");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
