export default function headerBackground() {
  const w = window,
    $header = document.getElementById("header");

  w.addEventListener("scroll", () => {
    if (w.scrollY > 800) {
      $header.classList.add("header-scroll");
    } else {
      $header.classList.remove("header-scroll");
    }
  });
}
