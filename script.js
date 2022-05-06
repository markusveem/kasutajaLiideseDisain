let changeLanguage = document.querySelector(".languageSelect");

window.onload = function(){
    changeLanguage.addEventListener("click",changeLanguageFunc);
}


function changeLanguageFunc(){

    if (changeLanguage.innerHTML == "EN") {
        changeLanguage.innerHTML = "ET";
    }else{
        changeLanguage.innerHTML = "EN";
    }

}

 
 
 /*const firstGalleryPic = document.querySelector(".firstBlock");
 firstGalleryPic.addEventListener("click",change);
 function change(){
     
 }*/