// program to get a random item from an array

function getRandomChar(selectedChar) {
  // get random index value
  let randomIndex = Math.floor(Math.random() * selectedChar.length);

  // get random item
  let item = selectedChar[randomIndex];

  return item;
}

let array = [1, "hello", 5, 8];
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

let result = getRandomChar(lowerCaseArray);
console.log(result);

//todo: create for loop that calls getRandomChar(userInput) times and adds it to itself
//todo something like for (result.length = 0; result.length < userInput.length; userInput++;)
