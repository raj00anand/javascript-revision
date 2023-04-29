//Operators

//boolean
//comparison

//== && ====
//== --> it only checks value;

let a=20;
let b="20";
console.log(a==b); //true

//=== --> it checks value as well as datatypes
console.log(a===b); //false

//!= && !===
console.log(a!==b);

//truthy and falsy values
//falsy value
//""
//0
//null
//undefined

let name="anand";
if(name){
    console.log(name);
}

name="";
if(name){
    console.log(name);
}else{
    console.log("name is not declared")
}