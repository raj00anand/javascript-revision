//There are 3 most common ways ot send request to the server
//1.XMLHTTPRequest (old way of doing)
//2.fetch API (now we use)
//3. axios (third party library)

//fetch

const url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
//     .then((res)=>res.json())
//     .then((data) => console.log(data))
//     .catch((err)=> console.log(err));


//async await

// const fetchData = async() =>{
//     const res = await fetch(url);
//     if(!res.ok){
//         throw console.error("error");
//     }
//     const data = res.json();
//     return data;
// }

// fetchData().then((data)=>console.log(data))
//             .catch((error)=>console.log(error))

axios.get(url)
    .then((res)=> res.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));