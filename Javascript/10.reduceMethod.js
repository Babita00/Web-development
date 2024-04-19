let arr = [1, 2, 3, 4, 5];
//previousValue==res, currentValue=curr
const output = arr.reduce(function (res, curr) {
    return res + curr;
});
console.log(`the sum of array is ${output}`);
let array = ["javascript", "is", "fun"];
const joinString = array.reduce(function (res, curr) {
    return res + " " + curr;
})
console.log(joinString)

let num = [1, 2, 3, 100, 4, 5];
//previousValue==res, currentValue=curr
const result = num.reduce(function (prev, curr) {
    return prev > curr ? prev : curr;
});
console.log("largest element is:", result);
//arrow function
let newArr = [5, 6, 2, 1, 101, 3];

const out = newArr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;

});
console.log(out);

let marks = [70, 50, 66, 90, 97, 88, 92, 95, 97, 44, 68];
const topper = marks.filter((value) => {
    return value > 90;
})
console.log(topper);

//practice question
let n = prompt("Enter the number:");
let newArray = [];
for (i = 1; i <= n; i++) {
    newArray[i - 1] = i;
}
console.log(newArray);
const sum = newArray.reduce((prev, curr) => {
    return prev + curr;
})
console.log(sum);

const mul = newArray.reduce((prev, curr) => {
    return prev * curr;
})
console.log(mul);
