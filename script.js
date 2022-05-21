"use strict";

const button = document.querySelector(".button");
const colorbox = document.querySelector(".colorbox");
const userinput = document.querySelector(".hex");

const notHexa = [
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "Y",
  "Z",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z",
];

button.addEventListener("click", () => {
  const userinputValue = userinput.value;
  const inputChars = userinputValue.split("");
  if (
    userinputValue.length === 6 &&
    !notHexa.some((c) => inputChars.includes(c))
  ) {
    colorbox.style.backgroundColor = `#${userinputValue}`;
    userinput.style.borderColor = "";
  } else {
    userinput.style.borderColor = "red";
    alert(
      "Invalid hex code! Value must be 6 long and between 000000 and FFFFFF"
    );
  }
});
