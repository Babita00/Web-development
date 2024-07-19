const employee = {
    calcTax() {
        console.log("the ntax rate is 10%");
    }
}
const KaranArjun = {
    salary: 50000,
    calcTax() {
        console.log("the ntax rate is 20%");
    }
    //directly object ma pani same method xa bhane object ko function has more priority
}
//we can set prototype using __ptoto__
//second object xa jasko hamle prototype banairako xau we can use function of that object on first object
KaranArjun.__proto__ = employee;
//prototype bhaneko reference to an object ho
