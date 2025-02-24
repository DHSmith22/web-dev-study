const computeButton = document.querySelector(".computeButton");

function createComputation(operation) {
  return (num) => (x) => operation(x, num);
}

// Define operations
const computations = {
  "+": createComputation((x, num) => x + num),
  "-": createComputation((x, num) => x - num),
  "*": createComputation((x, num) => x * num),
};

computeButton.addEventListener("click", () => {
  let inputX = Number(document.getElementById("numInputX").value);
  let inputY = Number(document.getElementById("numInputY").value);

  let cardArray = Object.entries(computations).map(([symbol, func]) => {
    return `${inputX} ${symbol} ${inputY} = ${func(inputY)(inputX)}`;
  });

  console.log(cardArray);

  let outputArea = document.querySelector(".outputArea");
  outputArea.innerHTML = ""; // Clears previous

  cardArray.forEach((result) => {
    let div = document.createElement("div");
    div.className = "mathBox";
    let h1 = document.createElement("h1");
    h1.textContent = result;
    div.appendChild(h1);
    outputArea.appendChild(div);
  });
});
