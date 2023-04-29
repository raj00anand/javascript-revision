//sort funtion
//sort funtion sort values based on ANCI value

const num = [4, 27, 383, 2, 54];
num.sort();
console.log(num);//sort based on anci value

const mix = ["a", "A", 5, 34];
mix.sort();
console.log(mix);

const name=["Anand", "messi", "Boland", "xavi", "aman"];
name.sort(); //capital letter sort first
console.log(name);

//sort according to increasing or decreasing order we have to pass callback function
//for acending order
num.sort((a,b)=>a-b);
console.log(num);

//for decending order
num.sort((a,b)=>b-a);
console.log(num);

//a-b --> positive then b comes first
//a-b --> negative then a comes first

