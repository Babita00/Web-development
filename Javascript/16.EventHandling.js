// let btn = document.querySelector("#btn1");
//or
let btn = document.getElementById("btn1")

// btn.onclick = (evt) => {
//     // console.log("button clicked");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);

// }
// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// }
btn.addEventListener("click", (evt) => {
    console.log("button clicked-1");
    // console.log(evt);
    // console.log(evt.type);
})

btn.addEventListener("click", () => {
    console.log("button clicked-2");

})

const handler3 = () => {
    console.log("button clicked-3");

};
btn.addEventListener("click", handler3);

btn.addEventListener("click", () => {
    console.log("button clicked-4");

})
btn.removeEventListener("click", handler3);