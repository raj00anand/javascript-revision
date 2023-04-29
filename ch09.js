//lexical scope

var a=10;
function demo(){
    function inside(){
        a=9;
        console.log(a);
    }
    
    console.log(a);
    inside();
}
demo();

//var is function scope
//but const and let is block scope

{
    const b=9;
    console.log(b);
}
console.log(b);//not defined

{
    let c=9;
    console.log(c);
}
console.log(c)

function app(){
    if(true){
        var y=60;
        console.log(y);
    }
    
    console.log(y);
}
app();

function app(){
    if(true){
        let y=60;
        console.log(y);
    }
    
    console.log(y);//not defined
}
app();

function app(){
    if(true){
        const y=60;
        console.log(y);
    }
    
    console.log(y);//not defined
}
app();