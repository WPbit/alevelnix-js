// 1.Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств,
// иначе false.
/**
 *
 * @param obj
 * @returns {boolean}
 */
/*
function isEmpty(obj)
{
    let key;
    for (key in obj) {
        count++;
        if (count > 0) return false;
    }
    return true;
}
let users = {};
let count = 0;
console.log(isEmpty(users));
*/

// 2. Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства
// объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует
// напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.
/**
 *
 * @param obj
 */
/*
function multiplyNumeric(obj)
{
    for (key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}
let firstTripTaxiPrice = {
    bolt: 30,
    yandex: 40,
    spaceX: 'free',
}
multiplyNumeric(firstTripTaxiPrice);
console.log(firstTripTaxiPrice);
*/

// 3. Ввод числового значения
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения
// до тех пор, пока посетитель его не введёт.
// функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую
// строку или нажав «Отмена». В этом случае функция должна вернуть null.
/**
 *
 * @returns {string|boolean}
 */
/*
function readNumber()
{
    while (true) {
        let num = prompt('Введите число');
        if (num === null || num === '') {
            return false;
        } else if (!isNaN(num)) {
            return num;
        }
    }
}
let res = readNumber();
alert((res !== false) ? `Вы ввели число: ${res}` : 'Действие отменено или Пустая строка');
*/

// 4. Случайное число от min до max
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до
// 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с
// плавающей точкой от min до max (но не включая max).
/**
 *
 * @param min
 * @param max
 * @returns {number|*}
 */
/*
function random(min, max)
{
    let randNum = Math.random() * max;
    return randNum < max ? randNum : randNum + min;
}
console.log(random(0, 5));
*/

// 5. Случайное целое число от min до max
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое
// (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
/**
 *
 * @param min
 * @param max
 * @returns {number|*}
 */
/*
function randomInteger(min, max)
{
    let randNum = Math.round(Math.random() * max);
    return randNum < max ? randNum : randNum + min;
}
console.log(randomInteger(0, 5));
*/

// 6. Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Например: ucFirst("вася") == "Вася";
/**
 *
 * @param str
 * @returns {string}
 */
/*
function ucFirst(str)
{
    let strLen = str.length;
    let newStr = str[0].toUpperCase();
    for (let i = 1; i < strLen; i++) {
        newStr += str[i];
    }
    return newStr;
}
console.log(ucFirst('вася'));
*/

// 7. Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или
// 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру
/**
 *
 * @param str
 * @returns {boolean}
 */
/*
function checkSpam(str)
{
    let newStr = str.toLowerCase();
    if (newStr.includes('viagra') || newStr.includes('xxx')) {
        return true;
    } else {
        return false;
    }
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));
*/

// 8. Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если
// она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна
// maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо,
// если необходимо, усечённая строка.
/**
 *
 * @param str
 * @param maxlength
 * @returns {string|*}
 */
/*
function truncate(str, maxlength)
{
    if (str.length <= maxlength) {
        return str;
    } else {
        return str.slice(0, maxlength) + '...';
    }
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
*/

// 9. Выделить число
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять
// числовое значение и возвращать его.
/**
 *
 * @param str
 * @returns {number}
 */
/*
function extractCurrencyValue(str)
{
    return +str.slice(1);
}
alert(extractCurrencyValue('$120'));
*/

// 10. Сумма введённых чисел
// Напишите функцию sumInput(), которая:
// - Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// - Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// - Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
/**
 *
 * @returns {number}
 */
/*
function sumInput()
{
    let numArr = [0];
    let numSum = 0;
    let num = 0;
    while (true) {
        num = prompt('Введите число');
        if (num === null || num === '' || isNaN(num)) {
            let arrLen = numArr.length;
            for (let i = 0; i < arrLen; i++) {
                numSum += numArr[i];
            }
            return numSum;
        } else if (!isNaN(num)) {
            numArr.push(+num);
        }
    }
}
alert(`Сумма чисел в массиве: ${sumInput()}`);
*/

// 11. Подмассив наибольшей суммы
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Например:
// getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
/**
 *
 * @param arr
 * @returns {*|number|number}
 */
