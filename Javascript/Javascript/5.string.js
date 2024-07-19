// let str = "Babita";
// console.log(str);
// a = str.length;
// console.log(a);
// for (i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

const student = {
    fullName: "Babita Awasthi",
    age: 21,
    cgpa: 3.8,
    isPass: true

};
//template literal
let output = `The cgpa of ${student.fullName} is ${student.cgpa}`;

console.log(output);
console.log(typeof output);

console.log("hi,\n How are you?")//line space
console.log("hi, \t How are you?")//tab space
let str = "Babita\tAwasthi";
console.log(str.length);