
//SYNTAX 
/*
class MyClass {
constructor() {

}
myMethod() {

}
}
let myObj = new MyClass();
*/

class Car {
    start() {
        console.log("car start")
    }
    stop() {
        console.log("car stop")
    }
    setBrand(brand, milage) {
        this.brandName = brand;
        this.milage = milage;
    }
}

let fortuner = new Car();//fortuner is object
fortuner.start();
fortuner.stop();
fortuner.setBrand("fortuner", 3000)
//we can make more object as above
let lexus = new Car();//fortuner is object
lexus.start();//this automatically null constructor
lexus.stop();
lexus.setBrand("lexus", 1200);//parameter constructor
