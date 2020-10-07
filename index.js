//SIDEBAR NAVIGATION CODE
let toggle = document.getElementById("toggle");
let nav = document.getElementById("mobileNav");
let backDrop = document.querySelector(".backdrop");
let closeButton = document.querySelector(".closebtn");

toggle.addEventListener("click", function () {
  if (!window.matchMedia("(min-width: 600px)")) {
    nav.style.width = "30%";
  } else {
    nav.style.width = "35%";
  }

  setTimeout(function () {
    backDrop.classList.add("show-backdrop");
  }, 0);
});

closeButton.addEventListener("click", function () {
  nav.style.width = "0%";
  backDrop.classList.remove("show-backdrop");
});

backDrop.addEventListener("click", function () {
  nav.style.width = "0%";
  backDrop.classList.remove("show-backdrop");
});
