/* Вывести число кратное 3 без остатка по его индексу.*/
// const num1 = [1, 2, 4, 10, 11, 50, 3, 5, 9, 7, 10];
// for (let i = 3; i < num1.length; i = i + 3){
// for (let i = 0; i < num1.length; i++)
// if (i % 3 === 0) {
// console.log(num1[i]);
// }
// };

/* Нахождение суммы элементов массива. */
// const num2 = [1, 2, 3, 4, 6, 8, 45, -9, 5, -3];
// let sum = 0;
// for (let i = 0; i < num2.length; i++){
// 	sum += num2[i];
// };
// console.log(sum);

/* Найти сумму из всех положительных элементов массива. */
// const arr = [1, 2, -4, -6, 5, -7, 6, 44, 98, -68];
// let sum1 = 0;
// for (let i = 0; i < arr.length; i++){
// 	if (arr[i] % 2 === 0) {
// 		sum1 += arr[i];
// 	}
// };
// console.log(sum1);

/* Нати сумму только тех элементов которые равны с индексом по значению. */
// let sum2 = 0;
// const arr1 = [0, 4, 2, 2, 4, 5, 7, 7, 3, 9];
// for (let i = 0; i < arr1.length; i++){
// 	if (i === arr1[i]) {
// 		sum2 += arr1[i];
// 	}
// }
// console.log(sum2);

/* Найти сумму чётных и нечётных чисел. Вычесть из большей сумму меньшую. */

/* В программе обьявленна переменная list которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.*/
// let sum3 = 0;
// const list = [1, 5, 7, 8, 9, 4];
// for (let i = 0; i < list.length; i++){
// 	sum3 += list[i];
// };
// console.log(sum3);

/* В программе обявлена переменая list представляющая массив положительных и отрицательных значений. Используя цикл выведите сумму положительных чисел.*/
// let result = 0;
// const list1 = [1, 3, 5, -6, 8, -9, -4, 2];
// for (let i = 0; i < list1.length; i++){
// 	if (list1[i] > 0) {
// 		result += list1[i];
// 	}
// };
// console.log(result);

// Создаём массив из обьектов.
//    const products = [
// 	{
// 		title: "Nike",
// 		price: 300,
// 		type: "shoe",
// 	},
// 	{
// 		title: "Pume",
// 		price: 600,
// 		type: "shoe",
// 	},
// 	{
// 		title: "Chanel",
// 		price: 500,
// 		type: "bag",
// 	},
// 	{
// 		title: "BMW",
// 		price: 7000,
// 		type: "car",
// 	},
// ];
/* Добавляем в пустой массив только те обьекты которые дешевле 1000. */
// const array1 = [];
// for (let i = 0; i < products.length; i++){
// 	if (products[i].price <= 1000) {
// 		array1.push(products[i]);
// 	}
// };
// console.log(array1);

/* Выводим строку в консоль. */
/*   "Nike's price is 300 and type is shoe" */
/*  Пишем цикл для этого массива. */

/* Найти общую сумму всех товаров с массива.*/
// let sumOf = 0;
// for (let i = 0; i < products.length; i++){
// 	sumOf += products[i].price;
// };
// console.log(sumOf);

/* вывести в консоль название товаров котрые дороже 500.*/
// for (let i = 0; i < products.length; i++){
// 	if (products[i].price >= 500) {
// 		console.log(products[i].title);
// 	}
// };

/* Вывести  вконсоль только те наименования продуктов у которых тип обувь. */
// for (let i = 0; i < products.length; i++){
// 	if (products[i].type === "shoe"){
// 		console.log(products[i].title);
// 	}
// };

/* Нужно вывести наименование товаров и их цену, но цены со скидкой 10%.*/
// for (let i = 0; i < products.length; i++){
// 	const{title, price} = products[i];
// 	console.log(`${title}, ${price * 0.9}`);
// };

/* Написать функцию котрая в качестве аргумента получает 2 числа и возвращает массив чисел со значениями от меньшего числа к большему.*/
// let newNum = [];
// function magicOf(num1, num2) {
// 	if (num1 < num2) {
// 		for (let i = num1; i <= num2; i++){
// 			newNum.push(i);
// 		}
// 	} else {
// 		for (let i = num2; i <= num1; i++){
// 			newNum.push(i);
// 		}
// 	} console.log(newNum);
// };
// magicOf(28, 4);

