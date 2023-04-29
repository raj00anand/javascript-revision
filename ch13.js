//important methods of Array in javascript
//foreach
//map
//filter
//reduce

//foreach
//it changes inside the same array
//it does not return anything

function mulBy2(val, index, arr){
    arr[index]=val*2;
}
const number = [2, 3, 4, 5,6];
number.forEach(mulBy2);
console.log(number);

//map
//it does not change in same array.
//it return value
//it needs new array

const newNumber = number.map((val, index)=>{
    return val*2;
})
console.log(newNumber);

const numbers = [2, 3, 4, 5];
//filter
//it return only those value whose condition satisfies
const arr = numbers.filter((val, index)=> val%2==0);
console.log(arr);

//reduce
//aim: sum of array
const sum = numbers.reduce((accumulator, currentvalue)=>{
    return accumulator+currentvalue;
},0)
console.log(sum)

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000}
];

const totalPrice = userCart.reduce((accumulator, currentvalue)=>{
    return accumulator+currentvalue.price;
},0);
console.log(totalPrice);

//find
//it gives first occurance
const fruits = ["apple", "orange", "banana"];
const ans = fruits.find((fruit)=> fruit.length==5);
console.log(ans);//apple

//every method
//it checks every element in an array and return true or false
const res = number.every((val)=> val%2==0);
console.log(res);

//some method
//if one of the element satisfy the condition it return true
const res1 = numbers.some((val)=> val%2==0);
console.log(res1);

//fill method
//it fill value on specific index
const arr1 = [1, 2, 3,4 ,5, 6,7, 8,8];
arr1.fill(0, 2, 5);
console.log(arr1);

//splice method
//start, delete, insert
const item=["item1", "item2", "item3"];

//delete
item.splice(1);

//insert
item.splice(1, 0, "item inserted")

//deleted, inserted
item.splice(1,2,"inserted Item1", "inserted item2");
console.log(item)

//object is not iterable