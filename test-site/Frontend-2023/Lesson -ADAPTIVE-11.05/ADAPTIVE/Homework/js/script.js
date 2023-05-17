// 1 уровень сложности: Прочитать из источника про методы forEach, map, filter:
// <> https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array


// Так же выполнить следующие задачи:

// 1) Напишите функцию printWithDelay, которая принимает в качестве аргумента массив строк. Функция должна выводить каждую строку из массива на консоль с задержкой в 1 секунду между каждой строкой.

// const str = ["Каждый", "охотник", "желает", "знать", "где", "сидит", "фазан"];
// function printWithDelay(array) {
// 	array.forEach((element, index) => setTimeout(() => console.log(element), 1000 * (index + 1)));
// };
// printWithDelay(str);


// 2)Напишите функцию getSquares, которая принимает в качестве аргумента массив чисел. Функция должна использовать метод map для возведения в квадрат каждого числа в массиве и возвращать новый массив, содержащий возведенные в квадрат числа.
// const numbers = [1, 2, 3, 4, 6, 7, 8];
// function getSquares(array) {
// 	let result = array.map(element => element ** 2);
// 	console.log(result);
// };
// getSquares(numbers);

// 3)Напишите функцию sumEvenSquares, которая принимает в качестве аргумента массив чисел. Функция должна использовать методы map и filter  и вернуть сумму оставшихся четных чисел.

// const num = [1, 2, 3, 4, 6, 7, 8];
// function sumEvenSquares(array) {
// 	let sum = 0;
// 	const even = array.filter((element) => element % 2 === 0);
// 	even.forEach((element) => sum += element);
// 	return sum;
// };
// console.log(sumEvenSquares(num));



// 4)Напишите функцию с именем delayedUpperCase, которая принимает в качестве аргумента массив строк. Функция должна использовать метод forEach для перебора каждой строки в массиве и выводить на консоль версию строки в верхнем регистре с задержкой в 2 секунды.
// const str = ["Каждый", "охотник", "желает", "знать", "где", "сидит", "фазан"];
// function delayedUpperCase(array) {
// 	const word = array.map((element) => element.toUpperCase());
// 	word.forEach((element, index) => setTimeout(() => console.log(element), 2000 * (index + 1)));

// }
// delayedUpperCase(str);

// 5)Напишите функцию countDown, принимающую в качестве аргумента число. Функция должна использовать метод setTimeout для печати чисел от заданного числа до 1, с задержкой в 1 секунду между каждым числом.

function countDown(num) {
	const arr = [];
	for (let i = num; i > 0; i--){
	arr.push(i);
	} 
	arr.forEach((element, index) => setTimeout(() => console.log(element), 1000 * (index + 1)));
}
console.log(countDown(12));


// 6)Напишите функцию filterNamesByLetter, которая принимает в качестве аргументов массив имен и букву. Функция должна использовать метод filter, чтобы вернуть новый массив, содержащий только те имена из исходного массива, которые начинаются с заданной буквы. 

// const isName = ["Robert", "Roman", "Georg", "Nikolai", "Roky"];
// function filterNamesByLetter(array, string) {
// 	const newArr = array.filter((element) => element[0] == string);
// 	console.log(newArr);
// }
// filterNamesByLetter(isName, "R");