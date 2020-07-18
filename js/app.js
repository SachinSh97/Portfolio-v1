$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });

  let hamberger = document.querySelector(".hamberger");
  let times = document.querySelector(".times");
  let mobileNav = document.querySelector(".mobile-nav");
  let content = document.querySelector(".content");
  let timeline = document.querySelector(".timeline");

  hamberger.addEventListener("click", function () {
    mobileNav.classList.add("open");
  });
  content.addEventListener("click", function () {
    timeline.classList.add("bg-1");
  });
  times.addEventListener("click", function () {
    mobileNav.classList.remove("open");
  });
});
