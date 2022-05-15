let title = prompt("Заголовок: ");
let image = prompt("Посилання на зображення: ");
let passing = prompt("Посилання для переходу: ");
function banner(title, image, passing){
    document.write(`<h1>${title}</h1>`);
    document.write(`<a href='${passing}'><img src='${image}'></img></a>`);
}

banner(title, image, passing)