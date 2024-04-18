
let div = document.querySelector("div");
console.log(div)
//tag bhitra ko additional information is attribute.

let attribute = div.getAttribute("id");
console.log(attribute);

let attr = div.getAttribute("class");
console.log(attr);

div.setAttribute("class", "JsDiv");//set attribute means existing attribute ko value change garne
console.log(div.getAttribute("class"));//initially it was hi but now it is JsDiv
//syntax ko setAttribute
//div.setAttribute("Attribute name", "new value");

//css ko style access garna in js we use style attribute
//syntax:node.style
div.style;
//we can change style from here also
div.style.backgroundColor = "purple";
div.style.fontFamily = "Arial, Helvetica, sans-serif";

//without going in html and css we can hide the object from screen
// div.style.visibility = "hidden";
