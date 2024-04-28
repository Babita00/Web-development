/*
You are creating a website for your college.
create a class User with 2 properties name and emal. 
It has a metod called viewData() that allows user yo view website data.*/
let Data = "this is data"
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;

    }
    // name(value) {
    //     this.name = value;
    // }
    // email(email) {
    //     this.email = email;
    // }
    viewData() {
        console.log("web data=", Data);
    }
}
let student1 = new User("Babita", "babita@gmail.com");
let student2 = new User("abc", "abc@gmail.com");
let teacher1 = new User("xyz", "dean@college.com");


class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        Data = "some new data";
    }
}
let admin1 = new Admin("bab", "bab@gmail.com");