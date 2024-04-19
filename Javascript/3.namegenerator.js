let random = Math.random();
let first, second, third;
//lets genrate first word
if (random < 0.33) {
    first = "crazy";

}
else if (random < 0.66 && random >= 0.33) {
    first = "amazing"
}
else {
    first = "Fire"
}
//lets generate second word
if (random < 0.33) {
    second = "engine";

}
else if (random < 0.66 && random >= 0.33) {
    second = "Food"
}
else {
    second = "Garments"
}
//lets generate third word
if (random < 0.33) {
    third = "Bros";

}
else if (random < 0.66 && random >= 0.33) {
    third = "Limited"
}
else {
    third = "Hub"
}
console.log(`${first} ${second}  ${third}`)