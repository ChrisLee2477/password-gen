// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// 18 spec
// 10 num
// 26 letters
var characters = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "@", "^", "&", "*", "(", ")", "-", "_", "+", "=", ",", ".", "/", "?"]
var passArray = []
i = 0
// Write password to the #password input
function generatePassword(){

capYes = confirm("Do you want capital letters in your password? (Y/N)")
lowYes = confirm("Do you want lower case letters in your password? (Y/N)")
numYes = confirm("Do you want numbers in your password? (Y/N)")
speYes = confirm("Do you want special characters in your password? (Y/N)")
passLength = prompt("How long do you want your password? ")
while(passLength > 128 || passLength < 8){
  alert("Your password does not meet the criteria")
  passLength = prompt("How long do you want your password?")
} 
while(i <= passLength){
if(capYes){
  capChar = characters.slice(0 , 26)
  capCharLength = capChar.length
  newChar = capChar[Math.floor(Math.random() * capCharLength)]
  passArray.push(newChar)
  i += 1
}
if(lowYes){
  lowChar = characters.slice(26,52)
  lowCharLength = lowChar.length
  newChar= lowChar[Math.floor(Math.random() * lowCharLength)]
  passArray.push(newChar)
  i += 1
}
if(numYes){
  numChar = characters.slice(52, 62)
  numCharLength = numChar.length
  newChar= numChar[Math.floor(Math.random() * numCharLength)]
  passArray.push(newChar)
  i += 1
}
if(speYes){
  speicalChar = characters.slice(62)
  speicalCharLength = speicalChar.length
  newChar= speicalChar[Math.floor(Math.random() * speicalCharLength)]
  passArray.push(newChar)
  i += 1
}
}
passArrayCut = passArray.slice(0, passLength)
passArrayAlmost = passArrayCut.join()
console.log(passArrayAlmost.replaceAll( ",", ""))
password = passArrayAlmost.replaceAll( ",", "")
return password

}








function writePassword() {
  var password = generatePassword();
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
