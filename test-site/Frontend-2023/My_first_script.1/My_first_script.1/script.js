
// Обьединение строк. Конкатенация. Интерполяция.
// const r = 12;
// const g = 34;
// const b = 14;

// console.log("rgb(" + r + "," + g + "," + b + ")");
// console.log(`rgb(${r},${g},${b})`);

// Преобразование из строки в число и наоборот.

// let num = "5";
// console.log(num + 5);
// console.log(+num);

// let str = 5;
// console.log (str + "");
// console.log (typeof str);
// console.log (+"a");
// const word = "a";
// console.log (isNaN(+"word"));
// let answer = prompt("How old are you.");
// console.log(answer);

// Приравнивание. == по значению. === по значению и типу.

// console.log("1" == 1);
// console.log("1" === 1);

// Цыкл  LOOPS  if/else  else if

// let number = prompt("Add a number");
// if(+number === 0){
// 	console.log("This is null!");
// } else{
// 	console.log("This is not null!");
// }

// let firstNumber = prompt("Enter your first number");
// let secondNumber = prompt("Enter your second number");
// if(+firstNumber > +secondNumber){
// 	console.log("Первое число больше второго.");
// }else if(+firstNumber < +secondNumber){
// 	console.log("Второе число больше первого.");
// }else if(+firstNumber === +secondNumber){
// 	console.log("Числа равны.");
// }else{
// 	console.log("Вы ввели некорректные числа.")
// }

/* Массивы   array */

// const arr = [1, 2, "Name", "Age", 4];
// console.log(arr);
// console.log(arr[2]);

// Замена элемента массива с индексом 3.
// arr[3] = 5;
// console.log(arr);

// console.log(arr.length);

// arr.push(5, 6);
// console.log(arr);

// arr.pop();
// console.log(arr);

// console.log(arr.pop());


// const lastElement = arr.pop(); /* Сохранить удалённый элемент в переменной.*/
// console.log(lastElement);

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// const newNumbers = [];

// newNumbers.push(numbers[0] ** 2);
// newNumbers.push(numbers[1] ** 2);
// newNumbers.push(numbers[2] ** 2);
// newNumbers.push(numbers[3] ** 2);
// newNumbers.push(numbers[4] ** 2);

// console.log(newNumbers);

// loops    for,  while,  do while

// for(i = 0; i < 10; i++){
// 	console.log(i);
// }

// let i = 0;
// while(i < 10){
// 	console.log(i);
// 	i++;
// }

// let i = 0;
// do{
// 	console.log(i);
// 	i++;
// } while(i < 10);

// const arr = [1, 2, -3, 4, -6, -7];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0) {
// 		console.log(arr[i]);
// 	}
// }
// const nums = [1, 2, 4, 10, 11, 50, 3];
// for (let i = 0; i < nums.length; i++) {
// 	if (nums[i] % 2 === 0) {
// 	/* Можно добавить несколько условий в if   if (nums[i] % 2 === 0 && nums[i] > 0) */
// 		console.log (nums[i]);
// 	}
// }

/* ЗАДАЧКИ по массивам.*/

/* Вывести число кратное 3 без остатка по его индексу.*/

// const nums = [1, 2, 4, 10, 11, 50, 3, 5, 9, 7, 10];
// for (let i = 0; i < nums.length; i++) {
// 	/* for (let i = 3; i < nums.length; i = i + 3) { console.log (nums[i]); }   */
// 	if (i % 3 === 0 ) {
// 		console.log (nums[i]);
// 	}
// }


// const numbers = [1, 2, 4, 10, 11, 50];
// for (let i = numbers.length - 1; i >= 0; i--) {
// 	console.log (numbers[i]);
// }


/* Нахождение суммы элементов массива. */

// const numbers = [1, 2, 3, 4];
// let result = 0;
// for (let i = 0; i < numbers.length; i++){
// 	/* result = result + numbers[i]; */
// 	result += numbers[i];
// }
// console.log(result);


