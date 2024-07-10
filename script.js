new TypeIt(".element", {
  strings: ["Coding Kabila", "Welcomes You..."],
  speed: 50,
  waitUntilVisible: true,
  html: true, // Enable HTML for custom formatting
  css: {
      color: "blue", // Set the color to blue
  }
}).go();

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var logo = navbar.querySelector("img"); // Assuming the logo is the first <img> element within the navbar
    if (!navbar || !logo) {
        console.error("Navbar or logo element not found!");
        return;
    }

    if (window.location.pathname.includes("index.html")) {
        navbar.classList.add("home-page");
    }


    var changeColorPosition = 100; // Adjust this value as needed

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        

        if (scrollPosition >= changeColorPosition) {
            navbar.classList.add("scrolled");
            logo.src = "img/logo-white.png"; // Path to the white logo
        } else {
            navbar.classList.remove("scrolled");
            logo.src = "img/logo.png"; // Path to the original logo
        }
    });
});
