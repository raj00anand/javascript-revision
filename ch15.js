//set
//It store unique value
//It is iterable
//order of value is nto guaranteed

const numbers = new Set();
numbers.add(5);
numbers.add("item");

if(numbers.has(5)){
    console.log("5 is present");
}else{
    console.log("not present");
}
numbers.add(6);
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(7);
numbers.delete(7);
for(let val of numbers){
    console.log(val);
}

const num = [1, 4,6, 2, 1, 2, 8, 5,4,4,3];
console.log(num.length);
//print only unique element
const temp = new Set(num);
console.log(temp.size)
console.log(temp)