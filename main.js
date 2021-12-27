let nav = document.querySelector("nav");

// OPEN
document.querySelector(".burger-button").addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});
// Close
document.querySelector(".nav-close").addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

// Cleanup
let navs = document.getElementsByClassName("nav-link");

for (let index = 0; index < navs.length; index++) {
  navs[index].addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
}x