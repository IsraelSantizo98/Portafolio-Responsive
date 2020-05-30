const ipad = window.matchMedia("screen and (max-width: 767px)");
const menu = document.querySelector(".menu");
console.log(menu);
const burgerButton = document.querySelector("#burger-menu");
console.log(burgerButton);
/*Evento*/
//activa o desactiva
ipad.addListener(validation);
//SIN ESTO NO ABRE EL MENU EN CELULAR
validation(ipad);
function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", hideShow);
    // console.log(event);
  } else {
    burgerButton.removeEventListener("click", hideShow);
  }
}
function hideShow() {
  if (menu.classList.contains("is_active")) {
    menu.classList.remove("is_active");
  } else {
    menu.classList.add("is_active");
  }
}
