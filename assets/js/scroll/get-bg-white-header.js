var container = document.querySelector(".middle-section");
var text = container.querySelector(".middle-inner");
var steps = text.querySelectorAll(".onfocus-header-white");
const scroller = scrollama();

scroller
  .setup({
    step: ".onfocus-header-white",
    offset: 0.05,
  })
  .onStepEnter((response) => {
    $(".navbar-dark")
      .addClass("fixed-top-bg-white")
      .removeClass("fixed-top-bg-blue");
  })
  .onStepExit((response) => {
    $(".navbar-dark")
      .removeClass("fixed-top-bg-white")
      .addClass("fixed-top-bg-blue");
  });

window.addEventListener("resize", scroller.resize);
