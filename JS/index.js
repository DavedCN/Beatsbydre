
// Navigation Bar
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function()
{
    navBar = document.querySelector(".div-nav-list");
    navBar.classList.toggle("active");

    document.querySelector("#turn").classList.toggle("change");
    document.querySelector(".shipinfo").classList.toggle("change");
}




// Parallax Scroll Effect in Section1
let first_s = document.getElementById("first-s");
let screenwidth = window.innerWidth;
 
 if(screenwidth > 767)

    {
        
     window.addEventListener('scroll',function() 
  
        {

        let value = window.scrollY;
        first_s.style.top = value * 0.23 + 'px';

     
      }    
    
)}


// Scroll Function

let swiper = new Swiper(".mySwiper", {
      
  slidesPerView: 2,
  loop: true,
  centeredSlides: true,
  spaceBetween: 0,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});