/* Найти сумму из всех положительных элементов массива. */

// const array = [1, 2, -4, -6, 5, -7, 6];
// let result = 0;
// for (let i = 0; i < array.length; i++){
// 	if (array[i] > 0) {
/* result = result + array[i];*/
// 	result += array[i];
// 	}
// }
// console.log(result);


/* Нати сумму только тех элементов которые равны с индексом по значению. */

// const array = [0, 4, 2, 2, 4, 5, 7];
// let result = 0;
// for (let i = 0; i < array.length; i++) {
// if (i === array[i]) result += array[i]; /* Более краткая запись. Если в  if  имеется только одно действие.*/
// } 
// console.log (result);


/* Найти сумму чётных и нечётных чиселю Вычесть из большей сумму меньшую. */

// const numbers = [5, 8, 7, 1, 4, 3, 6, 9];
// let result = 0;
// let resultOdd = 0;
// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] % 2 === 0) {
// 		result += numbers[i];
// 	}else {
// 		resultOdd += numbers[i];
// 	}
// }	
// 	if (result >= resultOdd) {
// 		console.log (result - resultOdd);
// 	}else {
// 		console.log (resultOdd - result);
// 	}

/* В программе обьявленна переменная list которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.*/

// const list = [1, 5, 7, 8, 9, 4];
// let sum = 0;
// for (let i = 0; i < list.length; i++) {
// 	sum += list[i];
// }
// console.log (sum);


/* В программе обявлена переменая list представляющая массив положительных и отрицательных значений. Используя цикл выведите сумму положительных чисел.*/

// const list = [1, 3, 5, -6, 8, -9, -4, 2];
// let sum = 0;
// for (let i = 0; i < list.length; i++) {
// 	if (list[i] > 0){
//       sum += list[i]
// 	}
// }
// console.log (sum);

/* ОБЕКТЫ */

// const person = {
// 	name: "John",
// 	lastName: "Lennon",
// 	age: 45,
// };

// dote notation  .

// Выводим в консоль фамилию нашего человека. 
// console.log(person.lastName);

// bracket notation  []

// console.log(person["lastName"]);



/* Можно поменять значение внутри обьекта, но не сам обьект.*/
// const animal = {
// 	name: "cat",
// };
// const obj = animal;
// animal.name = "dog";

// console.log (animal);
// console.log (obj);




/* ЗАДАЧКИ по обектам. */

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
// const items = [];
// for (let i = 0; i < products.length; i++){ 
// 	if (products[i].price < 1000) {
//    items.push(products[i]);
// 	}
// }
// console.log(items);


/* Выводим строку в консоль. */
/*   "Nike's price is 300 and type is shoe" */
/*  Пишем цикл для этого массива. */
// for (let i = 0; i < products.length; i++) {
// 	console.log(`${products[i].title}'s price is ${products[i].price} and type is ${products[i].type}`)
// }


/* Найти общую сумму всех товаров с массива.*/
// let productSum = 0;
// for (let i = 0; i < products.length; i++) {
// 	productSum += products[i].price;
// }
// console.log (productSum);


/* вывести в консоль название товаров котрые дороже 500.*/
// for (let i = 0; i < products.length; i++) {
// 	if (products[i].price > 500) {
// 		console.log (products[i].title);	
// 	}		
// }




// ДЕСТРУКТУРИЗАЦИЯ 
// Позволяет извлекать значения из обьекта.

// const product = {
// 	name: "book",
// 	price: 250,
// };
/* Выводим в консоль  "book" и  250.  Если мы знаем, что это значение мы будем использовать много раз, для этого содаём переменную.*/
// const {name, price} = product;
// console.log(name);
// console.log(price);

/* ЗАДАЧКИ  на деструктуризацию*/

