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
  if (!navbar) {
      console.error("Navbar element not found!");
      return;
  }

  var changeColorPosition = 100; // Adjust this value as needed

  window.addEventListener("scroll", function () {
      var scrollPosition = window.scrollY;

      if (scrollPosition >= changeColorPosition) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  });
});
