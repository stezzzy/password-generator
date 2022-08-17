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
// let selectedChar = "";
let userChoice = [];

//? Make password between 8-20 characters in a better way?
//? let passwordLength = Math.floor(Math.random * userInput);

// TODO: Make function generatePassword(); receive user inputs upon clicking Generate (click event already defined)
function generatePassword() {
  let userInput = prompt(
    "How long would you like your password to be? (Must Be Between 8-20 Characters)"
  );
  if (userInput >= 8 && userInput <= 20) {
    console.log("Valid Value");

    function confirmLower() {
      confirm("Would you like to include lower case letters in your password?");
    }
    confirmLower();
    if (confirmLower) {
      //TODO:  Add the lowerCaseArray to the possible outcomes randomness.
      let selectedChar = userChoice.push(...lowerCaseArray);
      console.log(selectedChar);
      function confirmUpper() {
        confirm(
          "Would you like to include UPPER case letters in your password?"
        );
      }
      if (confirmUpper) {
        let selectedChar = selectedChar.push(...upperCaseArray);
        function confirmSpecial() {
          confirm(
            "Would you like to include special Characters in your password?"
          );
        }
        if (confirmSpecial) {
          let selectedChar = selectedChar.push(...specialCharArray);
          function confirmNumbers() {
            confirm("Would you like to include numbers in your password");
          }
          if (confirmNumbers) {
            let selectedChar = selectedChar.push(...numbersArray);
          } else {
            return;
          }
        } else {
          //TODO: if no special characters make a prompt confirmNumbers and if confirm selectedChar does not include special characters.
          confirmNumbers();
        }
      } else {
        //TODO: if no uppercase make prompt confirmSpecial and if confirm selectedChar does not include uppercase
        confirmSpecial();
      }
    } else {
      //TODO: if no lowercase make prompt confirmUpper and if confirm selectedChar does not include lowercase
      confirmUpper();
    }

    // getLowerCase(); TODO: Make this function activate the lowerCaseArray.
  } else {
    window.alert("Invalid Value");
    generatePassword();
  }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
