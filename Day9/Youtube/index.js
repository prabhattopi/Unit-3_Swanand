//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=AIzaSyBV0_uvaWm5Quh4td6i3l3e57u7byndm5E
const videocontainer=document.querySelector(".video-container")
let ApiKey=`AIzaSyBV0_uvaWm5Quh4td6i3l3e57u7byndm5E`
 let http="https://youtube.googleapis.com/youtube/v3/videos?"
  let channel_http="https://www.googleapis.com/youtube/v3/channels?"
 

// let searchLink="https://www.youtube.com/results?search_query="
const url=`https://youtube.googleapis.com/youtube/v3/search?`
const searchInput=document.querySelector(".search-bar").value;
  
// let datai=[]







fetch(http + new URLSearchParams({
    key: ApiKey,
    part:"snippet",
    chart:"mostPopular",
    maxResults:40,
    regionCode:"IN",
  
    



})).then(res=>res.json())
.then(data=>{
    console.log(data)
 data.items.forEach(item=>{
     getChannelIcon(item)
    
     
    
 })
//  data.items.forEach(item=>{
//      getquery(item)
    
     
    
//  })
//  data.items.map(function(el){
//      datai.push(el)
//  })
}).catch(err=>console.log(err));

// console.log(datai)
// const getquery=(datai)=>{
//     fetch(url + new URLSearchParams({
//         key:ApiKey,
//         part:"snippet",
//         id:datai.snippet.channelId,
//         maxResults:20,
//         q:searchInput
        

//     })).then(res=>res.json()).then(data=>{
//         // console.log(data.items)
//         video(data.items)

//     })
// }





const getChannelIcon=(videos_data)=>{
    fetch(channel_http + new URLSearchParams({
        key:ApiKey,
        part:"snippet",
        // chart:"mostPopular",
        // maxResults:1,
        // regionCode:"IN",
        id: videos_data.snippet.channelId,
        
})).then(res=>res.json()).then(data=>{
   

//  console.log(data)
videos_data.channelThumbnail=data.items[0].snippet.thumbnails.default.url;


// console.log(videos_data)
 videogrid(videos_data)
//  flato(videos_data)
 
})
}


    
const videogrid=(data)=>{
  
    videocontainer.innerHTML+=` <div class="video" onclick="location.href='https://youtube.com/watch?v=${data.id}'">
    <img src="${data.snippet.thumbnails.high.url}" alt="" class="thumbnail">
    <div class="content">
        <img src="${data.channelThumbnail}" alt="" class="channel-icon">
        <div class="info">
            <h4 class="title">${data.snippet.title}</h4>
            <p class="channel-name">${data.snippet.channelTitle}</p>
        </div>
    </div>
  </div>`
  }
  

   
   

    // const video=(data)=>{
       
    //    videocontainer.innerHTML+=` <div class="video" onclick="location.href='https://youtube.com/watch?v=${data.id}'">
    //    <img src="${data.snippet.thumbnails.high.url}" alt="" class="thumbnail">
    //    <div class="content">
    //        <img src="${data.channelThumbnail}" alt="" class="channel-icon">
    //        <div class="info">
    //            <h4 class="title">${data.snippet.title}</h4>
    //            <p class="channel-name">${data.snippet.channelTitle}</p>
    //        </div>
    //    </div>
    //  </div>`
    //  }

     
    //  const searchBtn=document.querySelector(".search-btn")
    // //  let searchLInk=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchInput}&key=AIzaSyBV0_uvaWm5Quh4td6i3l3e57u7byndm5E`
    //  searchBtn.addEventListener("click","flato")
    //  function flato(){
    //      videocontainer.innerHTML=null
    //     fetch(url + new URLSearchParams({
    //         key: ApiKey,
    //         part:"snippet",
    //         chart:"mostPopular",
    //         maxResults:40,
    //         regionCode:"IN",
    //         q:searchInput
        
        
        
    //     })).then(res=>res.json())
    //     .then(data=>{
    //         console.log(data.items)
      
    //     //  data.items.forEach(item=>{
    //     //      getquery(item)
            
             
            
    //     //  })
    //     //  data.items.map(function(el){
    //     //      datai.push(el)
    //     //  })
    //     }).catch(err=>console.log(err));

    //     // videocontainer.innerHTML=null
    //     //  const videogrid=(data)=>{
  
    //     //     videocontainer.innerHTML+=` <div class="video" onclick="location.href='https://youtube.com/watch?v=${data.id}'">
    //     //     <img src="${data.snippet.thumbnails.high.url}" alt="" class="thumbnail">
    //     //     <div class="content">
    //     //         <img src="${data.channelThumbnail}" alt="" class="channel-icon">
    //     //         <div class="info">
    //     //             <h4 class="title">${data.snippet.title}</h4>
    //     //             <p class="channel-name">${data.snippet.channelTitle}</p>
    //     //         </div>
    //     //     </div>
    //     //   </div>`
    //     //   }
          


         
    //  }


  

// 

  





