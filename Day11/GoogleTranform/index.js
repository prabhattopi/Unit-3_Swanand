

const formText= document.querySelector(".from-text"),
toText=document.querySelector(".to-text"),
 selectTag=document.querySelectorAll("select"),
 exchangeIcon=document.querySelector(".exchange"),
icons=document.querySelectorAll(".row i"),
translateBtn=document.querySelector("button");



selectTag.forEach((tag, id)=>{
  for (const country_code in countries) {
    //   console.log(country_code);
    let selected;
    if(id==0 && country_code=="en-GB" || id==1 && country_code=="hi-IN"){
        selected = "selected"
    }
   

   let option=` <option value="${country_code}" ${selected}>${countries[country_code]}</option>`
   tag.insertAdjacentHTML("beforeend",option);//adding options tag inside select tag

    
  }
});
exchangeIcon.addEventListener("click",()=>{
    let temp=formText.value
   let templanguage=selectTag[0].value
   selectTag[0].value=selectTag[1].value;
   selectTag[1].value=templanguage
    formText.value=toText.value;
    toText.value=temp

})

 const main=(()=>{
    let text= formText.value;
    translateForm=selectTag[0].value;//getting from select tag value
    translateTo=selectTag[1].value;//getting to select value
    // console.log(text,translateForm,translateTo)
    if(!text) return;
    toText.setAttribute("placeholder","Translating...")
    let apiUrl=`https://api.mymemory.translated.net/get?q=${text}&langpair=${translateForm}|${translateTo}`
    fetch(apiUrl).then(res=>res.json().then(data=>{
        console.log(data)
        toText.value=data.responseData.translatedText
        toText.setAttribute("plceholder","Translation")
    }))

});
let x;
 const debounce=((func,time)=>{

     if(x){
         clearTimeout(x)
     }
     x=setTimeout(() => {
        func()
     }, time);
    
 })
// translateBtn.addEventListener("click",()=>{
//     let text= formText.value;
//     translateForm=selectTag[0].value;//getting from select tag value
//     translateTo=selectTag[1].value;//getting to select value
//     // console.log(text,translateForm,translateTo)
//     if(!text) return;
//     toText.setAttribute("placeholder","Translating...")
//     let apiUrl=`https://api.mymemory.translated.net/get?q=${text}&langpair=${translateForm}|${translateTo}`
//     fetch(apiUrl).then(res=>res.json().then(data=>{
//         console.log(data)
//         toText.value=data.responseData.translatedText
//         toText.setAttribute("plceholder","Translation")
//     }))

// });
icons.forEach(ico=> {
    ico.addEventListener("click",({target})=>{
        if(target.classList.contains("fa-copy")){
               if(target.id=="from"){
                  navigator.clipboard.writeText(formText.value)
               }
               else{
                //    console.log("to copy icon clicked")
                navigator.clipboard.writeText(toText.value)
               }
        }
        else{
                 // console.log("speech is clicked")
            let utterance;
       
            if(target.id=="from"){
                // navigator.clipboard.writeText(formText.value)
               utterance=new SpeechSynthesisUtterance(formText.value)
               utterance.lang=selectTag[0].value

             }
             else{
              //    console.log("to copy icon clicked")
            //   navigator.clipboard.writeText(toText.value)
              utterance=new SpeechSynthesisUtterance(toText.value)
              utterance.lang=selectTag[1].value
             }
            speechSynthesis.speak(utterance);

        }
    })
    
});