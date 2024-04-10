let price = [250, 645, 300, 900, 50];
for (let value of price) {
    console.log(`price before offer is ${value}`);
    let offer = value / 10;
    console.log(`price after offer is ${value - offer}`);

}
let fooditem = ["Spinach, Tomatoes, Grapes, Bananas, Oranges, Cod"];
console.log(fooditem);
fooditem.push("apple");
console.log("after push :", fooditem);
fooditem.pop();
console.log("after pop :", fooditem);

let marks = [85, 97, 44, 37, 76, 60];
console.log(marks.toString());