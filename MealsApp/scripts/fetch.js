

const searchBtn=document.getElementById("search-btn");
const mealist=document.getElementById("meal")
const mealDetails=document.querySelector(".meal-details-content");
const recipeClosedBtn=document.getElementById("recipe-close-btn")


const data1=async(searchInputTxt)=>{
    let res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
    let data=await res.json()
    //    console.log(data)
       console.log(data.meals)
       const da=data.meals
      return da
   
 
  
  
}
const main=async()=>{
    let searchInputTxt=document.getElementById("search-input").value.trim()  

  let data=await data1(searchInputTxt)
  if(searchInputTxt.length>0){
  adah(data)
  }
//   console.log(data)
//   if(data==undefined){
//       return false
//   }

   
}
const adah=(data)=>{
    // console.log(data)

    let html=""
    if(data){data.forEach(meal=>{
        html+=`<div class="meal-item" data-id="${meal.idMeal}">
        <div class="meal-img">
            <img src="${meal.strMealThumb}" alt="foodie" srcset="">
        </div>
        <div class="meal-name">
            <h3>${meal.strMeal}</h3>
            <a href="#" class="recipe-btn">Get Recipe</a>
        </div>
    </div>`


    })
    mealist.classList.remove("notFound")
}else{
    html="Sorry,We don't find any meal!"
    mealist.classList.add("notFound")
}
mealist.innerHTML=html
  
    

    
}


const data2=(mealItem)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`).then(res=>res.json()).then(data=>mealRecipeModal(data.meals[0]))
}

const mealRecipeModal=(({strMeal,strCategory,strInstructions,strMealThumb,strYoutube})=>{
    // data=data[0];
    let html=`  <h2 class="recipe-title">${strMeal}</h2>
    <p class="recipe-category">
       ${strCategory}
    </p>
    <div class="recipe-instruct">
        <h3>Instructions:</h3>
        <p>${strInstructions}</p>
    </div>
    <div class="recipe-meal-img">
        <img src="${strMealThumb}" alt="">
    </div>
    <div class="recipe-link">
        <a href="${strYoutube}" target="_blank">Watch Videos</a>
    </div>
`
mealDetails.innerHTML=html
mealDetails.parentElement.classList.add("showRecipe")


})

const random=()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(res=>res.json()).then(data=>
        mealRecipeModal(data.meals[0]))

}

// const meala=(({strMeal,strCategory,strInstructions,strMealThumb,strYoutube})=>{
//     // data=data[0];
//     let html=`  <h2 class="recipe-title">${strMeal}</h2>
//     <p class="recipe-category">
//        ${strCategory}
//     </p>
//     <div class="recipe-instruct">
//         <h3>Instructions:</h3>
//         <p>${strInstructions}</p>
//     </div>
//     <div class="recipe-meal-img">
//         <img src="${strMealThumb}" alt="">
//     </div>
//     <div class="recipe-link">
//         <a href="${strYoutube}" target="_blank">Watch Videos</a>
//     </div>
// `
// mealDetails.innerHTML=html
// // mealDetails.parentElement.classList.add("showRecipe")


// })

export {random,data1,main,data2,mealRecipeModal};

