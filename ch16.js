//map(it is iterable);
//It store data in ordered manner
//store data in form of key and value
//It is different from objects
//objects key have only string and symbol
//map key are anything even array
//there should not be duplicate key


//object literal
//key --> string, symbol

const person = {
    name: "Anand",
    age: 22,
    1: "one"
}
console.log(person.name);
console.log(person[1])
for(let key in person){
    console.log(typeof key); //string
}

//map
const map = new Map();
map.set('name', 'Anand');
map.set('age', 34);
map.set(1, 'one');
map.set([1,2], 'oneTow');
map.set({1:'one'}, 'oneTwo');

for(let key of map){
    console.log(typeof key); //object
}

const obj = {
    id: 1,
    name: "Anand"
}
const mapArr = new Map();
mapArr.set(obj, {age: 22, gender: 'male'});
console.log(mapArr.get(obj).age);

const obj1 = {
    key1: "value1",
    key2: "value2"
}
const obj2 = obj1; //reference of obj1

const obj3 = {...obj1};
obj3.key3="value3";
const obj4 = Object.assign({}, obj1);
obj4.key3="value3";
console.log(obj1)
console.log(obj4)

//optional chaining
const users = {
    Name: "Anand",
    // Address: {houseNumber: '234'}
};
console.log(users?.Address?.houseNumber) //it will give undefined