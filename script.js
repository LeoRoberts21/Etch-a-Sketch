//CODE FOR PAINT BRUSH -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=





//let stickcolour = funftion(){
  // ss.classlist.add('colour')
// }

//ss.addevent (mouse over, stick color)

let singleSquare = document.querySelector(".singleSquare");

let stickColour = function () {
  singleSquare.classList.add("ssHover");
};

singleSquare.addEventListener("mouseover", stickColour);




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
