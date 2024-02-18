export default function selectedLink() {
  const $links = document.querySelectorAll(".off-screen-menu a");

  let location = window.location.href;
  let locationWithoutProtocol = location.split("//")[1];
  let separateLocation = locationWithoutProtocol.split("/");
  let locationWithoutLocalhost = "/" + separateLocation.slice(1).join("/");

  $links.forEach((el) => {
    let path = el.href;
    let withoutProtocol = path.split("//")[1];
    let parts = withoutProtocol.split("/");
    let specific = "/" + parts.slice(1).join("/");

    if (locationWithoutLocalhost === specific) {
      el.ariaCurrent = "page";
      el.classList.add("a-selected");
    } else if (
      locationWithoutLocalhost === "/index.html#" &&
      specific === "/index.html#"
    ) {
      el.classList.add("a-selected");
      el.ariaCurrent = "page";
    } else {
      el.classList.remove("a-selected");
    }
  });
}

/**
 * console.log(path)
http://127.0.0.1:5500/index.html 
http://127.0.0.1:5500/index.html#about
http://127.0.0.1:5500/pages/pages/works.html
http://127.0.0.1:5500/pages/works.html#contact

 * let withoutProtocol = path.split("//")[1]; divide desde la doble barra (//) y al indicarle [1] nos quedamos con la parte que sige a las barras:
127.0.0.1:5500/index.html
127.0.0.1:5500/index.html#about
127.0.0.1:5500/pages/pages/works.html
127.0.0.1:5500/pages/works.html#contact

 * let partes = withoutProtocol.split("/"); dividimos por cada (/) que haya y devuelve un array con cara parte: 
(2) ['127.0.0.1:5500', 'index.html']0: "127.0.0.1:5500"1: "index.html"length: 2[[Prototype]]: Array(0)
(2) ['127.0.0.1:5500', 'index.html#about']0: "127.0.0.1:5500"1: "index.html#about"length: 2[[Prototype]]: Array(0)
(4) ['127.0.0.1:5500', 'pages', 'pages', 'works.html']0: "127.0.0.1:5500"1: "pages"2: "pages"3: "works.html"length: 4[[Prototype]]: Array(0)
(3) ['127.0.0.1:5500', 'pages', 'works.html#contact']

 * let specific = "/" + partes.slice(1).join("/"); agregamos la primer barra, entramos al arraz de partes y con slice indicamos que descarte lo que está en el índice 0 y con join unimos cada parte diferenciandolas con / :
/index.html
/index.html#about
/pages/pages/works.html
/pages/works.html#contact
 */
