console.log("one");
console.log("two");

function hello() {
    console.log("hello");
}
setTimeout(hello, 2000);//timeout; 2s=2000//hello is function here

// or we can write

setTimeout(() => {
    console.log("hey, I am babita");
},
    4000);

console.log("three")
console.log("four");


/*here console.log("three")
console.log("four");
does not wait to complete     console.log("hello");
 and     console.log("hey, I am babita");

*/ 