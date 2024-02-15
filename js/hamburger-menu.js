export default function hamburgerMenu() {
  const $hamMenu = document.querySelector(".ham-menu"),
    $offScreen = document.querySelector(".off-screen-menu");

  document.addEventListener("click", (e) => {
    if (e.target.matches(".ham-menu, .ham-menu *")) {
      $hamMenu.classList.toggle("active");
      $offScreen.classList.toggle("active");
    }

    if (e.target.matches(".off-screen-menu a")) {
      $hamMenu.classList.toggle("active");
      $offScreen.classList.toggle("active");
    }
  });

  // $hamMenu.addEventListener("click", (e) => {});
}

// hacer que cuando hace click en los href se esconda de nuevo el offscreen
