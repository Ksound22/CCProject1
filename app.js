document.querySelector("#ScrollUp").addEventListener("click", ScrollToTop);

function ScrollToTop() {
  console.log("clicked");
  window.scrollTo({
    top: 0,
    right: 0,
    behavior: "smooth",
  });
}
