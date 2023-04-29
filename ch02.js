//Datatypes in javascript

//Number
//String
//Boolean
//BigInt
//Object
//Null
//Undefined
//Symbol


let age=48;
let name="Anand";

console.log(typeof(age));
console.log(typeof(name));

//convert number to string
age = age + " ";
console.log(typeof(age));

// convert String to number
age = + age;
console.log(typeof(age));

let n= "anad"-"3";
console.log(n) //NaN
console.log(typeof(n));

let a;
console.log(a); //undefined


let x=null;
console.log(typeof(x)) //it is error it will give object

let y=12n;
console.log(typeof(y));


