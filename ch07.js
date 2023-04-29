//Array in JavaScript
//It is reference type
//Array is ordered collection of items
//best to use const to create an array

const fruits = ["banana", "apple", "grapes"];
const num = [1, 2, 3, 4, 5];
const mixed = [1, 2, 3, "mango", "apple"];
console.log(fruits);
console.log(num);
console.log(mixed);
console.log(fruits[2]);

//push --> it append element at end;
fruits.push("orange");
console.log(fruits);

//pop() --> remove element from last
fruits.pop();
console.log(fruits);

//unshift --> append elemetn at first;
fruits.unshift("orange");
console.log(fruits)

//shift --> remove element from first
fruits.shift();
console.log(fruits);


//clone array

const fruits1 = fruits; //it is reference to fruits arrays so any changes in fruits array reflect in fruits1
fruits.push("Orange");
console.log(fruits===fruits1)

const fruits2=[].concat(fruits);
console.log(fruits===fruits2)

const fruits3 = [...fruits];
console.log(fruits===fruits3);

const fruits4 = fruits.slice(0);
console.log(fruits4);

//loop in array
//of && in

//of gives value of array
for(let val of fruits){
    console.log(val);
}

//in -> gives index of array
for(let i in fruits){
    console.log(fruits[i]);
}

const names1 = ["Anand", "Rajeev", "Ayush"];
const names2 = ["Amit", "Aman"];
const [name1, , name3] = names1;
console.log(name3);
const names = [...names1, ...names2];
console.log(names)
// const [, name3] = names;