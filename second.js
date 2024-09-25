let x1 = parseInt(prompt("Введите x1:"));
let y1 = parseInt(prompt("Введите y1:"));

let x2 = parseInt(prompt("Введите x2:"));
let y2 = parseInt(prompt("Введите y2:"));

let x3 = parseInt(prompt("Введите x3:"));
let y3 = parseInt(prompt("Введите y3:"));

let x4 = parseInt(prompt("Введите x4:"));
let y4 = parseInt(prompt("Введите y4:"));


function dist(x1, y1, x2, y2)
{
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
}

let d1 = dist(x1, y1, x2, y2);
let d2 = dist(x2, y2, x3, y3);

let d3 = dist(x3, y3, x4, y4);
let d4 = dist(x4, y4, x1, y1);

let di1 = dist(x1, y1, x3, y3);
let di2 = dist(x2, y2, x4, y4);


if (d1 === d3 && d2 === d4 && di1 === di2)
{
    alert("Прямоугольник");
}
else
{
    alert("Не прямоугольник");
}
