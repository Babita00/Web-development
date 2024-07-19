
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("dataid", dataId);
            // resolve("success");
            reject("error occured");
            if (getNextData) {
                getNextData();
            }
        }, 3000);

    })
}

// let promise = getData();
// promise.then((res) => {
//     console.log("promise fullfilled")
// })

let promises = getData();
promises.catch((err) => {
    console.log("rejected");

})

function asyncfunction() {
    return new Promise((resolve, reset) => {
        setTimeout(() => {
            console.log('data1');
            resolve("success");
        }, 3000)
    });
}

console.log("fetching data1..........")
let promise1 = asyncfunction();
promise1.then((res) => {
    console.log(res);
})


function asyncfunction2() {
    return new Promise((resolve, reset) => {
        setTimeout(() => {
            console.log('data2');
            resolve("success");
        }, 3000)
    });
}

console.log("fetching data2..........")
let promise2 = asyncfunction2();
promise2.then((res) => {
    console.log(res);
})
//we want first data2 fetch and after 3s data2 fetch
// for this we do chaining
