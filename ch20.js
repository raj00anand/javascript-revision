//class --> class is blueprint of an object

class Animal{
    constructor(Name, age){
        this.Name=Name;
        this.age=age;
    }
    eat(){
        return `${this.Name} is eating`
    }
}
const a1 = new Animal("Bhola", 12);
console.log(a1.eat());

//inheritance-->It is property in which child class can inherite all the property of parent class
class Dog extends Animal{

}
const d1 = new Dog("Tommy", 6);
console.log(d1);

class Cat extends Animal{
    constructor(Name, age, speed){
        super(Name, age);
        this.speed=speed;
    }
    run(){
        return `${this.Name} running at speed of ${this.speed}`
    }
}
const c1= new Cat("kitty", 4, 20);
console.log(c1.run());

//method overriding

class Rabbit extends Cat{
    constructor(Name, age, speed){
        super(Name, age, speed);
    }
    run(){
        return `Rabbit running at speed of ${this.speed}`
    }
}
const r1=new Rabbit("roo", 1, 40);
console.log(r1.run());


//getter and setter
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    setName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set fullName(fullName){
        const [firstName,lastName]=fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

}
const person1 = new Person("Harshit", "sharma", 56);
person1.setName("Mohit", "verma", 55);
person1.fullName = "Ram leela"
console.log(person1)