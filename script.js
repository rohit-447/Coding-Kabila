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
    var spans = navbar.getElementsByTagName("span");
    var codingSpan = navbar.querySelector(".clr-black"); // Selecting the span that contains "Coding"
    
    if (!navbar || !logo || !codingSpan) {
        console.error("Navbar, logo, or coding span element not found!");
        return;
    }
    var changeColorPosition = 100; // Adjust this value as needed
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition >= changeColorPosition) {
            navbar.classList.add("scrolled");
            logo.src = "img/logo-white.png"; // Path to the white logo
            codingSpan.classList.add("clr-white");
        } else {
            navbar.classList.remove("scrolled");
            logo.src = "img/logo.png"; // Path to the original logo
            codingSpan.classList.remove("clr-white");
        }
    });
});
