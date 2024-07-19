//for rach function, map method, filter method

let arr = [1, 2, 3, 5, 8, 6];
let sum = 0
function add() {
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
arr.forEach(function printValue(val) {
    console.log(val);
})

arr.forEach(function () {

});
console.log("sum of array is:", add());
// console.log(sum);



let arrr = ["ktm", "Dhg", "Bjg", "Bkt"]
arrr.forEach((val, idx, arrr) => {
    console.log(val.toLocaleUpperCase(), idx, arrr);

});

//for a given array of numbers , print the square of each value using ForEach loop.

let array = [1, 2, 3, 4, 5]
//using normal function
array.forEach(function square(val) {
    // console.log(val);
    // let value = val * val;
    // console.log("the square value of", val, "is:", value);
    console.log(`the square value of ${val} is ${val * val}`);

})
//OR
let num = [11, 22, 33, 44, 55]
let calSquare = (num) => {
    console.log(`the square of ${num} is ${num * num}`);
}
num.forEach(calSquare);
//map method
let nums = [10, 20, 30, 40, 50];

let newArr = nums.map((value) => {

    return value * 2;
})
console.log(newArr)



//filter method
let aray = [1, 9, 8, 7, 6];
let evenArray = aray.filter((val) => {
    return val % 2 === 0;
})
console.log(evenArray);
let numArray = [1, 9, 8, 7, 6];
let oddArray = aray.filter((val) => {
    return val % 2 !== 0;
    // return val > 2 == 0;
    // return val < 8 == 0;
    // return val % 3 === 0;

})
console.log(oddArray);

let marks = [70, 50, 66, 90, 97, 88, 92, 95, 97, 44, 68];
const topper = marks.filter((value) => {
    return value > 90;
})
console.log(topper);
