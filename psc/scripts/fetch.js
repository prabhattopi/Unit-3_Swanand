let searchImages=async(Apikey,query,order)=>{
   
   
    try{
    let res=await fetch(`https://api.unsplash.com/search/photos?query=${query}&order_by=${order}&content_filter=high&per_page=20&client_id=${Apikey}`)
    let data=await res.json()
    return data
    }
    catch(err){

    }
}

let append=(data,container)=>{
    data.forEach(({alt_description,urls:{small}}) => {
        let div=document.createElement("div")
        div.setAttribute("class","img")
               let p=document.createElement("img");
               let h3=document.createElement("h3")


        p.src=small;
        h3.innerText=alt_description;
        div.append(p,h3)
        container.append(div)
    });
}
// let append=(data,container)=>{
//     data.forEach(({}) => {
//       let img=document.createElement("img")
//       img.src=data.
//         container.append(p)
//     });
// }
export {searchImages,append}