//IIFE
"use strict";

(function(){
    function Start(): void {
        console.log("App started");
    }

    window.addEventListener("load", Start);
})();

// owl-carousel
(<any>$('.owl-home')).owlCarousel({
    loop: true,
    center:true,
    margin: -24,
    autoplay: true,
    dots: false,
    responsive:{
        0: {
            items:1
        },

        480: {
            items:3
        },

        768: {
            items: 5
        }
    }
});

// owl-carousel-projects
(<any>$('.owl-project')).owlCarousel({
    loop: true,
    center:true,
    margin: -24,
    autoplay: true,
    dots: false,
    responsive:{
        0: {
            items:1
        },

        480: {
            items:1
        },

        768: {
            items: 1
        }
    }
});

// Contact Form

document.getElementById("formwrap")
  document.addEventListener("submit", function(e) {
    e.preventDefault();
    window.location.href = "/";
  });

