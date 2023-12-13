const input = document.getElementById("insert");
const button = document.getElementById("convert-btn");
const resultsContainer = document.querySelector(".convert");

button.addEventListener("click", function() {
    let inputValue = Number(input.value);
    let resultsHTML = `
        <div class="amaro">
            <h3 class="title">Length (Meter/Feet)</h3>
            <p class="result">${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet |
            ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meter</p>
        </div>
        <div class="amaro">
            <h3 class="title">Volume (Liters/Gallons)</h3>
            <p class="result">${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons |
            ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liter</p>
        </div>
        <div class="amaro">
            <h3 class="title">Mass (Kilograms/Pounds)</h3>
            <p class="result">${inputValue} kilos = ${(inputValue * 2.204).toFixed(3)} pounds |
            ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilogram</p>
        </div>
    `;

    resultsContainer.innerHTML = resultsHTML;
});