/* Функция которая в качестве аргумента получает массив из чисел и возвращает обьект со свойствами min max avg с соответствующими значениями по массиву.*/
// const arr2 = [3, 5, 6, 7, 5, 9, 2, -5, 4, -9];
// function magic(arr2) {
// 	let min = arr2[0];
// 	let max = arr2[0];
// 	let avg = 0;
// 	for (let i = 0; i < arr2.length; i++){
// 		avg += arr2[i];
// 		if (min > arr2[i]) {
// 			min = arr2[i];
// 		} if (max < arr2[i]) {
// 			max = arr2[i];
// 		}
// 	}
// 	avg = avg / arr2.length;
// 	return { min, max, avg };
// };
// console.log(magic(arr2));

/* Дано слово hello. Создайте цикл который перевернёт это слово и будет читать его наоборот. */
// const word = "Hello";
// let newWord = "";
// for (let i = word.length - 1; i >= 0; i--){
// 	newWord += word[i];
// };
// console.log(newWord);

/* Напишите функцию которая в качестве аргумента получает слово и определяет является ли оно ПОЛИНДРОНОМ. Это слово которое читается одинаково в обе стороны. */
// function magicOfWord(word) {
// 	let returnWord = "";
// 	for (let i = word.length - 1; i >= 0; i--){
// 		returnWord += word[i];
// 	}
// 	return returnWord === word;
// };
// console.log(magicOfWord("Dog"));

/* Используя цикл посчитайте сумму чисел массива до первого булиевого значения. Результат выведите в консоль.*/
// const array2 = [1, 2, 3, 8, 9, true, false, 5, 1, "false"];
// let sume = 0;
// for (let i = 0; i < array2.length; i++){
// 	if (typeof array2[i] === 'boolean') {
// 		break;
// 	}
// 	sume += array2[i];
// };
// console.log(sume);

/* Написать цикл который выводит для каждого товара строку по маске  * Название... Цена со скидкой. *  */
// const array3 = [
// 	{
// 		Id: 1,
// 		title: "bicycle",
// 		price: 45000,
// 		discount: 10
// 	},
// 	{
// 		Id: 2,
// 		title: "roller-skates",
// 		price: 15000,
// 		discount: 5
// 	},
// 	{
// 		Id: 3,
// 		title: "Kick scooter",
// 		price: 10000,
// 		discount: 30
// 	},
// 	{
// 		Id: 4,
// 		title: "skis",
// 		price: 25000,
// 		discount: 20
// 	},
// 	{
// 		Id: 5,
// 		title: "skate",
// 		price: 10000,
// 		discount: 10
// 	},
// ];
// for (let i = 0; i < array3.length; i++){
// 	const { title, price, discount } = array3[i];
// 	const discountOf = ((price / 100) * discount);
// 	console.log(`${title} price with discount is ${discountOf}`);
// };

/* Написать цикл, который выводит только четные числа. */
// const num = [1, 5, 8, 4, 7, 6, 2, 6, 4, 8];
// let sum4 = 0;
// for (let i = 0; i < num.length; i++){
// 	if (num[i] % 2 === 0) {
// 		sum4 += num[i];
// 	}
// };
// console.log(sum4);

/* Найти сумму положительных чисел. */
// const nums = [1, 2, 5, -5, -4, 1, 2, -8];
// let sum5 = 0;
// for (let i = 0; i < nums.length; i++){
// 	if (nums[i] > 0) {
// 		sum4 += nums[i];
// 	}
// };
// console.log(sum4);

/* Найти сумму чисел, чей индекс равен значению элемента. */
// const num5 = [0, 1, 3, 5, 4, 6, 5];
// let sum6 = 0;
// for (let i = 0; i < num5.length; i++) {
// 	if (i === num5[i]) {
// 		sum6 += num5[i];
// 	}
// };
// console.log(sum6);

/* Найти минимальное и максимальное числа в массиве.*/
// const arr5 = [1, 2, 3, 5, 8, 9, 52, -9, -6, 10];
// let maxOf = -Infinity;
// let minOf = Infinity;
// for (let i = 0; i < arr5.length; i++){
// 	const arr5Element = arr5[i];

