// 1 Переменные
let admin;
let name;
name = 'Oleg';
admin = name;
alert(`ВАШЕ ИМЯ: ${admin}`);


// 2 Константы
/**
 *
 * @param bd
 * @returns {number}
 */
function someCode(bd)
{
    return 30;
}
const BIRTHDAY = '18.04.1982'; // Да, рекомендуется использовать заглавные буквы, чтобы отличать константы в коде.
const AGE = someCode(BIRTHDAY); // Здесь также рекомендуется использовать заглавные для констант
console.log(AGE);


// 3 Строки
// Что выведет этот скрипт:
let name = "Ilya";
alert( `hello ${1}` ); // выведет hello 1
alert( `hello ${"name"}` ); // выведет hello name
alert( `hello ${name}` ); // выведет hello Ilya


// 4 Преобразования типов
// Какой результат будет у выражений ниже?
console.log("" + 1 + 0); // результат: 10
console.log("" - 1 + 0); // результат: -1 (думал NuN)
console.log(true + false); // результат: 1
console.log(6 / "3"); // результат: 2
console.log("2" * "3"); // результат: 6
console.log(4 + 5 + "px"); // результат: 9px (думал 45px)
console.log("$" + 4 + 5); // результат: $45
console.log("4" - 2); // результат: 2
console.log("4px" - 2); // результат: NuN
console.log(7 / 0); // результат: infinity
console.log(" -9 " + 5); // результат: -9 5
console.log(" -9 " - 5); // результат: -14
console.log(null + 1); // результат: 1
console.log(undefined + 1); // результат: NuN


// 5 Постфиксная и префиксная формы
// Чему будут равны переменные a, b, c и d в примере ниже?
let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(a); // 2
console.log(b); // 2
console.log(c); // 2
console.log(d); // 1


// 6 Результат присваивания
// Чему будут равны переменные a и x в примере ниже?
let a = 2;
let x = 1 + (a *= 2);
console.log(a); // a = 4
console.log(x); // x = 5


// 7 Операторы сравнения
// Каким будет результат этих выражений?
console.log(5 > 4); // результат: true
console.log("ананас" > "яблоко"); // результат: false
console.log("2" > "12"); // результат: true (думал false)
console.log(undefined == null); // результат: true
console.log(undefined === null); // результат: false
console.log(null == "\n0\n"); // результат: false
console.log(null === +"\n0\n"); // результат: false (думал  NuN)


// 8 Операторы взаимодействия
// Создайте страницу, которая спрашивает имя у пользователя и выводит его.
// Создана страница: task-8-name.html


// 9 Условные операторы
// Выведется ли alert?
if ("0") {
    alert( 'Привет' ); // Выводится, т.к. 0 в кавычках является строкой и она не пустая
}


// 10 Условные операторы
let jsname = prompt('Каково «официальное» название JavaScript?');

alert((jsname == 'ECMAScript') ? 'Верно!' : 'Не знаете? ECMAScript!');



// 11 Покажите знак числа
// Используя конструкцию if..else, напишите код, который получает число через prompt,
// а затем выводит в alert:
let number = prompt('Введите число:');

if (number < 0) {
    alert(-1);
} else if (number > 0) {
    alert(1);
} else {
    alert(0);
}


// 12 ИЛИ
// Что выведет код ниже?
alert( null || 2 || undefined ); // Выведет: 2


// 13 ИЛИ
// Что выведет код ниже?
alert( alert(1) || 2 || alert(3) ); // Выведет: 1, потом 2 (думал Сначало 1, 3 и 2)


// 14 И
// Что выведет код ниже?
alert( 1 && null && 2 ); // Выведет: null (Думал 102)


// 15 И
// Что выведет код ниже?
alert( alert(1) && alert(2) ); // Выведет: 1, потом undefined (Думал 1, потом 2)


// 16 И
// Что выведет код ниже?
alert( null || 2 && 3 || 4 ); // Выведет: 3 (Думал 23)


// 17 Проверка значения из диапазона
// Напишите условие if для проверки, что переменная age находится в диапазоне между
// 14 и 90 включительно.
let age = 100;
if (age >= 14 && age <= 90) {
    alert('Число находится в диапазоне между 14 и 90');
} else {
    alert('Чилсо не входит в диапозон между 14 и 90')
}


// 18 Проверка значения вне диапазона
// Напишите условие if для проверки, что значение переменной age НЕ находится в
// диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого
// оператора.
let age = 32;

if (!(age >= 14) || !(age <= 90)) {
    alert('Число НЕ находится в диапазоне 14 и 90');
} else  {
    alert('Число находится в диапазоне 14 и 90');
}

if (age <= 14 || age >= 90) {
    alert('Число НЕ находится в диапазоне 14 и 90');
} else  {
    alert('Число находится в диапазоне 14 и 90');
}


// 19 If
// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?
if (-1 || 0) alert( 'first' ); // Выведется first, а в if будет true (т.к. -1(true) и оператор ИЛИ)
if (-1 && 0) alert( 'second' ); // Не выведется, а в if будет false (т.к. -1(true) и 0(false) и оператор И)
// Выведется third, а в if будет true (т.к. сначала выполнится по приоретету -1 && 1(true), а потом || ИЛИ)
if (null || -1 && 1) alert( 'third' );


// 20 Проверка логина
let user = prompt('Ваш Login:');
let pass = null;

