const btnShow = document.querySelector("#btn-show");
const sideMenu = document.querySelector("#side");
const btnHide = document.querySelector("#btn-hide");
btnShow.addEventListener("click", () => {
  sideMenu.classList.remove("w-0");
  sideMenu.classList.add("w-1/2");
});
btnHide.addEventListener("click", () => {
  sideMenu.classList.remove("w-1/2");
  sideMenu.classList.add("w-0");
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
    sideMenu.classList.remove("w-1/2");
    sideMenu.classList.add("w-0");
  });
});

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("#nav li a");
Window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.screenY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("activeee");
        document
          .querySelector("#nav li a [herf*= " + id + "]")
          .classList.add("activeee");
      });
    }
  });
};
