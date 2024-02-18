import hamburgerMenu from "./hamburger-menu.js";
import headerBackground from "./header.js";
import selectedLink from "./off-screen-links.js";

document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu();
  headerBackground();
  selectedLink();
});
