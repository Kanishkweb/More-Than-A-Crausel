let left = document.getElementById("left");
let right = document.getElementById("right");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let body = document.getElementsByTagName("body");
const containerImg = document.getElementsByClassName("containerImg");
console.log(containerImg);

let arrLink = [
  "https://iili.io/JcKdgGn.jpg",
  "https://iili.io/JcKdvjI.jpg",
  "https://iili.io/JcKd63G.jpg",
  "https://iili.io/JcKdPaf.jpg",
];

// to animate bg image
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("animate-bg");
});

function rightBtnHandler() {
  let l = arrLink.length - 1;
  let copy = arrLink[l]; // store the last link of the array
  arrLink.splice(l, 1); // it delete the last link of the array
  arrLink.splice(0, 0, copy);
  addPulseAnimation(containerImg);
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
  let copy = arrLink[0]; // store the last link of the array
  arrLink.splice(0, 1); // it delete the last link of the array
  arrLink.splice(l, 0, copy);
  addPulseAnimation(containerImg);
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
