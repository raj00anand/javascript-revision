//Promise
//Promise is an object representing the eventual completion or failure of an asynchornous opetation
//It add in microtask queue
//if there is promise and setTimeout promise gets resolve first
//status--> pending, fulfilled, rejected


console.log("Start");
const bucket = ["milk", "sugar", "coffebeans", "vegetable", "rice"];

const coffee = new Promise((resolve, rejected) => {
    if(bucket.includes("water") && bucket.includes("sugar") && bucket.includes("milk") && bucket.includes("coffebeans")){
        resolve("coffee is ready");
    }else{
        rejected("coffee is not ready");
    }
});

setTimeout(()=>{
    console.log("inside setTimeOut");
},0);
coffee.then((mycoffee)=>{
    console.log(mycoffee);
}).catch((err)=>console.log(err));

console.log("End");