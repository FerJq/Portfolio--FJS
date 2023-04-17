let bg = document.querySelector("body");

function background_theme() {
  if (bg.classList.contains("color-theme")) {
    bg.classList.remove("color-theme");
  } else {
    bg.classList.add("color-theme");
  }
}

setInterval(background_theme, 3000);
