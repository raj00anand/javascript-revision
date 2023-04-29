//proto, prototype, class
const user1 = {
    fName: "Anand",
    lName: "Raj",
    email: "ral@gmail.com",
    age: 23,
    address: "Nalanda, Bihar",
    about: function(){
        return `${this.fName} ${this.lName} ${this.age}`
    },
    is18: function(){
        return this.age>18;
    }
}
console.log(user1.is18());


//1.funtion that create object
//2.add key value pair
//3. return object
function createUser(fName, lName, email, age, address){
    const user={};
    user.fName=fName;
    user.lName=lName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about = function(){
        return `${this.fName} ${this.lName} ${this.age} `
    };
    is18 = function(){
        return this.age>18;
    };
    return user;
    
}
const user2=createUser("Anand", "Raj", "raj@gmail.com", 24, "Naland, Bihar");
console.log(user2)

const userMethods = {
    about: function(){
        return `${this.fName} ${this.lName} ${this.age} `
    },
    is18: function(){
        return this.age>18;
    }
}

function createUser1(fName, lName, email, age, address){
    const user={};
    user.fName=fName;
    user.lName=lName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
    
}
const user3 =createUser1("Anand", "Raj", "raj@gmail.com", 23, "Naland, Bihar");
console.log(user3)

//proto
//it is internal property of object
//reference type
function createUser2(fName, lName, email, age, address){
    const user=Object.create(userMethods);
    user.fName=fName;
    user.lName=lName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
    
}
const user4 =createUser2("Anand", "Raj", "raj@gmail.com", 23, "Naland, Bihar");
console.log(user4.is18())

const obj = {
    key1: "value1",
    key2: "value2"
}
const obj1 = Object.create(obj);
console.log(obj1)//it gives empty object
console.log(obj1.key1);

//prototype
//it is property of function
//It is object

function hello(){
    console.log("Say hello");
}
hello();
hello.prototype.name = "Anand";
console.log(hello.prototype);


function createUser3(fName, lName, email, age, address){
    const user=Object.create(userMethods);
    user.fName=fName;
    user.lName=lName;
    user.email=email;
    user.age=age;
    user.address=address;
    
    return user;
    
}
console.log(createUser3.prototype)
createUser3.prototype.about=function(){
        return `${this.name} ${this.age}`
}
createUser3.prototype.is18=function(){
    return this.age>18;
}
console.log(createUser3.prototype)
const user5 = createUser3("Aman", "Raj", "raj@gamil.com", 34, "new delhi");
console.log(user5.is18())