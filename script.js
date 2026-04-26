// script.js
function calculate() {
    let cost = parseFloat(document.getElementById('ingredients').value);
    let markupPercent = parseFloat(document.getElementById('markup').value);

    if (isNaN(cost) || isNaN(markupPercent)) {
        alert("Введите числа");
        return;
    }

    let price = cost + (cost * markupPercent / 100);
    document.getElementById('finalPrice').innerHTML = price.toFixed(2);
}