// 	if (arr5Element > maxOf) {
// 		 maxOf = arr5Element;
// 	}

// 	if (arr5Element < minOf) {
// 		minOf = arr5Element;
// 	}
// };
// console.log(`max`, maxOf, `min`, minOf);

/* Нужно найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.*/
// const num = [1, 2, 3, 5, 10, 46, 11, 20];
// let sum = 0;
// let result = 0;
// for (let i = 0; i < num.length; i++) {
// 	if (num[i] % 2 === 0) {
// 		sum += num[i];
// 	}
// 	if (num[i] < 0) {
// 		result += sum[i];
// 	}
// };
// 	if (sum > result) {
// 		console.log(sum - result);
// 	} else {
// 		console.log(result - sum);
// 	}

/* Перевернуть массив чисел */
// const num = [1, 2, 3, 4, 5];
// let arr = [];
// for (let i = num.length - 1; i >= 0; i--){
// 	arr.push(num[i]);
// };
// console.log(arr);

/* Выведите имя и возраст каждого человека в массиве объектов в виде строки. */
// const arr = [
// 	{
// 		name: 'Alice',
// 		age: 30
// 	},
// 	{
// 		name: 'Bob',
// 		age: 25
// 	},
// 	{
// 		name: 'Charlie',
// 		age: 35
// 	},
// ];
// for (let i = 0; i < arr.length; i++){
// 	console.log(`Name is: ${arr[i].name} age is: ${arr[i].age}`);
// };

/* Создайте массив объектов, содержащий квадраты чисел от 1 до 10.Пример первого объекта {number: 1, square: 1}
 {number: 2, square: 4} */
// const arr = [];
// for (let i = 1; i < 11; i++){
// 	arr.push({ number: i, square: i ** 2 });
// };
// console.log(arr);

// Найти общую сумму цен всех товаров из следующего массива.
// const array = [
// 	{ name: 'Laptop', price: 1200 },
// 	{ name: 'Mouse', price: 20 },
// 	{ name: 'Keyboard', price: 50 },
// 	{ name: 'Monitor', price: 300 },
// ];
// let sum = 0;
// for (let i = 0; i < array.length; i++){
// 	sum += array[i].price;
// };
// console.log(sum);

/* На основе массива продуктов создайте новый массив, где будут только продукты дороже 100. */

// const array = [
// 	{ name: 'Laptop', price: 1200 },
// 	{ name: 'Mouse', price: 20 },
// 	{ name: 'Keyboard', price: 50 },
// 	{ name: 'Monitor', price: 300 },
// ];
// const arr = [];
// for (let i = 0; i < array.length; i++){
// 	if (array[i].price > 100) {
// 		arr.push(array[i]);
// 	}
// };
// console.log(arr);

/* Создать функцию power, которая принимает 2 числа как аргумент. Первое число – основание, второе число – степень.Функцию возвращает результат арифметического действия. Пример вызова функции:  power(2,3) => 8
 Не использовать **.  */

// function magicOf(num_1, num_2) {
// 	let total = 1;
// 	for (let i = 0; i < num_2; i++){
// 		total *= num_1;
// 	}
// 	return total;
// };
// console.log(magicOf(2, 8));

/* 1)Найдите общие элементы(в виде массива) между двумя массивами.
 Пример: [1,2,3], [4,2,1] => [1,2] */

// const num = [1, 2, 3, 4, 6];
// const number = [1, 2, 4, 8, 9];
// const newArr = [];
// for (let i = 0; i < num.length; i++){
// 	for (let j = 0; j < number.length; j++){
// 		if (num[i] == number[j]) {
// 			newArr.push(num[i]);
// }
// 	};
// };
// console.log(newArr);

/* 2)Создать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа. */
// function magic(num) {
// 	const arr = [];
// 	for (let i = 0; i <= num; i++){
// 			arr.push(i);
// 	} return arr;
// };
// console.log(magic(8));

/* 3)Предыдущее задание делаем с объектом. (как ключ передаем i). */
// function magic(num) {
// 	let arr = [];
// 	for (let i = 0; i <= num; i++){
// 		let newKey = { key: i };
// 		arr.key = newKey;
// 		arr.push(newKey);
// 	}
// 	return arr;
// };
// console.log(magic(8));