/* Вывести  вконсоль только те наименования продуктов у которых тип обувь. */
// for (let i = 0; i < products.length; i++) {
// 		const {title, type} = products[i];
// 		if (type === "shoe"){
// 			console.log (title);
// 		}	
// } 

/* Нужно вывести наименование товаров и их цену, но цены со скидкой 10%.*/
// for (let i = 0; i < products.length; i++) {
// 	const {title, price} = products[i];
// 	console.log (`${title}, ${price * 0.9}`) /*  (price * 0.9) -  Вычисление скидки на 10%  */
// }


/* ЗАДАЧКИ   на функции */

/* Написать функцию котрая в качестве аргумента получает 2 числа и возвращает массив чисел со значениями от меньшего числа к большему.*/
// let number = [];
// function accept (num_1, num_2) {
// 	if (num_1 < num_2){
// 		for (let i = num_1; i <= num_2; i++){
// 			number.push(i)
// 		}
// 	}else {
// 		for (let i = num_2; i <= num_1; i++){
// 			number.push(i)
// 	}
// }
// console.log (number);
// }
// accept (15,9);


/* Функция которая в качестве аргумента получает массив из чисел и возвращает обьект со свойствами min max avg с соответствующими значениями по массиву.*/
// const number = [3, 5, 6, 7, 5, 9, 2, -5, 4, -9];

// function magic(number) {
// 	let min = number[0];
// 	let max = number[0];
// 	let avg = 0;

// 	for (let i = 0; i < number.length; i++) {
// 		avg += number[i];

// 		if (min > number[i]) {
// 			min = number[i];
// 		} if (max < number[i]) {
// 			max = number[i];
// 		}
// 	}
// 	avg = avg / number.length;
// 	/* Как создать обьект. Когда передаётся переменная   min, max, avg   он автоматически создаёт ключ с этим именем и как значение переписывает значение которое там хранится.*/
// 	return {min, max, avg};
// }
// console.log(magic(number));

/* Дано слово hello. Создайте цикл который перевернёт это слово и будет читать его наоборот. */
// const word = "hello";
// let reternWord = "";
// for (let i = word.length-1; i >= 0; i--){
// 	reternWord += word[i];
// }
// console.log(reternWord);

/* Напишите функцию которая в качестве аргумента получает слово и определяет является ли оно ПОЛИНДРОНОМ. Это слово которое читается одинаково в обе стороны. */

// function string (word) {
// 	let reternWord = "";
// 	for (let i = word.length-1; i >=0; i--){		         	   
// 			reternWord += word[i];
// } 
// return reternWord === word;	
// }
// console.log(string("hello"));


/* Используя цикл посчитайте сумму чисел массива до первого булиевого значения. Результат выведите в консоль.*/
// const list = [1, 2, 3, 8, 9, true, false, 5, 1, "false"]
// let sum = 0;
// for(let i = 0; i < list.length; i++){

// 	if (typeof list[i] === 'boolean'){
// 		break;	
// 	}
// 	sum += list[i];
// }
// console.log(sum);

/* Написать цикл который выводит для каждого товара строку по маске  * Название... Цена со скидкой. *  */
const arr = [
{
	Id: 1,
	title: "bicycle",
	price: 45000,
	discount: 10
},
{
	Id: 2,
	title: "roller-skates",
	price: 15000,
	discount: 5
},
{
	Id: 3,
	title: "Kick scooter",
	price: 10000,
	discount: 30
},
{
	Id: 4,
	title: "skis",
	price: 25000,
	discount: 20
},
{
	Id: 5,
	title: "skate",
	price: 10000,
	discount: 0
},
]
for (let i = 0; i < arr.length; i++){
	console.log(`Название: ${arr[i].title} Цена со скидкой: ${arr[i].price - (arr[i].price / 100 * arr[i].discount)}`);
} /* 100 - 10% = 100 / 100 * 10 = 10%  Так вычисляется 10 процентов от суммы.*/