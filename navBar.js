let navBar = document.querySelector("#navbar");
let portfolioImage = document.querySelector("img")
navBar.style.display = "none";

window.addEventListener("scroll",function(){
    if(window.pageYOffset >= 1050){
        navBar.classList.add("sticky");
        navBar.style.display = "block";
        portfolioImage.style.display = "block";   
    }
    else{
        navBar.classList.remove("sticky");
        navBar.style.display = "none"
        portfolioImage.style.display = "none"
    }
console.log(window);
})