/* 4)Описать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”]. */
// function magic(string, num) {
// 	let arr = [];
// 	for (let i = 0; i <= num; i ++){
// 		let word = (string + "");
// 		arr.push(word);
// 	}
// 	return arr;
// };
// console.log(magic("dog", 6));

/* 5)Создайте функцию, которая как аргумент принимает одну строку.Функция возвращает это слово в развернутом виде. Пример: “cat” => “tac” */
// function magic(string) {
// 	let word = "";
// 	for (let i = string.length - 1; i >= 0; i--){
// 		word += string[i];
// 	} return word;
// };
// console.log(magic("bar"));

/* 6)Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false. */
// function magic(string) {
// 	let word = "";
// 	for (let i = string.length - 1; i >= 0; i--) {
// 		word += string[i];
// 	}
// 		if (word === string) {
// 			return true;
// 		} else {
// 			return false;
// 	}
// };
// console.log(magic("mam"));

/* 7)Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром. */
// const array = [
// 	{
// 		title: 'Computer',
// 		price: 6500
// 	},
// 	{
// 		title: 'Monitor',
// 		price: 4000
// 	},
// 	{
// 		title: 'Telefon',
// 		price: 3500
// 	},
// 	{
// 		title: 'Columns',
// 		price: 2000
// 	},
// ];

// function product(array) {
// 	const arr = [];
// 	let max = -Infinity;
// 	for (let i = 0; i < array.length; i++){
// 		const { title, price } = array[i];
// 		if (price > max) {
// 			max = price;
// 			arr.push(title, max);
// 		}
// 	} return arr;
// };
// console.log(product(array));

// /*Создать множество параграфов с числами от 0 до 19 и добавить в див с id container, который находится в HTML документе. */
// const div = document.querySelector('#container');
// for (let i = 0; i <= 19; i++){
// 	const paragraph = document.createElement('p');
// 	div.append(paragraph);
// 	paragraph.innerText = i;
// };

// /* Создайте маркированный список с  нечетными числами из диапазона от 1 до 10 и добавьте этот список в body. */
// const list = document.createElement('ul');
// document.body.append(list);
// for (let i = 1; i <= 10; i++){
// 	const title = document.createElement('li');
// 	list.append(title);
// 	title.innerText = i;
// };

/* Создайте пронумерованный список из квадратов чисел от 1 до 10. */
// const list = document.createElement('ol');
// document.body.append(list);
// for (let i = 1; i <= 10; i++){
// 	const title = document.createElement('li');
// 	list.append(title);
// 	title.innerText = i ** 2;
// };

// Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в div #root.
// let links = [
// 	{
// 		title: "Google",
// 		link: "https://www.google.com/",
// 	},
// 	{
// 		title: "Baidu",
// 		link: "http://www.baidu.com/",
// 	},
// 	{
// 		title: "Bing",
// 		link: "https://www.bing.com/",
// 	},
// 	{
// 		title: "Yahoo!",
// 		link: "https://www.yahoo.com/",
// 	},
// 	{
// 		title: "Yandex(dzen)",
// 		link: "https://www.dzen.ru/",
// 	},
// ];
// const div = document.querySelector('#container');
// for (let i = 0; i < links.length; i++){
// 	const paragraph = document.createElement('p');
// 	const a = document.createElement('a');
// 	paragraph.append(a);
// 	div.append(paragraph);
// 	a.setAttribute('href', links[i].link);
// 	a.innerText = links[i].title;
// };

// Создаем функцию, которая как аргумент принимает ссылку на картинку и ссылку на сайт и возвращает картинку со ссылкой внутри.

// https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Water_1_Intro_MainImage_SeanRyanTNCPhotoContest2019.jpg?crop=666%2C0%2C2667%2C2667&wid=300&hei=300&scl=8.89
// https://unsplash.com/de/s/fotos/dog

// function magic(img, website) {
// 	const imgOf = document.createElement('img');
// 	const linkOf = document.createElement('a');
// 	imgOf.setAttribute('src', img);
// 	linkOf.setAttribute('href', website);
// 	linkOf.append(imgOf);
// 	return linkOf;
// };
// const title = magic("  https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=karsten-winegeart-NE0XGVKTmcA-unsplash.jpg, https://unsplash.com/");
// const div = document.querySelector('#container');
// div.append(title);
// document.body.append(div);

