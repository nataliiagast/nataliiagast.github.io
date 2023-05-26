
/* Написать цикл, который выводит только четные числа. */
// let num = [1, 5, 8, 4, 7, 6, 2, 6, 4, 8];
// for(let i = 0; i < num.length; i++){
// 	if(num[i] % 2 === 0) 
// 	console.log(num[i]);
// }

/* Найти сумму положительных чисел. */
// let num = [1, 2, 5, -5, -4, 1, 2, -8];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
// 	if (num[i] > 0) {
// 		sum += num[i];
// 	}
// }
// console.log(sum);

/* Найти сумму чисел, чей индекс равен значению элемента. */
// let num = [0,1,3,5,4,6,5];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
// 	if (num[i] = i) {
// 		sum += num[i];
// 	}
// }
// console.log(sum);

/* Найти минимальное и максимальное числа в массиве.*/
// let arr = [1, 2, 3, 5, 8, 9, 52, -9, -6, 10];
// let max = -Infinity;  /* let max = -0; */
// let min = Infinity;  /* let min = 0; */

// for (let i = 0; i < arr.length; i++) {
// 	const arrElement = arr[i];

// 	if (arrElement > max) {
// 		max = arrElement;
// 	}

// 	if (arrElement < min) {
// 		min = arrElement;
// 	}
// }
// console.log('min ', min, ' max ', max);


/* Нужно найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.*/
// const num = [1,2,3,5,10,46,11,20];
// let sumOfEven = 0;
// sumOfOdd = 0;
// for (let i = 0; i < num.length; i++){
// 	if(num[i % 2 === 0]){
// 		sumOfEven += arr[i];
// 	}
// 	if(num[i] % 2 !== 0){
// 		sumOfOdd += num[i];
// 	}
// }
// 	if(sumOfEven > sumOfOdd){
// 		console.log(sumOfEven - sumOfOdd)
// 	}else{
// 		console.log(sumOfOdd - sumOfEven);
// 	}


/* Перевернуть массив чисел */
// const num = [1,2,3,4,5];
// const newNum = [];
// for(let i = num.length-1; i >= 0; i--){
// newNum.push(num[i]);
// }
// console.log(newNum);

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
// for (let i = 0; i < arr.length; i++) {
// 	let newArr = arr[i];
// 	console.log(`Name is: ${arr[i].name} age is: ${arr[i].age}`);
// }


/* Создайте массив объектов, содержащий квадраты чисел от 1 до 10.Пример первого объекта {number: 1, square: 1}
 {number: 2, square: 4} */

// const arr = [];
// for(let i = 1; i < 11; i++){
// 	arr.push({number: i, square: i ** 2})
// }
// console.log(arr);


// Найти общую сумму цен всех товаров из следующего массива.
// const array = [
// 	{ name: 'Laptop', price: 1200 },
// 	{ name: 'Mouse', price: 20 },
// 	{ name: 'Keyboard', price: 50 },
// 	{ name: 'Monitor', price: 300 },
// ];
// let sum = 0;
// for(let i = 0; i < array.length; i++){

// 	sum += array[i].price
// }
// console.log(sum);


/* На основе массива продуктов создайте новый массив, где будут только продукты дороже 100. */

// const array = [
// 	{ name: 'Laptop', price: 1200 },
// 	{ name: 'Mouse', price: 20 },
// 	{ name: 'Keyboard', price: 50 },
// 	{ name: 'Monitor', price: 300 },
// ];
// const newArr = [];
// for(let i = 0; i < array.length; i++){
// if(array[i].price > 100){
// newArr.push(array[i]);
// }
// }
// console.log(newArr);


/* Создать функцию power, которая принимает 2 числа как аргумент. Первое число – основание, второе число – степень.Функцию возвращает результат арифметического действия. Пример вызова функции:  power(2,3) => 8
 Не использовать **.  */

// function power(num_1, num_2) {
// 	let total = 1;
// 	for (let i = 0; i < num_2; i++) {
// 		total *= num_1;
// 	}
// 	return total;
// }
// console.log(power(2, 6));