if (user == 'Админ') {
    pass = prompt('Ваш Пароль:');
    if (pass == 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass == null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (user == null) {
    alert('Отменено');
} else {
    alert('Я Вас не знаю');
}


// 21 Переписать условия "if" на "switch"
let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
    default:
        alert( 'Не корректное число' );
}


// 22
// Дано целое число. Если оно является положительным, то прибавить к нему 1; в
// противном случае не изменять его. Вывести полученное число.
let num = 12;
alert(num > 0 ? ++num : num);


// 23
// Дано целое число. Если оно является положительным, то прибавить к нему 1; в
// противном случае вычесть из него 2. Вывести полученное число.
let num = -4;
alert(num > 0 ? ++num : num - 2);


// 24
// Дано целое число. Если оно является положительным, то прибавить к нему 1; если
// отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10. Вывести
// полученное число.
let num = 5;
if (num > 0) {
    alert(++num);
} else if (num === 0) {
    alert(num = 10);
} else {
    alert(num - 2);
}


// 25
// Даны три целых числа. Найти количество положительных чисел в исходном наборе.
let count = 0;
let num1 = 5;
let num2 = -5;
let num3 = 5;

if (num1 > 0) {
    ++count;
}
if (num2 > 0) {
    ++count;
}
if (num3 > 0) {
    ++count;
}
alert(`Положительных чисел: ${count}`);


// 26
// Даны три целых числа. Найти количество положительных и количество
// отрицательных чисел в исходном наборе.
let count1 = 0;
let count2 = 0;
let num1 = 5;
let num2 = -5;
let num3 = 5;

if (num1 > 0) {
    ++count1;
} else {
    ++count2;
}
if (num2 > 0) {
    ++count1;
} else {
    ++count2;
}
if (num3 > 0) {
    ++count1;
} else {
    ++count2;
}
alert(`Положительных чисел: ${count1}, Отрицательных чисел: ${count2}`);


// 27
// Даны два числа. Вывести большее из них.
let num1 = 3;
let num2 = 22;
alert(num1 > num2 ? num1 : num2);


// 28
// Даны два числа. Вывести вначале большее, а затем меньшее из них.
let num1 = 34;
let num2 = 22;
if (num1 > num2) {
    alert(num1);
    alert(num2);
} else {
    alert(num2);
    alert(num1);
}


// 29
// Даны две переменные вещественного типа: A, B. Перераспределить
// значения данных переменных так, чтобы в A оказалось меньшее из значений, а в B —
// большее. Вывести новые значения переменных A и B.
let A = 85.88;
let B = 54;
if (A > B) {
    let tmp = B;
    B = A;
    A = tmp;
    alert(`A = ${A}, B = ${B}`);
} else {
    alert(`A = ${A}, B = ${B}`);
}


// 30
// Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить
// каждой переменной сумму этих значений, а если равны, то присвоить переменным
// нулевые значения. Вывести новые значения переменных A и B.
let A = 43;
let B = 78;
if (A === B) {
    A = B = 0;
    alert(`A = ${A}, B = ${B}`);
} else {
    A = B = A+B;
    alert(`A = ${A}, B = ${B}`);
}


// 31
// Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить
// каждой переменной большее из этих значений, а если равны, то присвоить
// переменным нулевые значения. Вывести новые значения переменных A и B.
let A = 21;
let B = 77;
if (A !== B) {
    if (A > B) {
        alert(`A = ${A}, B = ${B = A}`);
    } else {
        alert(`A = ${A = B}, B = ${B}`);
    }
} else {
    A = B = 0;
    alert(`A = ${A}, B = ${B}`);
}


// 32
// Даны три числа. Найти наименьшее из них.
let num1 = 28;
let num2 = 88;
let num3 = 27;
if (num1 < num2 && num1 < num3) {
    console.log(num1);
} else if (num2 < num1 && num2 < num3) {
    console.log(num2);
} else if (num3 < num1 && num3 < num2) {
    console.log(num3);
}


// 33
// Даны три числа. Найти среднее из них (то есть число, расположенное между
// наименьшим и наибольшим).
let num1 = 21;
let num2 = 42;
let num3 = 12;
if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
    console.log(num1);
} else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
    console.log(num2);
} else if ((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)) {
    console.log(num3);
}


// 34
// Даны три числа. Вывести вначале наименьшее, а затем наибольшее из данных чисел.
let num1 = 21;
let num2 = 42;
let num3 = 12;
let smallNum = null;
let bigNum = null;

if (num1 < num2 && num1 < num3) {
    smallNum = num1;
} else if (num2 < num1 && num2 < num3) {
    smallNum = num2;
} else if (num3 < num2 && num3 < num1) {
    smallNum = num3;
}
alert(`Наименьшее: ${smallNum}`);

if (num1 > num2 && num1 > num3) {
    bigNum = num1;
} else if (num2 > num1 && num2 > num3) {
    bigNum = num2;
} else if (num3 > num2 && num3 > num1) {
    bigNum = num3;
}
alert(`Наибольшее: ${bigNum}`);


// 35
// Даны три числа. Найти сумму двух наибольших из них.
let num1 = 54;
let num2 = 42;
let num3 = 21;
if (num1 < num2 && num1 < num3) {
    console.log(num2 + num3);
} else if (num2 < num1 && num2 < num3) {
    console.log(num1 + num3);
} else if (num3 < num2 && num3 < num1) {
    console.log(num1 + num2);
}


// 36
// Даны три целых числа, одно из которых отлично от двух других, равных между собой.
// Определить порядковый номер числа, отличного от остальных.
let num1 = 54;
let num2 = 42;
let num3 = 54;
if (num1 !== num2 && num1 !== num3) {
    console.log(1);
} else if (num2 !== num1 && num2 !== num3) {
    console.log(2);
} else if (num3 !== num1 && num3 !== num2) {
    console.log(3);
}