// Написать цикл, который создаёт множество  div-ов с цветами от
// rgb(128, 128, 0) до rgb(128, 128, 255)
//  У дивов цвет должен меняться с шагом 5.
// При наведении на него мышкой меняется цвет.

// for (let i = 0; i <= 255; i += 5) {
// 	const div = document.createElement("div");
// 	div.style.width = "100px";
// 	div.style.height = "100px";
// 	div.style.borderRadius = "15px";
// 	div.style.border = "1px sold black";
// 	div.style.backgroundColor = `rgb(128, 128, ${i})`;

// 	document.body.append(div);
// 	div.onmouseover = () => {
// 		div.style.backgroundColor = "orange";
// 	}
// 	div.onmouseout = () => {
// 		div.style.backgroundColor = `rgb(128, 128, ${i})`;
// 	}
// };

//Создать 10 парагрофов и внутри параграфов будут числа от 1 до 10.При нажатии на параграф добавим ему класс .active  который будет менять ему цвет файла.
// const div = document.querySelector('div');
// for (let i = 1; i <= 10; i++){
// 	const p = document.createElement('p');
// 	p.innerText = i;
// 	div.append(p);
// 	p.onclick = () => {
// 		if (p.classList[0] === 'active') {
// 			p.classList.remove('active');
// 		} else {
// 			p.classList.add('active');
// 		}
// p.classList.toggle('active');
// 	};
// };

// Добавляем параграф и кнопку в HTML Приклике на кнопку паруграфу добавляем класс.
// const p = document.querySelector('p');
// const btn = document.querySelector('button');
// btn.onclick = () => {
// p.classList.add('active');
// 	p.classList.toggle("active");
// };

// Работаем с body.  Создаём параграф и кнопку.
//Изначально текст в боди был чёрного цвета.
// const body = document.querySelector('body');
// const btn = document.querySelector('button');

// btn.onclick = () => {
// 	body.classList.toggle('active');
// };

// Создать массив из обьектов. У каждого из обьектов есть 2 ключа.Реализовать параграф который изначально будет показывать слова на английском, но при клике на него слова иеняются на русский. И также наоборот.
// const words = [
// 	{
// 		en: "book",
// 		ru: "книга",
// 	},
// 	{
// 		en: "sun",
// 		ru: "солнишко",
// 	},
// 	{
// 		en: "cup",
// 		ru: "чашка",
// 	},
// 	{
// 		en: "pen",
// 		ru: "ручка",
// 	},
// 	{
// 		en: "table",
// 		ru: "стол",
// 	},
// ];
// for (let i = 0; i < words.length; i++){
// 	const p = document.createElement('p');
// 	p.innerText = words[i].en;
// 	document.body.append(p);
// 	p.onclick = () => {
// 		if (p.textContent === words[i].en) {
// 			p.innerText = words[i].ru;
// 		}
// 		else {
// 			p.innerText = words[i].en;
// 		}
// 	};
// };

//Создать на основе обьекта создать 2 параграфа. В одном слова на русском в другом на английском. изначально скрыть параграф на русском. Приклике на английский параграф скрыть его и показать на русском. На основе каждого обьекта создать div и внутри уже 2 параграфа. onclick вешать уже на сам div.
// const words = [
// 	{
// 		en: "book",
// 		ru: "книга",
// 	},
// 	{
// 		en: "sun",
// 		ru: "солнишко",
// 	},
// 	{
// 		en: "cup",
// 		ru: "чашка",
// 	},
// 	{
// 		en: "pen",
// 		ru: "ручка",
// 	},
// 	{
// 		en: "table",
// 		ru: "стол",
// 	},
// ];
// for (let i = 0; i < words.length; i++){
// 	const div = document.createElement('div');
// 	const en = document.createElement('p');
// 	const ru = document.createElement('p');
// 	ru.classList.add('show');
// 	en.classList.add('hide');
// 	document.body.append(div);
// 	div.append(en, ru);
// 	en.innerText = words[i].en;
// 	ru.innerText = words[i].ru;
// 	div.onclick = () => {
// 		en.classList.toggle('hide');
// 		ru.classList.toggle('show');
// 		en.classList.toggle('show');
// 		ru.classList.toggle('hide');
// 	};
// };

