"use strict";
(function () {
    function Start() {
        console.log("App started");
        confirmDelete();
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
    }
    function confirmDelete() {
        $("a.delete").on("click", (event) => {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
                location.href = '/contact-list';
            }
        });
    }
    $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var tags = $(".tag");
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            if ($(tag).position().top < pageBottom) {
                $(tag).addClass("visible");
            }
            else {
                $(tag).removeClass("visible");
            }
        }
    });
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map