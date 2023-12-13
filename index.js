/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//get elements
const input = document.getElementById("insert");
const button = document.getElementById("convert-btn");
const feet = document.getElementById("feet");
const gal = document.getElementById("gal");
const pound = document.getElementById("pound");

// button click = converting
button.addEventListener("click", function () {
  //convertation
  let f = Number(input.value) * 3.281;
  let g = Number(input.value) * 0.264;
  let p = Number(input.value) * 2.204;
  //put on page with converted values.
  feet.innerHTML = `${input.value} meters = ${f.toFixed(3)} feet |
     ${input.value} feet = ${(input.value / 3.281).toFixed(3)} meter`;
  gal.innerHTML = `${input.value} liters = ${g.toFixed(3)} gallons |
     ${input.value} gallons = ${(input.value / 0.264).toFixed(3)} liter `;
  pound.innerHTML = `${input.value} kilos = ${p.toFixed(3)} pounds |
     ${input.value} pounds = ${(input.value / 2.204).toFixed(3)} kilogram`;
});
/*  input.value * 3.281 feet >> feet.innerHTML
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound */
