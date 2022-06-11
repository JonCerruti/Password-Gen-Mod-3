// Assignment code here
var passwordlength = "";
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialchar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[",  "]", " ^ ", "_", "`", "{", "|", "}", "~"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("button click")
passwordlength = window.prompt("Choose Character Length Between 8 and 128");
console.log(passwordlength);
while (passwordlength < 8 || passwordlength > 128) {
  passwordlength = window.prompt("You must choose between 8 and 128 characters.");
  console.log("Password length " + passwordlength);
}
if (passwordlength = "true"){
uppercase = confirm("Would you like to add uppercase letters?");
console.log("uppercase" + " " + uppercase)
lowercase = confirm("Would you like to add lowercase letters?");
console.log("lowercase" + " " + lowercase)
numbers = confirm("Would you like to add numbers?");
console.log("numbers" + " " + numbers)
specialchar = confirm("Would you like to add special characters?");
console.log("special characters" + " " + specialchar)
}
if (uppercase === false && lowercase === false && numbers === false && specialchar === false){
  alert("You must select at least 1 parameter!")
  uppercase = confirm("Would you like to add uppercase letters?");
console.log("uppercase" + " " + uppercase)
lowercase = confirm("Would you like to add lowercase letters?");
console.log("lowercase" + " " + lowercase)
numbers = confirm("Would you like to add numbers?");
console.log("numbers" + " " + numbers)
specialchar = confirm("Would you like to add special characters?");
console.log("special characters" + " " + specialchar)
}









return "generated password"

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