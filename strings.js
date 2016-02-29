// //Copy the code below into the JavaScript file
// In your HTML, create an text input and a button.
// The text input should only accept letters. No numbers.
// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.

var button = document.getElementById('btn');
var input = document.getElementById('input')

function reversal() {
  var outputEl = document.getElementById('output');
  var toReverse = input.value.split("").reverse().join("");
  outputEl.innerHTML += toReverse;
  
};

function alphabits() {
  var alphabetical = input.value.split("").sort().join("");
  outputEl.innerHTML += alphabetical;
}

function palindrome() {
  var outputEl = document.getElementById('output')
  var racecar = input.value.toLowerCase().split("");
  racecar.forEach(function
    (char) {
      console.log(racecar.indexOf(char))
      })
  
}

var testString = "";

// reversal(testString);
// alphabits(testString);
// palindrome(testString);

function test() {
  console.log(input.value)
}

button.addEventListener('click', palindrome);
