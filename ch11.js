//Hoisting in javascript
//it is concept in javascript where we can access variable or funtion before its declaration

var a;
console.log(a);//undefined
a=90;

sum(5,6);
function sum(a,b){
    console.log(a+b);
}