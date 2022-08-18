// Assignment Code
let generateBtn = document.querySelector("#generate");

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

//? Make password between 8-20 characters in a better way?
//? let passwordLength = Math.floor(Math.random * userInput);

// TODO: Make function generatePassword(); receive user inputs upon clicking Generate (click event already defined)
function generatePassword() {
  var pwd = [];
  let userInput = parseInt(
    prompt(
      "How long would you like your password to be? (Must Be Between 8-20 Characters)"
    )
  );

  if (Number.isNaN(userInput)) {
    alert("password length is not provided as a number");
    return null;
  }

  if (userInput < 8 || userInput > 128) {
    console.log("Invalid Value");
    generatePassword();
  }
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
    "Would you like to include numbers in your password"
  );

  // confirmLower();
  if (lowerConfirm === true) {
    //TODO:  Add the lowerCaseArray to the possible outcomes randomness.
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

  for (var i = 0; i < userInput; i++) {
    pwd.push(userChoice[Math.floor(Math.random() * userChoice.length)]);
    console.log(pwd);
  }

  return pwd.join("");
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
  console.log(userChoice);
}

// getLowerCase(); TODO: Make this function activate the lowerCaseArray.

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
