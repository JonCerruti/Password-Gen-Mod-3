// Assignment code here
var passwordLengthChar = "";
var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[",  "]", " ^ ", "_", "`", "{", "|", "}", "~"]
var chosenChar = " ";
var characters = "";
console.log(uppercaseChar)
console.log(writePassword)
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("button click")
passwordLength = window.prompt("Choose Character Length Between 8 and 128");

while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = window.prompt("You must choose between 8 and 128 characters.");
  
  console.log(passwordLength);
}
if (passwordLengthChar = "true"){
  var uppercase = confirm("Would you like to add uppercase letters?");
  console.log("uppercase" + " " + uppercase)
  var lowercase = confirm("Would you like to add lowercase letters?");
  console.log("lowercase" + " " + lowercase)
  var num = confirm("Would you like to add numbers?");
  console.log("numbers" + " " + num)
  var specialChar = confirm("Would you like to add special characters?");
  console.log("special characters" + " " + specialChar)
}
if (uppercase === false && lowercase === false && numbers === false && specialChar === false){
  alert("You must select at least 1 parameter!")
  
  var uppercase = confirm("Would you like to add uppercase letters?");
  console.log("uppercase" + " " + uppercase)

  var lowercase = confirm("Would you like to add lowercase letters?");
  console.log("lowercase" + " " + lowercase)

  var num = confirm("Would you like to add numbers?");
  console.log("numbers" + " " + num)

  var specialChar = confirm("Would you like to add special characters?");
  console.log("special characters" + " " + specialChar)
}

if  (uppercase && lowercase && num && specialChar){
  chosenChar = uppercaseChar.concat(lowercaseChar, numbers, specialCharacters);
}
else if (uppercase && lowercase && num ){
  chosenChar = uppercaseChar.concat(lowercaseChar, numbers);
}
else if (uppercase && lowercase && specialChar){
  chosenChar = uppercaseChar.concat(lowercaseChar, specialCharacters);
}
else if  (uppercase  && num && specialChar){
  chosenChar = uppercaseChar.concat( numbers, specialCharacters);
}
else if (uppercase && lowercase  ){
  chosenChar = uppercaseChar.concat(lowercaseChar);
}
else if (uppercase && num  ){
  chosenChar = uppercaseChar.concat(numbers);
}
else if (uppercase && specialChar){
  chosenChar = uppercaseChar.concat(specialCharacters);
}
else if(uppercase){
  chosenChar = uppercaseChar;
}
else if(lowercase && num && specialChar){
  chosenChar = lowercaseChar.concat(numbers, specialCharacters);
}
else if (lowercase && num){
  chosenChar = lowercaseChar.concat(numbers);
}
else if (lowercase && specialChar){
  chosenChar = lowercaseChar.concat(specialCharacters);
}
else if (lowercase){
  chosenChar = lowercaseChar;
}
else if (num && specialChar){
  chosenChar = num.concat(specialCharacters);
}
else if (num){
  chosenChar = numbers;
}
else {chosenChar= specialCharacters;
}

passwordBlank = [];

for ( var i = 0; i < passwordLength; i++ ) {
  var characters = chosenChar[Math.floor(Math.random() * chosenChar.length)];
  passwordBlank.push(characters);
}

var password =passwordBlank.join("");

return password

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)
