const bgImage1 = document.getElementById("bg-image")

window.addEventListener("scroll", ()=>{
    updateImage()
})

function updateImage(){
    bgImage1.style.opacity = 1 - window.pageYOffset / 900;
    bgImage1.style.bacgroundSize =160 - window.pageYOffset /12 +"%"

}