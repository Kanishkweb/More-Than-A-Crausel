let arrLink = ["1", "2", "3", "$"];

function rightBtnHandler() {
  let l = arrLink.length - 1;
  let copy = arrLink[l]; // store the last link of the array
  arrLink.splice(l, 1); // it delete the last link of the array
  arrLink.splice(0, 0, copy);
}

rightBtnHandler();
console.log(arrLink);
