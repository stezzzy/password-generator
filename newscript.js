// Assignment Code
let generateBtn = document.querySelector("#generate");


function nameThisFunction() {

    // Store length of passward from the user
    var userLength = parseInt(
      prompt('How long do you want your password?'),
    )
    
    // write a kickback for if the user inputs anything but a NUMBER
    if (Number.isNaN(length)) {
      alert("password is not provided as a number")
    }
    
    // check for password length less than 8
    if (length < 8) {
      alert('Hey your password must be atleast 8 chars minimum');
      return null
    }
    
    if (length > 128) {
      alert('Hey your password must be atleast 8 chars minimum');
      return null
    }
    
    // create a variable to confirm lower casse
    
    // create a variable to confirm upper case
    
    // create a variable to numbers
    
    // create a variable for special chars
    
    // conditional statement to check if user does not include any of tghe characters
    
    if (
      specialChars === false &&
      specialChars === false &&
      specialChars === false &&
      specialChars === false
    ) {
      alert("Hey you need to alteast choose up to one character")
    }
    
    
    
    // create an object oto store user input
    var userInput = {
      userLength: userLength,
    
    hasLowerCase: hasLowerCase}
    
    // return the user obvject
    return userInput
    
    };
    
    
    // create a function to randomize the password
    // we will use math.floor math .random() here to generate
    
    
    
    // create a function to generate the password USING userINput
    function somethingFUnction() {
    var userOptions = nameThisFunction();
    
    // create a variable to store the password as its being put together
    
    // Variable to store the types of characters that the user chooses (array)
    var couldBeIncluded = []
    // varable to contain ATLEAST on of the chosen characters(array)
    
    //  if statement checking if atleast on option exists
    
    
    // conditional to guaranty a character
    if (userOptions.hasNumeric) {
      couldBeIncluded = couldBeIncluded.Methodgoeshere (to add string together)
      method to send to the array
      randomefunction(variable)
    }
    
    
    // Loop through the garentied chartsers and send back the amount the user needs
    
    
    // return the results into a STRING (join)
    
    }

    // Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);