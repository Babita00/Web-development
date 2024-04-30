
function getData(dataId) {
    return new Promise((resolve, reset) => {

        setTimeout(() => {
            console.log("dataid", dataId);
            resolve("success");

        }, 2000);
    })
}

console.log("fetching data1.....")
getData(1).then((res) => {
    // console.log(res);

    console.log("fetching data2.....")
    getData(2).then((res) => {
        // console.log(res);

        console.log("fetching data3.....")
        getData(3).then((res) => {
            // console.log(res);


            console.log("fetching data4.....")
            getData(4).then((res) => {
                // console.log(res);
            })
        })
    })
})

//OR

getData(1).then((res) => {
    console.log(res);
    return getData(2);
}).then((res) => {
    console.log(res);
    return getData(3);

}).then((res) => {
    console.log(res);
})

//second one is shorter than previous one and easy to understand

//promise chain is still difficult to understand so
//Now , we study Async-Await