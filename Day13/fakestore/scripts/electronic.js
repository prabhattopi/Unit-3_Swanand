import navbar from "../componets/navbar.js";

document.getElementById("navbar").innerHTML=navbar()


let url=`https://fakestoreapi.com/products/category/electronics`
let container=document.getElementById("container")
import { getData,append } from "./fetch.js";

getData(url).then((res)=>{
    append(res,container)
})




// let getData=async()=>{
//     try{
//         let res=await fetch(`https://fakestoreapi.com/products/category/electronics`)
//         let data=await res.json()
       
//         append(data)
//         console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// getData()
// let append=(data)=>{
//     let continer=document.getElementById("container")
//     data.forEach(({title})=> {
//         let p=document.createElement("p")
//         p.innerText=title
//         continer.append(p)
//     });
// }