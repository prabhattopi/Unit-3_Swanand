const movieSearchBox=document.getElementById("movie-search-box")
const searchlist=document.getElementById("search-list")
const resultgrid=document.getElementById("result-grid")

//
async function loadmovies(searchTerm){
    const url = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=da3af64a`;
    const res=await fetch(`${url}`) 
    const data=await res.json()
    // console.log(data.Search)
   return data.Search

}

// loadmovies("thor")
 async function findMovies(){
    
    let serchTerm=movieSearchBox.value.trim()
    let data;
    if(serchTerm.length>0){
        searchlist.classList.remove("hide-search-list")
        data= await loadmovies(serchTerm)
    if(data===undefined){
        return false
    }
    displayMoviesList(data)
    console.log(data)
    }
    else{
        searchlist.classList.add('hide-search-list')
    }
}
function displayMoviesList(data){
 searchlist.innerHTML=null
  for(let idx=0; idx <data.length;idx++){
      let movielistItem=document.createElement("div")
      movielistItem.dataset.id=data[idx].imdbID;
      movielistItem.classList.add("search-list-item");
      if(data[idx].Poster!="N/A"){
          moviePoster=data[idx].Poster;
          }
          else{
              moviePoster="download.jpg"
            }
              movielistItem.innerHTML=`
              <div class="search-item-thumbnail">
              <img src="${moviePoster}" alt="" />
            </div>
            <div class="search-item-info">
              <h3>${data[idx].Title}</h3>
              <p>${data[idx].Year}</p>
            </div>
              `;
            
        
          
          searchlist.appendChild(movielistItem)

      


  }
  loadmoviesdetails();
}
function loadmoviesdetails(){
    const searchlistMovies=searchlist.querySelectorAll(".search-list-item")
    searchlistMovies.forEach(data=>{
        // console.log(data)
        data.addEventListener("click",async()=>{
            // console.log(data.dataset.id)
            searchlist.classList.add("hide-search-list")
            movieSearchBox.value=null
            const result=await fetch(`https://www.omdbapi.com/?&i=${data.dataset.id}&apikey=da3af64a`)
            const dat=await result.json()
            // console.log(dat)
             display(dat)

        })
       

    })



}
function display(data){
    resultgrid.innerHTML=`
    <div class="movie-poster">
    <img src="${(data.Poster != "N/A")? data.Poster :"download.jpg"}" alt="movie Poster">

</div>
<div class="movie-info">
    <h3 class="movie-title">${data.Title}</h3>
    <ul class="movie-misc-info">
        <li class="year">Year: ${data.Year}</li>
        <li class="rated">Ratings:${data.Rated}</li>
        <li class="released">Released:${data.Released}</li>
    </ul>
    <p class="genre"><b>Genre:</b>${data.Genre}
  </p>
  <p class="writer"><b>Writer:</b> ${data.Writer}

  </p>
  <p class="actors"><b>Actors:</b> ${data.Actors}</p>
  <p class="plot"><b>Plot:</b> ${data.Plot}</p>
  <p class="language"><b>Language:</b>${data.Language}</p>
  <p class="awards"><b><i class="fas fa-award"></i></b>${data.Awards}</p>
</div>
`

    
}
window.addEventListener("click",(event)=>{
 if(event.target.className!="form-control"){
     searchlist.classList.add("hide-search-list")
 }
})
let x;
function debounce(func,time){
    if(x){
        clearTimeout(x)
    }
    x=setTimeout(() => {
        func()
    }, time);

}
