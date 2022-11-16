const aside = document.getElementById("aside");

function showAside() {
  aside.removeAttribute("hidden");
  aside.style.animation = "slideIn-toBottom .3s ease-out forwards";
}

function closeAside() {
  aside.setAttribute("hidden", "");
}
