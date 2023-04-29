//To solve async function we use:-
// -->callback, async await, promise

//callback
//when function passed as argument of function known as callback

console.log(typeof (4));

function sum(x, y){
    return x+y;
}
function func(x, y, sum){
    if(typeof x==='number' && typeof y==='number'){
        console.log(sum(x, y));
    }else{
        console.log("Enter the input as number");
    }
}
func('5', 7, sum);