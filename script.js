"use strict";

const button = document.querySelector(".button");
const colorbox = document.querySelector(".colorbox");
const userinput = document.getElementById(".hexa");

button.addEventListener("click", () => {
  colorbox.style.backgroundColor = `#${hexa.value}`;
  console.log(hexa.value);
});
