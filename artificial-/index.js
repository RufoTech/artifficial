const navbarBtn=document.querySelector("#navbariacbtn")
const closeBtn=document.querySelector(".fa-xmark")
console.log(closeBtn)
navbarBtn.addEventListener("click",function(){
   document.querySelector(".mobile-menu").classList.add("aktiv")
})

closeBtn.addEventListener("click", function(){
   document.querySelector(".mobile-menu").classList.remove("aktiv")
})

AOS.init();

const swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   autoplay:true,

   breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
 });
