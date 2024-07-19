
// async function myFunction() {
//     console.log("hello");
// }


//await
function api() {
    return new Promise((resolve, reset) => {
        setTimeout(() => {
            console.log("weather data")
            resolve(200);
        }, 2000)
    })
}

async function getWeatherData() {
    await api();//1st call
    await api();//2nd call
}

// solving callback hell

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("dataid", dataId);
            resolve("success");
        }, 2000);

    })
}

async function getAllData() {
    console.log("getting data1.....")
    await getData(1);

    console.log("getting data2.....")
    await getData(2);

    console.log("getting data3.....")
    await getData(3);

    console.log("getting data4.....")
    await getData(4);
}
//this is very easy to understand than promise chaining and call back hell

//OR


(async function () {
    console.log("getting data1.....")
    await getData(1);
    console.log("getting data2.....")
    await getData(2);
    console.log("getting data3.....")
    await getData(3);
})();



//callback hell
/*
getData(1, () => {
    console.log("getting data 2........")
    getData(2, () => {
        console.log("getting data 3........")
        getData(3, () => {
            console.log("getting data 4.........")
            getData(4)
        })
    })
});

*/
//promise chain

/*getData(1).then((res) => {
    console.log(res);
    return getData(2);
}).then((res) => {
    console.log(res);
    return getData(3);

}).then((res) => {
    console.log(res);
})
*/