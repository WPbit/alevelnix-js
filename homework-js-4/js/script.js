// 1. Дочерние элементы в DOM
// Для страницы task-1.html
// Как получить:
// - Напишите код, который получит элемент <div>?
// - Напишите код, который получит <ul>?
// - Напишите код, который получит второй <li> (с именем Пит)?
/*
let DivElem = document.body.firstElementChild
console.log(DivElem);

let UlElem = document.body.firstElementChild.nextElementSibling;
console.log(UlElem);

let LiElem = document.body.firstElementChild.nextElementSibling.lastElementChild;
console.log(LiElem);
*/

// 2. Выделите ячейки по диагонали
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их,
// используя код:
// в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';
/*
let table = document.querySelector('table');
for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].innerText = (j + 1) + ':' + (i + 1);
        if (j === i) {
            table.rows[i].cells[j].style.backgroundColor = 'red';
        }
    }
}
*/

// 3. Поиск элементов
// Вот документ с таблицей и формой. Как найти?…
// - Таблицу с id="age-table".
// - Все элементы label внутри этой таблицы (их три).
// - Первый td в этой таблице (со словом «Age»).
// - Форму form с именем name="search".
// - Первый input в этой форме.
// - Последний input в этой форме.
// Используйте код файла (task-3.html) и браузерные инструменты разработчика
/*
let ageTable = document.querySelector('#age-table');
let tableLabels = document.querySelectorAll('#age-table label').length; // 3
let tableAge = document.querySelector('#age-table td');
let search = document.querySelector('input[name = search]');
let input1 = document.querySelectorAll('input')[0];
let input2 = document.querySelectorAll('input')[1];
*/

// 4. Очистите элемент
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
// в файле task-4.html

// 5. Создайте список
// Напишите интерфейс для создания списка.
// Для каждого пункта:
// 1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
// 2. Создавайте элемент <li> и добавляйте его к <ul>.
// 3. Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст.
/**
 *
 * @returns {boolean}
 */
/*
function forListInput()
{
    while (true) {
        str = prompt('Введите элемент списка');
        if (str === null || str === '') {
            return false;
        } else {
            dList.innerHTML += `<li></li>`;
            dList.lastElementChild.textContent = str;
        }
    }
}
let dList = document.querySelector('#dynamic-list');
let str;
forListInput();
*/

// 6. Вставьте HTML в список
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
// <ul id="ul">
// <li id="one">1</li>
// <li id="two">4</li>
// </ul>
/*
let list = document.querySelector('#one');
list.innerHTML += '<li>2</li><li>3</li>';
*/

// 7. Создать уведомление
// Напишите функцию showNotification(options), которая создаёт уведомление: <div
// class="notification"> с заданным содержимым. Уведомление должно автоматически
// исчезнуть через 1,5 секунды.
/**
 *
 * @param options
 */
/*
function showNotification(options = {position: 'absolute', padding: 5, top: 0, left: 0})
{
    document.querySelector('header').innerHTML = `<div class="${options['className']}"></div>`;
    let welcomNotification = document. querySelector('.welcome');

    welcomNotification.innerHTML = options['html'];
    welcomNotification.style.position = options['position'];
    welcomNotification.style.backgroundColor = options['background'];
    welcomNotification.style.padding = options['padding'] + 'px';
    welcomNotification.style.top = options['top'] + 'px';
    welcomNotification.style.left = options['left'] + 'px';

    setTimeout(() => welcomNotification.remove(), 1500);
}

let options = {
    position: 'absolute',
    padding: 10,
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    left: 10, // 10px от левого края окна (по умолчанию 0px)
    background: '#dff0d8',
    html: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
};

showNotification(options);
*/
