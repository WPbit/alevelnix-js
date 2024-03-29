// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря,
// умножает x на себя n раз и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// Запустить демо
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е.
// целые от 1 и выше.
function pow(x,n)
{
    return alert(`Число ${x} в степени ${n} = ${x ** n}`);
}

function startDemo()
{
    let numX = +prompt(`Введите число`);
    let numN = +prompt(`Введите степень`);

    if (numX / Math.trunc(numX) > 1) {
        alert(`Число должно быть натуральным`);
    } else if (numN / Math.trunc(numN) > 1) {
        alert(`Число степени должно быть натуральным`);
    } else if (numX > 1 && numN > 1) {
        pow(numX, numN);
    } else {
        alert(`Ошибка. Некорректные данные`);
    }
}
