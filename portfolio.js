const cbox = document.getElementById("cbox");
const slider = document.getElementsByClassName("slider-round")[0];
const sectionHeader = document.getElementById("header");
const navbar = document.getElementById("navbar");

/*window.addEventListener('DOMContentLoaded', function() {
    QueryLoader2(document.querySelector("body"), {
        barColor: "transparent",
        backgroundColor: "#fff",
        percentage: true,
        barHeight: 1,
        minimumTime: 1000,
        fadeOutTime: 500
    });
});*/


cbox.addEventListener('click', function() {
    if(cbox.checked) {
        sectionHeader.style.background = "linear-gradient(180deg, rgba(191,224,255,1) 0%, rgba(255,238,207,1) 37%, rgba(255,200,200,1) 100%)";
    } else {
        sectionHeader.style.background = "linear-gradient(180deg, rgba(18,13,65,1) 0%, rgba(116,118,199,1) 30%, rgba(255,126,109,1) 100%)";
    }
})

const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

/*scroll시 navbar
window.onscroll = function() {
    if (30 < window.scrollY) {
        navbar.style.background = "white";
        navbar.style.boxShadow = "0px 0px 4px 0px rgb(0 0 0 / 20%)";
    } else {
        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";
    }
}*/