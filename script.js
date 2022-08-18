// Assignment Code
let generateBtn = document.querySelector("#generate");

// Arrays as an object for future updates
// let choices = {
//   lowerCase: [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ],
//   upperCase: [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ],
//   specialChar: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
//   numberChar: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// }
// End arrays object

//TODO: Declare functions containing arrays of each parameter
let lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let selectedChar = [];
let userChoice = [];

//? Make password between 8-128 characters in a better way?
//? Possible randomness solution: let passwordLength = Math.floor(Math.random * userChoice.length);

// TODO: Make function generatePassword(); receive user inputs upon clicking Generate (click event already defined)
function generatePassword() {
  var pwd = [];
  let userInput = parseInt(
    prompt(
      "How long would you like your password to be? (Must Be Between 8-128 Characters)"
    )
  );
  // Check user inputs validity. Is it a number? Is it within the 8-128 parameters?
  if (Number.isNaN(userInput)) {
    alert("Please provide password length as a number!");
    return null;
  }

  if (userInput < 8) {
    alert(
      "Your password must include at LEAST 8 characters, please try again!"
    );
    return null;
  }

  if (userInput > 128) {
    alert(
      "Your password may not include MORE than 128 characters, please try again!"
    );
    return null;
  }
  // Possible future solution to combine 2 above statements
  // if (userInput < 8 || userInput > 128) {
  //   console.log("Invalid Value");
  // }
  // End future solution

  // Confirm windows to check users preferences on character types within their password
  var lowerConfirm = confirm(
    "Would you like to include lower case letters in your password?"
  );
  var specialConfirm = confirm(
    "Would you like to include special Characters in your password?"
  );
  var upperConfirm = confirm(
    "Would you like to include UPPER case letters in your password?"
  );
  var confirmNumbers = confirm(
    "Would you like to include numbers in your password?"
  );

  // Concatenate arrays of users chosen character types -> stored to empty array userChoice
  if (lowerConfirm === true) {
    userChoice = userChoice.concat(lowerCaseArray);
    console.log(userChoice);
  }
  if (upperConfirm === true) {
    userChoice = userChoice.concat(upperCaseArray);
    console.log(userChoice);
  }
  if (specialConfirm === true) {
    userChoice = userChoice.concat(specialCharArray);
    console.log(userChoice);
  }

  if (confirmNumbers) {
    userChoice = userChoice.concat(numbersArray);
    console.log(userChoice);
  }
  // Ensure user chooses at least one of the 4 given options
  if (
    lowerConfirm === false &&
    upperConfirm === false &&
    specialConfirm === false &&
    confirmNumbers === false
  ) {
    alert(
      "You must select at least one of the 4 prior options, please try again!"
    );
    return null;
  }
  // For loop to randomly select a character from users choices, and add it to their password until the desired length is reached -> end loop.
  for (var i = 0; i < userInput; i++) {
    pwd.push(userChoice[Math.floor(Math.random() * userChoice.length)]);
    console.log(pwd);
  }
  //Make pwd a string
  return pwd.join("");
}

// Obsolete code from first attempt:
//TODO:  Add the lowerCaseArray to the possible outcomes randomness.
//     } else {
//       //TODO: if no special characters call function confirmNumbers and if confirm selectedChar does not include special characters.
//       let selectedChar = userChoice.pop();
//       confirmNumbers();
//     }
//   } else {
//     //TODO: if no uppercase call function confirmSpecial and if confirm selectedChar does not include uppercase
//     let selectedChar = userChoice.pop();
//     confirmSpecial();
//     userChoice.pop();
//   }
// } else if (!confirmLower) {
//   //TODO: if no lowercase call function confirmUpper and if confirm selectedChar does not include lowercase
//   let selectedChar = userChoice.pop();
//   confirmUpper();
//   userChoice.pop();
// }
// getLowerCase(); TODO: Make this function activate the lowerCaseArray.
// End Obsolete Code

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
