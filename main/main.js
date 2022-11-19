const aside = document.getElementById("aside");
const asideLinks = document.getElementById("aside_links").children;

console.log(asideLinks);

function showAside() {
  aside.removeAttribute("hidden");
  aside.style.animation = "slideIn-toBottom .3s ease-out forwards";
}

function closeAside() {
  aside.style.animation = "slideOut-toTop .3s ease-out forwards";
  setTimeout(() => {
    aside.setAttribute("hidden", "");
  }, 400);
}

for (let i = 0; i < asideLinks.length; i++) {
  const ele = asideLinks[i];
  ele.addEventListener("click", () => {
    closeAside();
  });
}
