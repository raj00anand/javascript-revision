//new keyword
//used to create a object from constructor function
//create empty object
//return this

function createUser(firstname, age){
    this.firstname=firstname;
    this.age=age;
}
createUser.prototype.about=function(){
    console.log(`${this.firstname} ${this.age}`);
}
const user = new createUser("Anand", 23);
user.about();


function createUser1(firstname, lastName, email, age, address){
    this.firstname=firstname;
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.address=address;
    return this;
}
createUser1.prototype.about=function(){
    return `${this.firstname} ${this.lastName} ${this.age}`;
}
console.log(createUser1.prototype);
const user1 = new createUser1("Anand", "Raj", "@gamil.com", 21, "New delhi");
console.log(user1.about());

//class

class CreateUser{
    constructor(firstname, lastName, email, age, address){
        this.firstname=firstname;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address;
    }
    about(){
        return `${this.firstname} ${this.lastName}`;
    }
    is18(){
        return this.age>18;
    }
}
const user2 = new CreateUser("Abhishek", "Kumar", "@gmail.com", 45, "Bihar");
console.log(user2)
