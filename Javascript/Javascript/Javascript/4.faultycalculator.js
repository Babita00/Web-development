

console.log("This is a faulty calculator")


function normalCalculate(a, b) {
    console.log("Addition is:", a + b)
    console.log("Substraction is:", a - b)
    console.log("Multiplication is:", a * b)
    console.log("Division is:", a / b)
}
function faultyCalculate(a, b) {
    console.log("Addition is:", a - b)
    console.log("Substraction is:", a / b)
    console.log("Multiplication is:", a + b)
    console.log("Division is:", a ** b)
}

let random = Math.random()
console.log(random);
let b = 10;//prompt("Enter second number:");
let a = 5;//prompt("Enter first number:");

if (random > .1) {
    console.log("Normal calculation:")
    normalCalculate(a, b);
}
else {
    console.log("faulty calculation:")
    faultyCalculate(a, b)
}