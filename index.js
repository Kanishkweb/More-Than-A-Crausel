let left = document.getElementById("left");
let right = document.getElementById("right");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let para = document.getElementById("para");
let heading = document.getElementById("heading");
let body = document.getElementsByTagName("body");
let textAni = document.getElementsByClassName("text");
const containerImg = document.getElementsByClassName("containerImg");
console.log(containerImg);
console.log(textAni);

let arrLink = [
  "https://iili.io/Jl9hACJ.md.jpg",
  "https://iili.io/Jl9hTQa.md.jpg",
  "https://iili.io/Jl9hREv.md.jpg",
  "https://iili.io/Jl9h54R.md.jpg",
];
let arrH = [
  "You Mean the World to Me 🌎❤️",
  "You're My Constant Source of Happiness 😄🌈",
  "Your Love Illuminates My World 🌟💖",
  "You're the Missing Piece of My Puzzle 🧩💑",
];

let arrP = [
  "From the moment we met, my life has been filled with joy and warmth. Your presence is like a ray of sunshine, brightening even the darkest days. I cherish every moment we spend together and am grateful for the love and laughter you bring into my life. 😊",
  "In the tapestry of my life, you're the vibrant thread that adds color to every moment. Your laughter is my favorite melody, and your presence is a comforting embrace. Thank you for being my source of joy, and for making every day extraordinary. 🌟",
  "In the canvas of my heart, you paint the most beautiful pictures. Your love is the guiding star that lights up my darkest nights. I am grateful for the warmth you bring into my life and the way you make every moment special. With you, every day is a celebration. 🎉",
  "Life was like a puzzle missing a crucial piece until I met you. Your presence completes me, and every day with you feels like a perfect fit. Your kindness, understanding, and love make my world whole. Thank you for being the missing piece I didn't know I needed. ❤️",
];

// to animate bg image
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("animate-bg");
});

function rightBtnHandler() {
  let l = arrLink.length - 1;
  let lP = arrP.length - 1;
  let lH = arrH.length - 1;
  let copy = arrLink[l]; // store the last link of the array
  let copyP = arrP[l]; // store the last link of the array
  let copyH = arrH[l]; // store the last link of the array
  arrLink.splice(l, 1); // it delete the last link of the array
  arrP.splice(lP, 1);
  arrH.splice(lH, 1);
  arrLink.splice(0, 0, copy);
  arrP.splice(0, 0, copyP);
  arrH.splice(0, 0, copyH);
  addTextAnimation(textAni);
  addPulseAnimation(containerImg);
  para.innerText = `${arrP[0]}`;
  heading.innerText = `${arrH[0]}`;
  if (body) {
    body[0].style.backgroundImage = `url(${arrLink[0]})`;
  }
  if (img1) {
    img1.style.backgroundImage = `url(${arrLink[1]})`;
  }
  if (img2) {
    img2.style.backgroundImage = `url(${arrLink[2]})`;
  }
  if (img3) {
    img3.style.backgroundImage = `url(${arrLink[3]})`;
  }
}

function leftBtnHandler() {
  let l = arrLink.length - 1;
  let lP = arrP.length - 1;
  let lH = arrH.length - 1;
  let copy = arrLink[0]; // store the first element of the array
  let copyP = arrP[0];
  let copyH = arrH[0];
  arrLink.splice(0, 1); // it delete the first element of the array
  arrP.splice(0, 1);
  arrH.splice(0, 1);
  arrLink.splice(l, 0, copy);
  arrP.splice(lP, 0, copyP);
  arrH.splice(lH, 0, copyH);
  addTextAnimation(textAni);
  addPulseAnimation(containerImg);
  para.innerText = `${arrP[0]}`;
  heading.innerText = `${arrH[0]}`;
  if (body) {
    body[0].style.backgroundImage = `url(${arrLink[0]})`;
  }
  if (img1) {
    img1.style.backgroundImage = `url(${arrLink[1]})`;
  }
  if (img2) {
    img2.style.backgroundImage = `url(${arrLink[2]})`;
  }
  if (img3) {
    img3.style.backgroundImage = `url(${arrLink[3]})`;
  }
}

function addPulseAnimation(element) {
  if (element) {
    element[0].classList.add("pulse");
    element[1].classList.add("pulse");
    element[2].classList.add("pulse");

    // Remove pulse class after 1 second
    setTimeout(() => {
      element[0].classList.remove("pulse");
      element[1].classList.remove("pulse");
      element[2].classList.remove("pulse");
    }, 1000);
  }
}
function addTextAnimation(element) {
  if (element) {
    console.log(element);
    element[0].classList.add("flip");
    // Remove pulse class after 1 second
    setTimeout(() => {
      element[0].classList.remove("flip");
    }, 1000);
  }
}
