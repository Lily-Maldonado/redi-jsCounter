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

  if (buttonValue <= 0) {
    document.getElementById("decrease-function").disabled = true;
  }
  if (buttonValue < 20) {
    document.getElementById("increase-function").style.backgroundColor = "";
  }
  if (buttonValue < 10) {
    let shippingSpan = document.getElementById("shippingSpan");
    removeShippingText(shippingSpan);
    let outOfStockSpan = document.getElementById(""); //continuar!!!!
  }
  if (buttonValue >= 10 && buttonValue === 19) {
    freeShipping();
  }
  if (buttonValue < 10) {
    let outOfStockSpan = document.getElementById("outOfStock");
    removeOutStockText(outOfStockSpan);
  }
};

resetNumber = () => {
  document.getElementById("number").innerHTML = 0;
  location.reload();
  return;
};

increaseNumber = () => {
  buttonValue = parseInt(document.getElementById("number").innerHTML) + 1;
  document.getElementById("number").innerHTML = buttonValue;

  if (buttonValue >= 1) {
    document.getElementById("decrease-function").removeAttribute("disabled");
  }
  if (buttonValue === 10) {
    freeShipping();
  }

  if (buttonValue >= 20) {
    document.getElementById("increase-function").style.backgroundColor = "red";
    outOfStock();
  }
  if (buttonValue > 19) {
    let shippingSpan = document.getElementById("shippingSpan");
    removeShippingText(shippingSpan);
  }
};

freeShipping = () => {
  let shippingSpan = document.createElement("SPAN");
  shippingSpan.id = "shippingSpan"; // Asignar un ID al span
  let spanTxt = document.createTextNode("You got a free Shipping!!");
  shippingSpan.appendChild(spanTxt);
  shippingSpan.style.position = "absolute";
  shippingSpan.style.top = "170px";
  shippingSpan.style.left = "10em";
  shippingSpan.style.backgroundColor = "#00FF00";
  shippingSpan.style.padding = "10px";

  document.body.appendChild(shippingSpan);
};
// El ID al span se usa para que esta funcion lo identifique.
//El parentnode es shippingSpan y el hijo es spanTxt.
//removeShippingText le quita spanTxt a shhippingSpan
removeShippingText = (shippingSpan) => {
  if (shippingSpan && shippingSpan.parentNode) {
    shippingSpan.parentNode.removeChild(shippingSpan);
  }
};
outOfStock = () => {
  let outOfStockSpan = document.createElement("SPAN");
  outOfStockSpan.id = "outOfStock"; // Asignar un ID al span
  let spanStockTxt = document.createTextNode("Out  of Stock");
  outOfStockSpan.appendChild(spanStockTxt);
  outOfStockSpan.style.position = "absolute";
  outOfStockSpan.style.top = "170px";
  outOfStockSpan.style.left = "10em";
  outOfStockSpan.style.backgroundColor = "#F7BA36";
  outOfStockSpan.style.padding = "10px";

  document.body.appendChild(outOfStockSpan);
};
removeOutStockText = (outOfStockSpan) => {
  if (outOfStockSpan && outOfStockSpan.parentNode) {
    outOfStockSpan.parentNode.removeChild(outOfStockSpan);
  }
};
