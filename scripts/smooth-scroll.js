window.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll('nav a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      event.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});
