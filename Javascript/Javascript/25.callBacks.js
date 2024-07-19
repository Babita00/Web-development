
function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(3, 6, sum);

//or we can pass whole function using arrow function

function addition(x, y, additionCall) {
    additionCall(x, y);
}

calculator(1, 2, (a, b) => {
    console.log(a + b);

})

//asynchronous call back

function myFunction() {
    console.log("hello");
}
setTimeout(myFunction, 2000)
