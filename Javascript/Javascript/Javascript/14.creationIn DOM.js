let newBtn = document.createElement("button");
newBtn.innerText = 'click Me !';
//we create
//now we have to add
//let node be div here
//inside the div put at last
let div = document.querySelector("div")
div.append(newBtn);

//inside the div put at starting
// let div = document.querySelector("div")
div.prepend(newBtn);

//just before the div
div.before(newBtn);

//just after the div
div.after(newBtn);

//If I want to add after 
let para = document.querySelector("p")
para.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = " Welcome to Js world!";

div.before(newHeading);

//OR
// let body = document.querySelector("body")
// body.prepend(newHeading);


//similary we can remove the node
//syntax:nde.remove()

let naame = document.querySelector('h2');
naame.remove();