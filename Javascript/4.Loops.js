// console.log("I am tutorial in loops.");
// let b = 1;
// for (i = 1; i <= 5; i++) {
//     console.log("Output:", b + i);
// }

// let a = 0;
// for (i = 1; i <= 5; i++) {
//     console.log(a + i);
// }

let obj = {
    name: "Babita",
    role: "developer",
    company: "abc"
}
for (const key in obj) {

    const element = obj[key];
    console.log(element);
    console.log(key);
    console.log(obj);
    console.log(key, obj);

}
for (const c of "babita") {
    console.log(c);
}
console.log("while loop");
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
console.log("for-of-loop");
let str = "Babita";
let size = 0;
for (let i of str) {
    console.log(i);
    size++;
}
console.log("size=", size);
console.log("For in loop");
const Product = {
    Name: "Ball Pen",
    color: "Black",
    rating: 4,
    isDeal: true,
    price: 270,
    offer: 5
};

for (let key in Product) {
    console.log(key, "=", Product[key]);
}