let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let messegeContainer = document.querySelector('.messege-Container');
let messege = document.querySelector("#msg");
let count = 0;
let turnX = true;
let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 7],
    [6, 7, 8],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6]
]
const boxesArray = Array.from(boxes); // Using Array.from()

boxesArray.forEach((box) => {

    box.addEventListener("click", () => {

        // console.log("button clicked.")
        if (turnX) {
            box.innerText = "X";
            box.style.color = "red";
            turnX = false;

        }
        else {
            box.innerText = "O";
            box.style.color = "black";
            turnX = true;

        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count == 9 && !isWinner) {
            gameDraw();
        }
    })

});

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }

}
const gameDraw = () => {
    messege.innerText = "Game Draw"
}
const showWinner = (winner) => {
    messege.innerText = `Congratulations !!! ${winner} win`;
    messegeContainer.classList.remove("hide");
    disableBoxes();
}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        // box.innerText = "";

    }
}

const resetGame = () => {
    turnX = true;
    enableBoxes();
    for (let box of boxes) {
        box.innerText = "";
    }
    messegeContainer.classList.add("hide");
}
resetButton.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);