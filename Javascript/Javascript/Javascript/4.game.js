let gameNum = 25;
let userNum = prompt("Guess the number:");
console.log(userNum)
while (userNum != gameNum) {
    userNum = prompt("You are wrong! Guess again....")
}
console.log("Congratulations!! your guessing is right.")