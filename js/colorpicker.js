const backgroundColor = document.getElementById("background-color");
const digitColor = document.getElementById("digit-color");
const markerColor = document.getElementById("marker-color");

backgroundColor.addEventListener("input", () => {
    document.body.style.backgroundColor = backgroundColor.value;
})

digitColor.addEventListener("input", () => {
    var digits = document.getElementsByClassName("digit");

    for (var i = 0; i < digits.length; i++) {
        digits[i].style.backgroundColor = digitColor.value;
    }
})

markerColor.addEventListener("input", () => {
    var markers = document.getElementsByClassName("marker");

    for (var i = 0; i < markers.length; i++) {
        markers[i].style.backgroundColor = markerColor.value;
    }
})