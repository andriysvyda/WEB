let centimeters = prompt("Сантиметри :");
let inches = (centimeters) => {
    return centimeters * 0.393700787;
}
alert(`Дюйми: ${ inches(centimeters).toFixed(2)}`);