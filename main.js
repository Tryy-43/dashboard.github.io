const btnShow = document.querySelector("#btn-show");
const sideMenu = document.querySelector("#side");
const btnHide = document.querySelector("#btn-hide");
btnShow.addEventListener("click", () => {
  sideMenu.classList.remove("hidden");
  sideMenu.classList.add("flex");
});
btnHide.addEventListener("click", () => {
  sideMenu.classList.remove("flex");
  sideMenu.classList.add("hidden");
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
    sideMenu.classList.remove("flex");
    sideMenu.classList.add("hidden");
  });
});

// let sections = document.querySelectorAll("section");
// let navlinks = document.querySelectorAll("#nav li a");
// Window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.screenY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navlinks.forEach((links) => {
//         links.classList.remove("activeee");
//         document
//           .querySelector("#nav li a [herf*= " + id + "]")
//           .classList.add("activeee");
//       });
//     }
//   });
// };
