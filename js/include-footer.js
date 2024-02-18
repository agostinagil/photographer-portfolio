fetch("../pages/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.body.innerHTML += data;
  })
  .catch((err) => console.log(err));
