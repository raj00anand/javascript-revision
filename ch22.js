//javascript is asynchronous and single threaded programming language


//asynchronous programming
//setTimeout
//setTime out print at last
// console.log("Start");
// setTimeout(()=>{
//     console.log("inside settimeout");
// },1000);
// console.log("end");

//setTime out return an id
 console.log("start");
 const id = setTimeout(() => {
    console.log("inside setTimeOut");
 },0);
 console.log("setTimeOut id is", id);
 clearTimeout(id);
 console.log("end");