//method
//funtion inside object
//this keyword --> it refered to current object

const person = {
    name: "Anand",
    age: 23,
    about: function About(){
        console.log(`Name is ${this.name} and age is ${this.age}`)
    }
}

person.about();
console.log(this);
console.log(window);
console.log(this===window);

function myFunc(){
    console.log(this);
}
window.myFunc();

//call, bind, apply
//all used to call function
function about(hobbies, favFootballer){
    console.log(`My Name is ${this.name} and age is ${this.age} hobbies is ${this.hobbies} and favFootballer is ${this.favFootballer}`);
}
const user1 = {
    name: "Anand",
    age: 22
}
//takes argument sepatately
about.call(user1, "watching football", "Lionel Messi");

//apply
//it takes argument in form of array
about.apply(user1, ["watching football", "Lionel Messi"])

//bind
//it return a function
const func = about.bind(user1, "watching football", "Lionel Messi")
func();

const person1 = {
    name: "Aman",
    age: 23,
    about: function(){
        console.log(this.name, this.age);
    }
}

//don't do this mistake
const f = person1.about.bind(person1)
f()

//In arrow funtion this also work