// Создать список с элементами из массива. При клике на пункт из списка, добавляйте класс  "completed" (можете добавить любой стиль) Создайте кнопку, которая при нажатии скрывает все пункты с классом "completed"
// const text = ["Task1", "Task2", "Task3", "Task4", "Task5", "Task6", "Task7"];
// const list = document.createElement('ul');
// const btn = document.createElement('button');
// document.body.append(list, btn);
// for (let i = 0; i < text.length; i++){
// 	const ofList = document.createElement('li');
// 	list.append(ofList);
// 	ofList.innerText = text[i];
// 	ofList.onclick = () => {
// 		ofList.classList.add('completed');
// 	};
// 	btn.onclick = () => {
// 		let isBody = document.querySelectorAll('.completed');
// 		for (let i = 0; i < isBody.length; i++) {
// 			isBody[i].classList.replace('completed', 'hide');
// 		}
// 	};
// };

// /* Создать форму с двумя полями для ввода и кнопкой. при введении названия продукта и цены продукта . при нажатии на кнопку отправки . название продукта и его цена будет отображаться в отдельной секции.*/

// form
const form = document.querySelector(".form");
const _name = document.querySelector("#name");
const priceOf = document.querySelector("#price");

// form2
const form2 = document.querySelector(".form2");
const searchInput = document.querySelector("#search");

// sort button
/*Создаём кнопку для сортировки карточек.*/
const sortBtn = document.querySelector("#sortBtn");

//section for products
/* Создаём фразу - Продуктов нет. -  если недобавлено никаких заказов эта фраза будет появляться. */
const section = document.querySelector("#productsList");
const noProduct = document.createElement("h2");
noProduct.innerText = "No product!";
noProduct.style.textAlign = "center";
section.append(noProduct);

// button sum of products
const sumBtn = document.querySelector(".sum__button");

// button delete all products
const delBtn = document.querySelector(".delete");

// section total sum of all products
const section2 = document.querySelector(".total");
const div = document.createElement("div");
const h5 = document.createElement("h4");
h5.innerText = "Sum of your products is:";
const h6 = document.createElement("h5");
div.append(h5, h6);
div.classList.add("sumOfProducts");
section2.append(div);

// ----------------------------------------------------------

let products = [];
form.onsubmit = (e) => {
  e.preventDefault(); /* Отменяем действие браузера по умолчанию.*/
  products.push({
    title: _name.value,
    price: priceOf.value,
  }); /* каждая карточка передаётся в виде обьекта. Значение - value - берутся из - input - которые писал пользователь.*/
  _name.value = "";
  priceOf.value = ""; /* Опустошаем input.*/
  newProducts(); /* Вызывая функцию, отображаем каpточки на странице.*/
};

