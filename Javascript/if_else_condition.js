// console.log("hello I am conditional tutorial.")

// let a =45;
// let grace=2;

// if(a>18)
// {
//     console.log("you can drive");
// }
// else{
//     console.log("you can not drive.");
// }

// if(a>18&&grace>5)
// {
//     console.log("you can drive");
// }
// else{
//     console.log("you can not drive.");
// }
let marks = prompt("enter your marks:")
let grade;
if (marks > 80 && marks <= 100) {
    grade = "A";
}
else if (marks >= 70 && marks < 80) {
    grade = "B";
}
else if (marks >= 60 && marks < 70) {
    grade = "C";
}
else if (marks >= 50 && marks < 60) {
    grade = "D";
}
else if (marks >= 40 && marks < 50) {
    grade = "F";
}
console.log("Your grade:", grade);