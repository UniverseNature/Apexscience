const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const navSearch = document.querySelector(".nav-search");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    nav.style.display = "flex";
    navSearch.style.display = "flex";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    nav.style.display = "none";
    navSearch.style.display = "none";
  }
});