/* Записываем функцию. которая как аргумент принимает имя продукта и цену и создаёт - div - с дмя ззаголовками внутри и будет возвращать нам этот - div -. И создаём кнопку.*/
function createNode(title, price, index) {
  /*Добавим  - index -  чтобы распознать элемент карточку которую  нужно удалить из массива при нажатии на кнопку */
  const div = document.createElement("div");

  const h1 = document.createElement("h3");
  h1.innerText = title;

  const h2 = document.createElement("h3");
  h2.innerText = price;
  // -----------------------------------------------------
  const btn = closeBtn(); /*Добавляем удаляющую кнопку в карточки.*/

  /* Добавляем действие  - onclick - на появляющуюся кнопку - btn - для удаления карточки. */
  btn.onclick = () => {
    section.removeChild(
      div
    ); /* Удаляем сам тег карточки при помощи метода - removeChild().*/
    // ---------------короткий способ-------------------------
    /* Способ удаления элемента из массива.*/
    /* Можно удалить элемент из массива при помощи метода  - splice - */
    /*  products.splice(id, 1); */
    const result = [];
    for (let i = 0; i < products.length; i++) {
      if (i !== index) {
        /* не равен */
        result.push(products[i]);
      } /*console.log(result);*/
    }
    products = result;
    newProducts();
    if (!products.length) {
      section.append(noProduct);
    }
  }; //---------------------более длинный способ-----------------------------
  // if (products.length > 2) {
  // 	for (let i = 0; i < products.length; i++) {
  // 		if (i < index) {
  // 			result.push(products[i]);
  // 		} else if (i > index) {
  // 			result.push(products[i]);
  // 		}
  // 	}
  // } else {
  // 	for (let i = 0; i < products.length; i++) {
  // 		if (i !== index) result.push(products[i]);
  // 	}
  // }
  // products = result;

  // if (!products.length) {
  // 	section.append(noProduct);
  // }
  // 	};
  // -------------------------------------------------------------------

  div.append(h1, h2, btn); /* Добавляем удаляющую кнопку в карточки.*/
  div.classList.add("productCard");

  /* Добавляем событие на div карточку при наведении меняем значение - opacity -  будет появляться удаляющая кнопка btn */
  div.onmouseover = () => {
    btn.style.opacity = "1";
  };

  div.onmouseleave = () => {
    btn.style.opacity = "0";
  };

  section.append(div);
  // -----------------------------------------------------

  // ------------Кликаем на КНОПКУ вызываем функцию и подсчитываем сумму всех товаров---------------------------
  sumBtn.onclick = () => {
    allSum();
  };
  // --------Удаляем товары из корзины----------------------------------

  delBtn.onclick = () => {
    const del = [];
    for (let i = 0; i < products.length; i++) {
      if (i !== i) {
        delete products[i];
      }
    }
    products = del;

    newProducts();
    if (!products.length) {
      return section.append(noProduct);
    }
  };
  //----------------------------------------------
}

/* Записываем функцию, которая на основании нашего массива будет содавать наши  - div - карточки*/
function newProducts() {
  section.innerHTML = ""; /* Делаем обнуление  - section -  кaждый раз при добавлении чего то  форму т.е при onsubmit. */
  for (let i = 0; i < products.length; i++) {
    createNode(products[i].title, products[i].price,i); /*Добавим - i - чтобы распознать элемент карточку которую  нужно удалить из массива при нажатии на кнопку */
  }
}
// -------------------------------------------------------------

// Создаём функцию function closeBtn() удаляющей кнопки при помощи которой мы сможем удалять наши карточки.
function closeBtn() {
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.classList.add("close");
  return btn;
} // ---------------------------------------------------

/* При помощи поиска - Мы берём значение из нашей формы -  input - и оставим только те карточки  - title - которых такие же как и значение  - title - в - input -*/
form2.onsubmit = (e) => {
  e.preventDefault();
  section.innerText = "";
  for (let i = 0; i < products.length; i++) {
    if (products[i].title === searchInput.value) {
      createNode(products[i].title, products[i].price, i);
    }
  }
};
// ----------------------------------------------------------------

//sort button
/* Используем метод  - sort -  для сортировки карточек.*/
/* Этот метод  - sort -  принимает только одну - callback -  функцию. Эта функция называется сравнение.  Эта функция принимает 2 аргумента  a  и  b - Это элементы в нашем массиве. Где - a - это первый елемент и - b - это второй. Они сравниваются между собой и меняются местами (по возрастанию и убыванию), таким образом сравниваются все эдементы массива.
a.price - b.price  - сравнение при возрастании.  
b.price - a.price  - сравнение при убывании.*/

sortBtn.onclick = () => {
  products.sort((a, b) => a.price - b.price);
  newProducts();
};
// -------ФУНКЦИЯ-----Подсчитываем сумму всех товаров---------------------------
function allSum() {
  let sumOf = 0;
  for (let i = 0; i < products.length; i++) {
    sumOf += +products[i].price;
  }
  h6.innerText = `_ ${sumOf}`;
}
// ----------------------------------------------------------------

/* 
Изменить эту функцию так, что бы могли использовать её как и для  - form2.onsubmit -  и для первоночальной её формы - newProducts();
function newProducts() {
	section.innerHTML = "";
	for (let i = 0; i < products.length; i++){
		createNode(products[i].title, products[i].price, i); /*Добавим - i - чтобы распознать элемент карточку которую  нужно удалить из массива при нажатии на кнопку 
	}
};
*/
