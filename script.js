"use strict";

const button = document.querySelector(".button");
const colorbox = document.querySelector(".colorbox");
const userinput = document.querySelector(".hex");

button.addEventListener("click", () => {
  if (
    userinput.value.length === 6 &&
    userinput.value.matches("[a-fA-F *\t]+")
  ) {
    colorbox.style.backgroundColor = `#${userinput.value}`;
    userinput.style.borderColor = "";
  } else {
    userinput.style.borderColor = "red";
    alert("Value must be 6 long and between 000000 and FFFFFF");
  }
});
