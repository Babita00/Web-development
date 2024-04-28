//SYNTAX:

/*class Parent {

}
class Child extends Parent { }*/

//if child and parent has same method child method will be used[Method or Function overriding]
// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }
// class child extends Parent {

// }
// let obj = new child();

class Person {
    constructor(name) {
        // console.log("enter parent constructor")

        this.name = name
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }

    walk() {
        console.log("walk");
    }
}

class Engineer extends Person {
    work() {
        console.log("solve problem");
    }
    position() {
        console.log("Developer");
    }
    constructor(branch) {
        // console.log("enter child constructor")
        super("Babita");//to invoke parent constructor

        this.branch = branch
        // console.log("exit child constructor");
    }
}

let Babita = new Engineer()

class Doctor extends Person {
    work() {
        console.log("Treat Patient");
    }
    position() {
        console.log("Sergeon");
    }

}
let abc = new Doctor()
