const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const anchor = document.querySelectorAll(".nav-links li a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

anchor.addEventListener("click", () => {
    anchor.classList.toggle("open");
  });
  
// links.addEventListener("click", () => {
//     links.forEach(link => {
//         link.classList.toggle("close");
//       });
//   });

// $('.hamburger').on('click', function () {
//     $('.nav-links').addClass('open');
//   });

// $( '.nav-links a' ).on("click", function(){
//     $('.nav-links').removeClass('open');
//   });