

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("dataid", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}



//wap such that we get data1 first data2 then and at last data3

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
//this is very hard to understand
// even developer get probem in understanding the logic
//so this is call callback hell

//to solve this callback hell we get new method called promises