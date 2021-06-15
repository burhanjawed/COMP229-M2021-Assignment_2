"use strict";
(function () {
    function Start() {
        console.log("App started");
    }
    window.addEventListener("load", Start);
})();
$('.owl-home').owlCarousel({
    loop: true,
    center: true,
    margin: -24,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 3
        },
        768: {
            items: 5
        }
    }
});
$('.owl-project').owlCarousel({
    loop: true,
    center: true,
    margin: -24,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 1
        }
    }
});
document.getElementById("formwrap");
document.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "/";
});
//# sourceMappingURL=app.js.map