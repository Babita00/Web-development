


function asyncfunction() {
    return new Promise((resolve, reset) => {
        setTimeout(() => {
            console.log('data1');
            resolve("success");
        }, 3000)
    });
}

//function2
function asyncfunction2() {
    return new Promise((resolve, reset) => {
        setTimeout(() => {
            console.log('data2');
            resolve("success");
        }, 3000)
    });
}


function asyncfunction3() {
    return new Promise((resolve, reset) => {
        setTimeout(() => {
            console.log('data3');
            resolve("success");
        }, 3000)
    });
}

//handling promise

// console.log("fetching data1..........")
// let p1 = asyncfunction();
// p1.then((res) => {
//     console.log(res);

//     console.log("fetching data2..........")
//     let p2 = asyncfunction2();
//     p2.then((res) => {
//         console.log(res);
//     })
// })

//Or

console.log("fetching data1..........");
asyncfunction().then((res) => {
    // console.log(res);
    console.log("fetching data2..........");
    asyncfunction2().then((res) => {
        // console.log(res);

        console.log("fetching data3......");
        asyncfunction3().then((res) => {
            // console.log(res);
        })
    })
})


//doing call back hell with promise chaining
//next........
