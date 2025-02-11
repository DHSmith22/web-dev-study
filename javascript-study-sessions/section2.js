function arraySweeper() {
    let array = [12, 13, 15, 17, 6];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log("Even!");
        } else {
            console.log("Odd!");
        }
    }
}

arraySweeper();

// area of a circle calculator that takes the radius. Uses a constant, a let, and math operations. Counts how many times the function has been ran if possible using unary operation.

function numCounter(circleRadius) {
    const pi = 3.14159;
    let circleArea;
    let timesRan = 0;

    if (circleRadius > 0) {
        timesRan++;
        circleArea = (circleRadius**2) * pi;
        return {circleArea, timesRan};
    } else {
        return {message: "Enter Valid Radius", timesRan};
    }
}

console.log(numCounter(5));
console.log(numCounter(3));