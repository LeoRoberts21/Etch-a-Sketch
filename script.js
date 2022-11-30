//CODE FOR PAINT BRUSH -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const divs = document.querySelector(".gridContainer10x10");
const mainDiv = document.querySelector(".singleSquare");

divs.addEventListener("mouseover", function (e) {
  if (e.target.matches(".singleSquare")) {
    e.target.classList.add("ssHover");
  }
});

//CODE FOR SQUARE CHANGING -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const tenTen = document.querySelector(".gridContainer10x10");

const twentyTwenty = document.querySelector(".gridContainer20x20");

const thirtyThirty = document.querySelector(".gridContainer30x30");

const btnTen = document.querySelector(".btn10");

const btnTwenty = document.querySelector(".btn20");

const btnThirty = document.querySelector(".btn30");

const openTen = function () {
  tenTen.classList.remove("hidden");
  twentyTwenty.classList.add("hidden");
  thirtyThirty.classList.add("hidden");
};

const openTwenty = function () {
  tenTen.classList.add("hidden");
  twentyTwenty.classList.remove("hidden");
  thirtyThirty.classList.add("hidden");
};

const openThirty = function () {
  tenTen.classList.add("hidden");
  twentyTwenty.classList.add("hidden");
  thirtyThirty.classList.remove("hidden");
};

btnTen.addEventListener("click", openTen);

btnTwenty.addEventListener("click", openTwenty);

btnThirty.addEventListener("click", openThirty);
