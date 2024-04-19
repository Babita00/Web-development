//create a new button element. Give it a text "click me", bakgaound color of red and text color of white
let newBtn = document.createElement("button");
newBtn.innerText = 'click Me !';

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

let body = document.querySelector("body")
body.prepend(newBtn);


/*create a paragraph tag in the html , give it class and some styling.
Now create a new class in CSS and try it to append this class to <p> element*/
let para = document.querySelector("p")
//we use classList method to apppend the styling
para.classList.add("newClass");
