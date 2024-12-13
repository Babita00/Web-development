let promise = new Promise((resolve, reject) => {
    console.log("this is promise")
    resolve("success");

    // reject("some error occured");//or can be some error
})

/*
in general programming
when we request api creates the promises 
we handle the promises
*/


function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("dataid", dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 3000);

    })
}
//initially it gives pending, when i give value and print the result it shows fullfilled

