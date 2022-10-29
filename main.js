const header = document.getElementById("header");
const goToContent = document.getElementById("go-to-content");
let navigationLis = document.querySelector(".nav").children;

navLis = [...navigationLis];

document.getElementById("to-top").setAttribute("tabIndex", "-1");

let first = 1;
window.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    if (first == 1) {
      goToContent.removeAttribute("hidden");
    } else {
      goToContent.setAttribute("hidden", "");
    }
    first--;
  }
});

window.addEventListener("scroll", (e) => {
  if (scrollY > 10) {
    header.style.backgroundColor = "rgba(0, 0, 0, .2)";
    navLis.forEach((ele) => {
      ele.children[0].style.color = "white";
      ele.children[0].style.backgroundColor = "black";
    });
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    navLis.forEach((ele) => {
      ele.children[0].style.color = "black";
      ele.children[0].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    });
  }
});

//
//
//
const aside = document.getElementById("aside");

function showAside() {
  aside.removeAttribute("hidden");
}

function closeAside() {
  aside.setAttribute("hidden", "");
}
