let heading = document.getElementById("head");//first point is we have to access//access by id, class and tag
heading.innerHTML += " from Apna College Students";//concatenate

//OR you can use query selector
// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + "from Apna College Students";

//for next question
let div = document.querySelectorAll(".box");
console.log(div);//all div
console.log(div[0]);//first div

// div[0].innerText += " hey";
// console.log(div[0]);

// div[1].innerText += " nice to meet you.";
// console.log(div[1]);

// div[2].innerText += " hiiii,";
// console.log(div[2]);
//or even we can do using unique value
// let indexx = 0;


// for (div of div) {
//     div.innerText = `new unique value ${index}`;
//     indexx++;
// }
let index = 0;
let text = ""; // Declare text variable outside the loop

for (div of div) {
    if (index == 0) {
        text = "hey"; // Assign value without redeclaring
    }
    else if (index == 2) {
        text = "nice to meet you"; // Assign value without redeclaring
    }
    else if (index == 3) {
        text = "hi"; // Assign value without redeclaring
    }
    div.innerText = `new unique value ${text}`;
    index++;
}