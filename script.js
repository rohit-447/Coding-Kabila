new TypeIt(".element", {
  strings: ["Coding Kabila", "Welcomes You..."],
  speed: 50,
  waitUntilVisible: true,
}).go();

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var logo = navbar.querySelector("img");
    var codingSpan = navbar.querySelector(".clr-black");
    var navbar_txt = navbar.querySelectorAll("#navbarCollapse .navbar-nav a");
    
    if (!navbar || !logo || !codingSpan || navbar_txt.length === 0) {
        console.error("Navbar, logo, or coding span element not found!");
        return;
    }

    var changeColorPosition = 100; // Adjust this value as needed

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition >= changeColorPosition) {
            navbar.classList.add("scrolled");
            logo.src = "img/logo-white.webp"; // Path to the white logo
            codingSpan.classList.add("clr-white");
            navbar_txt.forEach(function(link) {
                link.classList.add("clr-white");
            });
        } else {
            navbar.classList.remove("scrolled");
            logo.src = "img/logo.webp"; // Path to the original logo
            codingSpan.classList.remove("clr-white");
            navbar_txt.forEach(function(link) {
                link.classList.remove("clr-white");
            });
        }
    });
});