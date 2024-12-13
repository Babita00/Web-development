function myFunction() {
    console.log("welcome to class of function in javascript.")
}
myFunction();

function newFunc(msg) {
    console.log(msg);
}
newFunc('I love js');
function sum(X, Y) {
    s = X + Y;
    //console,log("the sum is :",s)
    return s;
}
let val = sum(3, 7);
console.log('the sum is', val);

function sub(X, Y) {
    return X - Y;
}
//arrow function
const arrowSum = (a, b) => {
    return a + b;
}

const arrowMul = (m, n) => {
    return (m * n);
}
//small operation perform garna arrow function use hunxa generally for single line of code

//create a function using "function" keyword that takes string as an arguement and returns no. of vowel.

function countVowel(str) {
    let count = 0;
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    console.log("the number of vowel:", count);

}
countVowel("Babita");

const CountVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    console.log("the number of vowel:", count);
}