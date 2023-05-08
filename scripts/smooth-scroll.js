// smooth scroll

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

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll('#work a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      event.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});
