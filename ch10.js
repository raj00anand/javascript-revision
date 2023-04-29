//default parameters
//when we do not pass any value to funtion it takes as undefined so, to avoid this we pass default argument

function sum(a, b=0){
    return a+b;
}
console.log(sum(8));


add(1,2,3,4,5,5);
function add(...rest){
    let sum=0;
    for(let val of rest){
        sum += val;
    }
    console.log(sum);
}