/*
function getMaxSubSum(arr) {
    let arrLen = arr.length;
    let maxSum = arr[0];
    let tmpMaxSum = 0;
    for (let i = 0; i < arrLen; i++) {
        tmpMaxSum = arr[i];
        for (let j = i + 1; j < arrLen; j++) {
            if ((tmpMaxSum += arr[j]) > maxSum) {
                maxSum = tmpMaxSum;
            } else if ((j + 1) === arrLen && (arr[j]) > maxSum) {
                maxSum = arr[j];
            }
        }
    }
    return maxSum > 0 ? maxSum : 0;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));
*/

// 12. Обязателен ли "else"?
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его
// результат:
/*
function checkAge(age)
{
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}
*/
// Будет ли эта функция работать как-то иначе, если убрать else?
// Ответ: Функция отработает также без изменений
/*
function checkAge(age)
{
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}
*/
// Есть ли хоть одно отличие в поведении этого варианта?
// Ответ: Думаю отличий нет, код выполняется построчно: сначала выполнится проверка условия и
// если оно вернет true сработает return в теле условия и функция вернет true, соответственно далее код не выполнится.
// Если условие вернет false, то следующий код, который отработает - return confirm

// 13. Перепишите функцию, используя оператор '?' или '||'
/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}
*/
// let checkAge = (age) => (age > 18) ? true : confirm('Родители разрешили?');
// let checkAge = (age) => (age > 18) || confirm('Родители разрешили?');
// console.log(checkAge(17));

// 14. Функция min(a, b)
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
/*
let min = (a, b) => a > b ? b : a;
console.log(min(3, 5));
*/

// 15. Функция pow(x,n)
// создана доп. страница pow.html и pow.js

// 16. Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:
/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);
*/
/*
let ask = (question, yes, no) => confirm(question) ? yes(): no();
ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);
*/

// 17. Робинзон Крузо
// Ваш месячный доход - 3333 попугая. Вы хотите купить пальму за 8000
// попугаев. Вычислите, за какой промежуток времени вы насобираете на
// пальму, при условии что ваши ежемесячные расходы составляют 1750
// попугаев.
/*
let salary = 3333;
let month = 1;
let spendPerMonth = 1750;
function palmTree(price)
{
    let sum = salary - spendPerMonth;
    let sumForPalm = sum;
    while (sumForPalm < price) {
        sumForPalm += sum;
        month++;
    }
    return month;
}
console.log(palmTree(8000));
*/

// 18. Вопросы пользователю
// 1. Спросить у пользователя 10 чисел
// 2. Если число
// - положительное —> ничего не делать
// - отрицательная —> получить их сумму
// 3. Вывести сумму отрицательных чисел, которые ввел пользователь
// ВАЖНО: по условиям задачи в вашем коде должен быть только 1 prompt и
// только 1 цикл for
/*
let num;
let sum = 0;
for (let i = 0; i < 10; i++) {
    num = prompt(`Введите число № ${i+1}`);
    if (+num < 0) {
        sum += +num;
    } else if (num == null) {
        break;
    }
}
alert(`Сумма отрицательных чисел: ${sum}`);
*/

// 19. Скопирован ли массив?
// Ответ: массив как и объект копируются по ссылке
// Что выведет следующий код?
/*
let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
// что в fruits?
alert( fruits.length ); // Вывод будет: 4
*/

// 20. Операции с массивами
// Давайте произведём 5 операций с массивом.
// - Создайте массив styles с элементами «Джаз» и «Блюз».
// - Добавьте «Рок-н-ролл» в конец.
// - Замените значение в середине на «Классика». Ваш код для поиска значения в
// середине должен работать для массивов с любой длиной.
// - Удалите первый элемент массива и покажите его.
// - Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
/*
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
let middle = Math.trunc(styles.length / 2);
styles[middle] = 'Классика';
styles.shift();
styles.unshift('Рэп', 'Регги');

console.log(styles);
*/

// 21. Вызов в контексте массива
// Каков результат? Почему?
/*
let arr = ["a", "b"];
arr.push(function() {
    alert( this );
})
arr[2](); // ? Выведет a,b и функцию как строки (Думал будет какая-нибудь ошибка, выглядит запутанно)
*/
