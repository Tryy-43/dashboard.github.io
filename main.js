const btnShow = document.querySelector("#btn-show");
const sideMenu = document.querySelector("#side");
const btnHide = document.querySelector("#btn-hide");
btnShow.addEventListener("click", () => {
  sideMenu.classList.remove("sidebar");
  sideMenu.classList.add("close");
});
btnHide.addEventListener("click", () => {
  sideMenu.classList.remove("close");
  sideMenu.classList.add("sidebar");
});
// const menuLink = document.querySelectorAll(".nav-link");
// menuLink.forEach((e) => {
//   e.addEventListener("mouseover", (t) => {
//     t.target.classList.add("activeee");
//   });
// });
const allLinke = document.querySelectorAll("#side > li");
allLinke.forEach((e) => {
  e.addEventListener("click", () => {
    sideMenu.classList.remove("close");
    sideMenu.classList.add("sidebar");
  });
});
