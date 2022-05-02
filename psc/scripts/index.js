//https://api.unsplash.com/search/photos?query=${value}&per_page=20&client_id=gkb9jR2QNGqJ5WEezzzUwtjeuSVYwGcma_Qd84P6sD4
const Apikey=`gkb9jR2QNGqJ5WEezzzUwtjeuSVYwGcma_Qd84P6sD4`

import { navbar } from "../components/navbar.js";
import {searchImages,append} from  "./fetch.js"
let navbari=document.getElementById("navbar")
navbari.innerHTML=navbar()

let search=async(e)=>{
   if(e.key=="Enter"){
    let query=document.getElementById("query").value 
    let data=await searchImages(Apikey,query)
    console.log(data)
    let container=document.getElementById("container")
    container.innerHTML=null

    append(data.results,container)
   
   }
     
   
 
}
document.getElementById("query").addEventListener("keyup",search)

let categories=document.getElementById("category").children

// console.log(categories)
function csearch(){
    console.log(this.id);

  searchImages(Apikey,this.id).then((data)=>{
    
      console.log(data)
      let container=document.getElementById("container")
      container.innerHTML=null
  
      append(data.results,container)
  })
   
   
   
    

        
      
     
    
}

for(let el of categories){
    el.addEventListener("click",csearch)
}

// let searchImages=async(Apikey,query)=>{
//  
   
 
// }

