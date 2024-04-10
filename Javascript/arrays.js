let cars = new Array("Saab", "Volvo", "BMW");
//for loop
for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log("for of loop");
for (let elements of cars) {
    console.log(elements);
}
console.log("for in loop");
for (let elements in cars) {
    console.log(elements);
}
console.log(cars.length);
for (let elements of cars) {
    console.log(elements.toUpperCase());
}

for (let elements of cars) {
    console.log(elements.toLowerCase());
}

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

// for (i = 0; i < marks.length; i++) {
//     sum += marks[i];
// }
for (let value of marks) {
    sum += value;
}
let average = sum / marks.length;
//let output = `total sum of marks is ${average}`;
console.log(`average sum of marks is ${average}`);
console.log("total sum of marks:", average);
