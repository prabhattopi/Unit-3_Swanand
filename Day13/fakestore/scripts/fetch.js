let getData=async (url)=>{
    let res=await fetch(url)
    let data=await res.json()
    return data
}

let append=(data,container)=>{
     data.forEach(({title}) => {
         let p=document.createElement("p");
         p.innerText=title;
         container.append(p)
     });
}
export {getData,append};//Ek bar me purala port bhej da;la
