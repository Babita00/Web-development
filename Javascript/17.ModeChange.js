/*create a toggle button that changes the screen to dark mode when clicked
 and again change to light mode when again clicked(double click)*/
let btn = document.querySelector("#toggle-button")
let currMode = "light";
// btn.addEventListener("click", () => {

//     if (currMode == "light") {
//         currMode = "dark";
//         let body = document.querySelector("body");
//         body.style.backgroundColor = "black";

//     }
//     else {
//         currMode = "light";
//         let body = document.querySelector("body");
//         body.style.backgroundColor = "white";

//     }
//     console.log(currMode);
// })

//OR
let body = document.querySelector("body");


btn.addEventListener("click", () => {

    if (currMode == "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");


    }
    else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(currMode);
})