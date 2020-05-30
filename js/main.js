const menu = document.querySelector(".menu");
console.log(menu);
const burgerButton = document.querySelector("#burger-menu");
console.log(burgerButton);
/*Evento*/
burgerButton.addEventListener("click", hideShow);
function hideShow() {
  if (menu.classList.contains("is_active")) {
    menu.classList.remove("is_active");
  } else {
    menu.classList.add("is_active");
  }
}
