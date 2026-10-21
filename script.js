function getRandomInteger() {
    return Math.floor(Math.random() * 256);
}

function getRandomColor() {
    return `rgb(${getRandomInteger()}, ${getRandomInteger()}, ${getRandomInteger()})`;
}

let text = document.getElementById("text");
let body = document.getElementById("body");

text.style.color = getRandomColor()
body.style.backgroundColor = getRandomColor()
