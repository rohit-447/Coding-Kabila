!function(t){"use strict";setTimeout(function(){0<t("#spinner").length&&t("#spinner").removeClass("show")},1),(new WOW).init(),t(window).scroll(function(){300<t(this).scrollTop()?t(".sticky-top").css("top","0px"):t(".sticky-top").css("top","-100px")});const o=t(".dropdown");var e=t(".dropdown-toggle"),s=t(".dropdown-menu"),n="show";t(window).on("load resize",function(){this.matchMedia("(min-width: 992px)").matches?o.hover(function(){const o=t(this);o.addClass(n),o.find(e).attr("aria-expanded","true"),o.find(s).addClass(n)},function(){const o=t(this);o.removeClass(n),o.find(e).attr("aria-expanded","false"),o.find(s).removeClass(n)}):o.off("mouseenter mouseleave")}),t(window).scroll(function(){300<t(this).scrollTop()?t(".back-to-top").fadeIn("slow"):t(".back-to-top").fadeOut("slow")}),t(".back-to-top").click(function(){return t("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1}),t(".header-carousel").owlCarousel({autoplay:!0,smartSpeed:1500,items:1,dots:!1,loop:!0,nav:!0,navText:['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>']}),t(".testimonial-carousel").owlCarousel({autoplay:!0,smartSpeed:1e3,center:!0,margin:24,dots:!0,loop:!0,nav:!1,responsive:{0:{items:1},768:{items:2},992:{items:3}}})}(jQuery);
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("loader-bar").style.width = scrolled + "%";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById("popup");
    var closeBtn = document.getElementById("close-popup");

    // Show the popup after a delay
    setTimeout(function () {
        popup.classList.add("show");
    }, 1000); // Delay of 1 second

    // Close the popup when the close button is clicked
    closeBtn.addEventListener("click", function () {
        popup.classList.remove("show");
    });
});
