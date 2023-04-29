//String in javascript

let fname = "Anand";
let lname = "Raj"
console.log(fname);

//length
console.log(fname.length);

//some string method
//trim
//substring
//slice
//toUpperCase
//toLowerCase

let s = fname.substring(0);
console.log(s);

//trim --> it removes the spaces form the first and last index
//slice --> it works similar to substring it takes two value first and last

let ns = fname.slice(0);
console.log(ns);

let ss = fname.split("a");
console.log(ss);

let fullName = fname.concat(lname);
console.log(fullName)

let nfullName = fname+ " " + lname;
console.log(nfullName)

//template string
let about = `My name is ${fname} ${lname}`;
console.log(about)