function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

document.getElementById('rollButton').addEventListener("click", (e) => {
    let outputH1 = document.querySelector(".output");
    let diceResults = [];

    const diceList = [
        {sides: 4, id: "d4Check"},
        {sides: 6, id: "d6Check"},
        {sides: 8, id: "d8Check"},
        {sides: 10, id: "d10Check"},
        {sides: 12, id: "d12Check"},
        {sides: 20, id: "d20Check"},
        {sides: 100, id: "d100Check"},
    ];

    diceList.forEach(die => {
        if (document.getElementById(die.id).checked) {
            let rollResult = rollDice(die.sides);
            diceResults.push(`D${die.sides}: ${rollResult}`);
        }
    });

    outputH1.innerHTML = diceResults.length > 0 ? diceResults.join(", ") : "Please Select a Die";
});



