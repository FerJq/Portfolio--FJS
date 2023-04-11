let bg = document.querySelector("body");

function background_theme() {
  if (bg.classList.contains("color-theme")) {
    bg.classList.remove("color-theme");
  } else {
    bg.classList.add("color-theme");
  }
}

setInterval(background_theme, 3000);

let email_submit = document.getElementById("submit");
email_submit.addEventListener("click", function () {
  alert("We'll be in touch!");
});
