//Objects
//It is reference type
//It stores data in form of key and values
//key must be string

const person={
    name: "Anand",
    age: 22
}

//accessing data
//dot and bracket notation difference.
console.log(person.name);
console.log(person["name"]);

person.hobbies = "watching cricket";
console.log(person);
person["address"] = "Nalanda";
console.log(person)

//Object.keys
console.log(Object.keys(person));

//iterate through keys
for(let key in person){
    console.log(`${key} : ${person[key]}`)
}

for(let key of Object.keys(person)){
    console.log(`${key}: ${person[key]}`)
}

//computed properties

const key1 = "key1";
const key2 = "key2";
const val1= "value1";
const val2 = "value2";

const obj = {
    [key1]: val1,
    [key2]: val1
}
console.log(obj);

//destructring

const {name, age, hobbies, address} = person;
console.log(address);
const {name: n, ...rest} = person;
console.log(n);
console.log(rest);

//spread operator
const object = {...person, ...obj};
console.log(object);

//object inside array
const users = [
    {
        fname: "Anand",
        age: 22
    },
    {
        fname: "Abhishek",
        age: 21
    },
    {
        fname: "Amit",
        age: 23
    },
    {
        fname: "Anil",
        age: 34
    }
];
for(let user of users){
    console.log(user);
};
//destructuring
const [user1, user2, user3] = users;
const [{fname, }, ...res] = users;
console.log(fname);
console.log(res);