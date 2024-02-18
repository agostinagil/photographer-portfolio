export default function headerBackground() {
  const w = window,
    $header = document.getElementById("header");

  w.addEventListener("scroll", (e) => {
    if (w.location.pathname === "/pages/works.html") {
      if (w.scrollY > 46) {
        $header.classList.add("header-scroll");
      } else {
        $header.classList.remove("header-scroll");
      }
    } else {
      if (w.scrollY > 680) {
        $header.classList.add("header-scroll");
      } else {
        $header.classList.remove("header-scroll");
      }
    }
  });
}
