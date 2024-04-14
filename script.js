//Create a counter Should start at 0
//Make a function to increase the counter
//Make a function to decrease the counter
//Number should increase when hitting ‘+’
//Number should decrease when hitting ‘-’
//Bonus: Add a reset button to set counter to 0

let buttonValue;

decreaseNumber = () => {
  buttonValue = parseInt(document.getElementById("number").innerHTML) - 1;
  document.getElementById("number").innerHTML = buttonValue;
  return;
};

resetNumber = () => {
  document.getElementById("number").innerHTML = 0;
  return;
};

increaseNumber = () => {
  buttonValue = parseInt(document.getElementById("number").innerHTML) + 1;
  document.getElementById("number").innerHTML = buttonValue;
  return;
};
