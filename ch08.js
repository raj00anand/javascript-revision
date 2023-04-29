//Function in javascript

//we can write function in three ways
//trandition way

function sum(a, b){
    return a+b;
}
console.log(sum(8, 7));


//function expression
const sum1 = function(a,b){
    return a+b;
}
console.log(sum1(5,5));

const isEven = function(val){
    return val%2==0;
}
console.log(isEven(5))

const arr=[3, 56, 2, 9];
function find(arr, target){
    for(let i in arr){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}
console.log(find(arr, 56));


//Arrow function
const hello = () =>("Say hello");

const isOdd = val => val%2!=0;
console.log(hello());
console.log(isOdd(5));

const add = (a, b) => a+b;
console.log(add(5, 6));

//function inside function

function outside(){
    function inside(){
        console.log("inside function");
    }
    const sum = (a,b)=> a+b;
    const mul = (a,b)=> a*b;
    inside();
    console.log(sum(5,5));
    console.log(mul(5,2));
}
outside();

