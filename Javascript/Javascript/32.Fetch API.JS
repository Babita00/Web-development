const url = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#facts");
const button = document.querySelector("#btn");


const getFacts = async () => {
    console.log("getting data .........")
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    // console.log(data[0].text);
    // factPara.innerText = data[0].text;
    // factPara.innerText = data[1].text;
    factPara.innerText = data[2].text;
}

//using promise chain

// function getFacts() {
//     fetch(url).then((response) => {

//         return response.json();

//     }).then((data) => {
//         factPara.innerText = data[2].text;
//     })
// }
button.addEventListener("click", getFacts);

//post request
/*
syntax:
fetch(url,option[]);*/

