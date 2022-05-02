const searchBtn=document.getElementById("search-btn");
const mealist=document.getElementById("meal")
const mealDetails=document.querySelector(".meal-details-content");
const recipeClosedBtn=document.getElementById("recipe-close-btn")


import {data1,main,data2,mealRecipeModal} from "./fetch.js"
import {navbar} from "../components/navbar.js"
const navbari=document.getElementById("navbar")
navbari.innerHTML=navbar()

// searchBtn.addEventListener("click",getMealList);
mealist.addEventListener("click",getRecipeList);
recipeClosedBtn.addEventListener("click",()=>{
    mealDetails.parentElement.classList.remove("showRecipe")
})
let nam=localStorage.getItem("lada")||""
document.getElementById("nam").append(nam)
// function getMealList(){
   
//     // console.log(searchInputTxt)
// //     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`).then(response=>response.json()).then(data=>{
// //         console.log(data)
// //         let html=""
// //         if(data.meals){data.meals.forEach(meal=>{
// //             html+=` <div class="meal-item" data-id="${meal.idMeal}">
// //             <div class="meal-img">
// //                 <img src="${meal.strMealThumb}" alt="foodie" srcset="">
// //             </div>
// //             <div class="meal-name">
// //                 <h3>${meal.strMeal}</h3>
// //                 <a href="#" class="recipe-btn">Get Recipe</a>
// //             </div>
// //         </div>
// // `

// //         })
// //         mealist.classList.remove("notFound")
// //     }else{
// //         html="Sorry,We don't find any meal!"
// //         mealist.classList.add("notFound")
// //     }
// //     mealist.innerHTML=html
// //     })
  
// }
function getRecipeList(e){
    e.preventDefault()
    // console.log(e.target);
    if(e.target.classList.contains("recipe-btn")){
        let mealItem=e.target.parentElement.parentElement;

        data2(mealItem)
        mealRecipeModal()
        // console.log(mealItem)
        // fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`).then(res=>res.json()).then(data=>mealRecipeModal(data.meals))
    }

}


// document.querySelector("input").addEventListener("oninput",debounce=>{
    

// })




    
let input=document.querySelector("input")
input.oninput=falto



// let searchInputTxt=document.getElementById("search-input").value.trim()  
// data1(searchInputTxt)
function falto(){
  
  debounce(main,500)
}
let x;
function debounce(func,time){
    if(x){
        clearTimeout(x)
    }
    x=setTimeout(() => {
        func()
    }, time);

}

// input.oninput=debounce(data1,500)

    // data1(searchInputTxt)
// function getMealList(){
//     let searchInputTxt=document.getElementById("search-input").value.trim()

//     data1(searchInputTxt)



// }



// function mealRecipeModal(data){
//     // console.log(data)
//     data=data[0];
//     let html=`  <h2 class="recipe-title">${data.strMeal}</h2>
//     <p class="recipe-category">
//        ${data.strCategory}
//     </p>
//     <div class="recipe-instruct">
//         <h3>Instructions:</h3>
//         <p>${data.strInstructions}</p>
//     </div>
//     <div class="recipe-meal-img">
//         <img src="${data.strMealThumb}" alt="">
//     </div>
//     <div class="recipe-link">
//         <a href="${data.strYoutube}" target="_blank">Watch Videos</a>
//     </div>
// `
// mealDetails.innerHTML=html
// mealDetails.parentElement.classList.add("showRecipe")

// }

