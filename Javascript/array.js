let price = [250, 645, 300, 900, 50];
for (let value of price) {
    console.log(`price before offer is ${value}`);
    let offer = value / 10;
    console.log(`price after offer is ${value - offer}`);

}
let fooditem = ["Spinach, Tomatoes, Grapes, Bananas, Oranges, Cod"];
console.log(fooditem);
//push operation
fooditem.push("apple");
console.log("after push :", fooditem);
//pop operation
fooditem.pop();
console.log("after pop :", fooditem);
//conversion of array to string
let marks = [85, 97, 44, 37, 76, 60];
console.log(marks.toString());
//for concatenation
let food = fooditem.concat(price);
console.log("After concatenation:", food)
//unshift operation
let fooitem = ["Spinach, Tomatoes, Grapes, Bananas, Oranges, Cod"];
fooitem.unshift("Rice")
console.log("After unshift:", fooitem);
console.log("the shifted item is:", fooitem.shift());
//for slice the array
let marvelHeroes = [
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Black Widow",
    "Spider-Man",
    "Wolverine",
    "Doctor Strange",
    "Black Panther",
    "Captain Marvel",
    "Ant-Man",]
console.log(marvelHeroes);
console.log("in certain range:", marvelHeroes.slice(1, 5));
console.log("starting from 3 and all rest of all", marvelHeroes.slice(3));
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//splice bhitra we have 3 space
//1sr le kun position bata change garne bhanxa
//2nd le 1st paxi kati ota place ko element delete garne bhanxa
//new element lai k le replace garne bhanera bhanne
numbers.splice(2, 2, 102, 103);
//index 2 ma gayera 2 ota element lai delete garne ani teslai 102 ra 103 re replace garne
console.log("after splice:", numbers);
//only add
let number = [1, 2, 3, 4, 5, 6, 7, 8];
number.splice(2, 0, 101)
console.log("after addition:", number);
//try to delete 4
let num = [1, 2, 3, 4, 5];
num.splice(3, 1);
console.log(num);
//replace element
let n = [1, 2, 3, 4, 5];
n.splice(3, 1, 200);
console.log(n);

//practice question
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
//to delete 1st
companies.shift();
console.log("after deletion:", companies);
//OR we can delete using splice as below
// let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// company.splice(0, 1);
// console.log("after deletion:", company);

//remove uber and add ola in its place or replace uber by ola

companies.splice(1, 1, "OLA");
console.log("after replacement:", companies);
//ADD amazon at the end
companies.splice(5, 0, "Amazon");
console.log("After addtion at end", companies);
//or we can do
companies.push("Amazon")
console.log("After addtion at end", companies);