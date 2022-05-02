

const mealDetails=document.querySelector(".meal-details-content");
import {random,data1,data2,mealRecipeModal} from "./fetch.js";
import { navbar } from "../components/navbar.js";
const navbari=document.getElementById("navbar")
navbari.innerHTML=navbar()




const recipeClosedBtn=document.getElementById("recipe-close-btn")
recipeClosedBtn.addEventListener("click",()=>{
    mealDetails.parentElement.classList.remove("showRecipe")
})

const bata=document.getElementById("blink")

bata.addEventListener("click",get)
function get(){
    mealDetails.innerHTML=null
    random()
    mealRecipeModal()

}