import navbar from "../componets/navbar.js";

document.getElementById("navbar").innerHTML=navbar()
let url=`https://fakestoreapi.com/products/category/jewelery`
let container=document.getElementById("container")

import { getData,append } from "./fetch.js";
getData(url).then((res)=>{
    console.log(res)
    append(res,container)
})

