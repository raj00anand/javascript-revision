//it is also a asynchronous
//it also return id;

// let a=1;
// setInterval(() =>{
//     a=a*2;
//     console.log(a);
// },1000);

const id=setInterval(() => {
    console.log("Hello");
},1000);

setTimeout(()=>{
    clearInterval(id);
},10000);