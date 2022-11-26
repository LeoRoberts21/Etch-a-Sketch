
//CODE FOR PAINT BRUSH -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const fun = document.getElementsByClassName(".singleSquare");

let arrayLength = fun.length;

console.log(arrayLength);

const colorIt = function myFunction() {
  for (var i = 0; i < 100; i++) {
    const fun = document.getElementsByClassName(".singleSquare")[1];
    fun.addEventListener("mouseover", function () {
      fun.classList.add("hoverColor");
    });
  }
};




//CODE FOR SQUARE CHANGING -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


const TenTen = document.querySelector(".gridContainer10x10");

const TwentyTwenty = document.querySelector(".gridContainer20x20");

const ThirtyThirty = document.querySelector(".gridContainer30x30");

const btnTen = document.querySelector(".btn10");

const btnTwenty = document.querySelector(".btn20");

const btnThirty = document.querySelector(".btn30");



const openTen = function() {
    TenTen.classList.remove('hidden');
    TwentyTwenty.classList.add('hidden');
    ThirtyThirty.classList.add('hidden');
};

const openTwenty = function() {
    TenTen.classList.add('hidden');
    TwentyTwenty.classList.remove('hidden');
    ThirtyThirty.classList.add('hidden');
};

const openThirty = function() {
    TenTen.classList.add('hidden');
    TwentyTwenty.classList.add('hidden');
    ThirtyThirty.classList.remove('hidden');
};



btnTen.addEventListener('click', openTen);
    
btnTwenty.addEventListener('click', openTwenty);

btnThirty.addEventListener('click', openThirty);



