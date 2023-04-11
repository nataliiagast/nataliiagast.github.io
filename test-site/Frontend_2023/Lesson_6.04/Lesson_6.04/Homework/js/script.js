// 1)  https://learn.javascript.ru/function-basics
// 2)  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function


// 1)Найдите общие элементы(в виде массива) между двумя массивами.
// Пример: [1,2,3], [4,2,1] => [1,2]
// 2)Создать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.
// 3)Предыдущее задание делаем с объектом. (как ключ передаем i).
// 4)Описать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”].
// 5)Создайте функцию, которая как аргумент принимает одну строку.Функция возвращает это слово в развернутов виде. Пример: “cat” => “tac”
// 6)Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.
// 7)Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром.

// 1)  https://learn.javascript.ru/function-basics
// 2)  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function


/* 1)Найдите общие элементы(в виде массива) между двумя массивами.
 Пример: [1,2,3], [4,2,1] => [1,2] */

// const num = [1, 2, 3, 6, 8, -9];
// const number = [4, 2, 1, 4, -9, 7];
// const newNum = [];
// for (let i = 0; i < num.length; i++){
// for (let j = 0; j < number.length; j++)
// 	if (num[i] == number[j]) {
// 		newNum.push(num[i]);
// 	}
// }
// console.log(newNum);

/* 2)Создать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа. */

// function magic(num) {
// 	const number = [];
// 	for (let i = 0; i <= num; i++) {
// 		number.push(i);
// 	} return number;
// }
// console.log(magic(8));


/* 3)Предыдущее задание делаем с объектом. (как ключ передаем i). */

// function magicOfNum(num) {
// 	let number = [];
// 	for (let i = 0; i <= num; i++) {
// 		let newKey = { key: i };
// 		number.key = (newKey);
// 		number.push(number.key);
// 	} return number;
// }

// console.log(magicOfNum(8));




/* 4)Описать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”]. */

// function magicOf(string, num) {
// 	const result = [];
// 	for (let i = 0; i < num; i++) {
// 		let newString = (string + "");
// 		result.push(newString);
// 	} return result;
// }
// console.log(magicOf("dog", 3));



/* 5)Создайте функцию, которая как аргумент принимает одну строку.Функция возвращает это слово в развернутом виде. Пример: “cat” => “tac” */

// function magic(string){
// let word = "";
// for(let i = string.length-1; i >= 0; i--){
// 	word += string[i];
// }
// return word;
// }
// console.log(magic("cat"));


/* 6)Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false. */
// function word(string){
// 	let newWord = "";
// 	for(let i = string.length-1; i>=0; i--){
// 		newWord += string[i];
// 	}if(newWord === string){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }
// console.log(word("dog"));

/* 7)Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром. */

const array = [
	{
		title: 'Computer',
		price: 6500
	},
	{
		title: 'Monitor',
		price: 4000
	},
	{
		title: 'Telefon',
		price: 3500
	},
	{
		title: 'Columns',
		price: 2000
	},
];
function trayBuy(array) {
	const newArr = [];
	let max = -0;
	for (let i = 0; i < array.length; i++) {
		const { title, price } = array[i];
		const product = price;

		if (product > max) {
			max = product;
			newArr.push(title, max);
		} return newArr;
	}
}
console.log(trayBuy(array));