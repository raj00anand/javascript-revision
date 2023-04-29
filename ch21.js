//closure --> the combination of function bundled together with its lexical environment
//function return function returns closure

function outer(){
    function inner(){
        console.log("Inner");
    }
    return inner;
}
const ans=outer();
ans();

function fullName(fname, lname){
    return function(){
        console.log(fname, lname);
    }
}
const res=fullName("Anand", "Raj")
res();

function hello(x){
    const a="varA";
    const b="varB";
    return function(){
        console.log(a, b, x);
    }
}
const res1=hello("args");
res1();

function counter(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    }
}
const c=counter();
c();
c()
// counter();
// console.log(counter());
// console.log(counter()());
// console.log(counter()());

