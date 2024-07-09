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

  window.addEventListener("scroll", function () {
      // Get the current scroll position
      var scrollPosition = window.scrollY;

      // Define the scroll position where the navbar should change color
      var changeColorPosition = 100; // Adjust this value as needed

      // Toggle the 'scrolled' class based on the scroll position
      if (scrollPosition >= changeColorPosition) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  });
});