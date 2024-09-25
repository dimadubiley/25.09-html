let a = parseInt(prompt("Введите первое число: "));
let b = parseInt(prompt("Введите второе число: "));


if (a % 2 === 0 && b % 2 === 0)
{
    alert("Оба чётные, произведение: " + (a * b));
}
else if (a % 2 !== 0 && b % 2 !== 0)
    {
    alert("Оба нечётные, сумма: " + (a + b));
}
else if (a % 2 === 0)
{
    alert("Нечётное: " + b);
} 
else
{
    alert("Нечётное: " + a);
}
